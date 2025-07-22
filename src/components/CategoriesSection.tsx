import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import aiIcon from "@/assets/category-ai.jpg";
import templatesIcon from "@/assets/category-templates.jpg";
import scriptsIcon from "@/assets/category-scripts.jpg";

const categories = [
  {
    title: "AI Tools & Automation",
    description: "Custom AI models, chatbots, and automation scripts",
    image: aiIcon,
    count: "2.1K services"
  },
  {
    title: "Digital Templates",
    description: "Exclusive designs, templates, and digital assets",
    image: templatesIcon,
    count: "1.8K services"
  },
  {
    title: "Scripts & Tools",
    description: "Custom scripts, browser extensions, and utilities",
    image: scriptsIcon,
    count: "1.2K services"
  },
  {
    title: "Research & Data",
    description: "Market research, data analysis, and insights",
    image: null,
    count: "890 services"
  },
  {
    title: "Content & Writing",
    description: "Specialized writing, translations, and content",
    image: null,
    count: "750 services"
  },
  {
    title: "Consultation",
    description: "Expert advice and personalized consulting",
    image: null,
    count: "650 services"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore <span className="text-neon">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover services that push boundaries and solve unconventional problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="service-card group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  {category.image && (
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                
                <div className="text-sm text-primary font-medium">
                  {category.count}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;