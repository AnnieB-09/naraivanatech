import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Lightbulb, Users, TrendingUp, Heart, Code, Brain } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Be part of a team that's shaping the future of AI. We're looking for passionate 
            innovators who want to make a real impact.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </section>

        {/* Culture & Values */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why NarAIvana?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Innovation Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Work on cutting-edge AI projects that push boundaries and create real-world impact
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Collaborative Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Join a diverse team of experts who value knowledge sharing and teamwork
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Growth Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Accelerate your career with mentorship, learning resources, and challenging projects
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Heart className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Flexible working arrangements and a culture that values wellbeing
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Code className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Tech Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Work with the latest technologies and contribute to open-source projects
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Brain className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Research Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Contribute to AI research and publish findings in academic conferences
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Open Positions */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Open Positions</h2>
          
          <div className="space-y-6">
            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <CardTitle className="text-xl">Machine Learning Engineer</CardTitle>
                  <Badge className="bg-accent text-accent-foreground">Full-Time</Badge>
                </div>
                <CardDescription>Bengaluru, India • AI/ML Team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Build and deploy ML models for our intelligent vending machines and surveillance 
                  systems. Experience with computer vision and deep learning required.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">TensorFlow/PyTorch</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Deep Learning</Badge>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <CardTitle className="text-xl">Computer Vision Research Scientist</CardTitle>
                  <Badge className="bg-accent text-accent-foreground">Full-Time</Badge>
                </div>
                <CardDescription>Bengaluru, India • Research Team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Lead research initiatives in crowd surveillance and activity recognition. PhD or 
                  equivalent experience in computer vision required.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Research</Badge>
                  <Badge variant="outline">Neural Networks</Badge>
                  <Badge variant="outline">Publications</Badge>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <CardTitle className="text-xl">Full Stack Developer</CardTitle>
                  <Badge className="bg-accent text-accent-foreground">Full-Time</Badge>
                </div>
                <CardDescription>Bengaluru, India • Engineering Team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Develop and maintain web applications and dashboards for our AI products. 
                  Experience with modern web frameworks required.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Cloud</Badge>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <CardTitle className="text-xl">AI/ML Intern</CardTitle>
                  <Badge variant="secondary" className="shadow-card">Internship</Badge>
                </div>
                <CardDescription>Bengaluru, India • Multiple Teams</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Gain hands-on experience in AI/ML development and research. Perfect for students 
                  or recent graduates passionate about artificial intelligence.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Data Science</Badge>
                  <Badge variant="outline">Learning</Badge>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Process */}
        <section className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Application Process</CardTitle>
              <CardDescription>What to expect when you apply</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Submit Application</h4>
                    <p className="text-sm text-muted-foreground">
                      Send us your resume and a brief note about why you're interested in NarAIvana
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Initial Screening</h4>
                    <p className="text-sm text-muted-foreground">
                      Our team reviews your application and reaches out if there's a good fit
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Technical Interview</h4>
                    <p className="text-sm text-muted-foreground">
                      Discussion of your experience and problem-solving approach relevant to the role
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Team Interview</h4>
                    <p className="text-sm text-muted-foreground">
                      Meet the team and learn more about our culture and projects
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Offer</h4>
                    <p className="text-sm text-muted-foreground">
                      If everything aligns, we'll extend an offer and welcome you to the team!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Careers;
