import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Activity, Brain, Shield } from "lucide-react";
import surveillanceTech from "@/assets/surveillance-tech.jpg";

const Research = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Research & Innovation</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Pioneering AI research in computer vision, surveillance systems, and activity recognition 
            to create safer, smarter spaces
          </p>
        </section>

        {/* Main Research Area */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-elegant">
            <img 
              src={surveillanceTech} 
              alt="AI-Powered Surveillance Technology" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <Badge className="bg-accent text-accent-foreground mb-4">Active Research</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Crowd Surveillance & Activity Recognition
              </h2>
            </div>
          </div>

          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Project Overview</CardTitle>
              <CardDescription className="text-base">
                Advanced AI systems for public safety and crowd management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our research team is developing state-of-the-art computer vision systems that can 
                monitor crowds, detect anomalous behavior, and recognize activities in real-time. 
                This technology has applications in public safety, event management, transportation 
                hubs, and smart city infrastructure.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Camera className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Multi-Camera Surveillance</h3>
                    <p className="text-sm text-muted-foreground">
                      Integration of multiple camera feeds with AI-powered object tracking and scene 
                      understanding. Our algorithms can track individuals across different camera views 
                      while maintaining privacy through anonymization techniques.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Activity className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Activity Recognition</h3>
                    <p className="text-sm text-muted-foreground">
                      Deep learning models that can identify and classify human activities in real-time. 
                      From normal walking patterns to potential security concerns, our system provides 
                      contextual awareness for enhanced safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Brain className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Behavioral Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced neural networks analyze crowd behavior patterns to predict and prevent 
                      potential issues. The system learns normal patterns and flags anomalies for 
                      human review, ensuring proactive security management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Privacy-First Design</h3>
                    <p className="text-sm text-muted-foreground">
                      We prioritize privacy in all our surveillance research. Our systems use edge 
                      processing, data anonymization, and privacy-preserving algorithms to ensure 
                      security without compromising individual rights.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Applications */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Real-World Applications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Transportation Hubs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Airports, train stations, and bus terminals benefit from crowd flow analysis 
                  and security monitoring to ensure passenger safety.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Public Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Concerts, sports venues, and festivals use our technology for crowd management 
                  and emergency response coordination.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Smart Cities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Urban infrastructure leveraging AI for traffic management, public safety, 
                  and efficient resource allocation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Retail Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Shopping centers and stores optimize operations through customer flow analysis 
                  and behavior insights.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Educational Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Campus safety enhanced through intelligent monitoring while respecting 
                  student privacy and academic freedom.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Healthcare Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hospitals and clinics use activity recognition for patient monitoring 
                  and staff safety protocols.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Approach */}
        <section className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Our Research Approach</CardTitle>
              <CardDescription>
                Combining academic rigor with practical implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Fundamental Research</h4>
                  <p className="text-sm text-muted-foreground">
                    We explore novel algorithms in computer vision, deep learning, and pattern 
                    recognition, publishing findings and contributing to the scientific community.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Applied Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Our research translates into practical solutions through rigorous testing, 
                    prototyping, and real-world validation.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Ethical Considerations</h4>
                  <p className="text-sm text-muted-foreground">
                    Every project undergoes ethical review to ensure responsible AI development 
                    with privacy, fairness, and transparency at its core.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">4. Continuous Improvement</h4>
                  <p className="text-sm text-muted-foreground">
                    We iterate on our models using feedback loops, ensuring our systems adapt 
                    and improve over time while maintaining high accuracy standards.
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

export default Research;
