import { Link } from "wouter";
import { LaptopIcon } from "lucide-react";
import { 
  FaTwitter, 
  FaYoutube, 
  FaDiscord, 
  FaReddit 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <LaptopIcon className="text-primary mr-2" size={24} />
              <span className="text-xl font-bold text-black">PC Builder Guide</span>
            </div>
            <p className="text-gray-PC  max-w-md">
              Your comprehensive resource for computer building knowledge, from component selection to final assembly.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Components</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/case" className="text-gray-PC  hover:text-black transition-colors">
                    Case
                  </Link>
                </li>
                <li>
                  <Link href="/power-supply" className="text-gray-900 hover:text-black transition-colors">
                    Power Supply
                  </Link>
                </li>
                <li>
                  <Link href="/motherboard" className="text-gray-900 hover:text-black transition-colors">
                    Motherboard
                  </Link>
                </li>
                <li>
                  <Link href="/cpu" className="text-gray-PC  hover:text-black transition-colors">
                    CPU
                  </Link>
                </li>
                <li>
                  <Link href="/gpu" className="text-gray-PC  hover:text-black transition-colors">
                    GPU
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-PC  hover:text-black transition-colors">
                    Get Build Advice
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-PC  text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PC Builder Guide. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-PC  hover:text-black transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-PC  hover:text-black transition-colors">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-gray-PC  hover:text-black transition-colors">
              <FaDiscord size={20} />
            </a>
            <a href="#" className="text-gray-PC  hover:text-black transition-colors">
              <FaReddit size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
