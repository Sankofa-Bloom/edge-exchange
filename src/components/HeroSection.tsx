import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const handleBrowseListings = () => {
    // Navigate to listings page
    window.location.href = '/listings';
  };

  const handleJoinWaitlist = () => {
    // Navigate to signup page
    window.location.href = '/signup';
  };

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
        <motion.div 
          className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-2 h-2 bg-trust rounded-full"
          animate={{
            x: [0, 10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-20 w-4 h-4 bg-primary-glow rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust indicators */}
          <motion.div 
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="trust-badge">
              <Shield className="w-4 h-4 text-trust" />
              <span className="text-sm text-trust">Escrow Protected</span>
            </div>
            <div className="trust-badge">
              <Award className="w-4 h-4 text-trust" />
              <span className="text-sm text-trust">Verified Professionals</span>
            </div>
            <div className="trust-badge">
              <Zap className="w-4 h-4 text-trust" />
              <span className="text-sm text-trust">Expert Delivery</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium services{" "}
            <span className="text-neon">for professionals</span>
            <br />
            who demand more.
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            The exclusive marketplace where top professionals offer specialized services 
            that go beyond traditional platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              className="btn-hero text-lg px-8 py-6 group"
              onClick={handleBrowseListings}
            >
              Browse Listings
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="btn-ghost text-lg px-8 py-6"
              onClick={handleJoinWaitlist}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Quick stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div>
              <div className="text-2xl font-bold text-primary">5K+</div>
              <div className="text-sm text-muted-foreground">Expert Services</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-trust">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-glow">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;