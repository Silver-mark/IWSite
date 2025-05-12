import type { Express, Request as ExpressRequest, Response, NextFunction } from "express";

// Extended Request type with user property
interface Request extends ExpressRequest {
  user?: {
    id: number;
    username: string;
  };
}
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactMessageSchema, 
  insertUserSchema, 
  loginUserSchema,
  createUserSchema
} from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Authentication middleware
function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid or expired" });
    }
    
    req.user = user;
    next();
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // User registration endpoint
  app.post("/api/signup", async (req: Request, res: Response) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if username already exists
      const existingUser = await storage.getUserByUsername(userData.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(userData.password, salt);
      
      // Create user with the correct schema
      const createUserData = createUserSchema.parse({
        username: userData.username,
        email: userData.email,
        firstName: userData.firstName || null,
        lastName: userData.lastName || null,
        passwordHash
      });
      
      const user = await storage.createUser(createUserData);
      
      res.status(201).json({ 
        message: "User registered successfully",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        } 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Failed to register user" });
      }
    }
  });

  // User login endpoint
  app.post("/api/login", async (req: Request, res: Response) => {
    try {
      console.log("Login attempt:", req.body.username);
      const loginData = loginUserSchema.parse(req.body);
      
      // Special handling for Admin user
      if (loginData.username === "Admin" && loginData.password === "PasswordAdmin") {
        console.log("Admin login attempt with correct credentials");
        
        // Find or create Admin user
        let user = await storage.getUserByUsername("Admin");
        if (!user) {
          console.log("Admin user not found, creating admin account");
          // Create Admin account
          const salt = await bcrypt.genSalt(10);
          const passwordHash = await bcrypt.hash("PasswordAdmin", salt);
          
          user = await storage.createUser({
            username: "Admin",
            email: "admin@pcbuilderguide.com",
            firstName: "Admin",
            lastName: "User",
            passwordHash
          });
          console.log("Admin account created:", user.id);
        }
        
        // Generate JWT token for admin
        const token = jwt.sign(
          { id: user.id, username: user.username },
          JWT_SECRET,
          { expiresIn: "24h" }
        );
        
        console.log("Admin login successful");
        return res.status(200).json({
          message: "Admin login successful",
          token,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
          }
        });
      }
      
      // Find user by username
      const user = await storage.getUserByUsername(loginData.username);
      if (!user) {
        console.log("User not found:", loginData.username);
        return res.status(401).json({ message: "Invalid username or password" });
      }
      
      // Verify password
      const validPassword = await bcrypt.compare(loginData.password, user.passwordHash);
      if (!validPassword) {
        console.log("Invalid password for user:", loginData.username);
        return res.status(401).json({ message: "Invalid username or password" });
      }
      
      // Generate JWT token
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: "24h" }
      );
      
      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          profileImageUrl: user.profileImageUrl,
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Login error:", error);
        res.status(500).json({ message: "Failed to login" });
      }
    }
  });

  // Get current user endpoint
  app.get("/api/auth/user", authenticateToken, async (req: Request, res: Response) => {
    try {
      const userId = (req as any).user.id;
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Return user without sensitive data
      res.status(200).json({
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
      });
    } catch (error) {
      console.error("Get user error:", error);
      res.status(500).json({ message: "Failed to get user data" });
    }
  });

  // Logout endpoint
  app.post("/api/logout", (req: Request, res: Response) => {
    // Client-side logout (JWT tokens are stateless)
    res.status(200).json({ message: "Logged out successfully" });
  });
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validData = insertContactMessageSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString(),
      });
      
      const result = await storage.createContactMessage(validData);
      
      res.status(201).json({
        message: "Contact message received successfully",
        id: result.id,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Failed to process contact message" });
      }
    }
  });

  // Get contact messages endpoint (for admin purposes)
  app.get("/api/contact-messages", authenticateToken, async (req: Request, res: Response) => {
    try {
      // Log request for debugging
      console.log("Contact messages request from user:", req.user);
      
      // Check if the user is an admin
      if (!req.user || req.user.username !== "Admin") {
        console.log("Access denied, not admin:", req.user?.username);
        return res.status(403).json({ message: "Access denied. Admin privileges required." });
      }
      
      const messages = await storage.getContactMessages();
      console.log("Fetched contact messages:", messages.length);
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Failed to retrieve contact messages" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
