import { 
  LaptopIcon, 
  CpuIcon, 
  HardDriveIcon, 
  MonitorIcon, 
  MemoryStick, 
  FanIcon, 
  PlugIcon, 
  ThermometerIcon 
} from "lucide-react";
import ComponentCard from "@/components/ComponentCard";

const ComponentPath = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 overflow-x-auto">
      <div className="min-w-[700px] relative h-[500px]" id="build-path-visualization">
        {/* Case Component */}
        <div className="absolute left-[50%] top-[30px] transform -translate-x-1/2">
          <ComponentCard
            title="Computer Case"
            icon={LaptopIcon}
            href="/case"
            color="bg-primary"
            className="w-48"
          />
        </div>
        
        {/* Power Supply */}
        <div className="absolute left-[20%] top-[150px]">
          <ComponentCard
            title="Power Supply"
            icon={PlugIcon}
            href="/power-supply"
            color="bg-secondary"
          />
        </div>
        
        {/* Case Fans */}
        <div className="absolute left-[80%] top-[150px]">
          <ComponentCard
            title="Case Fans"
            icon={FanIcon}
            href="/case-fans"
            color="bg-secondary"
          />
        </div>
        
        {/* Motherboard */}
        <div className="absolute left-[30%] top-[250px]">
          <ComponentCard
            title="Motherboard"
            icon={CpuIcon}
            href="/motherboard"
            color="bg-accent"
          />
        </div>
        
        {/* CPU */}
        <div className="absolute left-[70%] top-[250px]">
          <ComponentCard
            title="CPU"
            icon={CpuIcon}
            href="/cpu"
            color="bg-accent"
          />
        </div>
        
        {/* RAM */}
        <div className="absolute left-[20%] top-[350px]">
          <ComponentCard
            title="RAM"
            icon={MemoryStick}
            href="/ram"
            color="bg-secondary"
          />
        </div>
        
        {/* GPU */}
        <div className="absolute left-[40%] top-[350px]">
          <ComponentCard
            title="GPU"
            icon={MonitorIcon}
            href="/gpu"
            color="bg-secondary"
          />
        </div>
        
        {/* CPU Cooler */}
        <div className="absolute left-[80%] top-[350px]">
          <ComponentCard
            title="CPU Cooler"
            icon={ThermometerIcon}
            href="/cpu-cooler"
            color="bg-success"
          />
        </div>
        
        {/* Storage */}
        <div className="absolute left-[50%] top-[450px]">
          <ComponentCard
            title="Storage"
            icon={HardDriveIcon}
            href="/storage"
            color="bg-secondary"
          />
        </div>

        {/* Connection lines using SVG */}
        <svg className="absolute inset-0 z-[-1]" width="100%" height="100%">
          {/* Case to Power Supply */}
          <path d="M 350,90 L 150,160" className="connection-path" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Case to Case Fans */}
          <path d="M 350,90 L 550,160" className="connection-path" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Case to Motherboard */}
          <path d="M 350,90 L 230,260" className="connection-path" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Case to CPU */}
          <path d="M 350,90 L 470,260" className="connection-path" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Motherboard to RAM */}
          <path d="M 230,290 L 150,360" className="connection-path" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Motherboard to GPU */}
          <path d="M 230,290 L 290,360" className="connection-path" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Motherboard to Storage */}
          <path d="M 230,290 L 350,460" className="connection-path" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* CPU to CPU Cooler */}
          <path d="M 470,290 L 550,360" className="connection-path" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* CPU Cooler to Case Fans (cooling relationship) */}
          <path d="M 550,360 L 550,190" className="connection-path" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Power Supply to Motherboard */}
          <path d="M 150,190 L 230,260" className="connection-path" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Power Supply to GPU */}
          <path d="M 150,190 L 290,360" className="connection-path" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Power Supply to Storage */}
          <path d="M 150,190 L 350,460" className="connection-path" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default ComponentPath;
