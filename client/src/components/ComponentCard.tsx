import { Link } from "wouter";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
  color: string;
  className?: string;
}

const ComponentCard = ({ title, icon: Icon, href, color, className = "" }: ComponentCardProps) => {
  return (
    <div className={cn("component-card w-40", className)}>
      <Link href={href}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border border-transparent hover:border-gray-200">
          <div className={`h-20 ${color} flex items-center justify-center relative`}>
            <div className="absolute inset-0 opacity-80 bg-gradient-to-br from-transparent to-black/10"></div>
            <Icon className="text-white relative z-10" size={28} />
          </div>
          <div className="p-4 text-center">
            <h4 className="font-bold text-gray-800 mb-2 leading-tight">{title}</h4>
            <span className="text-primary text-sm font-medium inline-flex items-center">
              Learn More
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ComponentCard;
