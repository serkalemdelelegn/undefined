import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Cpu,
  Printer,
  Zap,
  Wrench,
  CircuitBoard,
  Shield,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Users,
  GraduationCap,
  Lightbulb,
  Sparkles,
  Factory,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const machineryTypes = [
  {
    name: "3D Printers",
    icon: Printer,
    description:
      "Advanced 3D printing technology for rapid prototyping and product development. Create complex geometries and functional parts with precision.",
    image: "/ethiopian-students-using-3d-printer-in-fablab.jpg",
    capabilities: [
      "Rapid prototyping of complex designs",
      "Multiple material support (PLA, ABS, PETG)",
      "High precision layer resolution",
      "Large build volume capacity",
      "Perfect for product development",
    ],
    applications: ["Product prototyping", "Educational models", "Custom parts fabrication", "Design iteration"],
    specs: {
      precision: "±0.1mm",
      materials: "Multiple",
      volume: "Large format",
    },
  },
  {
    name: "Laser Cutters",
    icon: Zap,
    description:
      "High-precision laser cutting and engraving systems for detailed work on various materials. Perfect for intricate designs and professional finishes.",
    image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    capabilities: [
      "Precision cutting and engraving",
      "Works with wood, acrylic, leather, fabric",
      "Intricate pattern creation",
      "Fast production speeds",
      "Professional-grade finishes",
    ],
    applications: ["Signage and branding", "Custom jewelry", "Architectural models", "Product packaging"],
    specs: {
      precision: "±0.05mm",
      power: "High wattage",
      area: "Large bed",
    },
  },
  {
    name: "CNC Routing Machines",
    icon: Cpu,
    description:
      "Computer-controlled routing systems for precise milling, cutting, and carving of solid materials. Industrial-grade precision for professional projects.",
    image: "/young-ethiopian-entrepreneurs-working-in-modern-fa.jpg",
    capabilities: [
      "3-axis precision milling",
      "Works with wood, plastics, soft metals",
      "Complex 3D carving capabilities",
      "Automated tool changing",
      "Production-ready output",
    ],
    applications: ["Furniture components", "Mold making", "Signage production", "Custom mechanical parts"],
    specs: {
      axes: "3-axis",
      materials: "Multiple",
      precision: "High accuracy",
    },
  },
  {
    name: "Soldering Stations",
    icon: CircuitBoard,
    description:
      "Professional-grade soldering equipment for electronics assembly and repair. Temperature-controlled stations for precision electronic work.",
    image: "/ethiopian-students-working-with-advanced-science-e.jpg",
    capabilities: [
      "Temperature-controlled soldering",
      "ESD-safe workstations",
      "Multiple tip configurations",
      "Hot air rework capabilities",
      "Precision electronics assembly",
    ],
    applications: ["Circuit board assembly", "Electronics repair", "Prototype development", "Component testing"],
    specs: {
      control: "Digital temp",
      safety: "ESD protected",
      precision: "Fine tip work",
    },
  },
  {
    name: "Electronics Workbenches",
    icon: Wrench,
    description:
      "Fully-equipped electronics workstations with power supplies, oscilloscopes, and testing equipment. Complete setup for electronics development and testing.",
    image: "/ethiopian-students-working-on-robotics-project-in-.jpg",
    capabilities: [
      "Variable power supplies",
      "Digital oscilloscopes",
      "Function generators",
      "Multimeter testing stations",
      "Component storage systems",
    ],
    applications: ["Circuit design and testing", "Signal analysis", "Power system development", "Quality control"],
    specs: {
      equipment: "Full suite",
      testing: "Advanced",
      capacity: "Multi-project",
    },
  },
]

const impactStats = [
  { number: "5+", label: "Machine Types", icon: Factory },
  { number: "100+", label: "Projects Completed", icon: Lightbulb },
  { number: "500+", label: "Users Trained", icon: Users },
  { number: "24/7", label: "Expert Support", icon: Shield },
]

