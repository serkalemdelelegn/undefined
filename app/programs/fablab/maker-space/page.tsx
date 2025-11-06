"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import {
  Users,
  Lightbulb,
  Award,
  Sparkles,
  Printer,
  Cpu,
  Palette,
  UsersRound,
  Shield,
  Rocket,
  Calendar,
  MapPin,
  Clock,
  Mail,
} from "lucide-react"



const impactStats = [
  { number: "12+", label: "3D Printers", icon: Printer },
  { number: "2,500+", label: "Active Students", icon: Users },
  { number: "1,200+", label: "Projects Built", icon: Lightbulb },
  { number: "35+", label: "Expert Mentors", icon: Award },
]

const features = [
  {
    title: "3D Printing & Digital Fabrication",
    description:
      "Prototype ideas fast with 3D printers, laser cutters, and safe, guided workflows for rapid iteration.",
    icon: Printer,
    image: "/students-using-3d-printers-and-digital-fabrication.jpg",
  },
  {
    title: "Electronics & Robotics",
    description: "Build circuits, program microcontrollers, and design robots that solve real-world problems.",
    icon: Cpu,
    image: "/ethiopian-students-working-on-robotics-project-in-.jpg",
  },
  {
    title: "Design & Creative Projects",
    description: "Explore CAD, product design, and hands-on craftsmanship across materials and innovative ideas.",
    icon: Palette,
    image: "/ethiopian-students-presenting-innovative-science-p.jpg",
  },
  {
    title: "Teamwork & Mentorship",
    description: "Collaborate in inclusive teams with mentors who guide, encourage, and challenge your creativity.",
    icon: UsersRound,
    image: "/young-ethiopian-entrepreneurs-working-in-modern-fa.jpg",
  },
]

const highlights = [
  {
    title: "Hands-on Learning",
    description: "Learn by building. Every project is a chance to apply concepts, test assumptions, and improve.",
    icon: Rocket,
  },
  {
    title: "Safe, Inclusive Environment",
    description: "Safety briefings, supervised equipment use, and a welcoming culture create space for everyone.",
    icon: Shield,
  },
  {
    title: "From Idea to Impact",
    description: "Turn sketches into prototypes and prototypes into community-focused solutions.",
    icon: Lightbulb,
  },
]

const workshops = [
  {
    date: "Oct 12, 2025",
    title: "Intro to 3D Printing",
    level: "Beginner",
    duration: "2 hours",
    location: "FabLab, Addis Ababa",
    image: "/ethiopian-students-using-3d-printer-in-fablab.jpg",
    details:
      "Get hands-on with slicing, printer setup, and PLA safety. Leave with your first printed model and a checklist for best practices.",
  },
  {
    date: "Oct 19, 2025",
    title: "Arduino for Makers",
    level: "Beginner/Intermediate",
    duration: "3 hours",
    location: "FabLab, Addis Ababa",
    image: "/ethiopian-students-working-on-robotics-project-in-.jpg",
    details:
      "Build your first microcontroller project using sensors and LEDs. Learn inputs/outputs, serial monitor, and debugging tips.",
  },
  {
    date: "Oct 26, 2025",
    title: "Laser Cutting & Safety",
    level: "All Levels",
    duration: "2 hours",
    location: "FabLab, Addis Ababa",
    image: "/students-using-3d-printers-and-digital-fabrication.jpg",
    details:
      "Understand materials, settings, and safety procedures. Design a simple CAD file and cut an acrylic or wood badge.",
  },
]

const galleryImages = [
  "/ethiopian-students-learning-robotics-in-modern-cla.jpg",
  "/ethiopian-students-learning-python-programming-on-.jpg",
  "/ethiopian-students-working-with-advanced-science-e.jpg",
  "/ethiopian-students-presenting-science-projects-at-.jpg",
  "/ethiopian-students-competing-with-robots-in-champi.jpg",
  "/modern-stem-education-center-in-ethiopia-with-stud.jpg",
  "/ethiopian-students-conducting-environmental-resear.jpg",
  "/ethiopian-students-using-3d-printers-and-technolog.jpg",
  "/ethiopian-students-conducting-environmental-resear.jpg",
  "/ethiopian-students-using-3d-printers-and-technolog.jpg",
]

  

export default function MakerSpacePage() {
  const [showAllGallery, setShowAllGallery] = useState(false)

  const displayedImages = showAllGallery ? galleryImages : galleryImages.slice(0, 8)
const gradientTextClass =
    "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold"
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                
               
  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
    <Sparkles className="h-3 w-3 mr-1.5" />
    FabLab Program
  </Badge>

                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-snug">
                  Dream. Build. Discover.
                </h1>
                <p className="text-xl text-emerald-50 mb-8 text-pretty leading-relaxed">
                  A place where creativity comes alive. Explore ideas, experiment with new tools, and bring bold dreams
                  to life—together.
                </p>
                
              </div>

              <div className="relative">
                <div className="relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/ethiopian-students-using-3d-printer-in-fablab.jpg"
                    alt="Students using 3D printer in FabLab"
                    fill
                    className="object-cover"
                  />
                </div>
                
                
              </div>
            </div>
          </div><br /><br /><br /><br />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Stats Bar */}
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


        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`${gradientTextClass} text-4xl md:text-5xl mb-6`}>Where Making Meets Meaning</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our Maker Space is open to every curious mind ready to tinker and explore. From 3D printing and
                  electronics to robotics, design, and DIY projects, students collaborate, test ideas, and learn by
                  doing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With mentors and peer support, failure becomes a step toward discovery, building confidence to
                  innovate and solve real-world problems for their communities.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border-2 border-primary/10">
                <Image
                  src="/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg"
                  alt="Young entrepreneurs in FabLab maker space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={`${gradientTextClass} text-4xl mb-4`}>What You'll Explore</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dive into hands-on projects across multiple disciplines and technologies
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card
                    key={index}
                    className="group overflow-hidden border-2 hover:border-[#367375]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-[#367375]">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={`${gradientTextClass} text-4xl mb-4`}>Inside the Maker Space</h2>
              <p className="text-lg text-muted-foreground">Moments of curiosity, collaboration, and creation</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {displayedImages.map((src, i) => (
                <div
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#367375]/50"
                >
                  <Image src={src || "/placeholder.svg"} alt="Maker space activity" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
            {galleryImages.length > 5 && (
              <div className="text-center mt-6">
                <Button
                  className="bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white px-6 py-3 font-semibold hover:opacity-90 transition"
                  onClick={() => setShowAllGallery(!showAllGallery)}
                >
                  {showAllGallery ? "Show Less" : "Load More"}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Workshops */}
        <section id="workshops" className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              
              <h2 className={`text-4xl md:text-4xl mb-6 ${gradientTextClass} text-balance`}>Upcoming Workshops</h2>
              <p className="text-lg text-muted-foreground">Hands-on sessions to build skills and confidence</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {workshops.map((workshop, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-2 hover:border-[#367375]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-lg">
                        <Calendar className="w-3 h-3 mr-1" />
                        {workshop.date}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#367375]">{workshop.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="w-4 h-4" />
                        <span>Level: {workshop.level}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{workshop.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{workshop.details}</p>
                    <Button
                      className="w-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white px-6 py-3 font-semibold hover:opacity-90 transition"
                    >
                      <a
                        href={
                          process.env.NEXT_PUBLIC_MAKER_SPACE_REGISTRATION_FORM_URL ||
                          "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      
      </div>
      <Footer />
    </>
  )
}
