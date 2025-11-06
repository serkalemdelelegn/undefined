"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Package,
  Beaker,
  ShoppingCart,
  Sparkles,
  Factory,
  CheckCircle,
  ArrowRight,
  Zap,
  Cog,
  TrendingUp,
  DollarSign,
  Phone,
  Mail,Printer, Users, Lightbulb,Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage() {
  const [showAllEdu, setShowAllEdu] = useState(false)
  const [showAllFab, setShowAllFab] = useState(false)
  const educationalProducts = [
    {
      name: "Pendulum",
      slug: "pendulum",
      price: "Br 5,999.00",
      category: "Physics",
      description:
        "Demonstrate principles of periodic motion, gravity, and energy conservation with this precision pendulum kit.",
      features: ["Adjustable length", "Angle measurement", "Energy transfer demo", "Teacher guide included"],
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
    },
    {
      name: "Connection of Resistors & Practical Applications",
      slug: "connection-of-resistors",
      price: "Br 9,199.00",
      category: "Physics",
      description: "Comprehensive kit for understanding series and parallel circuits with real-world applications.",
      features: ["Multiple resistors", "Circuit boards", "Measurement tools", "Practical exercises"],
      image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
    },
    {
      name: "Basic Logic Gates",
      slug: "basic-logic-gates",
      price: "Br 9,499.00",
      category: "Physics",
      description:
        "Explore digital electronics and computer science fundamentals with hands-on logic gate experiments.",
      features: ["AND, OR, NOT gates", "Truth table exercises", "Circuit building", "Digital logic concepts"],
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
    },
    {
      name: "High Heat Capacity of Water",
      slug: "high-heat-capacity-of-water",
      price: "Br 4,599.00",
      category: "Chemistry",
      description:
        "Investigate thermal properties of water and understand heat capacity through practical experiments.",
      features: ["Calorimeter included", "Temperature sensors", "Heat transfer demo", "Data collection sheets"],
      image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
    },
    {
      name: "Pulley and Mechanical Advantage",
      slug: "pulley-mechanical-advantage",
      price: "Br 11,699.00",
      category: "Physics",
      description: "Learn about simple machines, mechanical advantage, and force multiplication with pulley systems.",
      features: ["Multiple pulley types", "Weight set", "Force measurement", "Mechanical advantage calculations"],
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
    },
    {
      name: "Density, Mass, Volume, and Basic Geometry Kit",
      slug: "density-mass-volume-geometry",
      price: "Br 9,479.00",
      category: "Mathematics",
      description: "Master fundamental concepts of measurement, density calculations, and geometric principles.",
      features: ["Geometric shapes", "Measurement tools", "Balance scale", "Volume containers"],
      image: "/ethiopian-students-participating-in-science-fair-w.jpg",
    },
    {
      name: "Binomial Expansion Equation",
      slug: "binomial-expansion",
      price: "Br 2,999.00",
      category: "Mathematics",
      description: "Visualize and understand binomial expansion through hands-on mathematical modeling.",
      features: ["Visual models", "Expansion patterns", "Algebraic tiles", "Practice problems"],
      image: "/ethiopian-students-participating-in-science-fair-w.jpg",
    },
    {
      name: "Gear Ratio",
      slug: "gear-ratio",
      price: "Br 2,999.00",
      category: "Physics",
      description: "Explore mechanical engineering concepts with gear systems and ratio calculations.",
      features: ["Multiple gear sizes", "Ratio calculations", "Speed measurement", "Torque demonstration"],
      image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    },
    {
      name: "Pascal's Law",
      slug: "pascals-law",
      price: "Br 8,999.00",
      category: "Physics",
      description: "Demonstrate hydraulic principles and pressure transmission in fluids with practical applications.",
      features: ["Hydraulic system", "Pressure gauges", "Force multiplication", "Real-world applications"],
      image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
    },
    {
      name: "Equilibrium",
      slug: "equilibrium",
      price: "Br 4,499.00",
      category: "Physics",
      description: "Study balance, torque, and center of mass through hands-on equilibrium experiments.",
      features: ["Balance beam", "Weight sets", "Torque calculations", "Center of mass demos"],
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
    },
    {
      name: "Hyperbola",
      slug: "hyperbola",
      price: "Br 6,499.00",
      category: "Mathematics",
      description: "Visualize and understand hyperbolic functions and conic sections through physical models.",
      features: ["3D models", "Graphing tools", "Equation visualization", "Practice exercises"],
      image: "/ethiopian-students-participating-in-science-fair-w.jpg",
    },
    {
      name: "Newton's Cradle",
      slug: "newtons-cradle",
      price: "Br 9,899.00",
      category: "Physics",
      description: "Demonstrate conservation of momentum and energy with this classic physics demonstration tool.",
      features: ["Precision balanced", "Durable construction", "Energy transfer demo", "Momentum conservation"],
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
    },
  ]

  const fablabProducts = [
    {
      name: "Pelletizer Machine",
      slug: "pelletizer-machine",
      price: "Br 375,000.00",
      category: "Agricultural Equipment",
      description:
        "High-capacity pelletizing machine for producing animal feed pellets. Suitable for commercial poultry, aquaculture, and livestock operations.",
      features: [
        "300-500 kg/hour capacity",
        "Variable density control",
        "Multiple die sizes",
        "Energy efficient motor",
        "Easy maintenance",
        "Durable construction",
      ],
      applications: ["Chicken feed production", "Fish feed manufacturing", "Livestock feed", "Commercial operations"],
      image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    },
    {
      name: "Automatic Silk Screen Printer",
      slug: "silk-screen-printer",
      price: "Br 250,000.00",
      category: "Manufacturing Equipment",
      description:
        "Professional-grade automatic silk screen printing machine for textile printing, signage, and promotional materials.",
      features: [
        "Automated operation",
        "Adjustable print area",
        "Multi-color capability",
        "Precision alignment",
        "Fast production speed",
        "User-friendly controls",
      ],
      applications: ["T-shirt printing", "Textile manufacturing", "Signage production", "Promotional materials"],
      image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    },
    {
      name: "Automatic Bell Management System",
      slug: "bell-management-system",
      price: "Br 24,000.00",
      category: "Automation",
      description:
        "Programmable bell system for schools and institutions with customizable schedules and automatic operation.",
      features: [
        "Programmable schedule",
        "Multiple bell tones",
        "Automatic operation",
        "Battery backup",
        "Easy programming",
        "Reliable performance",
      ],
      applications: ["Schools", "Universities", "Factories", "Institutions"],
      image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    },
  ]

  const impactStats = [
    { number: "12+", label: "3D Printers", icon: Printer },
    { number: "2,500+", label: "Active Students", icon: Users },
    { number: "1,200+", label: "Projects Built", icon: Lightbulb },
    { number: "35+", label: "Expert Mentors", icon: Award },
  ]
  
  const displayedEdu = showAllEdu ? educationalProducts : educationalProducts.slice(0, 6)
  const displayedFab = showAllFab ? fablabProducts : fablabProducts.slice(0, 6)
 const gradientTextClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold"
  const gradientButtonClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all"
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
          <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-15">
            <div className="max-w-4xl mx-auto text-center">
              
              <div className="flex justify-center">
  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
    <ShoppingCart className="h-3 w-3 mr-1.5" />
    Complete Product Catalog
  </Badge>
</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Educational & FabLab Products
              </h1>
              <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
                Discover our comprehensive range of educational science kits and innovative FabLab products. From
                hands-on learning tools to agricultural equipment, we provide solutions that empower education and
                entrepreneurship across Ethiopia.
              </p>
              
            </div>
          </div><br /><br />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-50 to-transparent" />
        </section>

        {/* Categories Overview */}
        <section className="max-w-6xl mx-auto px-4 -mt-26 relative z-20">
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
</section>


        {/* Educational Products Section */}
        <section id="educational" className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <Badge className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white rounded-full shadow-md">
              <Package className="w-4 h-4" />
              Educational Products
            </Badge>
          </div>
          <br />
          <h2 className={`text-4xl md:text-5xl mb-6 ${gradientTextClass} text-balance`}>Science Kits for Every Subject</h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hands-on learning tools designed to make science engaging, interactive, and accessible. Each kit includes all materials and instructions needed to perform curriculum-aligned experiments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedEdu.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border flex flex-col group">
              <Link href={`/programs/fablab/products/${product.slug}`} className="flex flex-col flex-grow">
                <div className="relative h-40">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-white/90 text-[#367375] border-[#24C3BC]/30 text-xs">{product.category}</Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-balance leading-snug group-hover:text-[#24C3BC] transition-colors">{product.name}</CardTitle>
                  <CardDescription className="text-xs line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pb-3">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#367375] to-[#24C3BC] bg-clip-text text-transparent">{product.price}</span>
                      <Badge variant="secondary" className="text-xs bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white border-0">
                        <CheckCircle className="h-3.5 w-3.5 mr-1" />
                        In Stock
                      </Badge>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-xs font-semibold text-muted-foreground">Key Features:</p>
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs">
                          <CheckCircle className="h-3.5 w-3.5 text-[#24C3BC] flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <div className="p-4 pt-0">
                  <Button className="w-full bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#2c5e60] hover:to-[#1ca7a1] text-white font-medium transition-all duration-300" size="sm">
                    <ArrowRight className="mr-2 h-3.5 w-3.5" /> View Details
                  </Button>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {educationalProducts.length > 6 && (
          <div className="flex justify-center mt-10">
            <Button onClick={() => setShowAllEdu(!showAllEdu)} className="px-6 py-3 font-semibold bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white rounded-full shadow-md hover:opacity-90 transition-all">
              {showAllEdu ? "Show Less" : "Load More"}
            </Button>
          </div>
        )}
      </section>


        <section
  id="fablab"
  className="bg-gradient-to-br from-slate-50 to-[#24C3BC]/10 py-16 scroll-mt-20"
>
  <div className="max-w-6xl mx-auto px-4">
    {/* ✅ Section Header */}
    <div className="text-center mb-12">
      <div className="flex justify-center">
        <Badge
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
          border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
          text-white rounded-full shadow-md"
        >
          <Package className="w-4 h-4" />
          FabLab Products
        </Badge>
      </div>
      <br />
      <h2
        className={`text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold`}
      >
        Agricultural & Manufacturing Solutions
      </h2>
      <p className="text-base text-gray-600 max-w-3xl mx-auto text-pretty">
        Locally designed and fabricated equipment to support Ethiopian farmers, entrepreneurs, and institutions.
        Built for durability, efficiency, and local conditions.
      </p>
    </div>

    {/* ✅ Product Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {fablabProducts.map((product, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#367375]/20 flex flex-col group"
        >
          <Link href={`/programs/fablab/products/${product.slug}`} className="flex flex-col flex-grow">
            {/* Product Image */}
            <div className="relative h-44">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <Badge className="absolute top-3 right-3 bg-white/90 text-[#367375] border-[#367375]/20 text-xs">
                {product.category}
              </Badge>
              <div className="absolute bottom-3 left-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Factory className="h-5 w-5 text-[#24C3BC]" />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-balance leading-snug group-hover:text-[#24C3BC] transition-colors">
                {product.name}
              </CardTitle>
              <div className="text-2xl font-bold text-[#367375] mb-2">
                {product.price}
              </div>
              <CardDescription className="text-xs line-clamp-2">
                {product.description}
              </CardDescription>
            </CardHeader>

            {/* Features & Applications */}
            <CardContent className="flex-grow pb-3">
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-[#367375] mb-1.5 flex items-center gap-1.5">
                    <Cog className="h-3.5 w-3.5" />
                    Key Features:
                  </p>
                  <div className="space-y-1">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-1.5 text-xs"
                      >
                        <CheckCircle className="h-3.5 w-3.5 text-[#24C3BC] flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#367375] mb-1.5 flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5" />
                    Applications:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app, appIndex) => (
                      <Badge
                        key={appIndex}
                        variant="secondary"
                        className="text-xs py-0 border border-[#367375]/20 bg-[#24C3BC]/10 text-[#367375]"
                      >
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>

            {/* View Details Button */}
            <div className="p-4 pt-0">
              <Button
                className="w-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white 
                hover:opacity-90 transition-all"
                size="sm"
              >
                <ArrowRight className="mr-2 h-3.5 w-3.5" />
                View Details
              </Button>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  </div>
</section>


        {/* Why Choose Our Products */}
        <section className="max-w-6xl mx-auto px-4 py-16">
  {/* ✅ Section Header */}
  <div className="text-center mb-12">
    <div className="flex justify-center">
      <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md"
      >
        <Sparkles className="w-4 h-4" />
        Why Choose Us
      </Badge>
    </div>
    <br />
    <h2
      className={`text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold`}
    >
      Quality, Affordability, Local Support
    </h2>
    <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
      Empowering schools, students, and innovators through reliable educational kits and locally fabricated technology solutions.
    </p>
  </div>

  {/* ✅ Three Cards */}
  <div className="grid md:grid-cols-3 gap-6">
    {/* 1️⃣ Curriculum Aligned */}
    <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#367375]/20">
      <CardContent className="pt-6 pb-5">
        <div className="w-14 h-14 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
          <CheckCircle className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-[#367375]">Curriculum Aligned</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          All educational products are designed to align with Ethiopia's national curriculum, ensuring relevance and educational value.
        </p>
      </CardContent>
    </Card>

    {/* 2️⃣ Affordable Pricing */}
    <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#367375]/20">
      <CardContent className="pt-6 pb-5">
        <div className="w-14 h-14 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
          <DollarSign className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-[#367375]">Affordable Pricing</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Competitive prices designed to make quality education and equipment accessible to schools, farms, and institutions across Ethiopia.
        </p>
      </CardContent>
    </Card>

    {/* 3️⃣ Local Support */}
    <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#367375]/20">
      <CardContent className="pt-6 pb-5">
        <div className="w-14 h-14 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
          <Cog className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-[#367375]">Local Support</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Designed and fabricated locally with ongoing support, training, and maintenance services available throughout Ethiopia.
        </p>
      </CardContent>
    </Card>
  </div>
</section>


        
      </div>
      <Footer />
    </>
  )
}
