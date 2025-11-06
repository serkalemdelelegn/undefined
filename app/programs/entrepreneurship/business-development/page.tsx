"use client"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Users,
  Target,
  BookOpen,
  LineChart,
  Handshake,
  ArrowRight,
  Sparkles,
  Briefcase,
  CheckCircle,
  Lightbulb,
  Building2,
  Phone,
  Mail,
  BarChart3,
  Rocket,
  Award,
  Heart,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    name: "Market Research & Analysis",
    icon: Target,
    description:
      "In-depth analysis of market trends, customer needs, and competitive landscapes to inform strategic decisions.",
    capabilities: ["Market trend analysis", "Customer assessment", "Competitive mapping", "Industry benchmarking"],
  },
  {
    name: "Business Planning & Strategy",
    icon: BookOpen,
    description: "Comprehensive business plan development including strategy, operations, and go-to-market approaches.",
    capabilities: ["Business plan development", "Strategic roadmap", "Operational framework", "Investor pitch decks"],
  },
  {
    name: "Mentorship & Advisory",
    icon: Users,
    description:
      "One-on-one guidance from experienced entrepreneurs and industry experts to navigate business challenges.",
    capabilities: ["Personalized mentorship", "Expert advisory", "Problem-solving workshops", "Network building"],
  },
  {
    name: "Financial Modeling & Planning",
    icon: LineChart,
    description:
      "Detailed financial projections, budgeting, and investment readiness preparation for sustainable growth.",
    capabilities: ["Financial projections", "Budget planning", "Cash flow optimization", "Investment readiness"],
  },
  {
    name: "Growth Strategy & Scaling",
    icon: TrendingUp,
    description: "Scalable growth frameworks and expansion strategies tailored to your business model and market.",
    capabilities: ["Growth strategy", "Market expansion", "Scalability assessment", "Performance tracking"],
  },
  {
    name: "Partnership & Network Development",
    icon: Handshake,
    description:
      "Strategic networking and partnership facilitation to expand your business ecosystem and opportunities.",
    capabilities: [
      "Partnership identification",
      "Investor connections",
      "Collaboration facilitation",
      "Ecosystem building",
    ],
  },
]

const impactStats = [
  { number: "59", label: "Businesses Supported", icon: Building2 },
  { number: "100%", label: "Licensed Rate", icon: TrendingUp },
  { number: "300+", label: "Jobs Created", icon: Users },
  { number: "12+", label: "Active Sectors", icon: LineChart },
]

const donors = [
  {
    name: "World Bank",
    logo: "/world-bank-logo.png",
    contribution: "$2.5M in infrastructure and program development funding",
    focus: "Education Infrastructure & Capacity Building",
    since: "2018",
    peopleImpacted: "5,000+ students and educators",
  },
  {
    name: "USAID",
    logo: "/usaid-logo.jpg",
    contribution: "$1.8M for digital skills training and technical assistance",
    focus: "Youth Empowerment & Digital Skills",
    since: "2019",
    peopleImpacted: "3,500+ young professionals",
  },
  {
    name: "African Development Bank",
    logo: "/images/partner-4.png",
    contribution: "$1.2M for FabLab equipment and technology infrastructure",
    focus: "Technology & Innovation",
    since: "2020",
    peopleImpacted: "2,800+ innovators and entrepreneurs",
  },
  {
    name: "Bill & Melinda Gates Foundation",
    logo: "/gates-foundation-logo.jpg",
    contribution: "$950K grant funding for inclusive STEM education programs",
    focus: "Inclusive Education & Gender Equality",
    since: "2019",
    peopleImpacted: "4,200+ students (60% female)",
  },
  {
    name: "European Union",
    logo: "/european-union-flag.png",
    contribution: "$3.2M multi-year funding for entrepreneurship development",
    focus: "Economic Development & Job Creation",
    since: "2017",
    peopleImpacted: "6,500+ entrepreneurs and job seekers",
  },
  {
    name: "Mastercard Foundation",
    logo: "/mastercard-foundation-logo.jpg",
    contribution: "$2.1M for scholarship programs and entrepreneurship training",
    focus: "Youth Employment & Financial Inclusion",
    since: "2021",
    peopleImpacted: "3,900+ youth beneficiaries",
  },
]

