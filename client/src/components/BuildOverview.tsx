import { 
  LightbulbIcon, 
  DollarSignIcon, 
  RulerIcon, 
  CpuIcon, 
  WrenchIcon, 
  CheckCircleIcon 
} from "lucide-react";

const BuildOverview = () => {
  const steps = [
    {
      icon: LightbulbIcon,
      title: "Define Your Needs",
      description: "Start by understanding what you'll use your computer for. Gaming, video editing, office work, or general use all require different components."
    },
    {
      icon: DollarSignIcon,
      title: "Set Your Budget",
      description: "Determine how much you're willing to spend. This will guide your component choices and help prioritize where to allocate more funds."
    },
    {
      icon: RulerIcon,
      title: "Consider Space",
      description: "Think about where your computer will be placed. This affects case size, cooling requirements, and potentially noise considerations."
    },
    {
      icon: CpuIcon,
      title: "Select Components",
      description: "Choose compatible components that meet your needs and budget, starting with the CPU and motherboard, which influence other parts."
    },
    {
      icon: WrenchIcon,
      title: "Assembly",
      description: "Follow a logical build order to assemble your computer, ensuring proper installation of each component with attention to detail."
    },
    {
      icon: CheckCircleIcon,
      title: "Testing & Setup",
      description: "Verify that everything works correctly, install your operating system, and configure your new computer for optimal performance."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={index} className="bg-neutral-light rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Icon className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
            <p>{step.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BuildOverview;
