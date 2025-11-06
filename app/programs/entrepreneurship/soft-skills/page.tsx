import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  MessageSquare,
  Lightbulb,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  CheckCircle,
  Brain,
  Heart,
  Handshake,
  ArrowRight,
  Calendar,
  Mail,
  FileText,
  Building2,
  Tag,
  DollarSign,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const localSupportedBusinesses = [
  {
    name: "2D and Rotary CNC Machine",
    owner: "George Girmay",
    phone: "+251 98 707 7304",
    email: "",
    sector: "Manufacturing",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2023-01-15",
  },
  {
    name: "Agricultural Chemical Spray and Arial Mapping Drone",
    owner: "Mekonen Asmare",
    phone: "+251 98 698 8369",
    email: "",
    sector: "Engineering/Agriculture",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2023-02-20",
  },
  {
    name: "Akolle",
    owner: "Dawit Workneh",
    phone: "+251963167684",
    email: "workenhdawit@gmail.com",
    sector: "Technology/Agriculture",
    status: "Licensed",
    donor: "Mastercard Foundation",
    fundingDate: "2023-03-10",
  },
  {
    name: "Aluminum Works",
    owner: "Amanuel Zewdie",
    phone: "+251 90 007 0009",
    email: "amanuelzewdie16@gmail.com",
    sector: "Engineering/Service",
    status: "Licensed",
    donor: "European Union",
    fundingDate: "2023-01-25",
  },
  {
    name: "Animal feed production using Hydroponic technology",
    owner: "Yonas Nigussie & Abenezer Abebe",
    phone: "+251 91 270 6937",
    email: "",
    sector: "Agriculture/Food",
    status: "Licensed",
    donor: "Gates Foundation",
    fundingDate: "2023-04-05",
  },
  {
    name: "Automated Jacquard Needle Loom",
    owner: "Natnael Kassahun",
    phone: "+251973153901",
    email: "natnaelkassahun26@gmai.com",
    sector: "Engineering/Manufacturing",
    status: "Licensed",
    donor: "IMF",
    fundingDate: "2023-02-14",
  },
  {
    name: "Ayat Mar",
    owner: "Mikiyas Bitew",
    phone: "+251932943285",
    email: "mikibitew@gmail.com",
    sector: "Food",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2023-05-18",
  },
  {
    name: "Bahredin Omer food product retaill",
    owner: "BAHREDIN OUMER",
    phone: "+251911064256",
    email: "bahruoumer@gmail.com",
    sector: "Food",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2023-03-22",
  },
]

const sectorColors: Record<string, string> = {
  Manufacturing: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  "Engineering/Agriculture": "bg-green-500/10 text-green-700 border-green-500/20",
  "Technology/Agriculture": "bg-teal-500/10 text-teal-700 border-teal-500/20",
  "Engineering/Service": "bg-purple-500/10 text-purple-700 border-purple-500/20",
  "Agriculture/Food": "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  "Engineering/Manufacturing": "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
  Food: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  "Health/Social Enterprise": "bg-red-500/10 text-red-700 border-red-500/20",
  "Technology/Service": "bg-cyan-500/10 text-cyan-700 border-cyan-500/20",
  Engineering: "bg-slate-500/10 text-slate-700 border-slate-500/20",
  "Service/Food": "bg-amber-500/10 text-amber-700 border-amber-500/20",
  Service: "bg-violet-500/10 text-violet-700 border-violet-500/20",
  "Manufacturing/Product": "bg-sky-500/10 text-sky-700 border-sky-500/20",
  "Manufacturing/Food": "bg-lime-500/10 text-lime-700 border-lime-500/20",
  "Technology/Education": "bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-500/20",
  "Health/Service": "bg-rose-500/10 text-rose-700 border-rose-500/20",
  "Service/Tourism": "bg-pink-500/10 text-pink-700 border-pink-500/20",
  "Food/Agriculture": "bg-green-500/10 text-green-700 border-green-500/20",
  "Manufacturing/product": "bg-blue-500/10 text-blue-700 border-blue-500/20",
  "Engineering/Product": "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
}

