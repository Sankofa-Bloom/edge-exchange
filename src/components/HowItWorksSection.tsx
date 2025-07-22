import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageCircle, CreditCard, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Browse Premium Services",
    description: "Explore curated services from verified professionals. Quality guaranteed.",
    step: "01"
  },
  {
    icon: MessageCircle,
    title: "Connect Directly",
    description: "Communicate directly with service providers to discuss your specific needs.",
    step: "02"
  },
  {
    icon: CreditCard,
    title: "Escrow Protection",
    description: "Your payment is held securely until you're satisfied with the delivery.",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "Professional Delivery",
    description: "Receive high-quality deliverables on time. Review and approve work.",
    step: "04"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-4 bg-background-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How It <span className="text-neon">Works</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Simple, secure, and professional. Connect with experts who deliver exceptional results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="service-card text-center relative">
                <CardContent className="p-8">
                  {/* Step number */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-white"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {step.step}
                  </motion.div>

                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>

                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust section */}
        <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Built on <span className="text-trust">Trust</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our escrow system ensures every transaction is secure. Funds are only released when you're completely satisfied.
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-trust rounded-full" />
                <span>256-bit encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-trust rounded-full" />
                <span>Verified professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-trust rounded-full" />
                <span>Dispute resolution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;