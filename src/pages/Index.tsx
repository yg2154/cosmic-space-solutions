import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Factory, Building2, Store, Home, Map, Hospital, Hotel, Mail, MapPin, Users, CheckCircle2 } from "lucide-react";

const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "";
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    issue: '',
    contact: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
      
      const submissionData = {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        issue: formData.issue
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      // Note: With no-cors mode, we can't read the response
      // but if we reach this point, the request was sent
      setSubmitStatus('success');
      setFormData({ name: '', issue: '', contact: '', email: '' });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vaastu Acceleron",
    url: canonical,
    serviceType: "Vastu consultation",
    areaServed: "Worldwide",
    availableChannel: [
      { "@type": "ServiceChannel", serviceUrl: canonical + "#consultation", name: "Email consultation" },
      { "@type": "ServiceChannel", serviceUrl: canonical + "#consultation", name: "On-site consultation" },
      { "@type": "ServiceChannel", serviceUrl: canonical + "#consultation", name: "Walk-in consultation" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Vaastu Acceleron | Vastu Consultant Services</title>
        <meta name="description" content="Expert Vastu consultant for homes, offices, factories, hospitals, hotels, plots and shops. Email, on-site and walk-in consultations." />
        <link rel="canonical" href={canonical || "/"} />
        <meta property="og:title" content="Vaastu Acceleron | Vastu Consultant" />
        <meta property="og:description" content="Holistic Vastu guidance for residences and businesses. Email, on-site and walk-in consultations." />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="text-base font-semibold tracking-tight">Vaastu Acceleron</a>
          <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#consultation" className="hover:text-foreground transition">Consultation</a>
            <a href="#about-vastu" className="hover:text-foreground transition">About Vastu</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#consultation"><Button size="sm">Get Consultation</Button></a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Vaastu Acceleron — Expert Vastu Consultant</h1>
              <p className="mt-4 text-lg text-muted-foreground">Holistic, practical Vastu guidance for homes and businesses to harmonize spaces, optimize energy flow, and support wellbeing, prosperity, and growth.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#consultation"><Button size="lg">Book a Consultation</Button></a>
                <a href="#about-vastu"><Button variant="secondary" size="lg">Learn about Vastu</Button></a>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Personalized remedies and layout recommendations</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Non-destructive, practical solutions for existing spaces</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Transparent process and actionable reports</li>
              </ul>
            </div>
            <div className="relative">
              {/* Directional Labels */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xl font-semibold z-10">N</div>
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-xl font-semibold z-10">E</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xl font-semibold z-10">S</div>
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 text-xl font-semibold z-10">W</div>
              
              <figure className="relative aspect-[4/3] overflow-hidden rounded-lg bg-card/50">
                <img
                  src="/lovable-uploads/Vastu-Purusha-Mandala.png"
                  alt="Vastu Purusha Mandala grid diagram illustrating directional energies"
                  loading="lazy"
                  className="h-full w-full object-contain object-center select-none pointer-events-none"
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="services" className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold">Consultation Services</h2>
            <p className="mt-2 text-muted-foreground">Tailored Vastu audits and recommendations across residential, commercial, and industrial spaces.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Factory className="h-5 w-5" aria-hidden />
                <CardTitle className="text-base">Industry / Factory</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Workflow, machinery placement, entry/exit, and utilities aligned for output and safety.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Building2 className="h-5 w-5" aria-hidden />
                <CardTitle className="text-base">Offices</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Cabin orientation, seating, departments and meeting zones for clarity and productivity.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Store className="h-5 w-5" aria-hidden />
                <CardTitle className="text-base">Shops</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Entrance, cash counter, product display and storage to enhance visibility and sales.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Home className="h-5 w-5" aria-hidden />
                <CardTitle className="text-base">House / Flat</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Room zoning, kitchen/bedroom orientation and remedies for comfort and harmony.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Map className="h-5 w-5" aria-hidden />
                <CardTitle className="text-base">Plots</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Plot selection, slope, roads, and ideal positioning before construction.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Hospital className="h-5 w-5" aria-hidden />
                <CardTitle className="text-base">Hospitals</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">OT, ICU, reception and inpatient areas aligned for care, flow and hygiene.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Hotel className="h-5 w-5" aria-hidden />
                <CardTitle className="text-base">Hotels</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Entry, lobby, rooms and services designed for guest comfort and revenue.</CardContent>
            </Card>
          </div>
        </section>

        <section id="consultation" className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold">Ways of Consultation</h2>
            <p className="mt-2 text-muted-foreground">Choose a format that suits your requirements and timeline.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Mail className="h-5 w-5" aria-hidden />
                <CardTitle className="text-base">Email Consultation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Share layout, measurements and photos. Receive a detailed report with remedies.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <MapPin className="h-5 w-5" aria-hidden />
                <CardTitle className="text-base">On-site Consultation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">A comprehensive visit with compass audit, discussion and on-the-spot guidance.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Users className="h-5 w-5" aria-hidden />
                <CardTitle className="text-base">Walk-in Consultation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Meet at our office with your plan for quick guidance and next steps.</CardContent>
            </Card>
          </div>
        </section>

        <section id="about-vastu" className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold">What is Vastu Shastra?</h2>
            <p className="mt-3 text-muted-foreground">Vastu Shastra is a traditional Indian knowledge system that harmonizes the built environment with natural forces. It aligns layout, orientation and elements to support health, relationships and prosperity.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Core Principles</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Directional balance of the five elements (earth, water, fire, air, space)</li>
                    <li>Optimized entrances, room functions and energy flow</li>
                    <li>Sun path and magnetic field alignment</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Why a Consultant?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Translate principles into practical, non-structural remedies</li>
                    <li>Prioritize fixes by impact and feasibility</li>
                    <li>Support new builds with optimal planning from day one</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">Get Your Vastu Consultation</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Share your details and we'll help you transform your space with expert Vastu guidance.
              </p>
            </div>
            
            <div className="rounded-lg border p-6 md:p-8 bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Number *</Label>
                    <Input
                      id="contact"
                      name="contact"
                      type="tel"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="Enter your contact number"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="issue">Describe Your Issue/Requirement *</Label>
                  <Textarea
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    placeholder="Please describe your space, current issues, or what you'd like to achieve with Vastu consultation..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Thank you! We'll contact you soon to discuss your Vastu consultation.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-600 bg-red-50 p-3 rounded-md">
                    <span>Something went wrong. Please try again or contact us directly.</span>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  We respect your privacy and will never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="rounded-lg border p-6 md:p-8 bg-card">
            <div className="md:flex items-center justify-between gap-6">
              <div className="md:max-w-2xl">
                <h3 className="text-xl md:text-2xl font-semibold">Start your Vastu journey</h3>
                <p className="mt-2 text-muted-foreground">Ready to optimize your space? Book a session and receive a clear, actionable plan tailored to your goals.</p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Email: <a href="mailto:sanjeevvmahajan@vaastuacceleron.com" className="text-blue-600 underline hover:text-blue-800 transition-colors">sanjeevvmahajan@vaastuacceleron.com</a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Mobile: <a href="tel:+919660515666" className="text-blue-600 underline hover:text-blue-800 transition-colors">9660515666</a>
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <a href="#consultation"><Button size="lg">Book Now</Button></a>
                <a href="mailto:sanjeevvmahajan@vaastuacceleron.com"><Button variant="secondary" size="lg">Email Us</Button></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">© {new Date().getFullYear()} Vaastu Acceleron. All rights reserved.</div>
      </footer>
    </>
  );
};

export default Index;
