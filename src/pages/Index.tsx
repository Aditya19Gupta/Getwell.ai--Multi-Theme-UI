
import React from 'react';
import Header from '../components/Header';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const { theme } = useTheme();

  // Theme-specific hero content
  const heroContent = {
    default: {
      title: "Next-Gen Healthcare Platform",
      subtitle: "Enhance patient care with our comprehensive digital health solutions",
      cta: "Start Your Free Trial"
    },
    pediatrics: {
      title: "Child-Friendly Healthcare",
      subtitle: "Specialized tools for pediatricians and young patients",
      cta: "Try Pediatrics Suite"
    },
    cardiology: {
      title: "Advanced Cardiac Care",
      subtitle: "Specialized tools for monitoring and improving heart health",
      cta: "Explore Cardiology Features"
    },
    psychiatry: {
      title: "Mental Health Solutions",
      subtitle: "Supportive tools for psychiatric care and mental wellness",
      cta: "Discover Mental Health Tools"
    },
    "general-practice": {
      title: "Complete Medical Practice Solution",
      subtitle: "Comprehensive tools for general practitioners and family medicine",
      cta: "See Practice Features"
    }
  };

  const currentHero = heroContent[theme as keyof typeof heroContent] || heroContent.default;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl animate-fade-in">
                  {currentHero.title}
                </h1>
                <p className="mb-8 text-xl text-muted-foreground animate-fade-in animation-delay-100">
                  {currentHero.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-200">
                  <Button size="lg">{currentHero.cta}</Button>
                  <Button size="lg" variant="outline">Schedule Demo</Button>
                </div>
                <div className="mt-10">
                  <p className="mb-3 text-sm text-muted-foreground">Trusted by leading healthcare providers:</p>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="text-muted-foreground/70 font-semibold">MedCenter</div>
                    <div className="text-muted-foreground/70 font-semibold">HealthFirst</div>
                    <div className="text-muted-foreground/70 font-semibold">CareGroup</div>
                    <div className="text-muted-foreground/70 font-semibold">MediTrust</div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg border border-border bg-muted/50 p-4 animate-fade-in animation-delay-300">
                <Tabs defaultValue="dashboard" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                    <TabsTrigger value="patients">Patients</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>
                  <TabsContent value="dashboard" className="p-4">
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-md border border-border bg-card p-4">
                          <h4 className="mb-2 font-medium">Appointments Today</h4>
                          <div className="text-3xl font-bold">8</div>
                        </div>
                        <div className="rounded-md border border-border bg-card p-4">
                          <h4 className="mb-2 font-medium">Pending Actions</h4>
                          <div className="text-3xl font-bold">3</div>
                        </div>
                      </div>
                      <div className="rounded-md border border-border bg-card p-4">
                        <h4 className="mb-2 font-medium">Recent Activity</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center justify-between border-b border-border pb-2">
                            <span>New patient registration</span>
                            <span className="text-sm text-muted-foreground">10:30 AM</span>
                          </li>
                          <li className="flex items-center justify-between border-b border-border pb-2">
                            <span>Medical record updated</span>
                            <span className="text-sm text-muted-foreground">09:45 AM</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span>Prescription refill request</span>
                            <span className="text-sm text-muted-foreground">08:20 AM</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="patients" className="p-4">
                    <div className="space-y-4">
                      <div className="rounded-md border border-border bg-card p-4">
                        <h4 className="mb-2 font-medium">Patient List</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center justify-between border-b border-border pb-2">
                            <span>Alex Johnson</span>
                            <span className="text-sm text-muted-foreground">Upcoming: May 3</span>
                          </li>
                          <li className="flex items-center justify-between border-b border-border pb-2">
                            <span>Maria Garcia</span>
                            <span className="text-sm text-muted-foreground">Upcoming: May 4</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span>James Wilson</span>
                            <span className="text-sm text-muted-foreground">Upcoming: May 5</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="reports" className="p-4">
                    <div className="space-y-4">
                      <div className="rounded-md border border-border bg-card p-4">
                        <h4 className="mb-2 font-medium">Monthly Summary</h4>
                        <p>Total Patients: 128</p>
                        <p>New Patients: 14</p>
                        <p>Appointments: 87</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Section */}
        <FeatureSection />
        
        {/* Testimonials Section */}
        <section className="bg-accent py-16">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">What Our Users Say</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Healthcare professionals trust GoGetWell.ai to improve their practice
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-background p-6 shadow">
                <div className="mb-4 flex items-center">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <p className="mb-4 text-card-foreground">
                  "GoGetWell.ai has transformed how we manage patient care. The specialty-specific features have been a game-changer for our practice."
                </p>
                <div>
                  <p className="font-medium">Dr. Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Pediatrician</p>
                </div>
              </div>
              <div className="rounded-lg bg-background p-6 shadow">
                <div className="mb-4 flex items-center">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <p className="mb-4 text-card-foreground">
                  "The theming system makes our cardiology dashboard both visually appealing and functionally superior. Great attention to detail."
                </p>
                <div>
                  <p className="font-medium">Dr. Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Cardiologist</p>
                </div>
              </div>
              <div className="rounded-lg bg-background p-6 shadow">
                <div className="mb-4 flex items-center">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <p className="mb-4 text-card-foreground">
                  "The calming psychiatry theme perfectly aligns with our approach to mental health care. Our patients notice and appreciate the difference."
                </p>
                <div>
                  <p className="font-medium">Dr. Emily Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Psychiatrist</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to transform your healthcare practice?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Join thousands of healthcare professionals who are improving patient outcomes with GoGetWell.ai
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="bg-transparent hover:bg-primary-foreground/10">
                Start Free Trial
              </Button>
              <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
