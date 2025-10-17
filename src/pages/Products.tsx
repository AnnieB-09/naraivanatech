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
            Intelligent automatic sprayer systems powered by advanced AI algorithms and cutting-edge technology
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
                  <CardTitle className="text-3xl mb-3">Automatic Perfume Sprayer</CardTitle>
                  <CardDescription className="text-base">
                    Revolutionary touch-free fragrance spraying experience powered by artificial intelligence
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Our smart automatic perfume sprayer uses advanced AI to analyze customer preferences 
                    and recommend the perfect fragrance. Choose your selection, complete payment, and receive 
                    a precise touch-free spray. Ideal for airports, malls, and high-traffic locations.
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
                        <h4 className="font-medium mb-1">Automatic Spraying System</h4>
                        <p className="text-sm text-muted-foreground">
                          Precision touch-free spraying with AI-controlled dosage and coverage
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Cpu className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Smart Selection Interface</h4>
                        <p className="text-sm text-muted-foreground">
                          Touchscreen selection with contextual suggestions based on preferences
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Secure & Hygienic</h4>
                        <p className="text-sm text-muted-foreground">
                          Contactless operation with secure payment processing
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
                  <CardTitle className="text-3xl mb-3">Automatic Sunscreen Sprayer</CardTitle>
                  <CardDescription className="text-base">
                    Intelligent touch-free sun protection with AI-powered skin analysis and UV monitoring
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Our innovative automatic sunscreen sprayer combines AI technology with UV detection 
                    to provide personalized sun protection. Select your SPF, pay, and receive a precise 
                    touch-free spray. Perfect for beaches, parks, outdoor venues, and travel hubs.
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
                        <h4 className="font-medium mb-1">Automatic Spray System</h4>
                        <p className="text-sm text-muted-foreground">
                          Touch-free spraying with precise dosage control for optimal coverage
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Hygienic & Contactless</h4>
                        <p className="text-sm text-muted-foreground">
                          Zero-touch operation with secure payment for maximum hygiene
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
