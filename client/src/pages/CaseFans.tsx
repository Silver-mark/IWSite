import { Helmet } from "react-helmet";
import { 
  FanIcon, 
  ArrowUpIcon, 
  ArrowDownIcon, 
  CheckIcon, 
  InfoIcon, 
  MoveHorizontalIcon, 
  DatabaseIcon
} from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import { componentData } from "@/lib/componentData";

const CaseFans = () => {
  const { title, description, image } = componentData.caseFans;

  const fanSizes = [
    {
      size: "120mm",
      description: "Most common size, widely compatible with most cases. Good balance of airflow and static pressure."
    },
    {
      size: "140mm",
      description: "Larger fans can move more air at lower RPMs, resulting in quieter operation while maintaining good airflow."
    },
    {
      size: "80mm/92mm",
      description: "Smaller fans for compact cases or specific mounting points. Usually louder and move less air."
    },
    {
      size: "200mm+",
      description: "Very large fans for maximum airflow at low RPMs. Quiet but require cases specifically designed for them."
    }
  ];

  const fanTypes = [
    {
      icon: ArrowUpIcon,
      title: "Airflow-Optimized",
      description: "Designed to move large volumes of air with minimal obstruction. Best for case intake/exhaust when air isn't passing through radiators or dense filters."
    },
    {
      icon: ArrowDownIcon,
      title: "Static Pressure-Optimized",
      description: "Designed to push air through restrictions like radiators, heatsinks, and dust filters. Best for CPU coolers, radiators, and filtered intakes."
    },
    {
      icon: DatabaseIcon,
      title: "Balanced/Hybrid",
      description: "A middle-ground between airflow and static pressure. Good all-around performers suitable for most positions in a PC case."
    }
  ];

  const airflowPatterns = [
    {
      title: "Positive Pressure",
      description: "More intake than exhaust fans. Helps prevent dust buildup, as air enters through filtered intakes and exits through any unfiltered openings.",
      pros: ["Reduces dust buildup", "Can provide better cooling to components not directly in airflow path"],
      cons: ["May result in slightly higher internal temperatures", "Requires good filtered intakes"]
    },
    {
      title: "Negative Pressure",
      description: "More exhaust than intake fans. Creates a vacuum effect that pulls air in through any available opening.",
      pros: ["Can provide better direct cooling to components", "Often results in lower CPU/GPU temperatures"],
      cons: ["Increases dust buildup as air is drawn in through unfiltered case openings", "May create turbulence"]
    },
    {
      title: "Balanced Pressure",
      description: "Equal intake and exhaust. A middle-ground approach that attempts to minimize the drawbacks of both positive and negative pressure.",
      pros: ["Predictable airflow path", "Good compromise of cooling and dust control"],
      cons: ["Requires careful planning and potentially fan speed control"]
    }
  ];

  const mountingPositions = [
    {
      position: "Front",
      recommendation: "Usually intake, pulling cool air into the case"
    },
    {
      position: "Rear",
      recommendation: "Almost always exhaust, pushing hot air out"
    },
    {
      position: "Top",
      recommendation: "Usually exhaust, as heat naturally rises"
    },
    {
      position: "Bottom",
      recommendation: "Intake, pulling cool air from below (ensure case has feet and clearance)"
    },
    {
      position: "Side",
      recommendation: "Usually intake, directed at hot components like GPU"
    }
  ];

  const tips = [
    "Consider both airflow and noise when choosing fans",
    "Higher RPM means more airflow but also more noise",
    "Plan your airflow direction - cool air in, hot air out",
    "Most fans have an arrow on the side indicating direction of airflow",
    "Quality fans with good bearings last longer and run quieter",
    "Fan controllers or motherboard PWM can help balance airflow and noise"
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
                  <h3 className="font-semibold text-xl mb-4">Fan Types</h3>
                  <div className="space-y-4">
                    {fanTypes.map((type, index) => {
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
                
                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                  <h3 className="font-semibold text-xl mb-4">Fan Sizes</h3>
                  <div className="space-y-3">
                    {fanSizes.map((size, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-semibold text-secondary">{size.size}</h4>
                        <p className="text-sm">{size.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <NavigationButton href="/cpu-cooler">
                      Next: CPU Cooler
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
                src={image} 
                alt="Computer case fans" 
                className="rounded-xl shadow-lg mb-6 w-full" 
              />
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="font-semibold text-xl mb-4">Airflow Patterns</h3>
                <div className="space-y-6">
                  {airflowPatterns.map((pattern, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-lg flex items-center">
                        <MoveHorizontalIcon className="mr-2 text-secondary" size={18} />
                        {pattern.title}
                      </h4>
                      <p className="mb-2 text-sm">{pattern.description}</p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div>
                          <p className="text-xs font-semibold text-success mb-1">Pros:</p>
                          <ul className="text-xs space-y-1">
                            {pattern.pros.map((pro, idx) => (
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
                            {pattern.cons.map((con, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckIcon className="text-destructive mt-0.5 mr-1" size={10} />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary/5 rounded-xl p-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <InfoIcon className="text-secondary mr-2" size={20} />
                    Mounting Positions
                  </h3>
                  
                  <ul className="space-y-2">
                    {mountingPositions.map((item, index) => (
                      <li key={index} className="border-b pb-2 last:border-0 last:pb-0">
                        <p className="font-medium">{item.position}</p>
                        <p className="text-sm text-neutral-dark/70">{item.recommendation}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-secondary/5 rounded-xl p-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <CheckIcon className="text-secondary mr-2" size={20} />
                    Pro Tips
                  </h3>
                  
                  <ul className="space-y-2">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="text-secondary mt-1 mr-2" size={16} />
                        <p className="text-sm">{tip}</p>
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

export default CaseFans;
