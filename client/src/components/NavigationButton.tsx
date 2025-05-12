import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "@radix-ui/react-button";
import { ReactNode } from "react";

interface NavigationButtonProps extends ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
}

const NavigationButton = ({ 
  href, 
  children, 
  variant = "default", 
  ...props 
}: NavigationButtonProps) => {
  
  const handleClick = () => {
    // This will ensure the page scrolls to the top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <Link href={href}>
      <Button 
        variant={variant} 
        className="w-full sm:w-auto" 
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavigationButton;
