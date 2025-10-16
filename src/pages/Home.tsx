import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, ShoppingCart, Camera, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";
import perfumeVending from "@/assets/perfume-vending.jpg";
import sunscreenVending from "@/assets/sunscreen-vending.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 z-10 pt-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI at the Edge of{" "}
              <span className="gradient-accent bg-clip-text text-transparent">
                Possibility
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              From intelligent vending machines to advanced surveillance systems, we're transforming everyday experiences with AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose NarAIvana?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge AI research with practical applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <Brain className="h-12 w-12 text-accent mb-4" />
                <CardTitle>AI-Powered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced machine learning algorithms driving intelligent decisions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Smart Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Revolutionizing retail experiences with intelligent vending solutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <Camera className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Surveillance Tech</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced crowd monitoring and activity recognition systems
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Continuous research and development pushing boundaries
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative AI solutions transforming everyday experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-card transition-smooth hover:shadow-elegant">
              <img 
                src={perfumeVending} 
                alt="AI-Powered Perfume Vending Machine" 
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl">Perfume Vending Machine</CardTitle>
                <CardDescription className="text-base">
                  AI-driven personalization • Face detection • Smart recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Experience personalized fragrance selection powered by advanced AI algorithms that understand your preferences.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/products">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-card transition-smooth hover:shadow-elegant">
              <img 
                src={sunscreenVending} 
                alt="Smart Sunscreen Vending Machine" 
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl">Sunscreen Vending Machine</CardTitle>
                <CardDescription className="text-base">
                  UV detection • Skin analysis • Personalized protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Smart sunscreen dispensing with AI-powered skin analysis and UV index monitoring for optimal protection.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/products">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Partner with us to bring cutting-edge AI solutions to your organization
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
