"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  Users,
  Building2,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Wrench,
  School,
  Factory,
  Globe,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const impactStats = [
  { number: "50+", label: "Institutions Served", icon: Building2 },
  { number: "1000+", label: "Educators Trained", icon: GraduationCap },
  { number: "National", label: "Reach & Impact", icon: Globe },
  { number: "100%", label: "Client Satisfaction", icon: Award },
]

const trainingPrograms = [
  {
    title: "Teacher Training Programs",
    description:
      "Comprehensive professional development for educators to integrate hands-on STEM teaching methods into their classrooms.",
    icon: GraduationCap,
    
    features: [
      "Hands-on STEM pedagogy",
      "Curriculum integration strategies",
      "Assessment and evaluation methods",
      "Classroom management for labs",
      "Digital tools and resources",
      "Ongoing mentorship support",
    ],
    outcomes: [
      "Confident STEM instruction",
      "Engaging lesson delivery",
      "Student-centered learning",
      "Practical skills development",
    ],
  },
  {
    title: "Student Workshops & Bootcamps",
    description:
      "Intensive hands-on programs that immerse students in maker culture, design thinking, and project-based learning.",
    icon: Users,
    
    features: [
      "Design thinking methodology",
      "Prototyping and fabrication",
      "Electronics and robotics",
      "3D printing and CAD",
      "Team collaboration skills",
      "Project presentation training",
    ],
    outcomes: [
      "Technical skill mastery",
      "Creative problem-solving",
      "Teamwork and communication",
      "Portfolio development",
    ],
  },
  {
    title: "Institutional Capacity Building",
    description:
      "Long-term partnerships to build sustainable STEM education infrastructure and develop local expertise.",
    icon: Building2,
    
    features: [
      "Needs assessment and planning",
      "Infrastructure development",
      "Staff training and certification",
      "Curriculum customization",
      "Quality assurance systems",
      "Sustainability planning",
    ],
    outcomes: [
      "Self-sufficient operations",
      "Local expertise development",
      "Sustainable impact",
      "Community engagement",
    ],
  },
]

const consultancyServices = [
  {
    title: "Curriculum Development",
    description:
      "Design and develop comprehensive STEM curricula aligned with national standards and international best practices.",
    icon: BookOpen,
    deliverables: [
      "Curriculum framework and scope",
      "Lesson plans and materials",
      "Assessment tools and rubrics",
      "Teacher guides and resources",
      "Implementation roadmap",
    ],
  },
  {
    title: "Maker Space Establishment",
    description:
      "End-to-end support for setting up functional maker spaces, from planning and design to equipment procurement and training.",
    icon: Wrench,
    deliverables: [
      "Space design and layout",
      "Equipment selection and procurement",
      "Safety protocols and procedures",
      "Staff training programs",
      "Operational guidelines",
    ],
  },
  {
    title: "FabLab Setup & Equipment",
    description:
      "Complete FabLab installation services including machinery setup, calibration, and comprehensive technical training.",
    icon: Factory,
    deliverables: [
      "Equipment installation and testing",
      "Technical training and certification",
      "Maintenance protocols",
      "Safety compliance",
      "Ongoing technical support",
    ],
  },
  {
    title: "Educational Program Design",
    description:
      "Custom STEM program development tailored to your institution's goals, resources, and student population.",
    icon: Target,
    deliverables: [
      "Program objectives and outcomes",
      "Course structure and timeline",
      "Resource requirements",
      "Evaluation frameworks",
      "Scaling strategies",
    ],
  },
]

const partnershipTypes = [
  {
    title: "Schools & Universities",
    description:
      "Partner with us to enhance your STEM education offerings, establish maker spaces, and train your faculty in innovative teaching methods.",
    icon: School,
    benefits: [
      "Enhanced learning outcomes",
      "Modern facilities and equipment",
      "Trained and confident educators",
      "Competitive advantage",
      "Student engagement and retention",
    ],
    image: "/ethiopian-educators-participating-in-stem-training.jpg",
  },
  {
    title: "Government & NGOs",
    description:
      "Collaborate on large-scale STEM education initiatives, policy development, and capacity building programs across regions.",
    icon: Building2,
    benefits: [
      "Evidence-based policy support",
      "Scalable implementation models",
      "Impact measurement and reporting",
      "Sustainable capacity building",
      "Community engagement strategies",
    ],
    image: "/ethiopian-students-working-with-science-equipment-.jpg",
  },
  {
    title: "Private Sector",
    description:
      "Work with us to develop workforce training programs, support CSR initiatives, and build innovation ecosystems.",
    icon: Factory,
    benefits: [
      "Skilled workforce development",
      "Innovation and R&D support",
      "CSR impact and visibility",
      "Community partnerships",
      "Talent pipeline development",
    ],
    image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
  },
]

const successMetrics = [
  { metric: "95%", label: "Teacher Confidence Increase", icon: TrendingUp },
  { metric: "80%", label: "Student Engagement Boost", icon: Lightbulb },
  { metric: "50+", label: "Maker Spaces Established", icon: Wrench },
  { metric: "15+", label: "Curricula Developed", icon: BookOpen },
]

