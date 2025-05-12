import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  LaptopIcon, 
  ChevronDownIcon, 
  MenuIcon, 
  XIcon,
  UserIcon
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { user, isAuthenticated, isLoading } = useAuth();

  const isActive = (path: string) => {
    return location === path ? "text-primary" : "text-neutral-dark hover:text-primary";
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <LaptopIcon className="text-primary mr-2" size={24} />
            <Link href="/" className="text-xl font-bold text-primary">
              PC Builder Guide
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className={`font-medium ${isActive("/")}`}>
              Overview
            </Link>
            
            {/* Case & Power Dropdown */}
            <div className="relative group">
              <button className="text-neutral-dark hover:text-primary font-medium flex items-center">
                Case & Power <ChevronDownIcon className="ml-1" size={14} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/case" className="block px-4 py-2 text-sm text-neutral-dark hover:bg-primary hover:text-white">
                  Computer Case
                </Link>
                <Link href="/power-supply" className="block px-4 py-2 text-sm text-neutral-dark hover:bg-primary hover:text-white">
                  Power Supply
                </Link>
                <Link href="/case-fans" className="block px-4 py-2 text-sm text-neutral-dark hover:bg-primary hover:text-white">
                  Case Fans
                </Link>
              </div>
            </div>
            
            {/* Core Components Dropdown */}
            <div className="relative group">
              <button className="text-neutral-dark hover:text-primary font-medium flex items-center">
                Core Components <ChevronDownIcon className="ml-1" size={14} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/motherboard" className="block px-4 py-2 text-sm text-neutral-dark hover:bg-primary hover:text-white">
                  Motherboard
                </Link>
                <Link href="/cpu" className="block px-4 py-2 text-sm text-neutral-dark hover:bg-primary hover:text-white">
                  CPU
                </Link>
                <Link href="/cpu-cooler" className="block px-4 py-2 text-sm text-neutral-dark hover:bg-primary hover:text-white">
                  CPU Cooler
                </Link>
                <Link href="/ram" className="block px-4 py-2 text-sm text-neutral-dark hover:bg-primary hover:text-white">
                  RAM
                </Link>
                <Link href="/gpu" className="block px-4 py-2 text-sm text-neutral-dark hover:bg-primary hover:text-white">
                  GPU
                </Link>
              </div>
            </div>
            
            {/* Storage & Add-ons Dropdown */}
            <div className="relative group">
              <button className="text-neutral-dark hover:text-primary font-medium flex items-center">
                Storage & Add-ons <ChevronDownIcon className="ml-1" size={14} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/storage" className="block px-4 py-2 text-sm text-neutral-dark hover:bg-primary hover:text-white">
                  Storage Options
                </Link>
                <Link href="/add-ons" className="block px-4 py-2 text-sm text-neutral-dark hover:bg-primary hover:text-white">
                  Additional Components
                </Link>
              </div>
            </div>
            
            <Link href="/contact" className={`font-medium ${isActive("/contact")}`}>
              Contact
            </Link>

            {isLoading ? (
              <div className="w-24 h-8 bg-gray-200 animate-pulse rounded"></div>
            ) : isAuthenticated ? (
              <Link href="/profile">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <UserIcon size={16} />
                  Profile
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <UserIcon size={16} />
                  Log In
                </Button>
              </Link>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-neutral-dark focus:outline-none"
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-neutral-dark">
              Overview
            </Link>
            
            {/* Mobile Dropdown for Case & Power */}
            <MobileDropdown title="Case & Power">
              <Link href="/case" className="block py-2 text-neutral-dark">
                Computer Case
              </Link>
              <Link href="/power-supply" className="block py-2 text-neutral-dark">
                Power Supply
              </Link>
              <Link href="/case-fans" className="block py-2 text-neutral-dark">
                Case Fans
              </Link>
            </MobileDropdown>
            
            {/* Mobile Dropdown for Core Components */}
            <MobileDropdown title="Core Components">
              <Link href="/motherboard" className="block py-2 text-neutral-dark">
                Motherboard
              </Link>
              <Link href="/cpu" className="block py-2 text-neutral-dark">
                CPU
              </Link>
              <Link href="/cpu-cooler" className="block py-2 text-neutral-dark">
                CPU Cooler
              </Link>
              <Link href="/ram" className="block py-2 text-neutral-dark">
                RAM
              </Link>
              <Link href="/gpu" className="block py-2 text-neutral-dark">
                GPU
              </Link>
            </MobileDropdown>
            
            {/* Mobile Dropdown for Storage & Add-ons */}
            <MobileDropdown title="Storage & Add-ons">
              <Link href="/storage" className="block py-2 text-neutral-dark">
                Storage Options
              </Link>
              <Link href="/add-ons" className="block py-2 text-neutral-dark">
                Additional Components
              </Link>
            </MobileDropdown>
            
            <Link href="/contact" className="block py-2 text-neutral-dark">
              Contact
            </Link>

            {isLoading ? (
              <div className="w-full h-8 bg-gray-200 animate-pulse rounded my-2"></div>
            ) : isAuthenticated ? (
              <Link href="/profile" className="block py-2 text-primary font-medium">
                My Profile
              </Link>
            ) : (
              <Link href="/login" className="block py-2 text-primary font-medium">
                Log In
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

interface MobileDropdownProps {
  title: string;
  children: React.ReactNode;
}

const MobileDropdown = ({ title, children }: MobileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-dropdown">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-2 text-neutral-dark flex justify-between items-center"
      >
        {title} 
        <ChevronDownIcon className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={14} />
      </button>
      <div className={`pl-4 space-y-1 ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default Header;
