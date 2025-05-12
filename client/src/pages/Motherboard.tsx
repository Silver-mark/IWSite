import { Helmet } from "react-helmet";
import { 
  CpuIcon, 
  LandmarkIcon, 
  TabletIcon, 
  InfoIcon, 
  CheckIcon, 
  PlugIcon,
  WifiIcon,
  UsbIcon,
  HeadphonesIcon
} from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import { componentData } from "@/lib/componentData";

const Motherboard = () => {
  const { title, description, image } = componentData.motherboard;

  const formFactors = [
    {
      name: "ATX",
      size: "Standard size (12 × 9.6 inches)",
      features: "Most expansion slots and features, fits in mid and full tower cases"
    },
    {
      name: "Micro-ATX",
      size: "Smaller (9.6 × 9.6 inches)",
      features: "Fewer expansion slots but otherwise similar features to ATX, fits in most cases"
    },
    {
      name: "Mini-ITX",
      size: "Very small (6.7 × 6.7 inches)",
      features: "Usually only one expansion slot, good for small form factor builds"
    },
    {
      name: "E-ATX",
      size: "Extended ATX (12 × 13 inches or larger)",
      features: "Extra space for additional features, requires a large case with E-ATX support"
    }
  ];

  const socketTypes = [
    {
      brand: "Intel",
      current: ["LGA 1700 (12th/13th Gen)", "LGA 1200 (10th/11th Gen)"],
      older: ["LGA 1151 (8th/9th Gen)", "LGA 2066 (HEDT X-Series)"]
    },
    {
      brand: "AMD",
      current: ["AM5 (Ryzen 7000 Series)", "AM4 (Ryzen 5000/3000/2000/1000 Series)"],
      older: ["TR4/sTRX4 (Threadripper)"]
    }
  ];

  const chipsets = [
    {
      brand: "Intel",
      performance: [
        { name: "Z690/Z790", features: "Full overclocking support, maximum PCIe lanes and connectivity" },
        { name: "H670/B660", features: "Reduced overclocking, fewer PCIe lanes, still good for most users" },
        { name: "H610", features: "Basic features, no overclocking, limited connectivity" }
      ]
    },
    {
      brand: "AMD",
      performance: [
        { name: "X670E/X670", features: "Premium features, best overclocking, maximum PCIe 5.0 support" },
        { name: "B650E/B650", features: "Good middle-ground, some PCIe 5.0 support, decent overclocking" },
        { name: "A620", features: "Budget option, basic features, limited overclocking" }
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: PlugIcon,
      title: "Power Delivery",
      description: "Higher-end boards have more robust VRMs (Voltage Regulator Modules) for better CPU power delivery and overclocking stability."
    },
    {
      icon: WifiIcon,
      title: "Connectivity",
      description: "Consider Wi-Fi 6/6E, Bluetooth 5.x, 2.5G/10G Ethernet, and USB ports (quantity and speed) based on your needs."
    },
    {
      icon: UsbIcon,
      title: "Expansion",
      description: "PCIe slots (version 4.0/5.0, number of x16/x8/x4/x1 slots), M.2 slots for SSDs, and SATA ports for traditional storage."
    },
    {
      icon: HeadphonesIcon,
      title: "Audio",
      description: "Better boards include higher-quality audio codecs (like Realtek ALC1220 or newer) and dedicated audio capacitors."
    }
  ];

  const tips = [
    "Always check CPU compatibility with your chosen motherboard via the manufacturer's website",
    "Consider future upgrades - some boards offer better CPU/RAM upgrade paths",
    "If you don't need Wi-Fi/Bluetooth, you can often save money with a non-Wi-Fi version",
    "Check that your case supports the motherboard form factor before purchasing",
    "BIOS flashback features can be valuable for CPU upgrades without needing an older compatible CPU"
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
              <div className="sticky top-24">ram
                <h2 className="text-3xl font-bold text-neutral-dark mb-6">{title}</h2>
                <p className="text-lg mb-6">{description}</p>
                
                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                  <h3 className="font-semibold text-xl mb-4">Form Factors</h3>
                  <div className="space-y-3">
                    {formFactors.map((form, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-semibold text-secondary">{form.name}</h4>
                        <p className="text-sm font-medium">{form.size}</p>
                        <p className="text-sm">{form.features}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                  <h3 className="font-semibold text-xl mb-4">CPU Socket Types</h3>
                  <div className="space-y-5">
                    {socketTypes.map((socket, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-secondary mb-2">{socket.brand} Sockets</h4>
                        <div className="ml-4">
                          <p className="font-medium text-sm mb-1">Current:</p>
                          <ul className="list-disc text-sm ml-5 mb-2">
                            {socket.current.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                          <p className="font-medium text-sm mb-1">Older:</p>
                          <ul className="list-disc text-sm ml-5">
                            {socket.older.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <NavigationButton href="/cpu">
                      Next: CPU
                    </NavigationButton>
                    <NavigationButton href="/ram" variant="secondary">
                      Or: RAM
                    </NavigationButton>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src={image} 
                alt="Computer motherboard" 
                className="rounded-xl shadow-lg mb-6 w-full" 
              />
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="font-semibold text-xl mb-4">Chipsets by Performance Level</h3>
                <div className="space-y-6">
                  {chipsets.map((chipset, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-lg flex items-center">
                        <CpuIcon className="mr-2 text-accent" size={18} />
                        {chipset.brand} Chipsets
                      </h4>
                      <div className="mt-2 space-y-2">
                        {chipset.performance.map((perf, idx) => (
                          <div key={idx} className="border-l-2 border-accent pl-3">
                            <p className="font-medium">{perf.name}</p>
                            <p className="text-sm text-neutral-dark/80">{perf.features}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-xl mb-4">Key Features to Consider</h3>
                  <div className="space-y-4">
                    {keyFeatures.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                            <Icon className="text-accent" size={16} />
                          </div>
                          <div>
                            <h4 className="font-semibold">{feature.title}</h4>
                            <p className="text-sm">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
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

export default Motherboard;
