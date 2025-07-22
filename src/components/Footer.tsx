import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Eye, Users, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Newsletter section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Join the <span className="text-neon">Revolution</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Be the first to know about new features, categories, and marketplace updates.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-background border-border"
              />
              <Button className="btn-hero px-6">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              Un<span className="text-primary">listed</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              The anonymous marketplace for unconventional digital services. 
              Safe, secure, and completely private.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-trust" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Eye className="w-4 h-4 text-trust" />
                <span>Anonymous</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-trust" />
                <span>Trusted</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="link-underline hover:text-foreground">Browse Services</a></li>
              <li><a href="#" className="link-underline hover:text-foreground">Sell Services</a></li>
              <li><a href="#" className="link-underline hover:text-foreground">Categories</a></li>
              <li><a href="#" className="link-underline hover:text-foreground">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="link-underline hover:text-foreground">Help Center</a></li>
              <li><a href="#" className="link-underline hover:text-foreground">Safety Guidelines</a></li>
              <li><a href="#" className="link-underline hover:text-foreground">Dispute Resolution</a></li>
              <li><a href="#" className="link-underline hover:text-foreground">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Unlisted. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="link-underline hover:text-foreground">Privacy Policy</a>
            <a href="#" className="link-underline hover:text-foreground">Terms of Service</a>
            <a href="#" className="link-underline hover:text-foreground">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;