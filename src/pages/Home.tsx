import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Sparkles, Camera, Zap, Droplets, Sun } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";
import perfumeVending from "@/assets/perfume-vending.jpg";
import sunscreenVending from "@/assets/sunscreen-vending.jpg";
import workProgress1 from "@/assets/work-progress-1.jpg";
import workProgress2 from "@/assets/work-progress-2.jpg";
import workProgress3 from "@/assets/work-progress-3.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 animate-fade-in"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary-glow rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 pt-16">
          <div className="max-w-4xl animate-fade-in">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 animate-scale-in">
              <Sparkles className="w-3 h-3 mr-1" />
              Pioneering AI Innovation
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Smarter Machines.{" "}
              <span className="gradient-accent bg-clip-text text-transparent animate-pulse">
                Safer Spaces.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              Revolutionary AI-powered automatic sprayer systems and intelligent surveillance technology 
              transforming how we interact with everyday products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/products">
                  Discover Innovation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="hover-scale" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">2+</div>
                <div className="text-sm text-muted-foreground">AI Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">POC</div>
                <div className="text-sm text-muted-foreground">Development Stage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Innovation Driven</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose NarAIvana?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI research meets real-world innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card transition-smooth hover:shadow-elegant hover:-translate-y-2 group">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <Brain className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>AI-Powered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced neural networks and computer vision driving intelligent, personalized experiences
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-elegant hover:-translate-y-2 group">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Touch-Free Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Contactless automatic spraying systems with AI-guided precision and hygiene
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-elegant hover:-translate-y-2 group">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <Camera className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Smart Surveillance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Privacy-first crowd monitoring and real-time activity recognition for safer spaces
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-elegant hover:-translate-y-2 group">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  From POC to production - rapid prototyping and continuous technological advancement
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-card opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Our Flagship Solutions
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Revolutionary AI Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Automatic sprayer systems with intelligent personalization and touch-free operation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="overflow-hidden shadow-elegant transition-smooth hover:shadow-glow group border-2 border-transparent hover:border-accent/20">
              <div className="relative overflow-hidden h-80">
                <img 
                  src={perfumeVending} 
                  alt="AI-Powered Automatic Perfume Sprayer" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground shadow-glow">POC Stage</Badge>
                </div>
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Automatic Perfume Sprayer</CardTitle>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">AI Selection</Badge>
                  <Badge variant="outline" className="text-xs">Face Recognition</Badge>
                  <Badge variant="outline" className="text-xs">Touch-Free</Badge>
                  <Badge variant="outline" className="text-xs">Payment Enabled</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Choose your perfect fragrance on the touchscreen, complete payment, and receive 
                  a precise automatic spray. AI-powered recommendations learn your preferences for 
                  a personalized experience every time.
                </p>
                <Button variant="hero" className="w-full group" asChild>
                  <Link to="/products">
                    Explore Technology <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-elegant transition-smooth hover:shadow-glow group border-2 border-transparent hover:border-accent/20">
              <div className="relative overflow-hidden h-80">
                <img 
                  src={sunscreenVending} 
                  alt="Smart Automatic Sunscreen Sprayer" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground shadow-glow">POC Stage</Badge>
                </div>
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Sun className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Automatic Sunscreen Sprayer</CardTitle>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">UV Detection</Badge>
                  <Badge variant="outline" className="text-xs">Skin Analysis</Badge>
                  <Badge variant="outline" className="text-xs">Smart Dosage</Badge>
                  <Badge variant="outline" className="text-xs">Contactless</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Select your SPF preference, pay securely, and get an automatic spray of sun protection. 
                  Real-time UV monitoring and AI skin analysis ensure optimal coverage for your needs.
                </p>
                <Button variant="hero" className="w-full group" asChild>
                  <Link to="/products">
                    Discover More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ongoing Work Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Zap className="w-3 h-3 mr-1" />
              In Development
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Upcoming Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our ongoing research and development initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-card transition-smooth hover:shadow-elegant group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={workProgress1} 
                  alt="Sprayer System Development" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <Badge className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground">
                  Hardware Development
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Sprayer Mechanism</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Precision spraying system with AI-controlled dosage and coverage optimization
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-card transition-smooth hover:shadow-elegant group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={workProgress2} 
                  alt="AI System Integration" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <Badge className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground">
                  AI Integration
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Computer Vision Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Facial recognition and UV sensor calibration for personalized recommendations
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-card transition-smooth hover:shadow-elegant group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={workProgress3} 
                  alt="Surveillance System Research" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <Badge className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground">
                  Research Phase
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Surveillance Algorithms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced crowd monitoring and activity recognition system development
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/research">View Research Projects <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Sparkles className="w-12 h-12 text-primary-foreground mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Partner with us to deploy AI-powered automatic sprayer systems at your venues. 
              Perfect for airports, malls, resorts, and high-traffic locations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group shadow-elegant hover:shadow-glow" asChild>
                <Link to="/contact">
                  Schedule a Demo <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/products">
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
