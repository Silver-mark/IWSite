import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "wouter";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const [_, setLocation] = useLocation();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (formData: LoginFormValues) => {
    setIsLoading(true);
    try {
      // Universal login flow - server handles admin special case
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Login failed");
      }

      const responseData = await response.json();
      
      // Store token in localStorage
      localStorage.setItem("authToken", responseData.token);
      
      // Check if this is an admin login
      const isAdmin = responseData.user && responseData.user.username === "Admin";
      
      toast({
        title: isAdmin ? "Admin Access Granted" : "Success",
        description: isAdmin ? "Logged in as administrator" : "Logged in successfully",
      });

      // Redirect admin to admin page, regular users to home
      window.location.href = isAdmin ? "/admin" : "/";
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Login failed, please try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Log In - PC Builder Guide</title>
        <meta name="description" content="Log in to your PC Builder Guide account" />
      </Helmet>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="w-full bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-neutral-900">Log In</CardTitle>
              <CardDescription className="text-center text-neutral-600">
                Sign in to your account to track your PC build
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-800">Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your username" className="bg-white text-neutral-900" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-800">Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              type={showPassword ? "text" : "password"} 
                              placeholder="••••••••" 
                              className="bg-white text-neutral-900 pr-10" 
                              {...field} 
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                              onClick={() => setShowPassword(!showPassword)}
                              tabIndex={-1}
                            >
                              {showPassword ? (
                                <EyeOffIcon className="h-5 w-5" />
                              ) : (
                                <EyeIcon className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary text-white" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Log In"}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-neutral-700">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary font-medium hover:underline">
                  Sign Up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Login;