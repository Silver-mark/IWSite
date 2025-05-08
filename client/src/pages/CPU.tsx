import { Helmet } from "react-helmet";
import { 
  CpuIcon, 
  ZapIcon, 
  LayersIcon, 
  InfoIcon, 
  CheckIcon, 
  BoltIcon,
  ClockIcon,
  ActivityIcon
} from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import { componentData } from "@/lib/componentData";

const CPU = () => {
  const { title, description, image } = componentData.cpu;

  const cpuTerminology = [
    {
      term: "Cores",
      description: "Individual processing units within a CPU. More cores allow for better multitasking and improved performance in multi-threaded applications."
    },
    {
      term: "Threads",
      description: "Virtual cores that allow a single physical core to handle multiple tasks simultaneously through a technology called simultaneous multithreading (SMT/Hyperthreading)."
    },
    {
      term: "Clock Speed",
      description: "Measured in GHz, this is the basic operating frequency of the CPU. Higher clock speeds generally mean faster single-threaded performance."
    },
    {
      term: "Boost Clock",
      description: "The maximum speed a CPU can reach when thermal and power conditions allow. This is higher than the base clock."
    },
    {
      term: "Cache",
      description: "Ultra-fast memory built into the CPU (L1, L2, L3). More cache generally improves performance by reducing access times to frequently used data."
    },
    {
      term: "TDP",
      description: "Thermal Design Power, measured in watts. Indicates how much cooling is needed and roughly how much power the CPU consumes under load."
    }
  ];

  const intelVsAmd = [
    {
      category: "Single-Thread Performance",
      intel: "Traditionally stronger in single-threaded tasks, good for gaming",
      amd: "Significantly improved in recent generations, competitive with Intel"
    },
    {
      category: "Multi-Thread Performance",
      intel: "Good multi-thread scaling, especially in high-end models",
      amd: "Often offers more cores/threads at similar price points, excellent for productivity workloads"
    },
    {
      category: "Power Efficiency",
      intel: "Newer generations have improved efficiency",
      amd: "Often more power-efficient, especially in Ryzen 5000/7000 series"
    },
    {
      category: "Integrated Graphics",
      intel: "Generally better integrated graphics (except vs. AMD APUs)",
      amd: "Standard CPUs have basic graphics, but dedicated APUs offer excellent integrated graphics"
    },
    {
      category: "Price to Performance",
      intel: "Competitive at various price points",
      amd: "Often offers better value in mid-range and high-end segments"
    }
  ];

  const cpuSelectionGuide = [
    {
      usage: "Basic Office/Web",
      intel: "Core i3/Pentium/Celeron",
      amd: "Ryzen 3/Athlon"
    },
    {
      usage: "Gaming (Budget)",
      intel: "Core i3/Core i5",
      amd: "Ryzen 3/Ryzen 5"
    },
    {
      usage: "Gaming (Mid/High)",
      intel: "Core i5/Core i7",
      amd: "Ryzen 5/Ryzen 7"
    },
    {
      usage: "Gaming (Enthusiast)",
      intel: "Core i7/Core i9",
      amd: "Ryzen 7/Ryzen 9"
    },
    {
      usage: "Video Editing/3D Rendering",
      intel: "Core i7/Core i9",
      amd: "Ryzen 7/Ryzen 9"
    },
    {
      usage: "Workstation/Professional",
      intel: "Core i9/Xeon",
      amd: "Ryzen 9/Threadripper"
    }
  ];

  const tips = [
    "Always match your CPU with a compatible motherboard socket and chipset",
    "Consider future upgradability when selecting a CPU platform",
    "A balanced system is better than overspending on just the CPU",
    "Most games are more dependent on GPU performance than CPU",
    "For productivity tasks like video editing, more cores are beneficial",
    "Make sure your power supply can handle the CPU's power requirements"
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
                  <h3 className="font-semibold text-xl mb-4">CPU Terminology</h3>
                  <div className="space-y-3">
                    {cpuTerminology.map((term, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-semibold text-accent">{term.term}</h4>
                        <p className="text-sm">{term.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <ActivityIcon className="mr-2 text-accent" size={18} />
                    CPU Selection by Usage
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left font-semibold p-2">Usage</th>
                          <th className="text-left font-semibold p-2">Intel</th>
                          <th className="text-left font-semibold p-2">AMD</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cpuSelectionGuide.map((guide, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-neutral-50" : ""}>
                            <td className="p-2 font-medium">{guide.usage}</td>
                            <td className="p-2">{guide.intel}</td>
                            <td className="p-2">{guide.amd}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <NavigationButton href="/cpu-cooler">
                      Next: CPU Cooler
                    </NavigationButton>
                    <NavigationButton href="/motherboard" variant="secondary">
                      Back to Motherboard
                    </NavigationButton>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src={image} 
                alt="Computer CPU processor" 
                className="rounded-xl shadow-lg mb-6 w-full" 
              />
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="font-semibold text-xl mb-4">Intel vs AMD Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold p-2">Category</th>
                        <th className="text-left font-semibold p-2">Intel</th>
                        <th className="text-left font-semibold p-2">AMD</th>
                      </tr>
                    </thead>
                    <tbody>
                      {intelVsAmd.map((comparison, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-neutral-50" : ""}>
                          <td className="p-2 font-medium">{comparison.category}</td>
                          <td className="p-2">{comparison.intel}</td>
                          <td className="p-2">{comparison.amd}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-xl mb-4">Key CPU Considerations</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <ClockIcon className="text-accent" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Performance Needs</h4>
                        <p className="text-sm">Assess what you'll use your computer for. Gaming needs fast single-core performance, while content creation benefits from many cores.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <ZapIcon className="text-accent" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Power & Cooling</h4>
                        <p className="text-sm">Higher performance CPUs need more robust cooling solutions and power supplies. Consider TDP when selecting both.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <BoltIcon className="text-accent" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Overclocking</h4>
                        <p className="text-sm">If you plan to overclock, look for "K" (Intel) or "X" (AMD) models and pair with a motherboard that supports overclocking.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <LayersIcon className="text-accent" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Integrated Graphics</h4>
                        <p className="text-sm">If you're not using a dedicated GPU, ensure your CPU has integrated graphics (most Intel CPUs and AMD APUs do).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent/5 rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-4 flex items-center">
                  <InfoIcon className="text-accent mr-2" size={20} />
                  Pro Tips
                </h3>
                
                <ul className="space-y-2">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="text-accent mt-1 mr-2" size={16} />
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

export default CPU;
