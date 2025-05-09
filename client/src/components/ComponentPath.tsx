import { 
  LaptopIcon, 
  CpuIcon, 
  HardDriveIcon, 
  MonitorIcon, 
  MemoryStick, 
  FanIcon, 
  PlugIcon, 
  ThermometerIcon,
  PlusCircleIcon
} from "lucide-react";
import { useState, useEffect } from "react";
import ComponentCard from "@/components/ComponentCard";
import { cn } from "@/lib/utils";

// Define connection types for visual distinction
type ConnectionType = "power" | "data" | "cooling" | "structural" | "default";

interface Connection {
  from: string;
  to: string;
  type: ConnectionType;
  points: string; // SVG path points
  label?: string;
}

const ComponentPath = () => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  
  // Define all connections between components
  const connections: Connection[] = [
    // Case connections
    { from: "case", to: "powerSupply", type: "structural", points: "M 350,90 L 150,160", label: "Houses" },
    { from: "case", to: "caseFans", type: "structural", points: "M 350,90 L 550,160", label: "Mounts" },
    { from: "case", to: "motherboard", type: "structural", points: "M 350,90 L 230,260", label: "Houses" },
    
    // Power Supply connections
    { from: "powerSupply", to: "motherboard", type: "power", points: "M 150,190 L 230,260", label: "Powers" },
    { from: "powerSupply", to: "gpu", type: "power", points: "M 150,190 L 290,360", label: "Powers" },
    { from: "powerSupply", to: "storage", type: "power", points: "M 150,190 L 350,460", label: "Powers" },
    
    // Motherboard connections
    { from: "motherboard", to: "cpu", type: "data", points: "M 230,290 L 470,260", label: "Socket" },
    { from: "motherboard", to: "ram", type: "data", points: "M 230,290 L 150,360", label: "DIMM slots" },
    { from: "motherboard", to: "gpu", type: "data", points: "M 230,290 L 290,360", label: "PCIe slot" },
    { from: "motherboard", to: "storage", type: "data", points: "M 230,290 L 350,460", label: "SATA/M.2" },
    
    // CPU connections
    { from: "cpu", to: "cpuCooler", type: "cooling", points: "M 470,290 L 550,360", label: "Cools" },
    
    // CPU Cooler to Case Fans connection
    { from: "cpuCooler", to: "caseFans", type: "cooling", points: "M 550,360 L 550,190", label: "Airflow" },
  ];
  
  // Get connection style based on type
  const getConnectionStyle = (type: ConnectionType, isHighlighted: boolean) => {
    const baseWidth = isHighlighted ? 3 : 2;
    const opacity = isHighlighted ? 1 : 0.5;
    
    switch (type) {
      case "power":
        return { stroke: "#f59e0b", strokeWidth: baseWidth, strokeDasharray: "", opacity };
      case "data":
        return { stroke: "#3b82f6", strokeWidth: baseWidth, strokeDasharray: "", opacity };
      case "cooling":
        return { stroke: "#10b981", strokeWidth: baseWidth, strokeDasharray: "5,3", opacity };
      case "structural":
        return { stroke: "#6b7280", strokeWidth: baseWidth, strokeDasharray: "", opacity };
      default:
        return { stroke: "#94a3b8", strokeWidth: baseWidth, strokeDasharray: "", opacity };
    }
  };

  // Check if a connection should be highlighted
  const isConnectionHighlighted = (connection: Connection) => {
    if (!hoveredComponent) return false;
    return connection.from === hoveredComponent || connection.to === hoveredComponent;
  };
  
  // Get component position class
  const getComponentClass = (id: string) => {
    const isHighlighted = hoveredComponent === id;
    const baseClass = "absolute transition-all duration-200";
    const highlightClass = isHighlighted ? "scale-110 z-10" : "scale-100";
    
    return cn(baseClass, highlightClass);
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        PC Build Component Connection Map
      </h2>
      <div className="min-w-[750px] relative h-[600px]" id="build-path-visualization">
        {/* Case Component */}
        <div 
          className={getComponentClass("case")}
          style={{ left: "50%", top: "30px", transform: "translateX(-50%)" }}
          onMouseEnter={() => setHoveredComponent("case")}
          onMouseLeave={() => setHoveredComponent(null)}
        >
          <ComponentCard
            title="Computer Case"
            icon={LaptopIcon}
            href="/case"
            color="bg-primary"
            className="w-48"
          />
        </div>
        
        {/* Power Supply */}
        <div 
          className={getComponentClass("powerSupply")}
          style={{ left: "20%", top: "150px" }}
          onMouseEnter={() => setHoveredComponent("powerSupply")}
          onMouseLeave={() => setHoveredComponent(null)}
        >
          <ComponentCard
            title="Power Supply"
            icon={PlugIcon}
            href="/power-supply"
            color="bg-secondary"
          />
        </div>
        
        {/* Case Fans */}
        <div 
          className={getComponentClass("caseFans")}
          style={{ left: "80%", top: "150px" }}
          onMouseEnter={() => setHoveredComponent("caseFans")}
          onMouseLeave={() => setHoveredComponent(null)}
        >
          <ComponentCard
            title="Case Fans"
            icon={FanIcon}
            href="/case-fans"
            color="bg-secondary"
          />
        </div>
        
        {/* Motherboard */}
        <div 
          className={getComponentClass("motherboard")}
          style={{ left: "30%", top: "250px" }}
          onMouseEnter={() => setHoveredComponent("motherboard")}
          onMouseLeave={() => setHoveredComponent(null)}
        >
          <ComponentCard
            title="Motherboard"
            icon={CpuIcon}
            href="/motherboard"
            color="bg-accent"
          />
        </div>
        
        {/* CPU */}
        <div 
          className={getComponentClass("cpu")}
          style={{ left: "70%", top: "250px" }}
          onMouseEnter={() => setHoveredComponent("cpu")}
          onMouseLeave={() => setHoveredComponent(null)}
        >
          <ComponentCard
            title="CPU"
            icon={CpuIcon}
            href="/cpu"
            color="bg-accent"
          />
        </div>
        
        {/* RAM */}
        <div 
          className={getComponentClass("ram")}
          style={{ left: "20%", top: "350px" }}
          onMouseEnter={() => setHoveredComponent("ram")}
          onMouseLeave={() => setHoveredComponent(null)}
        >
          <ComponentCard
            title="RAM"
            icon={MemoryStick}
            href="/ram"
            color="bg-secondary"
          />
        </div>
        
        {/* GPU */}
        <div 
          className={getComponentClass("gpu")}
          style={{ left: "40%", top: "350px" }}
          onMouseEnter={() => setHoveredComponent("gpu")}
          onMouseLeave={() => setHoveredComponent(null)}
        >
          <ComponentCard
            title="GPU"
            icon={MonitorIcon}
            href="/gpu"
            color="bg-secondary"
          />
        </div>
        
        {/* CPU Cooler */}
        <div 
          className={getComponentClass("cpuCooler")}
          style={{ left: "80%", top: "350px" }}
          onMouseEnter={() => setHoveredComponent("cpuCooler")}
          onMouseLeave={() => setHoveredComponent(null)}
        >
          <ComponentCard
            title="CPU Cooler"
            icon={ThermometerIcon}
            href="/cpu-cooler"
            color="bg-success"
          />
        </div>
        
        {/* Storage */}
        <div 
          className={getComponentClass("storage")}
          style={{ left: "50%", top: "450px" }}
          onMouseEnter={() => setHoveredComponent("storage")}
          onMouseLeave={() => setHoveredComponent(null)}
        >
          <ComponentCard
            title="Storage"
            icon={HardDriveIcon}
            href="/storage"
            color="bg-secondary"
          />
        </div>
        
        {/* Add-ons */}
        <div 
          className={getComponentClass("addOns")}
          style={{ left: "50%", top: "550px" }}
          onMouseEnter={() => setHoveredComponent("addOns")}
          onMouseLeave={() => setHoveredComponent(null)}
        >
          <ComponentCard
            title="Add-ons"
            icon={PlusCircleIcon}
            href="/add-ons"
            color="bg-secondary"
          />
        </div>

        {/* Connection lines using SVG */}
        <svg className="absolute inset-0 z-0" width="100%" height="100%">
          {/* Connection legend */}
          <g transform="translate(20, 20)">
            <line x1="0" y1="0" x2="30" y2="0" stroke="#f59e0b" strokeWidth="2" />
            <text x="35" y="5" fontSize="12" fill="#f59e0b">Power</text>
            
            <line x1="0" y1="20" x2="30" y2="20" stroke="#3b82f6" strokeWidth="2" />
            <text x="35" y="25" fontSize="12" fill="#3b82f6">Data</text>
            
            <line x1="0" y1="40" x2="30" y2="40" stroke="#10b981" strokeWidth="2" strokeDasharray="5,3" />
            <text x="35" y="45" fontSize="12" fill="#10b981">Cooling</text>
            
            <line x1="0" y1="60" x2="30" y2="60" stroke="#6b7280" strokeWidth="2" />
            <text x="35" y="65" fontSize="12" fill="#6b7280">Structural</text>
          </g>
          
          {/* Draw all connections */}
          {connections.map((connection, idx) => {
            const isHighlighted = isConnectionHighlighted(connection);
            const style = getConnectionStyle(connection.type, isHighlighted);
            
            return (
              <g key={idx} className="connection-group">
                <path 
                  d={connection.points} 
                  className={`connection-path transition-all duration-200 ${isHighlighted ? 'glow' : ''}`}
                  stroke={style.stroke}
                  strokeWidth={style.strokeWidth}
                  strokeDasharray={style.strokeDasharray}
                  fill="none"
                  strokeLinecap="round"
                  opacity={style.opacity}
                />
                
                {/* Add connection label if highlighted */}
                {isHighlighted && connection.label && (
                  <text
                    className="connection-label"
                    fontSize="12"
                    fill={style.stroke}
                    fontWeight="bold"
                    // Position text at the middle of the path
                    x={(connection.points.split(" ")[1].split(",")[0] as unknown as number + 
                       connection.points.split(" ")[3].split(",")[0] as unknown as number) / 2 - 20}
                    y={(connection.points.split(" ")[1].split(",")[1] as unknown as number + 
                       connection.points.split(" ")[3].split(",")[1] as unknown as number) / 2 - 5}
                  >
                    {connection.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
        
        {/* Background colored circles to indicate component type categories */}
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute w-32 h-32 bg-primary/10 rounded-full left-[50%] top-[30px] transform -translate-x-1/2" />
          <div className="absolute w-48 h-48 bg-secondary/10 rounded-full left-[20%] top-[130px] transform -translate-x-1/2" />
          <div className="absolute w-48 h-48 bg-accent/10 rounded-full left-[50%] top-[250px] transform -translate-x-1/2" />
          <div className="absolute w-48 h-48 bg-success/10 rounded-full left-[80%] top-[250px] transform -translate-x-1/2" />
        </div>
      </div>
      
      <div className="text-center mt-6 text-gray-600 text-sm">
        <p>Hover over components to highlight their connections</p>
      </div>
    </div>
  );
};

export default ComponentPath;