const benefits = [
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Trained technicians provide hands-on support and safety training for all equipment",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety protocols and protective equipment for all machinery operations",
  },
  {
    icon: GraduationCap,
    title: "Skill Development",
    description: "Structured training programs to build technical competency and confidence",
  },
  {
    icon: Lightbulb,
    title: "Innovation Support",
    description: "From concept to prototype, we support your entire innovation journey",
  },
]

export default function MachineriesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
          <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-12">
            <div className="max-w-4xl mx-auto text-center">
             
              <div className="flex justify-center">
  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
    <Sparkles className="h-3 w-3 mr-1.5" />
    Advanced Tools for Innovation
  </Badge>
</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                FabLab Services
              </h1>
              <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
              Our FabLab features advanced tools like 3D printers, laser cutters, CNC machines, soldering stations, and electronics benches—perfect for prototyping, product development, and hands-on STEM learning.

              </p>
            
            </div>
          </div><br /><br /><br /><br />
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

        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            
            <div className="flex justify-center">
              <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md "
      >
        <Lightbulb className="w-4 h-4" />
        Our Mission
      </Badge>
      </div><br />
            <h2 className={`text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold`}>
              Transforming Ideas into Reality
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              These machines enable students, researchers, and entrepreneurs to design, fabricate, and test complex
              projects across engineering, robotics, and electronics. With expert guidance and safety protocols in
              place, our FabLab machinery transforms ideas into tangible solutions while fostering technical skills,
              innovation, and problem-solving capacity.
            </p>
          </div>
        </section>

        <section id="machinery" className="bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10 py-10">
  <div className="max-w-6xl mx-auto px-2">
    <div className="text-center mb-16">
      <div className="flex justify-center">
        <Badge
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
          border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
          text-white rounded-full shadow-md"
        >
          <Factory className="w-4 h-4" />
          Our Equipment
        </Badge>
      </div>
      <br />
      <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold">
        State-of-the-Art Machinery
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
        Professional-grade equipment for precision fabrication, prototyping, and innovation
      </p>
    </div>

    <div className="space-y-6">
      {machineryTypes.map((machine, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className={`relative h-72 md:h-80 lg:h-96 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image
                src={machine.image || "/placeholder.svg"}
                alt={machine.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center">
                    <machine.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">{machine.name}</h3>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 lg:p-6 space-y-2 h-72 md:h-80 lg:h-96">
              <p className="text-base text-muted-foreground leading-relaxed">{machine.description}</p>

              {/* Specifications */}
              <div className="grid grid-cols-3 gap-1.5">
                {Object.entries(machine.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="text-center p-1.5 rounded-lg bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10 border border-[#367375]/20"
                  >
                    <div className="text-xs font-bold text-[#367375]">{value}</div>
                    <div className="text-[10px] text-muted-foreground capitalize mt-1">{key}</div>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-[#367375]">
                  <CheckCircle className="h-4 w-4" />
                  Key Capabilities
                </h4>
                <div className="grid gap-1.5">
                  {machine.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="h-3.5 w-3.5 text-[#367375] flex-shrink-0 mt-0.5" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="font-semibold text-sm mb-2 text-[#367375]">Common Applications</h4>
                <div className="flex flex-wrap gap-1.5">
                  {machine.applications.map((app, appIndex) => (
                    <Badge
                      key={appIndex}
                      variant="secondary"
                      className="px-2.5 py-0.5 text-xs bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10 border border-[#367375]/20 text-[#367375]"
                    >
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>


<section className="max-w-6xl mx-auto px-4 py-20">
  <div className="text-center mb-16">
    <div className="flex justify-center">
      <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md"
      >
        <Shield className="w-4 h-4" />
        Why Choose Us
      </Badge>
    </div>
    <br />
    <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold">
      Complete Innovation Ecosystem
    </h2>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
      More than just equipment—we provide comprehensive support for your innovation journey
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {benefits.map((benefit, index) => {
      const IconComponent = benefit.icon
      return (
        <Card
          key={index}
          className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-[#367375]/30"
        >
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-full flex items-center justify-center mx-auto mb-4">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#367375]">{benefit.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
          </CardContent>
        </Card>
      )
    })}
  </div>
</section>


       
      </div>
      <Footer />
    </>
  )
}
