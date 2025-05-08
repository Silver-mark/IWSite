import { Helmet } from "react-helmet";
import { 
  MonitorIcon, 
  ZapIcon, 
  InfoIcon, 
  CheckIcon, 
  CpuIcon,
  GaugeIcon,
  RefreshCwIcon,
  TvIcon,
  DiamondIcon
} from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import { componentData } from "@/lib/componentData";

const GPU = () => {
  const { title, description, image } = componentData.gpu;

  const gpuTerms = [
    {
      term: "VRAM",
      description: "Video RAM dedicated to the graphics card, measured in GB. More VRAM allows handling higher resolutions and texture quality."
    },
    {
      term: "CUDA/Stream Processors",
      description: "The processing cores of the GPU, with more generally indicating better performance. CUDA for NVIDIA, Stream Processors for AMD."
    },
    {
      term: "RT/Tensor Cores",
      description: "Specialized cores for ray tracing and AI tasks. RT cores handle real-time ray tracing, while Tensor cores accelerate AI computations."
    },
    {
      term: "Clock Speed",
      description: "The operating frequency of the GPU, measured in MHz. Higher clock speeds typically mean better performance."
    },
    {
      term: "TDP",
      description: "Thermal Design Power, indicates power consumption under load. Higher TDP cards require more robust cooling and power supply."
    },
    {
      term: "PCIe Generation",
      description: "The generation of PCIe interface the GPU uses, with newer generations (PCIe 4.0/5.0) offering more bandwidth."
    }
  ];

  const gpuTiers = [
    {
      tier: "Entry-Level",
      nvidia: "GeForce GTX 1650, RTX 3050",
      amd: "Radeon RX 6500 XT, RX 6600",
      use_case: "1080p gaming at medium settings, basic content creation",
      power_needs: "300-450W PSU, single 6/8-pin connector"
    },
    {
      tier: "Mid-Range",
      nvidia: "GeForce RTX 3060, RTX 3060 Ti, RTX 4060",
      amd: "Radeon RX 6650 XT, RX 6700 XT",
      use_case: "1080p at high settings, 1440p gaming, video editing",
      power_needs: "500-650W PSU, 8-pin connector"
    },
    {
      tier: "High-End",
      nvidia: "GeForce RTX 3070, RTX 3080, RTX 4070",
      amd: "Radeon RX 6800, RX 6800 XT, RX 7700 XT",
      use_case: "1440p at max settings, entry 4K gaming, professional work",
      power_needs: "650-750W PSU, dual 8-pin connectors"
    },
    {
      tier: "Enthusiast",
      nvidia: "GeForce RTX 3090, RTX 4080, RTX 4090",
      amd: "Radeon RX 6900 XT, RX 7800 XT, RX 7900 XTX",
      use_case: "4K gaming at high/max settings, professional 3D rendering",
      power_needs: "850W+ PSU, triple 8-pin or 12VHPWR connector"
    }
  ];

  const resolutionGuide = [
    {
      resolution: "1080p (Full HD)",
      recommended: "RTX 3060 / RX 6600 or better",
      considerations: "Most affordable and common gaming resolution. Even mid-range cards can achieve high frame rates."
    },
    {
      resolution: "1440p (QHD)",
      recommended: "RTX 3070 / RX 6700 XT or better",
      considerations: "Good balance between visual quality and performance. Sweet spot for many gamers."
    },
    {
      resolution: "4K (UHD)",
      recommended: "RTX 3080 / RX 6800 XT or better",
      considerations: "Demanding resolution requiring high-end hardware for smooth framerates in modern games."
    },
    {
      resolution: "Ultrawide (21:9, 32:9)",
      recommended: "RTX 3070 Ti / RX 6800 or better",
      considerations: "Between 1440p and 4K in terms of demands. Check game compatibility for proper support."
    }
  ];

  const tips = [
    "Consider your monitor's resolution and refresh rate when choosing a GPU",
    "Don't bottleneck your system - pair a high-end GPU with a capable CPU",
    "Check physical dimensions to ensure the GPU fits in your case",
    "Verify your power supply has enough wattage and the required connectors",
    "Consider cooling and airflow - high-end GPUs generate significant heat",
    "For professional work, some applications favor NVIDIA's CUDA acceleration"
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
                  <h3 className="font-semibold text-xl mb-4">GPU Terminology</h3>
                  <div className="space-y-3">
                    {gpuTerms.map((term, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-semibold text-secondary">{term.term}</h4>
                        <p className="text-sm">{term.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <TvIcon className="mr-2 text-secondary" size={18} />
                    Resolution Guide
                  </h3>
                  <div className="space-y-3">
                    {resolutionGuide.map((guide, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-semibold">{guide.resolution}</h4>
                        <p className="text-sm font-medium text-secondary">{guide.recommended}</p>
                        <p className="text-sm text-neutral-dark/70">{guide.considerations}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <NavigationButton href="/storage">
                      Next: Storage
                    </NavigationButton>
                    <NavigationButton href="/ram" variant="secondary">
                      Back to RAM
                    </NavigationButton>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src={image} 
                alt="Graphics Processing Unit (GPU)" 
                className="rounded-xl shadow-lg mb-6 w-full" 
              />
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="font-semibold text-xl mb-4">GPU Performance Tiers</h3>
                <div className="space-y-5">
                  {gpuTiers.map((tier, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-lg flex items-center">
                        <DiamondIcon className="mr-2 text-secondary" size={18} />
                        {tier.tier}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div>
                          <p className="text-xs font-semibold">NVIDIA:</p>
                          <p className="text-sm">{tier.nvidia}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold">AMD:</p>
                          <p className="text-sm">{tier.amd}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs font-semibold">Use Case:</p>
                        <p className="text-sm">{tier.use_case}</p>
                      </div>
                      <div className="mt-1">
                        <p className="text-xs font-semibold">Power Requirements:</p>
                        <p className="text-sm">{tier.power_needs}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-xl mb-4">Key GPU Considerations</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <ZapIcon className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Power Requirements</h4>
                        <p className="text-sm">Verify your PSU has sufficient wattage and the necessary power connectors. High-end GPUs can draw 300W+ under load.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <RefreshCwIcon className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">DLSS/FSR Support</h4>
                        <p className="text-sm">NVIDIA's DLSS and AMD's FSR upscaling technologies can significantly improve performance. Consider what games you play and their support.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <CpuIcon className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">CPU Bottlenecking</h4>
                        <p className="text-sm">A powerful GPU paired with a weak CPU will result in bottlenecked performance. Balance your components for optimal results.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <GaugeIcon className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Cooling Solution</h4>
                        <p className="text-sm">Consider the GPU's cooling design (blower vs. open-air) and its impact on your case airflow and temperatures.</p>
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

export default GPU;
