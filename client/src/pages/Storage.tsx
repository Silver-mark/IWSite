import { Helmet } from "react-helmet";
import { 
  HardDriveIcon, 
  ZapIcon, 
  InfoIcon, 
  CheckIcon, 
  DatabaseIcon,
  CircuitBoardIcon,
  BarChart3Icon,
  DiscIcon
} from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import { componentData } from "@/lib/componentData";
import StorageImage from "../assets/images/storage.svg";

const Storage = () => {
  const { title, description, image } = componentData.storage;

  const storageTypes = [
    {
      type: "NVMe SSD",
      interface: "PCIe 3.0/4.0/5.0",
      speeds: "Up to 7000MB/s read (PCIe 4.0)",
      pros: ["Fastest consumer storage available", "Direct motherboard connection", "No cables required"],
      cons: ["Most expensive per GB", "Limited by motherboard M.2 slots", "Can run hot under load"],
      use_case: "Operating system, frequently used programs, demanding workloads"
    },
    {
      type: "SATA SSD",
      interface: "SATA III",
      speeds: "Up to 550MB/s read",
      pros: ["More affordable than NVMe", "Available in 2.5\" or M.2 form factors", "Widely compatible"],
      cons: ["Much slower than NVMe", "Limited by SATA interface", "Requires cables for 2.5\" drives"],
      use_case: "Secondary storage, budget builds, older systems without NVMe support"
    },
    {
      type: "Hard Disk Drive (HDD)",
      interface: "SATA III",
      speeds: "100-200MB/s read",
      pros: ["Lowest cost per GB", "Available in large capacities (up to 20TB+)", "Good for long-term reliability"],
      cons: ["Significantly slower than SSDs", "Mechanical parts can fail", "Produces noise and vibration"],
      use_case: "Mass storage, archives, backups, media libraries"
    }
  ];

  const formFactors = [
    {
      factor: "M.2",
      description: "Small form factor that connects directly to motherboard slots. Common sizes include 2280 (80mm length), 2242, 2260, and 22110.",
      types: "Can be NVMe (using PCIe lanes) or SATA (using SATA protocol), check motherboard and drive compatibility"
    },
    {
      factor: "2.5-inch",
      description: "Standard size for SATA SSDs and laptop HDDs. Connects via SATA data and power cables.",
      types: "Exclusively uses SATA interface, universal compatibility with most cases and systems"
    },
    {
      factor: "3.5-inch",
      description: "Standard size for desktop HDDs. Requires a drive bay and SATA data and power connections.",
      types: "Typically used only by HDDs, designed for desktops with dedicated drive cages"
    },
    {
      factor: "Add-in Card",
      description: "PCIe card format for high-end NVMe drives or RAID arrays. Installs in PCIe slots like a graphics card.",
      types: "Premium option for workstations or when motherboard lacks sufficient M.2 slots"
    }
  ];

  const capacityGuide = [
    {
      storage_type: "OS Drive (SSD recommended)",
      minimum: "250GB",
      recommended: "500GB - 1TB",
      notes: "Windows 11 requires a minimum of 64GB, but fills up quickly with updates and programs"
    },
    {
      storage_type: "Gaming Library",
      minimum: "1TB",
      recommended: "2TB - 4TB",
      notes: "Modern games can be 50-150GB each; mix of SSD for current games and HDD for others"
    },
    {
      storage_type: "Creative Work (Photos)",
      minimum: "1TB SSD",
      recommended: "2TB+ SSD + backup solution",
      notes: "RAW files are large; fast storage improves workflow"
    },
    {
      storage_type: "Video Editing",
      minimum: "2TB SSD",
      recommended: "4TB+ SSD + 4TB+ HDD for archives",
      notes: "4K video consumes massive space; consider RAID or external solutions"
    }
  ];

  const tips = [
    "Use an NVMe SSD for your operating system and frequently used applications",
    "Consider a tiered storage approach: fast SSD for OS/programs, larger HDD for media storage",
    "Regularly maintain at least 10-15% free space on SSDs for optimal performance",
    "Check motherboard specifications for the number and type of M.2 slots available",
    "Get a drive with DRAM cache for OS drives (many budget SSDs lack this)",
    "For important data, remember the 3-2-1 backup rule: 3 copies, 2 different media types, 1 offsite"
  ];

  return (
    <>
      <Helmet>
        <title>{title} - PC Builder Guide</title>
        <meta name="description" content={description} />
      </Helmet>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-neutral-dark mb-6">{title}</h2>
                <p className="text-lg mb-6">{description}</p>
                
                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <DiscIcon className="mr-2 text-secondary" size={18} />
                    Storage Form Factors
                  </h3>
                  <div className="space-y-3">
                    {formFactors.map((factor, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-semibold text-secondary">{factor.factor}</h4>
                        <p className="text-sm">{factor.description}</p>
                        <p className="text-sm italic text-neutral-dark/80 mt-1">{factor.types}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <BarChart3Icon className="mr-2 text-secondary" size={18} />
                    Capacity Recommendations
                  </h3>
                  <div className="space-y-3">
                    {capacityGuide.map((guide, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-semibold">{guide.storage_type}</h4>
                        <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
                          <span><span className="font-medium">Min:</span> {guide.minimum}</span>
                          <span><span className="font-medium">Recommended:</span> {guide.recommended}</span>
                        </div>
                        <p className="text-sm italic text-neutral-dark/80 mt-1">{guide.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <NavigationButton href="/add-ons">
                      Next: Additional Components
                    </NavigationButton>
                    <NavigationButton href="/gpu" variant="secondary">
                      Back to GPU
                    </NavigationButton>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src={StorageImage} 
                alt="Computer storage devices including SSD and HDD" 
                className="rounded-xl shadow-lg mb-6 w-full" 
              />
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="font-semibold text-xl mb-4">Storage Types Compared</h3>
                <div className="space-y-6">
                  {storageTypes.map((storage, index) => (
                    <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-lg flex items-center">
                        <DatabaseIcon className="mr-2 text-secondary" size={18} />
                        {storage.type}
                      </h4>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm"><span className="font-medium">Interface:</span> {storage.interface}</p>
                        <p className="text-sm"><span className="font-medium">Speed:</span> {storage.speeds}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                          <div>
                            <p className="text-xs font-semibold text-success mb-1">Pros:</p>
                            <ul className="text-xs space-y-1">
                              {storage.pros.map((pro, idx) => (
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
                              {storage.cons.map((con, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckIcon className="text-destructive mt-0.5 mr-1" size={10} />
                                  <span>{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm mt-2"><span className="font-medium">Best for:</span> {storage.use_case}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-xl mb-4">Key Storage Considerations</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <ZapIcon className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Speed vs. Capacity</h4>
                        <p className="text-sm">Balance speed (SSDs) and capacity (HDDs) according to your needs and budget. Fast storage improves system responsiveness more than almost any other upgrade.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <CircuitBoardIcon className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Motherboard Compatibility</h4>
                        <p className="text-sm">Check that your motherboard supports your chosen storage. NVMe drives require M.2 slots, and those slots may share bandwidth with SATA ports or PCIe lanes.</p>
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

export default Storage;
