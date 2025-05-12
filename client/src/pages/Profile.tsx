import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "lucide-react";

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useAuth();
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);
  const { toast } = useToast();
  const [_, setLocation] = useLocation();

  const handleLogout = async () => {
    setIsLogoutLoading(true);
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      toast({
        title: "Success",
        description: "Logged out successfully",
      });

      setLocation("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Error",
        description: "Logout failed, please try again",
        variant: "destructive",
      });
    } finally {
      setIsLogoutLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    setLocation("/login");
    return null;
  }

  return (
    <>
      <Helmet>
        <title>My Profile - PC Builder Guide</title>
        <meta name="description" content="View and manage your PC Builder Guide profile" />
      </Helmet>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="w-full">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                {user.profileImageUrl ? (
                  <AvatarImage src={user.profileImageUrl} alt={user.username} />
                ) : (
                  <AvatarFallback>
                    <UserIcon className="h-12 w-12" />
                  </AvatarFallback>
                )}
              </Avatar>
              <CardTitle className="text-2xl font-bold text-center">User Profile</CardTitle>
              <CardDescription className="text-center">
                Manage your account and PC build preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Username</h3>
                  <p className="text-lg">{user.username}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <p className="text-lg">{user.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">First Name</h3>
                  <p className="text-lg">{user.firstName || "-"}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Last Name</h3>
                  <p className="text-lg">{user.lastName || "-"}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" disabled={isLogoutLoading}>
                Edit Profile
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleLogout} 
                disabled={isLogoutLoading}
              >
                {isLogoutLoading ? "Logging out..." : "Log Out"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Profile;