import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageCircle, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Anonymously",
    description: "Explore services with complete privacy. No personal info required to browse.",
    step: "01"
  },
  {
    icon: MessageCircle,
    title: "Connect Securely",
    description: "Chat with sellers using pseudonyms. All communication stays private.",
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
    title: "Instant Delivery",
    description: "Receive your digital products instantly. Rate and release funds.",
    step: "04"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-4 bg-background-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="text-neon">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and completely anonymous. Get what you need without compromising privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="service-card text-center relative">
              <CardContent className="p-8">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

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
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </Card>
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
                <span>Anonymous payments</span>
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