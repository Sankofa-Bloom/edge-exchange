import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional <span className="text-neon">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover specialized services from verified professionals who deliver exceptional results
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="service-card group cursor-pointer">
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
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;