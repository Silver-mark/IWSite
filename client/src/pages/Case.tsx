import { Helmet } from "react-helmet";
import { 
  ArrowUp10, 
  Combine, 
  BoxIcon, 
  WindIcon, 
  RulerIcon, 
  HardDriveIcon, 
  SlidersIcon, 
  PaintbrushIcon,
  CheckIcon,
  LightbulbIcon
} from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import { componentData } from "@/lib/componentData";

const Case = () => {
  const { title, description, image } = componentData.case;

  const caseTypes = [
    {
      icon: ArrowUp10,
      title: "Full Tower",
      description: "Largest option with maximum space for components and cooling. Ideal for high-end builds with multiple GPUs or extensive water cooling."
    },
    {
      icon: Combine,
      title: "Mid Tower",
      description: "Most popular size with good balance between space and footprint. Fits most builds and offers adequate cooling options."
    },
    {
      icon: Combine,
      title: "Mini Tower",
      description: "Compact size for smaller spaces. Still fits standard components but with some limitations on GPU length and cooling options."
    },
    {
      icon: BoxIcon,
      title: "Small Form Factor (SFF)",
      description: "Ultra-compact for minimal footprint. Requires specialized components and careful planning for cooling and cable management."
    }
  ];

  const considerations = [
    {
      icon: WindIcon,
      text: "Airflow and cooling potential"
    },
    {
      icon: RulerIcon,
      text: "Component clearance (GPU length, CPU cooler height)"
    },
    {
      icon: HardDriveIcon,
      text: "Storage drive capacity"
    },
    {
      icon: SlidersIcon,
      text: "I/O ports and front panel connections"
    },
    {
      icon: PaintbrushIcon,
      text: "Aesthetics and visibility (window, RGB support)"
    }
  ];

  const caseFeatures = [
    {
      title: "Fan Mounts",
      description: "Cases have various fan mounting positions (front, top, rear, bottom). More mounts generally mean better cooling potential but check the supported fan sizes (120mm, 140mm, etc)."
    },
    {
      title: "Radiator Support",
      description: "If you plan to use liquid cooling, verify that the case has mounting points for your radiator size (240mm, 280mm, 360mm, etc) in accessible locations."
    },
    {
      title: "Drive Bays",
      description: "Consider how many 2.5\" (SSD) and 3.5\" (HDD) bays you need. Modern cases often eliminate 5.25\" bays (for optical drives) in favor of improved airflow."
    },
    {
      title: "Cable Management",
      description: "Look for cases with dedicated cable routing spaces, grommets, and tie points to keep cables organized and improve airflow."
    },
    {
      title: "Dust Filtration",
      description: "Quality cases include removable dust filters for intake areas to prevent dust buildup on components, which improves longevity and performance."
    }
  ];

  const proTips = [
    "Measure your desk or intended placement area before selecting a case size.",
    "Consider the weight of a fully built system, especially for full towers.",
    "Look for tool-less designs for easier component installation and maintenance.",
    "Check reviews for build quality, especially around sharp edges and panel alignment.",
    "Consider noise levels if the computer will be in a quiet environment."
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
                  <h3 className="font-semibold text-xl mb-4">Case Size Options</h3>
                  <div className="space-y-3">
                    {caseTypes.map((caseType, index) => {
                      const Icon = caseType.icon;
                      return (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                            <Icon className="text-primary" size={16} />
                          </div>
                          <div>
                            <h4 className="font-semibold">{caseType.title}</h4>
                            <p className="text-sm">{caseType.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-xl mb-4">Key Considerations</h3>
                  <div className="space-y-3">
                    {considerations.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-center">
                          <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <Icon className="text-accent" size={16} />
                          </div>
                          <p>{item.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <NavigationButton href="/power-supply">
                      Next: Power Supply
                    </NavigationButton>
                    <NavigationButton href="/case-fans" variant="secondary">
                      Or: Case Fans
                    </NavigationButton>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src={image} 
                alt="Computer case with side panel removed" 
                className="rounded-xl shadow-lg mb-6 w-full" 
              />
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="font-semibold text-xl mb-4">Case Features Explained</h3>
                
                <div className="space-y-6">
                  {caseFeatures.map((feature, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-lg text-primary">{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-accent/5 rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-4 flex items-center">
                  <LightbulbIcon className="text-accent mr-2" size={20} />
                  Pro Tips
                </h3>
                
                <ul className="space-y-2">
                  {proTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="text-accent mt-1 mr-2" size={16} />
                      <p>{tip}</p>
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

export default Case;
