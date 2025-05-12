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