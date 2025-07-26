import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarDays, Clock, Bot, User, Stethoscope, ArrowLeft, MessageSquare, Star, CheckCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function BookAppointment() {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [step, setStep] = useState(1);

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  const doctors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      rating: 4.9,
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      nextAvailable: "Today"
    },
    {
      id: "2", 
      name: "Dr. Michael Chen",
      specialty: "Dermatology",
      rating: 4.8,
      experience: "12+ years", 
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      nextAvailable: "Tomorrow"
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      specialty: "General Practice",
      rating: 4.9,
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1594824475510-0f8e8e0fb86e?w=400&h=400&fit=crop&crop=face", 
      nextAvailable: "Today"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-medical-neutral backdrop-blur-sm bg-white/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-medical-text" />
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-medical-text">MediCare AI</h1>
                  <p className="text-xs text-medical-text/60">Book Appointment</p>
                </div>
              </div>
            </Link>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-medical-text">
                <MessageSquare className="w-4 h-4 mr-2" />
                AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[
                { step: 1, title: "Symptoms", icon: MessageSquare },
                { step: 2, title: "Doctor", icon: User },
                { step: 3, title: "Schedule", icon: CalendarDays },
                { step: 4, title: "Confirm", icon: CheckCircle }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    step >= item.step 
                      ? "bg-medical-primary text-white" 
                      : "bg-medical-neutral text-medical-text/60"
                  )}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className={cn(
                    "ml-2 text-sm font-medium",
                    step >= item.step ? "text-medical-text" : "text-medical-text/60"
                  )}>
                    {item.title}
                  </span>
                  {index < 3 && (
                    <div className={cn(
                      "w-16 h-0.5 mx-4",
                      step > item.step ? "bg-medical-primary" : "bg-medical-neutral"
                    )} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {step === 1 && (
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-xl flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-medical-text">Tell us about your symptoms</CardTitle>
                        <CardDescription>Our AI will help match you with the right specialist</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="symptoms" className="text-medical-text font-medium">What brings you in today?</Label>
                      <Textarea 
                        id="symptoms"
                        placeholder="Describe your symptoms, concerns, or reason for visit..."
                        className="mt-2 min-h-32"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-medical-text font-medium">How long have you had these symptoms?</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="today">Today</SelectItem>
                            <SelectItem value="few-days">A few days</SelectItem>
                            <SelectItem value="week">About a week</SelectItem>
                            <SelectItem value="weeks">Several weeks</SelectItem>
                            <SelectItem value="month">About a month</SelectItem>
                            <SelectItem value="longer">Longer than a month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label className="text-medical-text font-medium">Pain level (if applicable)</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Rate your pain" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No pain</SelectItem>
                            <SelectItem value="mild">Mild (1-3)</SelectItem>
                            <SelectItem value="moderate">Moderate (4-6)</SelectItem>
                            <SelectItem value="severe">Severe (7-10)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="bg-medical-light p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Bot className="w-5 h-5 text-medical-primary mt-0.5" />
                        <div className="text-sm text-medical-text">
                          <p className="font-medium mb-1">AI Recommendation:</p>
                          <p>Based on your symptoms, I recommend seeing a General Practitioner first. They can provide initial assessment and refer you to a specialist if needed.</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => setStep(2)}
                      className="w-full bg-medical-primary hover:bg-medical-primary/90 text-white"
                    >
                      Continue to Doctor Selection
                    </Button>
                  </CardContent>
                </Card>
              )}

              {step === 2 && (
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-medical-text">Choose Your Doctor</CardTitle>
                    <CardDescription>Select from our AI-recommended specialists</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {doctors.map((doctor) => (
                      <div 
                        key={doctor.id}
                        className={cn(
                          "p-4 rounded-lg border-2 cursor-pointer transition-all",
                          selectedDoctor === doctor.id 
                            ? "border-medical-primary bg-medical-light" 
                            : "border-medical-neutral hover:border-medical-primary/50"
                        )}
                        onClick={() => setSelectedDoctor(doctor.id)}
                      >
                        <div className="flex items-center space-x-4">
                          <img 
                            src={doctor.image} 
                            alt={doctor.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-medical-text">{doctor.name}</h3>
                              <Badge variant="secondary" className="bg-medical-secondary text-white">
                                {doctor.nextAvailable}
                              </Badge>
                            </div>
                            <p className="text-medical-text/70 mb-2">{doctor.specialty} • {doctor.experience}</p>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-medical-text ml-1">{doctor.rating}</span>
                              </div>
                              <div className="flex items-center text-sm text-medical-text/60">
                                <Phone className="w-4 h-4 mr-1" />
                                Available for video calls
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        onClick={() => setStep(1)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button 
                        onClick={() => setStep(3)}
                        disabled={!selectedDoctor}
                        className="flex-1 bg-medical-primary hover:bg-medical-primary/90 text-white"
                      >
                        Continue to Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 3 && (
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-medical-text">Select Date & Time</CardTitle>
                    <CardDescription>Choose your preferred appointment slot</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-medical-text font-medium mb-3 block">Select Date</Label>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          className="rounded-md border border-medical-neutral"
                        />
                      </div>
                      
                      <div>
                        <Label className="text-medical-text font-medium mb-3 block">Available Times</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTime === time ? "default" : "outline"}
                              className={cn(
                                "w-full",
                                selectedTime === time 
                                  ? "bg-medical-primary hover:bg-medical-primary/90 text-white"
                                  : "border-medical-neutral hover:border-medical-primary"
                              )}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        onClick={() => setStep(2)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button 
                        onClick={() => setStep(4)}
                        disabled={!date || !selectedTime}
                        className="flex-1 bg-medical-primary hover:bg-medical-primary/90 text-white"
                      >
                        Continue to Confirm
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 4 && (
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-medical-text">Confirm Appointment</CardTitle>
                    <CardDescription>Review your booking details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-medical-light p-6 rounded-lg">
                      <h3 className="font-semibold text-medical-text mb-4">Appointment Summary</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-medical-text/70">Doctor:</span>
                          <span className="text-medical-text font-medium">
                            {doctors.find(d => d.id === selectedDoctor)?.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-medical-text/70">Specialty:</span>
                          <span className="text-medical-text font-medium">
                            {doctors.find(d => d.id === selectedDoctor)?.specialty}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-medical-text/70">Date:</span>
                          <span className="text-medical-text font-medium">
                            {date ? format(date, "PPP") : "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-medical-text/70">Time:</span>
                          <span className="text-medical-text font-medium">{selectedTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-medical-text/70">Type:</span>
                          <span className="text-medical-text font-medium">Video Consultation</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-medical-text font-medium">Full Name</Label>
                        <Input id="name" placeholder="Enter your full name" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-medical-text font-medium">Phone Number</Label>
                        <Input id="phone" placeholder="Enter your phone number" className="mt-2" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-medical-text font-medium">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" className="mt-2" />
                    </div>

                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        onClick={() => setStep(3)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button className="flex-1 bg-medical-primary hover:bg-medical-primary/90 text-white">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Confirm Appointment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-medical-text flex items-center">
                    <Bot className="w-5 h-5 mr-2" />
                    AI Health Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-medical-light p-3 rounded-lg">
                      <p className="text-sm text-medical-text">
                        💡 <strong>Tip:</strong> Prepare a list of current medications and symptoms to share with your doctor.
                      </p>
                    </div>
                    <div className="bg-medical-light p-3 rounded-lg">
                      <p className="text-sm text-medical-text">
                        🔒 <strong>Privacy:</strong> All consultations are encrypted and HIPAA compliant.
                      </p>
                    </div>
                    <Button variant="outline" className="w-full border-medical-primary text-medical-primary">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat with AI
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-medical-text">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start text-medical-text">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Support: (555) 123-4567
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-medical-text">
                    <Mail className="w-4 h-4 mr-2" />
                    Email: help@medicareai.com
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