export default function TrainingConsultancyPage() {
  const gradientTextClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold"
  const gradientButtonClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all"

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
          <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center">
                <Badge className={`mb-6 text-white border-white/30 ${gradientButtonClass} text-sm font-medium px-3 py-1.5 rounded-full flex items-center`}>
                  <Sparkles className="h-3 w-3 mr-1.5" />
                  Building Capacity, Transforming Education
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                STEM Training & Consultancy
              </h1>
              <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
                Evidence-driven solutions that strengthen education systems and build local capacity. Partnering with
                schools, universities, private sectors, and governments to design and deliver customized STEM programs
                that create sustainable impact.
              </p>
            </div>
          </div><br /><br /><br /><br />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
        </section>

        {/* Impact Stats */}
        <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10 bg-white/10 backdrop-blur-md rounded-xl scale-95 hover:scale-100"
                >
                  <CardContent className="pt-4 pb-4 px-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-full flex items-center justify-center mx-auto mb-2 shadow-md shadow-[#24C3BC]/30">
                      <IconComponent className="h-4 w-4 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
                    </div>
                    <div className="text-2xl font-bold text-[#367375] mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            
            <div className="flex justify-center">
              <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md "
      >
        <Target className="w-4 h-4" />
        Our Approach
      </Badge>
      </div><br />
            <h2 className={`text-4xl md:text-5xl mb-6 ${gradientTextClass} text-balance`}>
              Sustainable Impact Through Capacity Building
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              With a proven track record across the nation, our approach ensures sustainable impact, combining hands-on
              learning with strategic consultancy to create pathways for youth employment, innovation, and community
              development. By investing in STEM education today, institutions and donors help shape a skilled,
              future-ready generation.
            </p>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {successMetrics.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <CardContent className="pt-6 pb-6">
                    <IconComponent className="h-8 w-8 text-[#367375] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-[#367375] mb-1">{item.metric}</div>
                    <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Training Programs */}
        <section id="services" className="bg-gradient-to-br from-slate-50 to-emerald-50/50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              
              <div className="flex justify-center">
              <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md "
      >
        <GraduationCap className="w-4 h-4" />
        Training Programs
      </Badge>
      </div><br />
              <h2 className={`text-4xl md:text-5xl mb-6 ${gradientTextClass} text-balance`}>
                Professional Development & Workshops
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Comprehensive training programs designed to build technical skills, pedagogical expertise, and
                innovation capacity.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {trainingPrograms.map((program, index) => {
                const IconComponent = program.icon
                return (
                  <Card
                    key={index}
                    className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 flex flex-col"
                  >
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-balance">{program.title}</CardTitle>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                      
                    </CardHeader>
                    <CardContent className="flex-grow space-y-6">
                      <div>
                        <h4 className="font-semibold text-sm text-[#367375] mb-3">Program Features:</h4>
                        <div className="space-y-2">
                          {program.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-[#367375] flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-[#367375] mb-3">Expected Outcomes:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.outcomes.map((outcome, outcomeIndex) => (
                            <Badge key={outcomeIndex} variant="outline" className="text-xs">
                              {outcome}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Consultancy Services */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            
            <div className="flex justify-center">
              <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md "
      >
        <Lightbulb className="w-4 h-4" />
        Consultancy Services
      </Badge>
      </div><br />
            <h2 className={`text-4xl md:text-5xl mb-6 ${gradientTextClass} text-balance`}>
              Strategic STEM Education Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expert guidance and hands-on support for institutions looking to establish or enhance their STEM education
              infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {consultancyServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10 p-6 border-b">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-sm text-[#367375] mb-3">Key Deliverables:</h4>
                    <div className="space-y-2">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#367375] flex-shrink-0 mt-0.5" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="bg-gradient-to-br from-slate-50 to-emerald-50/50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              
              <div className="flex justify-center">
              <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md "
      >
        <Users className="w-4 h-4" />
        Partnership Opportunities
      </Badge>
      </div><br />
              <h2 className={`text-4xl md:text-5xl mb-6 ${gradientTextClass} text-balance`}>
                Collaborate for Greater Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We work with diverse partners to create sustainable STEM education ecosystems across Ethiopia.
              </p>
            </div>

            <div className="space-y-8">
              {partnershipTypes.map((partnership, index) => {
                const IconComponent = partnership.icon
                return (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2"
                  >
                    <div className={`grid lg:grid-cols-5 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                      {/* Image Section */}
                      <div className={`relative h-64 lg:h-auto lg:col-span-2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <Image
                          src={partnership.image || "/placeholder.svg"}
                          alt={partnership.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <h3 className="text-2xl font-bold">{partnership.title}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 lg:p-8 space-y-4 lg:col-span-3">
                        <p className="text-base text-muted-foreground leading-relaxed">{partnership.description}</p>

                        <div>
                          <h4 className="font-semibold text-base mb-3 flex items-center gap-2 text-[#367375]">
                            <Award className="h-4 w-4" />
                            Partnership Benefits
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {partnership.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-[#367375] flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button className={`${gradientButtonClass} mt-4 hover:scale-105 transition-all`} asChild>
                          <Link href="/contact">
                            Start Partnership
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
