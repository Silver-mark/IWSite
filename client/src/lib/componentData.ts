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

export interface ComponentData {
  title: string;
  path: string;
  icon: any;
  description: string;
  primaryColor: string;
  connections: string[];
  image: string;
}

export const componentData: Record<string, ComponentData> = {
  case: {
    title: "Computer Case",
    path: "/case",
    icon: LaptopIcon,
    description: "The case is the foundation of your build, housing and protecting all components. Choosing the right case affects cooling, component compatibility, and aesthetics.",
    primaryColor: "bg-primary",
    connections: ["/power-supply", "/case-fans", "/motherboard", "/cpu"],
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  powerSupply: {
    title: "Power Supply",
    path: "/power-supply",
    icon: PlugIcon,
    description: "The power supply unit (PSU) converts AC power from the wall outlet to DC power for your components. Selecting the right wattage and efficiency is crucial for system stability.",
    primaryColor: "bg-secondary",
    connections: ["/case", "/motherboard", "/gpu", "/storage"],
    image: "https://images.unsplash.com/photo-1600348712270-5a9564ad5878?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  caseFans: {
    title: "Case Fans",
    path: "/case-fans",
    icon: FanIcon,
    description: "Case fans provide airflow to cool components. Proper fan placement and configuration create positive or negative pressure, affecting cooling efficiency and dust accumulation.",
    primaryColor: "bg-secondary",
    connections: ["/case", "/cpu-cooler"],
    image: "https://images.unsplash.com/photo-1587202372583-49330a15584d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  motherboard: {
    title: "Motherboard",
    path: "/motherboard",
    icon: CpuIcon,
    description: "The motherboard is the central hub connecting all components. It determines compatibility with the CPU, memory, and expansion cards, as well as available features.",
    primaryColor: "bg-accent",
    connections: ["/case", "/cpu", "/ram", "/gpu", "/storage", "/add-ons"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  cpu: {
    title: "CPU",
    path: "/cpu",
    icon: CpuIcon,
    description: "The Central Processing Unit (CPU) is the brain of your computer, handling instructions from software. Its performance affects overall system speed and multitasking ability.",
    primaryColor: "bg-accent",
    connections: ["/motherboard", "/cpu-cooler"],
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  cpuCooler: {
    title: "CPU Cooler",
    path: "/cpu-cooler",
    icon: ThermometerIcon,
    description: "The CPU cooler removes heat from the processor to prevent thermal throttling. Options include air coolers with heatsinks and fans, or liquid cooling systems.",
    primaryColor: "bg-success",
    connections: ["/cpu", "/case-fans"],
    image: "https://images.unsplash.com/photo-1587135991058-8816b028691f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  ram: {
    title: "RAM",
    path: "/ram",
    icon: MemoryStick,
    description: "Random Access Memory (RAM) provides short-term storage for actively used data. More RAM allows for smoother multitasking and better performance in memory-intensive applications.",
    primaryColor: "bg-secondary",
    connections: ["/motherboard"],
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  gpu: {
    title: "GPU",
    path: "/gpu",
    icon: MonitorIcon,
    description: "The Graphics Processing Unit (GPU) renders images, videos, and animations. It's crucial for gaming, video editing, 3D rendering, and other graphically intensive tasks.",
    primaryColor: "bg-secondary",
    connections: ["/motherboard", "/power-supply"],
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  storage: {
    title: "Storage",
    path: "/storage",
    icon: HardDriveIcon,
    description: "Storage devices hold your operating system, software, and files. Options include fast SSDs for system drives and larger HDDs for mass storage of files and media.",
    primaryColor: "bg-secondary",
    connections: ["/motherboard", "/power-supply"],
    image: "https://images.unsplash.com/photo-1597225244660-1cd102bf3d3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  addOns: {
    title: "Additional Components",
    path: "/add-ons",
    icon: PlusCircleIcon,
    description: "Additional components enhance your PC with specialized functions, such as sound cards, network cards, RGB lighting controllers, and front panel devices.",
    primaryColor: "bg-secondary",
    connections: ["/motherboard"],
    image: "https://images.unsplash.com/photo-1592919505780-303954a3a247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
};
