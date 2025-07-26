import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CalendarDays, Clock, MessageSquare, Shield, Star, User, Bot, Heart, Stethoscope, Calendar, Search, ArrowRight, CheckCircle, Users, Award, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-medical-neutral backdrop-blur-sm bg-white/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-medical-text">MediCare AI</h1>
                <p className="text-xs text-medical-text/60">Smart Healthcare Solutions</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-medical-text hover:text-medical-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-medical-text hover:text-medical-primary transition-colors">How it Works</a>
              <a href="#doctors" className="text-medical-text hover:text-medical-primary transition-colors">Doctors</a>
              <a href="#contact" className="text-medical-text hover:text-medical-primary transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-medical-text">Sign In</Button>
              <Link to="/book">
                <Button className="bg-medical-primary hover:bg-medical-primary/90 text-white">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-medical-light text-medical-primary border-medical-primary/20">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Healthcare
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-medical-text mb-6 leading-tight">
              Your Health,
              <span className="bg-gradient-to-r from-medical-primary to-medical-secondary bg-clip-text text-transparent"> AI-Enhanced</span>
            </h1>
            <p className="text-xl text-medical-text/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of healthcare with our AI-powered appointment system. 
              Get instant consultations, personalized health insights, and seamless booking with top specialists.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/book">
                <Button size="lg" className="bg-medical-primary hover:bg-medical-primary/90 text-white px-8 py-6 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book AI Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-medical-primary text-medical-primary hover:bg-medical-light px-8 py-6 text-lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat with AI Assistant
              </Button>
            </div>
            
            {/* Quick Search */}
            <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-medical-neutral shadow-lg">
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-medical-text/60" />
                <Input 
                  placeholder="Search for symptoms, specialists, or conditions..." 
                  className="border-0 bg-transparent text-lg placeholder:text-medical-text/60 focus-visible:ring-0"
                />
                <Button className="bg-medical-primary hover:bg-medical-primary/90 text-white">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medical-text mb-6">
              Why Choose MediCare AI?
            </h2>
            <p className="text-xl text-medical-text/70 max-w-3xl mx-auto">
              Revolutionary AI technology meets compassionate healthcare to deliver unparalleled patient experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Health Assistant",
                description: "24/7 intelligent health monitoring and instant medical guidance powered by advanced AI",
                color: "from-medical-primary to-blue-500"
              },
              {
                icon: CalendarDays,
                title: "Smart Scheduling",
                description: "AI-optimized appointment booking that finds the perfect time slots for you and your doctor",
                color: "from-medical-secondary to-green-500"
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Enterprise-grade security ensuring your health data remains completely confidential",
                color: "from-purple-500 to-medical-primary"
              },
              {
                icon: Clock,
                title: "Instant Consultations",
                description: "Get immediate medical advice through our AI triage system before seeing specialists",
                color: "from-medical-warning to-orange-500"
              },
              {
                icon: Heart,
                title: "Personalized Care",
                description: "AI-driven health insights tailored to your unique medical history and lifestyle",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: Users,
                title: "Expert Network",
                description: "Access to a curated network of top-rated specialists and healthcare professionals",
                color: "from-medical-secondary to-teal-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-medical-text">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-medical-text/70 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-medical-light to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medical-text mb-6">
              How It Works
            </h2>
            <p className="text-xl text-medical-text/70 max-w-3xl mx-auto">
              Simple, fast, and intelligent - get the healthcare you need in just three steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Describe Your Symptoms",
                description: "Tell our AI assistant about your health concerns. Our intelligent system analyzes your symptoms and medical history.",
                icon: MessageSquare
              },
              {
                step: "02", 
                title: "AI Recommendation",
                description: "Get instant AI-powered recommendations for the right specialist, urgency level, and preliminary guidance.",
                icon: Bot
              },
              {
                step: "03",
                title: "Book & Connect",
                description: "Schedule your appointment with the perfect doctor and receive personalized care plans before your visit.",
                icon: Calendar
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-medical-warning rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-medical-text mb-4">{step.title}</h3>
                <p className="text-medical-text/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Happy Patients", icon: Users },
              { number: "500+", label: "Expert Doctors", icon: User },
              { number: "99.9%", label: "Uptime", icon: Shield },
              { number: "4.9★", label: "Patient Rating", icon: Star }
            ].map((stat, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-medical-text mb-2">{stat.number}</div>
                <div className="text-medical-text/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-medical-primary to-medical-secondary">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience AI-Powered Healthcare?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of patients who have transformed their healthcare experience with MediCare AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book">
                <Button size="lg" className="bg-white text-medical-primary hover:bg-white/90 px-8 py-6 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Start Your Health Journey
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-text text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MediCare AI</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Revolutionizing healthcare with AI-powered solutions for better patient outcomes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">AI Consultations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Specialist Booking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health Monitoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Care</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-white/70">
                <li>📧 hello@medicareai.com</li>
                <li>📞 (555) 123-4567</li>
                <li>📍 123 Health Street, Medical City, MC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            <p>&copy; 2024 MediCare AI. All rights reserved. | Transforming healthcare with artificial intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
