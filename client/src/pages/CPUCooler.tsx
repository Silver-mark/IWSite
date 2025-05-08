import { Helmet } from "react-helmet";
import { 
  ThermometerIcon, 
  DropletIcon, 
  FanIcon, 
  InfoIcon, 
  CheckIcon, 
  AlertTriangleIcon,
  ArrowDownIcon,
  TargetIcon,
  GaugeIcon
} from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import { componentData } from "@/lib/componentData";

const CPUCooler = () => {
  const { title, description, image } = componentData.cpuCooler;

  const coolerTypes = [
    {
      icon: FanIcon,
      title: "Air Coolers",
      pros: ["More affordable", "No risk of leaks", "Generally more reliable long-term", "No maintenance required"],
      cons: ["Larger and heavier", "Can interfere with RAM or case clearance", "Usually louder than liquid cooling", "Less effective for extreme overclocking"],
      description: "Air coolers use metal heatsinks with attached fans to dissipate heat from the CPU. They range from small low-profile designs to massive dual-tower models."
    },
    {
      icon: DropletIcon,
      title: "All-In-One (AIO) Liquid Coolers",
      pros: ["Better cooling performance", "Cleaner aesthetic", "Doesn't interfere with RAM slots", "More effective for high-end CPUs"],
      cons: ["More expensive", "Potential for pump failure or leaks", "Limited lifespan (3-6 years typically)", "Requires radiator mounting space in case"],
      description: "AIO coolers use a closed-loop of liquid to transfer heat from the CPU to a radiator where fans dissipate it. They come in various radiator sizes (120mm, 240mm, 280mm, 360mm)."
    },
    {
      icon: DropletIcon,
      title: "Custom Liquid Cooling",
      pros: ["Best cooling performance", "Can cool multiple components (CPU, GPU, etc.)", "Highly customizable", "Quietest potential operation"],
      cons: ["Very expensive", "Complex installation", "Requires maintenance", "Higher risk if not properly installed"],
      description: "Custom loops use separate components (pump, reservoir, radiators, tubing) assembled by the user. They offer the best performance but at significantly higher cost and complexity."
    }
  ];

  const sizingGuide = [
    {
      cpuType: "Entry-Level CPUs (65W TDP)",
      recommendation: "Stock coolers or basic aftermarket air coolers",
      examples: "Intel Core i3, AMD Ryzen 3/5 (non-X)"
    },
    {
      cpuType: "Mid-Range CPUs (65-95W TDP)",
      recommendation: "Mid-tier air coolers or 120/240mm AIOs",
      examples: "Intel Core i5/i7, AMD Ryzen 5/7"
    },
    {
      cpuType: "High-End CPUs (105-125W+ TDP)",
      recommendation: "Premium air coolers or 240/280/360mm AIOs",
      examples: "Intel Core i7-K/i9-K, AMD Ryzen 7X/9X"
    },
    {
      cpuType: "Extreme CPUs (150W+ TDP)",
      recommendation: "Top-tier air coolers or 280/360mm+ AIOs",
      examples: "Intel Core i9 Extreme, AMD Threadripper"
    }
  ];

  const installationTips = [
    "Always apply thermal paste if not pre-applied on the cooler",
    "Follow the specific mounting instructions for your CPU socket",
    "Ensure the cooler doesn't interfere with RAM or case clearance",
    "For AIOs, mount the radiator with tubes at the bottom if possible to prevent air bubbles in the pump",
    "Tighten mounting screws in a cross pattern for even pressure",
    "Check that fan directions are correct for your airflow setup"
  ];

  const warnings = [
    "Never power on a CPU without a cooler installed",
    "Avoid touching the CPU surface or the thermal interface material on the cooler",
    "For AIOs, be careful not to twist or kink the tubes",
    "Ensure adequate clearance for your RAM modules when choosing an air cooler"
  ];

  return (
    <>
      <Helmet>
        <title>{title} - PC Builder Guide</title>
        <meta name="description" content={description} />
      </Helmet>

      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-neutral-dark mb-6">{title}</h2>
                <p className="text-lg mb-6">{description}</p>
                
                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                  <h3 className="font-semibold text-xl mb-4">Choosing the Right Cooler Size</h3>
                  <div className="space-y-3">
                    {sizingGuide.map((guide, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-semibold text-success">{guide.cpuType}</h4>
                        <p className="text-sm font-medium">{guide.recommendation}</p>
                        <p className="text-sm text-neutral-dark/70">Examples: {guide.examples}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-destructive/5 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <AlertTriangleIcon className="text-destructive mr-2" size={20} />
                    Important Warnings
                  </h3>
                  
                  <ul className="space-y-2">
                    {warnings.map((warning, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangleIcon className="text-destructive mt-1 mr-2" size={16} />
                        <p>{warning}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <NavigationButton href="/ram">
                      Next: RAM
                    </NavigationButton>
                    <NavigationButton href="/case-fans" variant="secondary">
                      Back to Case Fans
                    </NavigationButton>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src={image} 
                alt="CPU cooler" 
                className="rounded-xl shadow-lg mb-6 w-full" 
              />
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="font-semibold text-xl mb-4">Cooler Types Compared</h3>
                <div className="space-y-6">
                  {coolerTypes.map((cooler, index) => {
                    const Icon = cooler.icon;
                    return (
                      <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                        <h4 className="font-semibold text-lg flex items-center">
                          <Icon className="mr-2 text-success" size={18} />
                          {cooler.title}
                        </h4>
                        <p className="text-sm mb-3">{cooler.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="text-xs font-semibold text-success mb-1">Pros:</p>
                            <ul className="text-xs space-y-1">
                              {cooler.pros.map((pro, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckIcon className="text-success mt-0.5 mr-1" size={10} />
                                  <span>{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-destructive mb-1">Cons:</p>
                            <ul className="text-xs space-y-1">
                              {cooler.cons.map((con, idx) => (
                                <li key={idx} className="flex items-start">
                                  <ArrowDownIcon className="text-destructive mt-0.5 mr-1" size={10} />
                                  <span>{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-xl mb-4">Key Considerations</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <ThermometerIcon className="text-success" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">TDP Rating</h4>
                        <p className="text-sm">Check the cooler's TDP rating matches or exceeds your CPU's TDP. Higher-end CPUs require coolers with better heat dissipation capability.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <TargetIcon className="text-success" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Socket Compatibility</h4>
                        <p className="text-sm">Ensure the cooler is compatible with your CPU socket (e.g., AM4/AM5 for AMD, LGA1700/1200 for Intel). Most coolers include multiple mounting brackets.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <GaugeIcon className="text-success" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Noise Levels</h4>
                        <p className="text-sm">For quieter operation, look for coolers with larger, slower fans or those with good noise-normalized performance in reviews.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-success/5 rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-4 flex items-center">
                  <InfoIcon className="text-success mr-2" size={20} />
                  Installation Tips
                </h3>
                
                <ul className="space-y-2">
                  {installationTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="text-success mt-1 mr-2" size={16} />
                      <p className="text-sm">{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CPUCooler;
