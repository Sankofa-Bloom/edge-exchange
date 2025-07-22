import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "CryptoBuilder",
    role: "Buyer",
    content: "Finally found the AI trading bot I needed. The seller was professional and the escrow system made me feel secure.",
    rating: 5,
    verified: true
  },
  {
    name: "DigitalNomad",
    role: "Seller",
    content: "Love the anonymity. I can offer my specialized consulting without worrying about compliance issues on other platforms.",
    rating: 5,
    verified: true
  },
  {
    name: "TechSavvy",
    role: "Buyer", 
    content: "Got a custom browser extension that would've been impossible to find elsewhere. The process was smooth and private.",
    rating: 5,
    verified: true
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-neon">Community</span> Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from buyers and sellers who value privacy and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="service-card">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{testimonial.name}</span>
                      {testimonial.verified && (
                        <div className="w-1.5 h-1.5 bg-trust rounded-full" />
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-trust mb-2">$2.1M</div>
            <div className="text-sm text-muted-foreground">Transactions Protected</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-glow mb-2">15K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">&lt;1hr</div>
            <div className="text-sm text-muted-foreground">Avg. Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;