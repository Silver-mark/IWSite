import { Helmet } from "react-helmet";
import { 
  MemoryStick, 
  ClockIcon, 
  ZapIcon, 
  InfoIcon, 
  CheckIcon, 
  ArrowUpDownIcon,
  LayersIcon,
  BoxesIcon
} from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import { componentData } from "@/lib/componentData";

const RAM = () => {
  const { title, description, image } = componentData.ram;

  const ramTerms = [
    {
      term: "DDR4 vs DDR5",
      description: "DDR5 is the newer standard with higher bandwidth and speeds, while DDR4 is still widely used and more affordable. The choice depends on your motherboard compatibility."
    },
    {
      term: "Capacity",
      description: "Measured in gigabytes (GB), this is the total amount of memory available. Common configurations are 8GB, 16GB, 32GB, or 64GB."
    },
    {
      term: "Speed/Frequency",
      description: "Measured in MHz (e.g., 3200MHz, 3600MHz), higher frequencies allow for faster data transfer. Impact varies by workload."
    },
    {
      term: "CAS Latency (CL)",
      description: "Measured in clock cycles (e.g., CL16, CL18), lower numbers mean better responsiveness. Balance this with frequency for optimal performance."
    },
    {
      term: "Dual/Quad Channel",
      description: "Installing matching RAM sticks allows your system to access memory in parallel channels, improving performance significantly."
    },
    {
      term: "XMP/DOCP Profiles",
      description: "Easy overclocking profiles that allow your RAM to run at its advertised speeds beyond the default JEDEC specifications."
    }
  ];

  const capacityGuide = [
    {
      usage: "Basic Computing (Web browsing, Office)",
      recommendation: "8GB",
      notes: "Minimum for modern systems, might experience slowdowns with many tabs open"
    },
    {
      usage: "Mainstream Gaming",
      recommendation: "16GB",
      notes: "Sweet spot for most users and games in 2023"
    },
    {
      usage: "Content Creation, Streaming, Heavy Multitasking",
      recommendation: "32GB",
      notes: "Recommended for video editing, virtual machines, or high-end gaming setups"
    },
    {
      usage: "Professional Workstations",
      recommendation: "64GB+",
      notes: "For serious 3D rendering, scientific computing, or other memory-intensive work"
    }
  ];

  const speedConsiderations = [
    {
      platform: "Intel 12th/13th Gen",
      sweet_spot: "DDR4-3200 to 3600MHz or DDR5-5200 to 6000MHz",
      benefit: "Moderate gains up to these speeds, diminishing returns beyond"
    },
    {
      platform: "AMD Ryzen 5000 Series",
      sweet_spot: "DDR4-3600 to 4000MHz",
      benefit: "Performance scales well with RAM speed due to Infinity Fabric"
    },
    {
      platform: "AMD Ryzen 7000 Series",
      sweet_spot: "DDR5-5200 to 6000MHz",
      benefit: "Continued scaling with memory speed but with new DDR5 only support"
    }
  ];

  const tips = [
    "Always buy RAM in kits (2x8GB instead of 1x16GB) to enable dual-channel operation",
    "Check your motherboard's Qualified Vendor List (QVL) for confirmed compatible memory",
    "Enable XMP/DOCP in BIOS to get advertised speeds - RAM defaults to slower speeds",
    "When mixing RAM, the system will run at the speed of the slowest module",
    "Memory ranks (single/dual) can impact performance - dual-rank often performs better",
    "High-frequency RAM benefits AMD Ryzen systems more than Intel systems in many workloads"
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
                  <h3 className="font-semibold text-xl mb-4">RAM Terminology</h3>
                  <div className="space-y-3">
                    {ramTerms.map((term, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-semibold text-secondary">{term.term}</h4>
                        <p className="text-sm">{term.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <BoxesIcon className="mr-2 text-secondary" size={18} />
                    How Much RAM Do You Need?
                  </h3>
                  <div className="space-y-3">
                    {capacityGuide.map((guide, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-semibold">{guide.usage}</h4>
                        <div className="flex justify-between items-center">
                          <span className="text-secondary font-bold">{guide.recommendation}</span>
                          <span className="text-sm text-neutral-dark/70 italic">{guide.notes}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <NavigationButton href="/gpu">
                      Next: GPU
                    </NavigationButton>
                    <NavigationButton href="/cpu-cooler" variant="secondary">
                      Back to CPU Cooler
                    </NavigationButton>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src={image} 
                alt="RAM memory modules" 
                className="rounded-xl shadow-lg mb-6 w-full" 
              />
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="font-semibold text-xl mb-4">Speed Considerations by Platform</h3>
                <div className="space-y-4">
                  {speedConsiderations.map((platform, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-lg flex items-center">
                        <ClockIcon className="mr-2 text-secondary" size={18} />
                        {platform.platform}
                      </h4>
                      <p className="font-medium text-sm">Sweet Spot: {platform.sweet_spot}</p>
                      <p className="text-sm text-neutral-dark/80">{platform.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-xl mb-4">Key RAM Considerations</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <LayersIcon className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Matching Modules</h4>
                        <p className="text-sm">Using identical RAM modules ensures stability and enables dual/quad channel operation. Mix different RAM only if necessary.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <ArrowUpDownIcon className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Height Clearance</h4>
                        <p className="text-sm">Tall RAM with large heatspreaders can interfere with CPU air coolers. Check for clearance or choose low-profile memory.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <ZapIcon className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Power and Heat</h4>
                        <p className="text-sm">Higher speed RAM, especially when overclocked, requires more power and generates more heat. Ensure good case airflow.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/5 rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-4 flex items-center">
                  <InfoIcon className="text-secondary mr-2" size={20} />
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
      </section>
    </>
  );
};

export default RAM;
