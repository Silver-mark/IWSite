import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface NavigationButtonProps {
  href: string;
  variant?: "default" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const NavigationButton = ({ 
  href, 
  variant = "default", 
  children,
  className = ""
}: NavigationButtonProps) => {
  return (
    <Link href={href}>
      <Button 
        variant={variant} 
        className={`${variant === "default" ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"} text-white font-semibold shadow-md ${className}`}
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavigationButton;
