"use client" 

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Trophy,
  Users,
  Target,
  Lightbulb,
  Award,
  Rocket,
  Sparkles,
  TrendingUp,
  MapPin,
  GraduationCap,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"

export default function ScienceFairsPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 4000 })])

  
  const impactStats = [
    { number: "1,000+", label: "Students Annually", icon: Users },
    { number: "50+", label: "STEM Centers", icon: MapPin },
    { number: "500+", label: "Innovative Projects", icon: Lightbulb },
    { number: "15", label: "Years Running", icon: Award },
  ]

  const fairJourney = [
    {
      level: "Community Level",
      stage: "Starting Point",
      participants: "1,000+ students",
      description:
        "Every journey begins at home. Students from grades 7-12 work with dedicated mentors at local STEM Centers to develop solutions for real community challenges.",
      icon: Users,
    },
    {
      level: "Regional Level",
      stage: "Rising Stars",
      participants: "200+ winners",
      description:
        "Top performers advance to regional competitions, where innovation meets opportunity. Here, students refine their projects and compete for national recognition.",
      icon: Target,
    },
    {
      level: "National Level",
      stage: "Excellence Achieved",
      participants: "50+ finalists",
      description:
        "The pinnacle of achievement. Ethiopia's brightest minds showcase groundbreaking solutions at the National Science and Engineering Fair.",
      icon: Trophy,
    },
    {
      level: "International Level",
      stage: "Global Recognition",
      participants: "10+ teams",
      description: "Winners represent Ethiopia at international competitions.",
      icon: Trophy,
    },
    {
      level: "Innovation Summit",
      stage: "Showcase",
      participants: "All finalists",
      description: "Opportunity to present projects to industry leaders and investors.",
      icon: Trophy,
    },
    {
      level: "Alumni Mentorship",
      stage: "Giving Back",
      participants: "All past winners",
      description: "Experienced students mentor the next generation of innovators.",
      icon: Users,
    },
  ]

  const focusAreas = [
    {
      title: "Water Innovation",
      description: "Developing sustainable solutions for clean water access in rural communities",
      icon: "💧",
    },
    {
      title: "Energy Solutions",
      description: "Creating renewable energy systems to power homes and schools",
      icon: "⚡",
    },
    {
      title: "Agricultural Tech",
      description: "Smart farming technologies to improve crop yields and sustainability",
      icon: "🌱",
    },
    {
      title: "Community Health",
      description: "Medical innovations addressing healthcare challenges in underserved areas",
      icon: "🏥",
    },
  ]

  const successStories = [
    {
      title: "Solar-Powered Water Purification",
      student: "Meron Tadesse",
      school: "Hawassa University STEM Center",
      description:
        "Developed an innovative solar-powered system that provides clean drinking water to rural communities, impacting over 500 families.",
      award: "1st Place National 2024",
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
    },
    {
      title: "Smart Irrigation System",
      student: "Dawit Bekele",
      school: "Bahirdar University STEM Center",
      description:
        "Created an IoT-based irrigation system that reduces water usage by 40% while increasing crop yields for small-scale farmers.",
      award: "2nd Place National 2024",
      image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    },
    {
      title: "Waste-to-Energy Converter",
      student: "Sara Mohammed",
      school: "Addis Ababa Science & Technology University",
      description:
        "Designed a biogas converter that transforms organic waste into cooking fuel, reducing deforestation and improving air quality.",
      award: "3rd Place National 2024",
      image: "/ethiopian-students-participating-in-science-fair-w.jpg",
    },
  ]
  const gradientTextClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold"
  const gradientButtonClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all"
  

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] bg-cover bg-center opacity-20" />
          <div className="container relative mx-auto px-4 py-24 md:py-15">
            <div className="max-w-4xl mx-auto text-center">

              <div className="flex justify-center mb-6">
                <Badge className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white rounded-full shadow-md">
                  <Sparkles className="h-4 w-4" />
                  Turning Ideas into Impact
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">Innovation Meets Opportunity</h1>

              <p className="text-lg max-w-3xl mx-auto">
                Across Ethiopia, locally run Science and Engineering Fairs are sparking creativity and innovation among
                students. From grassroots communities to the national stage, young minds are designing solutions that
                shape the future.
              </p>
            </div>
          </div><br /><br />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Impact Stats */}
        <section className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10 bg-white/10 backdrop-blur-md rounded-xl scale-95 hover:scale-100"
                >
                  <CardContent className="pt-4 pb-3 px-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-full flex items-center justify-center mx-auto mb-2 shadow-md shadow-[#24C3BC]/30">
                      <IconComponent className="h-4 w-4 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
                    </div>
                    <div className="text-2xl font-bold text-[#367375] mb-1">{stat.number}</div>
                    <div className="text-sm text-[#384254] font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            
            <div className="flex justify-center">
      <Badge className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md">
        <Zap className="h-4 w-4" />
        The Ethiopian Approach
      </Badge>
      </div><br />
            <h2 className={`text-4xl md:text-5xl mb-6 ${gradientTextClass} text-balance`}>Solutions-Driven Innovation</h2>
            <p className="text-xl max-w-3xl mx-auto">
              What sets the Ethiopian Science Fair apart is its practical, solutions-driven approach. While traditional
              fairs often follow a hypothesis–experiment–conclusion model, our students focus on real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/ethiopian-students-working-with-science-equipment-.jpg"
                alt="Students working on science projects"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              {[{
                icon: Lightbulb,
                title: "Real-World Problem Solving",
                description: "Students identify pressing challenges in their communities and develop practical, implementable solutions."
              },{
                icon: Users,
                title: "Dedicated Mentorship",
                description: "Every student works closely with experienced mentors available through STEM Centers to refine their projects."
              },{
                icon: Target,
                title: "Community Impact Focus",
                description: "Projects address water, energy, agriculture, and health challenges facing Ethiopia and Sub-Saharan Africa."
              },{
                icon: TrendingUp,
                title: "Growing Ecosystem",
                description: "More public and private schools join annually, creating a thriving network of innovation and collaboration."
              }].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey to Excellence */}
        <section className="bg-gradient-to-br from-slate-50 to-emerald-50/50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center">
              <Badge className="flex items-center gap-2 px-6 py-3 text-base font-semibold bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white rounded-full shadow-md">
                <Trophy className="h-5 w-5" />
                Competition Structure
              </Badge>
            </div>
            <br />
            <h2 className={`text-4xl md:text-5xl mb-6 ${gradientTextClass} text-balance`}>Your Journey to National Recognition</h2>
            <p className="text-xl max-w-3xl mx-auto">
              From local communities to the national stage, every student has a pathway to showcase their innovation
              and make a lasting impact.
            </p>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {fairJourney.map((stage, index) => {
                const IconComponent = stage.icon
                return (
                  <div className="flex-[0_0_80%] md:flex-[0_0_33%] lg:flex-[0_0_30%]" key={index}>
                    <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
                      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#367375] to-[#24C3BC]" />
                      <CardHeader className="text-center pb-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <Badge className="mb-2 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white border-white/20 mx-auto px-4 py-2 text-sm font-semibold">
                          {stage.stage}
                        </Badge>
                        <CardTitle className="text-2xl">{stage.level}</CardTitle>
                        <CardDescription className="text-base font-semibold text-[#367375]">
                          {stage.participants}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-center leading-relaxed">{stage.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

        {/* Focus Areas */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            
            <div className="flex justify-center">
      <Badge className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md">
        <Target className="h-4 w-4" />
        Innovation Areas
      </Badge>
      </div><br />
            <h2 className={`text-4xl md:text-5xl mb-6 ${gradientTextClass} text-balance`}>Addressing Real Challenges</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our students tackle the most pressing issues facing their communities and nation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-sm leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        {/* Success Stories */}
<section className="bg-white py-15">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
    <div className="flex justify-center">
      <Badge className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md">
        <Award className="h-4 w-4" />
        2024 National Champions
      </Badge>
      </div><br />
      <h2 className={`text-4xl md:text-5xl mb-6 ${gradientTextClass} text-balance`}>Celebrating Excellence</h2>
      <p className="text-xl max-w-3xl mx-auto text-gray-700">
        Meet the brilliant minds whose innovations are making a real difference in communities across Ethiopia.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {successStories.map((story, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
          <div className="relative h-48">
            <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
            <div className="absolute top-4 right-4">
              <Badge className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white rounded-full shadow-md">
                <Trophy className="h-4 w-4" />
                {story.award}
              </Badge>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">{story.title}</CardTitle>
            <CardDescription>
              <div className="font-semibold text-gray-800 text-base">{story.student}</div>
              <div className="text-sm mt-1 text-gray-600">{story.school}</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-gray-700">{story.description}</p>
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
