import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Digital marketplace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background-secondary" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-10">
        <div className="animate-pulse absolute top-20 left-10 w-3 h-3 bg-primary rounded-full" />
        <div className="animate-pulse absolute top-40 right-20 w-2 h-2 bg-trust rounded-full delay-700" />
        <div className="animate-pulse absolute bottom-32 left-20 w-4 h-4 bg-primary-glow rounded-full delay-300" />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust indicators */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="trust-badge">
              <Shield className="w-4 h-4 text-trust" />
              <span className="text-sm text-trust">Escrow Protected</span>
            </div>
            <div className="trust-badge">
              <Users className="w-4 h-4 text-trust" />
              <span className="text-sm text-trust">Anonymous Safe</span>
            </div>
            <div className="trust-badge">
              <Zap className="w-4 h-4 text-trust" />
              <span className="text-sm text-trust">Instant Delivery</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Services you{" "}
            <span className="text-neon">can't list</span>
            <br />
            anywhere else.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The anonymous marketplace for unconventional digital services. 
            Safe, secure, and completely private.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-hero text-lg px-8 py-6 group">
              Browse Listings
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-ghost text-lg px-8 py-6">
              Join Waitlist
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-primary">5K+</div>
              <div className="text-sm text-muted-foreground">Active Services</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-trust">100%</div>
              <div className="text-sm text-muted-foreground">Anonymous</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-glow">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;