export default function BusinessDevelopmentPage() {
  const [currentDonorIndex, setCurrentDonorIndex] = useState(0)
  const [hoveredDonor, setHoveredDonor] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentDonorIndex((prev) => (prev + 1) % donors.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused])

  const getVisibleDonors = () => {
    const visible = []
    for (let i = 0; i < 5; i++) {
      visible.push(donors[(currentDonorIndex + i) % donors.length])
    }
    return visible
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
          <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-12">
            <div className="max-w-4xl mx-auto text-center">
              
              <div className="flex justify-center">
  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
    <Sparkles className="h-3 w-3 mr-1.5" />
    Entrepreneurship & Incubation
  </Badge>
</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Business Development Services
              </h1>
              <p className="text-lg md:text-xl text-emerald-50 mb-6 text-pretty leading-relaxed max-w-3xl mx-auto">
                Fueling Growth and Innovation
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-6" asChild>
                  <Link href="#services">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Explore Services
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 bg-transparent"
                  asChild
                >
                  <Link href="/programs/entrepreneurship/business-development/supported-businesses">
                    View Success Stories
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
        </section>

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

  <section className="max-w-6xl mx-auto px-4 py-16">
  {/* Header */}
  <div className="text-center mb-12">
    <div className="flex justify-center mb-4">
      <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold
                   bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white
                   rounded-full shadow-md"
      >
        <Lightbulb className="w-4 h-4" />
        About Our BDS
      </Badge>
    </div>
    <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold">
      Empowering Entrepreneurs to Thrive
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
      Our Business Development Services provide practical support, expert guidance, and strategic tools to help
      startups, entrepreneurs, and organizations thrive. From market research and business planning to
      mentorship, financial modeling, and growth strategies, we empower innovators to turn ideas into scalable,
      sustainable ventures.
    </p>
  </div>

  {/* BDS Services Cards */}
  <div className="grid md:grid-cols-2 gap-8 mb-12">
    <Card className="overflow-hidden border-2">
      <div className="relative h-64">
        <Image
          src="/business-professionals-analyzing-market-data-on-sc.jpg"
          alt="Business professionals analyzing market data"
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center flex-shrink-0">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Strategic Planning & Analysis</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          We help entrepreneurs develop comprehensive business strategies backed by thorough market research and
          competitive analysis. Our experts work closely with you to identify opportunities, assess risks, and
          create actionable roadmaps for sustainable growth.
        </p>
      </CardContent>
    </Card>

    <Card className="overflow-hidden border-2">
      <div className="relative h-64">
        <Image
          src="/business-mentor-advising-young-entrepreneur-in-mod.jpg"
          alt="Business mentor advising entrepreneur"
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Expert Mentorship & Guidance</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Access one-on-one mentorship from experienced entrepreneurs and industry leaders who understand the
          challenges of building a business. Our mentors provide personalized guidance, share valuable insights,
          and help you navigate critical business decisions with confidence.
        </p>
      </CardContent>
    </Card>
  </div>

  {/* Comprehensive Approach */}
  <Card className="border-2 bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10">
    <CardContent className="p-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Comprehensive Approach</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            By combining hands-on support with actionable insights, our services help clients navigate
            challenges, seize opportunities, and achieve lasting impact in their communities and beyond. We
            transform entrepreneurial ideas into scalable, sustainable ventures that drive economic growth and
            create meaningful employment opportunities across Ethiopia.
          </p>
          <div className="space-y-3">
            {[
              "Practical, hands-on business support tailored to your needs",
              "Access to expert advisors and successful entrepreneurs",
              "Strategic tools and frameworks for sustainable growth",
              "Network connections with investors and partners",
              "Ongoing support throughout your entrepreneurial journey",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#367375] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image
            src="/entrepreneurs-working-on-business-strategy-documen.jpg"
            alt="Entrepreneurs working on business strategy"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </CardContent>
  </Card>
</section>


<section className="bg-gradient-to-br from-[#367375]/5 to-[#24C3BC]/5 py-16">
  <div className="max-w-6xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4">
        <Badge
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold
                     bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white
                     rounded-full shadow-md"
        >
          <Heart className="w-4 h-4" />
          Our Supporters
        </Badge>
      </div>
      <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold">
        Funding Partners & Donors
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
        Our work is made possible through the generous support of international organizations committed to
        advancing STEM education and entrepreneurship in Ethiopia.
      </p>
    </div>

    {/* Donors Carousel */}
    <div className="relative overflow-hidden py-8">
      <div className="flex gap-4 justify-center items-center transition-all duration-700 ease-in-out">
        {getVisibleDonors().map((donor, index) => (
          <div
            key={`${donor.name}-${index}`}
            className="flex-shrink-0 w-44"
            onMouseEnter={() => {
              setHoveredDonor(index)
              setIsPaused(true)
            }}
            onMouseLeave={() => {
              setHoveredDonor(null)
              setIsPaused(false)
            }}
          >
            <Card
              className={`group relative overflow-visible border-2 transition-all duration-500 ${
                hoveredDonor === index ? "shadow-2xl scale-105 z-50" : "hover:shadow-lg h-44"
              }`}
            >
              <CardContent className={`p-0 ${hoveredDonor === index ? "h-auto" : "h-44"}`}>
                <div
                  className={`${hoveredDonor === index ? "hidden" : "flex"} items-center justify-center bg-white p-6 h-full`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={donor.logo || "/placeholder.svg"}
                      alt={donor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>

                {hoveredDonor === index && (
                  <div className="bg-gradient-to-br from-[#367375] to-[#24C3BC] p-4 min-h-[240px] rounded-lg text-white">
                    <h3 className="text-base font-bold mb-3 text-center leading-tight">
                      {donor.name}
                    </h3>

                    <div className="space-y-2">
                      <div>
                        <p className="font-bold text-xs mb-0.5">Contribution:</p>
                        <p className="text-xs leading-snug">{donor.contribution}</p>
                      </div>
                      <div>
                        <p className="font-bold text-xs mb-0.5">Focus Area:</p>
                        <p className="text-xs leading-snug">{donor.focus}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div>
                          <p className="font-bold text-xs mb-0.5">Partner Since:</p>
                          <p className="text-sm font-bold">{donor.since}</p>
                        </div>
                        <div>
                          <p className="font-bold text-xs mb-0.5">People Impacted:</p>
                          <p className="text-xs font-bold leading-tight">{donor.peopleImpacted}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Carousel Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {donors.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentDonorIndex(index)
              setIsPaused(false)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentDonorIndex
                ? "bg-[#367375] w-8"
                : "bg-[#367375]/30 hover:bg-[#24C3BC]/40 w-2"
            }`}
            aria-label={`Go to donor ${index + 1}`}
          />
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="mt-8 text-center">
  <p className="text-muted-foreground mb-4">Interested in supporting our mission?</p>
  <Button
    className="bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:from-[#24C3BC] hover:to-[#367375] shadow-lg px-6 py-3 rounded-full transition-all duration-300"
    asChild
  >
    <Link href="/contact" className="flex items-center justify-center gap-2">
      <Heart className="h-5 w-5" />
      Join as a Supporter
    </Link>
  </Button>
</div>

  </div>
</section>


<section id="services" className="bg-gradient-to-br from-slate-50 to-emerald-50/50 py-16">
  <div className="max-w-6xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <div className="flex justify-center">
        <Badge
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
          border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
          text-white rounded-full shadow-md"
        >
          <Briefcase className="w-4 h-4" />
          Our Services
        </Badge>
      </div>
      <br />
      <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold">
        Comprehensive Business Support
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
        End-to-end services designed to accelerate your entrepreneurial journey
      </p>
    </div>

    {/* Service Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Card
          key={index}
          className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
        >
          <CardContent className="p-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <service.icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
            <div className="space-y-2">
              {service.capabilities.map((capability, capIndex) => (
                <div key={capIndex} className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#367375] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground">{capability}</span>
                </div>
              ))}
            </div>
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
