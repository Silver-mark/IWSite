import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

interface ComponentCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
  color: string;
  className?: string;
}

const ComponentCard = ({ title, icon: Icon, href, color, className = "" }: ComponentCardProps) => {
  return (
    <div className={`component-card w-40 ${className}`}>
      <div className="bg-neutral-light rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className={`h-20 ${color} flex items-center justify-center`}>
          <Icon className="text-white" size={24} />
        </div>
        <div className="p-3 text-center">
          <h4 className="font-semibold mb-1">{title}</h4>
          <Link href={href} className="text-primary text-sm hover:underline">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
