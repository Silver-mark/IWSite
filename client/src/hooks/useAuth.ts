import { useQuery } from "@tanstack/react-query";

type User = {
  id: string;
  username: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  profileImageUrl?: string | null;
};

export function useAuth() {
  const { data: user, isLoading, error, refetch } = useQuery<User | null>({
    queryKey: ["/api/auth/user"],
    queryFn: async () => {
      const token = localStorage.getItem("authToken");
      
      if (!token) {
        return null;
      }
      
      const response = await fetch("/api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          // Clear invalid token
          localStorage.removeItem("authToken");
          return null;
        }
        throw new Error("Failed to fetch user data");
      }
      
      return response.json();
    },
    retry: false,
  });

  return {
    user,
    isLoading,
    error,
    refetch,
    isAuthenticated: !!user,
  };
}