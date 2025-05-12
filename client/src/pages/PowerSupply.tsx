import { Helmet } from "react-helmet";
import { 
  BatteryIcon, 
  ShieldIcon, 
  CableIcon, 
  CheckIcon, 
  AlertTriangleIcon, 
  ZapIcon
} from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import { componentData } from "@/lib/componentData";

const PowerSupply = () => {
  const { title, description, image } = componentData.powerSupply;

  const psuTypes = [
    {
      icon: ShieldIcon,
      title: "Modular PSU",
      description: "Allows you to connect only the cables you need, reducing clutter and improving airflow. The best option for clean builds."
    },
    {
      icon: CableIcon,
      title: "Semi-Modular PSU",
      description: "Essential cables (motherboard, CPU) are fixed while others are detachable. A good balance between cost and cable management."
    },
    {
      icon: BatteryIcon,
      title: "Non-Modular PSU",
      description: "All cables are permanently attached. More affordable but results in excess cables that must be managed within the case."
    }
  ];

  const efficiencyRatings = [
    {
      rating: "80 PLUS Titanium",
      efficiency: "94% efficient at 50% load",
      description: "Premium efficiency, lowest heat generation, highest cost"
    },
    {
      rating: "80 PLUS Platinum",
      efficiency: "92% efficient at 50% load",
      description: "Excellent efficiency with lower premium than Titanium"
    },
    {
      rating: "80 PLUS Gold",
      efficiency: "90% efficient at 50% load",
      description: "Great efficiency, popular choice for gaming and high-performance builds"
    },
    {
      rating: "80 PLUS Silver",
      efficiency: "88% efficient at 50% load",
      description: "Good efficiency at a moderate price point"
    },
    {
      rating: "80 PLUS Bronze",
      efficiency: "85% efficient at 50% load",
      description: "Entry-level efficiency certification, good for budget builds"
    },
    {
      rating: "80 PLUS",
      efficiency: "82% efficient at 50% load",
      description: "Basic certification, minimal requirement for a decent PSU"
    }
  ];

  const considerations = [
    "Always buy from reputable manufacturers with good warranty coverage",
    "Factor in potential upgrades when deciding on wattage",
    "Consider fan noise if the computer will be in a quiet environment",
    "Check that the PSU has all the connectors needed for your components",
    "Verify the physical dimensions to ensure it fits in your case"
  ];

  const warnings = [
    "Never try to open or repair a power supply - they contain capacitors that can hold dangerous charges even when unplugged",
    "Avoid extremely cheap, uncertified power supplies - they can damage components or cause fires",
    "Don't reuse very old power supplies with new builds - efficiency and safety standards improve over time"
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
                  <h3 className="font-semibold text-xl mb-4">How to Choose Power Supply Wattage</h3>
                  <p className="mb-4">Your PSU should have enough wattage to power all components with about 20-30% headroom for efficiency and future upgrades.</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Entry-level build</span>
                      <span>400-500W</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Mid-range gaming PC</span>
                      <span>550-650W</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">High-end gaming/workstation</span>
                      <span>750-850W</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Enthusiast/multi-GPU build</span>
                      <span>1000W+</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-neutral-dark/70 italic">Note: These are general guidelines. Always calculate based on your specific components.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                  <h3 className="font-semibold text-xl mb-4">PSU Types</h3>
                  <div className="space-y-4">
                    {psuTypes.map((type, index) => {
                      const Icon = type.icon;
                      return (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                            <Icon className="text-secondary" size={16} />
                          </div>
                          <div>
                            <h4 className="font-semibold">{type.title}</h4>
                            <p className="text-sm">{type.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <NavigationButton href="/motherboard">
                      Next: Motherboard
                    </NavigationButton>
                    <NavigationButton href="/case" variant="secondary">
                      Back to Case
                    </NavigationButton>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600348712270-5a9564ad5878?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Computer power supply unit" 
                className="rounded-xl shadow-lg mb-6 w-full" 
              />
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="font-semibold text-xl mb-4">Efficiency Ratings</h3>
                <p className="mb-4">Higher efficiency means less electricity wasted as heat, lower electricity bills, and cooler operation.</p>
                
                <div className="space-y-4">
                  {efficiencyRatings.map((rating, index) => (
                    <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                      <div className="flex items-center">
                        <ZapIcon className="text-yellow-500 mr-2" size={18} />
                        <h4 className="font-semibold">{rating.rating}</h4>
                      </div>
                      <p className="text-sm font-medium text-neutral-dark/80 ml-6">{rating.efficiency}</p>
                      <p className="text-sm text-neutral-dark/70 ml-6">{rating.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-secondary/5 rounded-xl p-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <CheckIcon className="text-secondary mr-2" size={20} />
                    Key Considerations
                  </h3>
                  
                  <ul className="space-y-2">
                    {considerations.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="text-secondary mt-1 mr-2" size={16} />
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-destructive/5 rounded-xl p-6">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerSupply;
