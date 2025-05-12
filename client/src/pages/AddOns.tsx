import { Helmet } from "react-helmet";
import { 
  PlusCircleIcon, 
  WifiIcon, 
  InfoIcon, 
  CheckIcon, 
  HeadphonesIcon,
  UsbIcon,
  RadioIcon,
  PanelBottomIcon
} from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import { componentData } from "@/lib/componentData";
import AddOnsImage from "../assets/images/add-ons.svg";

const AddOns = () => {
  const { title, description, image } = componentData.addOns;

  const popularAddOns = [
    {
      category: "Connectivity",
      items: [
        {
          name: "Wi-Fi/Bluetooth Card",
          description: "Adds wireless connectivity to desktops without built-in Wi-Fi. PCIe cards typically offer better performance than USB options."
        },
        {
          name: "Network Interface Card (NIC)",
          description: "Upgrades to 2.5G/5G/10G Ethernet for faster wired networking than the standard 1Gbps included on most motherboards."
        }
      ]
    },
    {
      category: "Audio",
      items: [
        {
          name: "Sound Card",
          description: "Provides better audio processing than motherboard audio. Beneficial for audiophiles, musicians, or content creators working with audio."
        },
        {
          name: "Audio Interface",
          description: "External USB device for connecting professional microphones and instruments. Essential for recording or streaming with XLR microphones."
        }
      ]
    },
    {
      category: "Expansion",
      items: [
        {
          name: "USB Expansion Card",
          description: "Adds additional USB ports, often including newer standards like USB 3.2 Gen 2 or USB4/Thunderbolt to older systems."
        },
        {
          name: "PCIe Riser/Extension",
          description: "Allows vertical mounting of GPUs or fitting cards in cases with space constraints. Primarily aesthetic but can improve airflow in some setups."
        },
        {
          name: "PCIe to M.2 Adapter",
          description: "Adds M.2 SSD slots when motherboard doesn't have enough. Ensures NVMe drives run at full speed with proper cooling."
        }
      ]
    },
    {
      category: "Aesthetics & Control",
      items: [
        {
          name: "RGB Controllers",
          description: "Centralizes control of RGB lighting across different components and brands. Can sync effects and expand lighting options."
        },
        {
          name: "Fan Controllers",
          description: "Provides manual or automated control over case fans. Helps balance noise and cooling performance."
        },
        {
          name: "Internal Display Panel",
          description: "Small LCD screens that mount inside the case to display system stats, custom graphics, or animations."
        }
      ]
    }
  ];

  const recommendations = [
    {
      situation: "Streaming Setup",
      recommended: ["Capture Card (for console streaming)", "USB or PCIe Sound Card", "External Audio Interface for XLR microphone"],
      benefit: "Enhances stream quality with better audio capture and the ability to stream console gameplay"
    },
    {
      situation: "Video Editing Workstation",
      recommended: ["10G Network Card (for NAS access)", "Thunderbolt Add-in Card", "Hardware Encoder Card"],
      benefit: "Faster file transfers, external device connectivity, and accelerated rendering"
    },
    {
      situation: "Music Production",
      recommended: ["Professional Sound Card", "Audio Interface", "Thunderbolt Expansion"],
      benefit: "Low-latency audio processing, support for professional equipment, expanded I/O options"
    },
    {
      situation: "Smart Home Hub",
      recommended: ["Wi-Fi 6E + Bluetooth Card", "Zigbee/Z-Wave Controller", "IR Blaster"],
      benefit: "Connectivity with various smart home protocols and devices"
    }
  ];

  const installationTips = [
    "Check motherboard compatibility and available PCIe slots before purchasing expansion cards",
    "Understand PCIe lane allocation in your system - some slots share bandwidth with others",
    "Consider the physical space inside your case for additional components",
    "Some add-ons may require additional power connections",
    "For RGB components, check software compatibility with your existing ecosystem (Aura Sync, Mystic Light, etc.)",
    "USB headers on motherboards are limited - count existing connections before adding internal USB devices"
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
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <PlusCircleIcon className="mr-2 text-secondary" size={18} />
                    Popular Add-On Components
                  </h3>
                  <div className="space-y-6">
                    {popularAddOns.map((category, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-secondary border-b pb-1 mb-2">{category.category}</h4>
                        <div className="space-y-3">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="pl-2">
                              <h5 className="font-medium">{item.name}</h5>
                              <p className="text-sm">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <NavigationButton href="/contact">
                      Next: Get Build Advice
                    </NavigationButton>
                    <NavigationButton href="/storage" variant="secondary">
                      Back to Storage
                    </NavigationButton>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src={AddOnsImage} 
                alt="Additional computer components and add-ons" 
                className="rounded-xl shadow-lg mb-6 w-full" 
              />
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="font-semibold text-xl mb-4">Use-Case Recommendations</h3>
                <div className="space-y-5">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-lg flex items-center">
                        {index === 0 && <WifiIcon className="mr-2 text-secondary" size={18} />}
                        {index === 1 && <PanelBottomIcon className="mr-2 text-secondary" size={18} />}
                        {index === 2 && <HeadphonesIcon className="mr-2 text-secondary" size={18} />}
                        {index === 3 && <RadioIcon className="mr-2 text-secondary" size={18} />}
                        {rec.situation}
                      </h4>
                      <div className="mt-2">
                        <p className="text-xs font-semibold">Recommended Add-ons:</p>
                        <ul className="text-sm list-disc pl-5 mb-2">
                          {rec.recommended.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-sm italic text-neutral-dark/80">{rec.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-xl mb-4">Key Considerations</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <UsbIcon className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">PCIe Slot Availability</h4>
                        <p className="text-sm">Most add-on cards require PCIe slots, which are limited. Prioritize components based on your needs and available slots.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <WifiIcon className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Integrated vs. Add-on</h4>
                        <p className="text-sm">Many features (Wi-Fi, Bluetooth, high-quality audio) are already built into high-end motherboards. Check what you already have before buying add-ons.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/5 rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-4 flex items-center">
                  <InfoIcon className="text-secondary mr-2" size={20} />
                  Installation Tips
                </h3>
                
                <ul className="space-y-2">
                  {installationTips.map((tip, index) => (
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

export default AddOns;
