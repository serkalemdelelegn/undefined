"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Target, Eye, Heart, Users, Sparkles, Globe, MapPin, Briefcase, ClipboardList, Lightbulb, Rocket, Settings } from "lucide-react"
import { AutoRotatingCarousel } from "@/components/auto-rotating-carousel"
import { TestimonySection } from "@/components/testimony-section"
import { EthiopiaStemMap } from "@/components/ethiopia-stem-map"




export default function MissionVisionValuesPage() {
  const gradientTextClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold"
  const gradientButtonClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all"
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] via-teal-600 to-cyan-600">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-4 py-15 md:py-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-base font-medium mb-6">
                  <Sparkles className="h-5 w-5" />
                  About STEMpower Ethiopia
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                  Inside Every Child is a Scientist
                </h1>
                <p className="text-xl text-emerald-50 mb-8 text-pretty leading-relaxed">
                  Empowering Ethiopia's future through hands-on STEM education. With 61 active STEM Centers across the
                  nation, we're transforming how students learn science, technology, engineering, and mathematics.
                </p>
                
              </div>
              <div className="order-1 lg:order-2 flex justify-center relative">
  <div className="relative w-full sm:w-[90%] md:w-[95%] lg:w-[100%] aspect-[5/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
    <Image
      src="/ethiopian-students-working-with-science-equipment-.jpg"
      alt="Ethiopian students engaged in hands-on STEM learning"
      fill
      className="object-cover object-center"
    />
  </div>

  {/* Floating STEM Center Card */}
  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 sm:p-4 border border-emerald-100">
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100 flex items-center justify-center">
        <Target className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
      </div>
      <div>
        <div className="text-xs sm:text-sm text-muted-foreground">STEM Centers</div>
        <div className="font-bold text-xl sm:text-2xl text-emerald-600">61</div>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
          <br /><br /><br /><br />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </section>
        

        

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white">
                  <Sparkles className="h-4 w-4 " />
                  Our Story
                </div>
                <h2 className={`text-4xl md:text-4xl mb-6 ${gradientTextClass} text-balance`}>Who We Are</h2>
                <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white" />
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-foreground">
                    STEMpower is a nonprofit that established a Sub-Saharan African family of 61 hands-on STEM Centers,
                    which are self-sustaining lab-based infrastructure for learning Science, Technology, Engineering,
                    and Math.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    In our STEM Centers, university and pre-university students learn from locally and
                    internationally-mentored engagement with actual lab equipment and devices. The STEM Centers also
                    serve as anchors for Entrepreneurship training, National Science & Engineering fairs, and Community
                    engagement.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    STEMpower's STEM Centers are active from the Atlantic Ocean, across land-locked nations, to the
                    Indian Ocean... bridging genders and ethnicity and cultures. Even in unstable regions, the universal
                    demand for our programs fosters peace and development.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    In creating permanent physical infrastructure in nearly every Sub-Saharan country, including the
                    island nations, we may be the only nonprofit of any category to have ever achieved such a wide level
                    of coverage.
                  </p>
                </div>

                <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <AutoRotatingCarousel
                    images={[
                      {
                        src: "/ethiopian-students-participating-in-science-fair-w.jpg",
                        alt: "STEMpower students at science fair",
                      },
                      {
                        src: "/ethiopian-students-working-with-science-equipment-.jpg",
                        alt: "Students working with science equipment",
                      },
                      {
                        src: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
                        alt: "Young entrepreneurs in FabLab maker space",
                      },
                      {
                        src: "/ethiopian-students-in-science-laboratory-conductin.jpg",
                        alt: "Students conducting laboratory experiments",
                      },
                      {
                        src: "/ethiopian-students-using-3d-printers-and-technolog.jpg",
                        alt: "Students using 3D printers and technology",
                      },
                      {
                        src: "/young-ethiopian-entrepreneurs-presenting-business-.jpg",
                        alt: "Young entrepreneurs presenting business ideas",
                      },
                    ]}
                    interval={4000}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section id="mission-section" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
    <Sparkles className="h-4 w-4" />
    Our Foundation
  </div>
  <h2 className={`text-4xl md:text-4xl mb-6 ${gradientTextClass} text-balance`}>
    Our Vision, Mission & Core Values
  </h2>
  <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
    The guiding principles that drive our commitment to transforming STEM education in Ethiopia
  </p>
  <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-br from-[#367375] to-[#24C3BC] mt-6" />
</div>


              <div className="grid md:grid-cols-3 gap-8">
                 {/* Vision */}
                 <Card className="group border-2 border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white via-teal-50/30 to-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8 relative">
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Eye className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Vision</h3>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      A future where every Ethiopian student has access to world-class STEM education, empowering them
                      to become innovators, entrepreneurs, and leaders who drive sustainable development and prosperity
                      for their communities and nation.
                    </p>
                  </CardContent>
                </Card>

                {/* Mission */}
                <Card className="group border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white via-emerald-50/30 to-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8 relative">
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
                        <Target className="w-12 h-12 text-white " />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Mission</h3>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      To establish and sustain hands-on STEM Centers across Ethiopia that provide accessible, quality
                      science and technology education through practical lab-based learning experiences that inspire
                      innovation and entrepreneurship.
                    </p>
                  </CardContent>
                </Card>

               

                {/* Values */}
                <Card className="group border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white via-cyan-50/30 to-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8 relative">
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Heart className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Core Values</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-emerald-600 mr-3 text-2xl font-bold leading-none">•</span>
                        <span className="leading-relaxed pt-0.5">Excellence in education</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-600 mr-3 text-2xl font-bold leading-none">•</span>
                        <span className="leading-relaxed pt-0.5">Accessibility for all</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-600 mr-3 text-2xl font-bold leading-none">•</span>
                        <span className="leading-relaxed pt-0.5">Innovation and creativity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-600 mr-3 text-2xl font-bold leading-none">•</span>
                        <span className="leading-relaxed pt-0.5">Community engagement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-600 mr-3 text-2xl font-bold leading-none">•</span>
                        <span className="leading-relaxed pt-0.5">Sustainability</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
        </section>
       {/* STEMpower Ecosystem */}
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
        <Sparkles className="h-4 w-4" />
        STEMpower Ecosystem
      </div>
      <h2 className={`text-4xl md:text-4xl mb-6 ${gradientTextClass} text-balance`}>Empowering Through Five Steps</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        A structured journey from education to innovation, entrepreneurship, and impact.
      </p>
      <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-br from-[#367375] to-[#24C3BC] mt-6" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-2 md:px-4">
      {[
        {
          title: "STEM Education",
          icon: <ClipboardList className="w-10 h-10 text-white" />,
          items: [
            "STEM Center establishment",
            "STEM Lab Setup",
            "Mobile STEM Lab",
            "National Science & Engineering Fairs",
            "STEM Educator capacity building",
            "Science Shared Campus",
            "University STEM outreach",
            "Girls in STEM",
            "Inclusive STEM education",
            "STEM TV"
          ]
        },
        {
          title: "Innovation",
          icon: <Lightbulb className="w-10 h-10 text-white" />,
          items: [
            "Technical Skill training",
            "Idea Generation Advice",
            "Concept & Design Development",
            "Prototyping & Market Testing",
            "Workspace & Resources",
            "IP registration support"
          ]
        },
        {
          title: "Incubation & Acceleration",
          icon: <Rocket className="w-10 h-10 text-white" />,
          items: [
            "Idea Refinement support",
            "Mentorship and coaching",
            "MVP development",
            "FabLab resources",
            "Networking opportunities"
          ]
        },
        {
          title: "BDS Support",
          icon: <Settings className="w-10 h-10 text-white" />,
          items: [
            "Entrepreneurship Training",
            "21st-Century Skills Training",
            "Financial Literacy",
            "Business Mentorship",
            "Market Access",
            "Access to Finance",
            "Regulatory Support",
            "Monitoring & Evaluation"
          ]
        },
        {
          title: "Job & Wealth Creation",
          icon: <Briefcase className="w-10 h-10 text-white" />,
          items: [
            "Finance for Expansion",
            "Market Expansion",
            "Job Creation",
            "Value Chain Integration",
            "Sustainability & Impact",
            "Wealth Creation",
            "Scaling via Partnerships"
          ]
        }
      ].map((step, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <div className="flex justify-center mb-4">{step.icon}</div>
          <h3 className="text-lg font-bold text-center">{step.title}</h3>

          {/* Popup */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 w-72 bg-white text-foreground text-sm rounded-xl shadow-xl p-4">
              <h4 className="text-base font-semibold mb-2 text-center text-[#367375]">{step.title}</h4>
              <ul className="list-disc list-inside space-y-1 text-left text-muted-foreground">
                {step.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<EthiopiaStemMap />
<TestimonySection />
     
      </div>

    
      

      <Footer />
      
    </>
  )
}
