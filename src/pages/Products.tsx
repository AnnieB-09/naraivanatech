import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Target, Cpu, ShieldCheck } from "lucide-react";
import perfumeVending from "@/assets/perfume-vending.jpg";
import sunscreenVending from "@/assets/sunscreen-vending.jpg";

const Products = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Intelligent vending solutions powered by advanced AI algorithms and cutting-edge technology
          </p>
        </section>

        {/* Perfume Vending Machine */}
        <section className="max-w-6xl mx-auto mb-20">
          <Card className="overflow-hidden shadow-elegant">
            <div className="grid md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <img 
                  src={perfumeVending} 
                  alt="AI-Powered Perfume Vending Machine" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="shadow-card">POC Phase</Badge>
                    <Badge className="bg-accent text-accent-foreground">AI-Powered</Badge>
                  </div>
                  <CardTitle className="text-3xl mb-3">Perfume Vending Machine</CardTitle>
                  <CardDescription className="text-base">
                    Revolutionary fragrance selection experience powered by artificial intelligence
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Our smart perfume vending machine uses advanced AI to analyze customer preferences 
                    and recommend the perfect fragrance. With face detection and personalization algorithms, 
                    it creates a unique shopping experience at airports, malls, and high-traffic locations.
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Key Features:</h3>
                    
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">AI-Driven Personalization</h4>
                        <p className="text-sm text-muted-foreground">
                          Machine learning algorithms analyze user preferences to suggest ideal fragrances
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Face Detection Technology</h4>
                        <p className="text-sm text-muted-foreground">
                          Advanced computer vision for personalized user experiences
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Cpu className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Smart Recommendation Engine</h4>
                        <p className="text-sm text-muted-foreground">
                          Contextual suggestions based on time, season, and user history
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Secure & Contactless</h4>
                        <p className="text-sm text-muted-foreground">
                          Touch-free interface with secure payment processing
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Ideal Locations:</h4>
                    <p className="text-sm text-muted-foreground">
                      Airports, Shopping Malls, Hotels, Premium Retail Spaces, Convention Centers
                    </p>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </section>

        {/* Sunscreen Vending Machine */}
        <section className="max-w-6xl mx-auto mb-20">
          <Card className="overflow-hidden shadow-elegant">
            <div className="grid md:grid-cols-2">
              <div className="order-2 md:order-1 p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="shadow-card">POC Phase</Badge>
                    <Badge className="bg-accent text-accent-foreground">Smart Tech</Badge>
                  </div>
                  <CardTitle className="text-3xl mb-3">Sunscreen Vending Machine</CardTitle>
                  <CardDescription className="text-base">
                    Intelligent sun protection with AI-powered skin analysis and UV monitoring
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Our innovative sunscreen vending machine combines AI technology with UV detection 
                    to provide personalized sun protection. Perfect for beaches, parks, outdoor venues, 
                    and travel hubs where sun safety is paramount.
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Key Features:</h3>
                    
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">AI Skin Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Advanced algorithms recommend the right SPF based on skin type and conditions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Real-Time UV Detection</h4>
                        <p className="text-sm text-muted-foreground">
                          Monitors current UV index and provides protection recommendations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Cpu className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Personalized Protection</h4>
                        <p className="text-sm text-muted-foreground">
                          Customized sunscreen selection based on weather, time, and user profile
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Eco-Friendly Dispensing</h4>
                        <p className="text-sm text-muted-foreground">
                          Minimal waste with precise dispensing and refillable options
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Ideal Locations:</h4>
                    <p className="text-sm text-muted-foreground">
                      Beaches, Water Parks, Resorts, Outdoor Sports Venues, Tourist Attractions, Hiking Trails
                    </p>
                  </div>
                </CardContent>
              </div>
              <div className="order-1 md:order-2 relative h-96 md:h-auto">
                <img 
                  src={sunscreenVending} 
                  alt="Smart Sunscreen Vending Machine" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Technology Stack */}
        <section className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Technology Stack</CardTitle>
              <CardDescription>
                Built on cutting-edge AI and machine learning frameworks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">AI & Machine Learning</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Deep Learning Models</li>
                    <li>• Computer Vision (Face Detection)</li>
                    <li>• Recommendation Systems</li>
                    <li>• Natural Language Processing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Hardware & IoT</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• High-Resolution Cameras</li>
                    <li>• UV Sensors</li>
                    <li>• Touchscreen Interfaces</li>
                    <li>• Secure Payment Systems</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Products;
