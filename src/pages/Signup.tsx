import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock, User, Briefcase } from "lucide-react";
import { useState } from "react";

const Signup = () => {
  const [userType, setUserType] = useState<'buyer' | 'seller'>('buyer');

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </motion.div>

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">
                Join <span className="text-neon">Unlisted</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Connect with professionals who deliver exceptional results
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">I want to:</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={userType === 'buyer' ? 'default' : 'outline'}
                    onClick={() => setUserType('buyer')}
                    className="flex items-center gap-2 h-12"
                  >
                    <User className="w-4 h-4" />
                    Buy Services
                  </Button>
                  <Button
                    variant={userType === 'seller' ? 'default' : 'outline'}
                    onClick={() => setUserType('seller')}
                    className="flex items-center gap-2 h-12"
                  >
                    <Briefcase className="w-4 h-4" />
                    Sell Services
                  </Button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Enter your full name"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Create a strong password"
                      className="pl-10"
                    />
                  </div>
                </div>

                {userType === 'seller' && (
                  <div className="space-y-2">
                    <Label htmlFor="expertise">Professional Expertise</Label>
                    <Input 
                      id="expertise" 
                      type="text" 
                      placeholder="e.g., AI Development, Data Analysis"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <Button className="w-full btn-hero h-12 text-lg">
                Create Professional Account
              </Button>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button className="text-primary hover:underline font-medium">
                    Sign in here
                  </button>
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-border">
                <div className="flex justify-center gap-6 text-xs text-muted-foreground">
                  <span>✓ Verified Professionals</span>
                  <span>✓ Secure Payments</span>
                  <span>✓ 24/7 Support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;