import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About NarAIvana</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a Bengaluru-based AI/ML technology company pioneering intelligent solutions 
            that bridge the gap between cutting-edge research and real-world applications.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          <Card className="shadow-card">
            <CardHeader>
              <Target className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To revolutionize everyday experiences through innovative AI solutions that are 
                accessible, intelligent, and transformative.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <Eye className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be a global leader in AI-powered products, creating smarter spaces and 
                safer communities through technological excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <Users className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Innovation, integrity, and impact drive everything we do as we build 
                technology that makes a difference.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Founders Section */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Founders</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <div className="w-24 h-24 rounded-full gradient-hero flex items-center justify-center text-4xl font-bold text-primary-foreground mb-4">
                  AB
                </div>
                <CardTitle className="text-2xl">Dr. Anushree Basu</CardTitle>
                <p className="text-muted-foreground">Co-Founder & Chief Innovation Officer</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Basu brings deep expertise in AI/ML research with a focus on computer vision 
                  and neural networks. Her leadership drives our innovation strategy and research 
                  initiatives, pushing the boundaries of what's possible with artificial intelligence.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="w-24 h-24 rounded-full gradient-hero flex items-center justify-center text-4xl font-bold text-primary-foreground mb-4">
                  AS
                </div>
                <CardTitle className="text-2xl">Mr. Ansal Siddhartha</CardTitle>
                <p className="text-muted-foreground">Co-Founder & Chief Technology Officer</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  As our CTO, Ansal leads product development and systems architecture. His expertise 
                  in ML engineering and scalable systems ensures our products are not just innovative 
                  but also robust and production-ready.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Journey */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Journey</h2>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Beginning</h3>
                  <p className="text-muted-foreground">
                    Founded in Bengaluru, NarAIvana Technologies was born from a vision to make 
                    AI accessible and practical for everyday applications. Our founders combined 
                    their expertise in research and engineering to create solutions that matter.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation Phase</h3>
                  <p className="text-muted-foreground">
                    We developed proof-of-concept solutions for intelligent vending machines, 
                    incorporating face detection, personalization engines, and AI-driven recommendations. 
                    Simultaneously, we advanced our research in crowd surveillance and activity recognition.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Today & Beyond</h3>
                  <p className="text-muted-foreground">
                    With multiple products in development and strong partnerships forming, we're 
                    positioned to scale our impact. Our focus remains on creating technology that 
                    enhances safety, convenience, and user experiences across various sectors.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
