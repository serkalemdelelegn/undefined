import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, GraduationCap, Package, Cpu, ArrowRight, Lightbulb, Users, Zap, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const fablabPrograms = [
  {
    title: "Maker Space",
    description:
      "A place where creativity comes alive. Hands-on labs where students explore ideas, experiment with new tools, and bring bold dreams to life through 3D printing, electronics, robotics, design, and DIY projects.",
    icon: Wrench,
    stats: { focus: "Creativity", approach: "Hands-on", outcome: "Innovation" },
    features: [
      "3D printing and prototyping",
      "Electronics and robotics",
      "Design and fabrication",
      "Simple DIY projects",
      "Mentor guidance and support",
      "Peer collaboration environment",
    ],
    image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    detailedDescription:
      "Here, learning is fun, teamwork is encouraged, and failure is just another step toward discovery. With guidance from mentors and the support of peers, students gain the confidence to innovate, solve real-world problems, and imagine new possibilities for their communities. Maker Space isn't just about making things—it's about making change.",
  },
  {
    title: "Training Consultancy",
    description:
      "Evidence-driven solutions that strengthen education systems and build local capacity. Partnering with schools, universities, private sectors, and governments to design and deliver customized STEM programs.",
    icon: GraduationCap,
    stats: { reach: "National", partners: "Multiple", impact: "Sustainable" },
    features: [
      "Teacher training programs",
      "Curriculum development",
      "Maker Space establishment",
      "FabLab setup and equipment",
      "School and university partnerships",
      "Government collaboration",
    ],
    image: "/ethiopian-educators-participating-in-stem-training.jpg",
    detailedDescription:
      "With a proven track record across the nation, our approach ensures sustainable impact, combining hands-on learning with strategic consultancy to create pathways for youth employment, innovation, and community development. By investing in STEM education today, institutions and donors help shape a skilled, future-ready generation.",
  },
  {
    title: "Products",
    description:
      "Carefully designed kits that bring classrooms to life by turning abstract concepts into fun, practical experiments. Based on national curricula, these kits spark curiosity and encourage problem-solving.",
    icon: Package,
    stats: { basis: "Curricula", design: "Practical", access: "Affordable" },
    features: [
      "Based on national curricula",
      "Building simple circuits",
      "Chemistry experiments",
      "Physics discoveries",
      "Easy to use for all ages",
      "Affordable and adaptable",
    ],
    image: "/ethiopian-students-using-educational-science-kits-.jpg",
    detailedDescription:
      "Each kit is carefully designed to spark curiosity, encourage problem-solving, and most of all based on the national curricula and give students the tools to explore science in a hands-on way. Easy to use, affordable, and adaptable for all ages, these kits empower teachers, schools, and communities to make STEM learning accessible, engaging, and unforgettable.",
  },
  {
    title: "Services",
    description:
      "State-of-the-art machinery designed for precision, versatility, and hands-on STEM learning. Equipped with advanced tools for prototyping, product development, and technical experimentation.",
    icon: Cpu,
    stats: { equipment: "Advanced", purpose: "Prototyping", training: "Expert" },
    features: [
      "3D printers for rapid prototyping",
      "Laser cutters for precision work",
      "CNC routing machines",
      "Soldering stations",
      "Electronics workbenches",
      "Safety protocols and expert guidance",
    ],
    image: "/advanced-fablab-machinery-including-3d-printers-an.jpg",
    detailedDescription:
      "These machines enable students, researchers, and entrepreneurs to design, fabricate, and test complex projects across engineering, robotics, and electronics. With expert guidance and safety protocols in place, our FabLab machinery transforms ideas into tangible solutions while fostering technical skills, innovation, and problem-solving capacity.",
  },
]

export default function FabLabPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
        <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] bg-cover bg-center opacity-20" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                
               
                  <Badge className="mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-lg border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
                    <Wrench className="h-3 w-3 mr-1.5" />
                    FabLab Division
                  </Badge>
               
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Innovation Through Making and Learning
                </h1>
                <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
                Innovation hubs with maker spaces, professional training programs, curriculum-based educational kits,
                and state-of-the-art machinery for hands-on learning, prototyping, and technical experimentation.
                </p>
               
              </div>
              <div className="relative">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg"
                    alt="STEM Operations in Ethiopia"
                    fill
                    className="object-cover"
                  />
                </div>
                
               
              </div>
            </div>
          </div>
          <br />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-gradient-to-b from-[#EAF9F9] to-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge
          className="mb-4 px-4 py-2 text-base text-white bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-full shadow-md"
        >
          Our Programs
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text">
          FabLab Offerings
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive programs designed to foster innovation, creativity, and technical excellence
        </p>
      </div>

      {/* Program Cards */}
      <div className="space-y-8">
        {fablabPrograms.map((program, index) => (
          <Card
            key={index}
            className="relative overflow-hidden border-2 border-transparent rounded-xl 
            transition-all duration-300 group 
            before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r 
            before:from-[#367375] before:to-[#24C3BC] before:opacity-0 
            before:transition-opacity before:duration-300 before:-z-10 
            hover:before:opacity-100 hover:shadow-2xl"
          >
            <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
              
              {/* Image Section */}
              <div className={`relative h-[280px] ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="p-3 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg">
                    <program.icon className="h-6 w-6 text-[#24C3BC]" />
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  {Object.entries(program.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex-1 text-center p-2 rounded-lg bg-white/95 backdrop-blur-sm border border-white/50"
                    >
                      <div className="text-lg font-bold bg-gradient-to-r from-[#367375] to-[#24C3BC] text-transparent bg-clip-text">
                        {value}
                      </div>
                      <div className="text-[10px] text-muted-foreground capitalize font-medium">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className={`p-6 flex flex-col ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                  <Badge className="bg-gradient-to-r from-[#367375]/10 to-[#24C3BC]/10 text-[#367375] hover:from-[#367375]/20 hover:to-[#24C3BC]/20 text-xs">
                    Core
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#24C3BC]" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.slice(0, 4).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2 text-xs p-2 rounded-md bg-slate-50 border border-[#367375]/10"
                      >
                        <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#367375] to-[#24C3BC] mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full mt-auto h-10 text-sm font-semibold text-white 
                  bg-gradient-to-r from-[#367375] to-[#24C3BC]
                  hover:from-[#24C3BC] hover:to-[#367375]
                  transition-all duration-300 group/btn"
                  asChild
                >
                  <Link
                    href={`/programs/fablab/${program.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9-]/g, "")}`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>


      

      
      </main>
      <Footer />
    </div>
  )
}
