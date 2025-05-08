import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
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
  app.get("/api/contact-messages", async (req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve contact messages" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
