import { Switch, Route, Router } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Case from "@/pages/Case";
import PowerSupply from "@/pages/PowerSupply";
import CaseFans from "@/pages/CaseFans";
import Motherboard from "@/pages/Motherboard";
import CPU from "@/pages/CPU";
import CPUCooler from "@/pages/CPUCooler";
import RAM from "@/pages/RAM";
import GPU from "@/pages/GPU";
import Storage from "@/pages/Storage";
import AddOns from "@/pages/AddOns";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Profile from "@/pages/Profile";
import Admin from "@/pages/Admin";

function AppRouter() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-light">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/case" component={Case} />
          <Route path="/power-supply" component={PowerSupply} />
          <Route path="/case-fans" component={CaseFans} />
          <Route path="/motherboard" component={Motherboard} />
          <Route path="/cpu" component={CPU} />
          <Route path="/cpu-cooler" component={CPUCooler} />
          <Route path="/ram" component={RAM} />
          <Route path="/gpu" component={GPU} />
          <Route path="/storage" component={Storage} />
          <Route path="/add-ons" component={AddOns} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
