import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
  GraduationCap,
  Users,
  Building2,
  TrendingUp,
  Lightbulb,
  Target,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MapPin,
} from "lucide-react"

export default function UniversityOutreachPage() {
  const impactStats = [
    { number: "40+", label: "Public Universities", icon: Building2 },
    { number: "10,000+", label: "Students Annually", icon: Users },
    { number: "2 Years", label: "To Full Adoption", icon: TrendingUp },
    { number: "100%", label: "Government Backed", icon: CheckCircle2 },
  ]

  const programBenefits = [
    {
      title: "Maximized Resources",
      description:
        "University labs, dormitories, and cafeterias transform into vibrant learning spaces during summer break",
      icon: Building2,
    },
    {
      title: "Expert Mentorship",
      description: "Professors and college students guide talented youth through hands-on STEM discovery",
      icon: GraduationCap,
    },
    {
      title: "Minimal Cost, Maximum Impact",
      description: "Efficient use of existing infrastructure creates opportunities without major investment",
      icon: Target,
    },
    {
      title: "Community Connection",
      description: "Local students gain access to university-level tools and inspiration to thrive",
      icon: Lightbulb,
    },
  ]

  const timeline = [
    {
      phase: "Innovation",
      title: "STEMpower Demonstration",
      description: "Proved that unused university assets during summer could become powerful learning opportunities",
      year: "Year 1",
    },
    {
      phase: "Validation",
      title: "Results Speak",
      description: "Program effectiveness and cost-benefit ratio demonstrated clear value to education ministry",
      year: "Year 2",
    },
    {
      phase: "Adoption",
      title: "Government Integration",
      description: "Ethiopian Ministry of Education fully adopted the model for nationwide implementation",
      year: "Year 2",
    },
    {
      phase: "Scale",
      title: "Nationwide Impact",
      description: "Now running across all 40+ public universities, reaching 10,000+ students every summer",
      year: "Today",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
        <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] bg-cover bg-center opacity-20" />
        <div className="container relative mx-auto px-4 py-20 md:py-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center">
              <Badge  
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
                           border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
                           text-white rounded-full shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                Government-Adopted Success Story
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Turning Summer Break into Opportunity
            </h1>
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
              That's exactly what University STEM Outreach achieves. Instead of leaving labs, dormitories, and
              cafeterias unused during the break, we demonstrated how these university assets could be transformed into
              vibrant summer programs for talented youth.
            </p>
          </div><br />
          <div className="flex justify-center">
              <Button size="lg" asChild className="bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white font-semibold hover:opacity-90 px-8 py-3 transition-all">
                <Link href="/programs/stem-operations/university-outreach/universities">
                  View Participating Universities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
        </div><br /><br /><br />
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
                  <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-[#367375] to-[#24C3BC]">
                The Results Spoke for Themselves
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From pilot program to nationwide government initiative in just two years
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg"
                  alt="Students in university STEM program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#367375]">
                  <h3 className="font-bold text-xl mb-2 text-[#367375]">Minimal Cost</h3>
                  <p className="text-muted-foreground">
                    By utilizing existing university infrastructure during summer break, the program requires minimal
                    additional investment while delivering maximum educational impact.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#24C3BC]">
                  <h3 className="font-bold text-xl mb-2 text-[#24C3BC]">Maximum Impact</h3>
                  <p className="text-muted-foreground">
                    Within just two years, the Ethiopian Ministry of Education recognized the program's effectiveness
                    and adopted it nationwide across all 40+ public universities.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#367375]">
                  <h3 className="font-bold text-xl mb-2 text-[#367375]">Sustainable Growth</h3>
                  <p className="text-muted-foreground">
                    Today, the initiative runs as a government-backed program, ensuring long-term sustainability and
                    continued impact for thousands of students every summer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-[#367375] to-[#24C3BC]">
                Journey to Nationwide Impact
              </h2>
              <p className="text-lg text-muted-foreground">How a demonstration became a government-adopted program</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="text-sm font-bold text-[#367375] mb-2">{item.year}</div>
                      <Badge className="mb-3 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white border-0">
                        {item.phase}
                      </Badge>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                  {index < timeline.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 h-6 w-6 text-[#24C3BC] z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-[#367375] to-[#24C3BC]">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transforming university campuses into vibrant summer STEM centers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                  >
                    <div className="h-2 bg-gradient-to-br from-[#367375] to-[#24C3BC]" />
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

     

      <Footer />
    </div>
  )
}