export default function SoftSkillsPage() {
  const impactStats = [
    { number: "2,500+", label: "Students Trained", icon: Users },
    { number: "95%", label: "Confidence Increase", icon: TrendingUp },
    { number: "150+", label: "Workshops Delivered", icon: MessageSquare },
    { number: "40+", label: "Partner Organizations", icon: Handshake },
  ]

  const mainTopics = [
    {
      title: "Communication Mastery",
      description: "Master public speaking, written communication, and active listening skills.",
      icon: MessageSquare,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Teamwork & Collaboration",
      description: "Excel in team environments with conflict resolution and cross-cultural skills.",
      icon: Users,
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Leadership & Influence",
      description: "Build leadership capabilities, decision-making, and strategic thinking skills.",
      icon: Target,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Personal Excellence",
      description: "Develop emotional intelligence, time management, and adaptability.",
      icon: Heart,
      color: "from-blue-500 to-emerald-500",
    },
  ]

  const applicationPrograms = [
    {
      title: "Professional Communication Workshop",
      duration: "8 weeks",
      description:
        "Master the art of professional communication. Learn public speaking, presentation skills, business writing, and active listening. Build confidence in expressing ideas clearly and persuasively in any setting.",
      startDate: "March 25, 2025",
      email: "communication@stempowerethiopia.org",
      image: "/young-ethiopian-professional-presenting-to-group.jpg",
      status: "Applications Open",
      googleFormUrl: "https://forms.google.com/professional-communication",
    },
    {
      title: "Leadership Development Program",
      duration: "12 weeks",
      description:
        "Develop essential leadership skills including decision-making, team management, strategic thinking, and emotional intelligence. Learn to inspire and motivate others while building your unique leadership style.",
      startDate: "April 10, 2025",
      email: "leadership@stempowerethiopia.org",
      image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
      status: "Applications Open",
      googleFormUrl: "https://forms.google.com/leadership-development",
    },
    {
      title: "Team Collaboration Masterclass",
      duration: "6 weeks",
      description:
        "Learn to work effectively in diverse teams. Master conflict resolution, cross-cultural communication, and collaborative problem-solving. Build strong interpersonal relationships and create positive team dynamics.",
      startDate: "April 20, 2025",
      email: "teamwork@stempowerethiopia.org",
      image: "/ethiopian-students-soft-skills-workshop-teamwork.jpg",
      status: "Applications Open",
      googleFormUrl: "https://forms.google.com/team-collaboration",
    },
  ]

  const featuredSuccessStories = localSupportedBusinesses.slice(0, 8)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white py-10">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
          <div className="relative max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              <div className="flex justify-center">
  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
    <Sparkles className="h-3 w-3 mr-1.5" />
    Entrepreneurship & Incubation
  </Badge>
</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Soft Skills Training</h1>
              <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
              Develop essential interpersonal and professional skills through comprehensive training in communication, teamwork, leadership, and problem-solving. Build the confidence, adaptability, and emotional intelligence needed to collaborate effectively, lead with purpose, and excel in both academic and professional environments.
              </p>
             
            </div>
          </div><br /><br /><br />
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
  <div className="text-center mb-12">
  <div className="flex justify-center mb-4">
    <Badge
      className="mb-4 flex items-center gap-2 px-4 py-2 text-sm font-semibold
                 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white
                 rounded-full shadow-md"
    >
      <Brain className="h-3 w-3" />
      About Our Soft Skills Program
    </Badge>
    </div>
    <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold">
      Unlocking Potential Beyond the Classroom
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
      At STEMpower, we believe success isn't just about technical know-how—it's also about communication,
      teamwork, leadership, and problem-solving. Our soft skills programs equip students and young innovators
      with the interpersonal and professional abilities they need to thrive in any environment.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
      <Image
        src="/ethiopian-students-soft-skills-workshop-teamwork.jpg"
        alt="Students in soft skills workshop"
        fill
        className="object-cover"
      />
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-900">Why Soft Skills Matter</h3>
      <p className="text-muted-foreground leading-relaxed">
        Through interactive workshops, mentorship, and real-world scenarios, participants gain the confidence to
        lead projects, navigate challenges, and turn their ideas into meaningful impact.
      </p>
      <ul className="space-y-3">
        {[
          "Build confidence in communication and presentation",
          "Develop leadership and decision-making abilities",
          "Master teamwork and conflict resolution",
          "Enhance emotional intelligence and adaptability",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-[#367375] flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {mainTopics.map((topic, index) => (
      <Card
        key={index}
        className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2"
      >
        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#367375] to-[#24C3BC]`} />
        <CardContent className="pt-8 pb-6">
          <div
            className={`w-14 h-14 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
          >
            <topic.icon className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{topic.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>


        <section id="application-programs" className="bg-gradient-to-br from-slate-50 to-emerald-50/50 py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
    <div className="flex justify-center mb-4">
      <Badge
        className="mb-4 flex items-center gap-2 px-4 py-2 text-sm font-semibold
                   bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white
                   rounded-full shadow-md"
      >
        <Calendar className="h-3 w-3" />
        Apply to Our Programs
      </Badge>
      </div>
      <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold">
        Free Application Programs
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
        All our soft skills programs are completely free. Apply now to join our next cohort and unlock your full
        potential.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {applicationPrograms.map((program, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
        >
          <div className="relative h-48">
            <Image
              src={program.image || "/placeholder.svg"}
              alt={program.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white border-[#367375]">
                {program.status}
              </Badge>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-balance">{program.title}</CardTitle>
            <CardDescription>
              <div className="flex items-center gap-4 text-sm mt-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-[#367375]" />
                  <span>{program.duration}</span>
                </div>
                <Badge
                  variant="outline"
                  className="border-[#367375] text-[#367375] bg-[#367375]/10"
                >
                  FREE
                </Badge>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-sm">{program.description}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4 text-[#367375]" />
                <span>Starts: {program.startDate}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-[#367375]" />
                <span className="text-xs">{program.email}</span>
              </div>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white"
              asChild
            >
              <Link href={program.googleFormUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Apply Now
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


        <section className="max-w-6xl mx-auto px-4 py-16">
  {/* Header */}
  <div className="text-center mb-12">
    <div className="flex justify-center mb-4">
      <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold
                   bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white
                   rounded-full shadow-md"
      >
        <Award className="w-4 h-4" />
        From Learner to Digital Innovator
      </Badge>
    </div>
    <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold">
      Real Success Stories from Our Community
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
      Meet the innovative entrepreneurs who have grown through our digital skills program and are now
      transforming industries and improving lives across Ethiopia.
    </p>
  </div>

  {/* Featured Businesses */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8">
    {featuredSuccessStories.map((business, index) => (
      <Card
        key={index}
        className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border overflow-hidden"
      >
        <CardContent className="p-3">
          <div className="flex items-start justify-between mb-1.5">
            <div className="w-7 h-7 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
              <Building2 className="h-3.5 w-3.5 text-white" />
            </div>
            <Badge className="bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white text-[9px] px-1.5 py-0">
              {business.status}
            </Badge>
          </div>

          <h3 className="text-xs font-bold text-gray-900 mb-1.5 line-clamp-2 leading-tight min-h-[2rem]">
            {business.name}
          </h3>

          <Badge
            className={`${
              sectorColors[business.sector] || "bg-gray-100 text-gray-700"
            } mb-1 text-[9px] font-medium px-1.5 py-0`}
          >
            <Tag className="h-2 w-2 mr-0.5" />
            {business.sector}
          </Badge>

          <Badge className="bg-gradient-to-br from-[#367375]/20 to-[#24C3BC]/20 text-[#367375] border-[#367375]/20 mb-1.5 text-[9px] font-medium px-1.5 py-0">
            <DollarSign className="h-2 w-2 mr-0.5" />
            {business.donor}
          </Badge>

          <div className="space-y-1 mb-1.5 pt-1.5 border-t">
            <div className="flex items-start gap-1">
              <Users className="h-2.5 w-2.5 text-[#367375] flex-shrink-0 mt-0.5" />
              <div className="min-w-0 flex-1">
                <p className="text-[9px] text-muted-foreground line-clamp-2 leading-snug">{business.owner}</p>
              </div>
            </div>

            {business.phone && (
              <div className="flex items-start gap-1">
                <Phone className="h-2.5 w-2.5 text-[#367375] flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${business.phone}`}
                  className="text-[9px] text-muted-foreground hover:text-[#367375] transition-colors line-clamp-1"
                >
                  {business.phone}
                </a>
              </div>
            )}

            {business.email && (
              <div className="flex items-start gap-1">
                <Mail className="h-2.5 w-2.5 text-[#367375] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${business.email}`}
                  className="text-[9px] text-muted-foreground hover:text-[#367375] transition-colors line-clamp-1 break-all"
                >
                  {business.email}
                </a>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>

  {/* Gradient View All Button */}
  <div className="text-center mt-8">
    <Button
      size="lg"
      className="bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white px-8 py-3 font-semibold hover:scale-105 transition-transform"
      asChild
    >
      <Link href="/programs/entrepreneurship/business-development/supported-businesses">
        View All Success Stories
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </Button>
  </div>
</section>


        
      </div>
      <Footer />
    </>
  )
}
