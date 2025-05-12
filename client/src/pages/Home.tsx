import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BuildOverview from "@/components/BuildOverview";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PC Builder Guide - Learn How to Build Your Own Computer</title>
        <meta name="description" content="Step-by-step guide to building your own computer. Learn everything from selecting components to final assembly." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Perfect Computer</h1>
            <p className="text-xl mb-8">Step-by-step guide to assembling your custom PC. Learn everything from selecting components to final assembly.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/case">
                <Button className="bg-white text-primary hover:bg-opacity-90 transition-all font-semibold px-6 py-6 h-auto">
                  Start Learning
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all font-semibold px-6 py-6 h-auto">
                  Get Build Advice
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">Computer Building Overview</h2>
            <p className="text-lg text-neutral-dark/80 max-w-3xl mx-auto">
              Building a computer is like assembling sophisticated Lego pieces. Follow this guide to understand the process and make informed decisions for your build.
            </p>
          </div>
          
          <BuildOverview />
          
          <div className="max-w-6xl mx-auto mt-16">
            <div className="text-center">
              <Link href="/case">
                <Button className="bg-primary text-white hover:bg-primary/90 transition-all font-semibold px-6 py-3">
                  Start with the Case
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
