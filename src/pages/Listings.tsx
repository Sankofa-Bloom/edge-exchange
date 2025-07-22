import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, User, ArrowLeft } from "lucide-react";

const mockListings = [
  {
    id: 1,
    title: "Custom AI Chatbot Development",
    provider: "AI Expert Pro",
    rating: 4.9,
    reviews: 127,
    price: 299,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    tags: ["AI", "Chatbot", "Custom Development"]
  },
  {
    id: 2,
    title: "Premium Web Scraping Solution",
    provider: "Data Wizard",
    rating: 4.8,
    reviews: 89,
    price: 199,
    deliveryTime: "2-3 days",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    tags: ["Web Scraping", "Data", "Automation"]
  },
  {
    id: 3,
    title: "Advanced Excel VBA Macros",
    provider: "Spreadsheet Master",
    rating: 5.0,
    reviews: 203,
    price: 149,
    deliveryTime: "1-2 days",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    tags: ["Excel", "VBA", "Automation"]
  }
];

const Listings = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Browse <span className="text-neon">Premium Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover specialized services from verified professionals
          </p>
        </motion.div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="service-card group cursor-pointer h-full">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={listing.image} 
                      alt={listing.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {listing.deliveryTime}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{listing.provider}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {listing.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{listing.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({listing.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {listing.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-muted-foreground">Starting at</span>
                        <div className="text-xl font-bold text-primary">${listing.price}</div>
                      </div>
                      <Button size="sm" className="btn-hero">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="btn-ghost">
            Load More Services
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Listings;