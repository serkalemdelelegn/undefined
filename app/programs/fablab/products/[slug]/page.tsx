import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Package,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  Sparkles,
  Info,
  Zap,
  Beaker,
  Factory,
  Cog,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = {
  pendulum: {
    name: "Pendulum",
    price: "Br 5,999.00",
    category: "Physics",
    description:
      "A pendulum science kit is an educational tool designed to help students and enthusiasts explore the principles of pendulum motion, which is fundamental in physics for understanding oscillations, energy conservation, and harmonic motion.",
    fullDescription:
      "These kits typically include components to construct a working pendulum apparatus, along with instructional materials to guide experiments and observations. Perfect for classroom demonstrations and hands-on learning experiences.",
    features: [
      "Adjustable length pendulum for varying period experiments",
      "Precision angle measurement tools",
      "Energy transfer demonstration capabilities",
      "Comprehensive teacher guide with lesson plans",
      "Durable construction for long-term use",
      "Curriculum-aligned experiments included",
    ],
    contents: [
      "Pendulum Bobs: Objects of varying materials (steel, wood, aluminum) to study mass effects",
      "Support Stands and Rods: For suspending the pendulum at different heights",
      "Cords or Strings: To adjust the length of the pendulum",
      "Clamps and Mounts: For securing components in place",
      "Protractor and measurement tools",
      "Instruction manual with experiments",
    ],
    applications: [
      "Understanding periodic motion",
      "Studying gravitational acceleration",
      "Energy conservation demonstrations",
      "Harmonic motion experiments",
      "Physics curriculum alignment",
    ],
    image: "/ethiopian-students-working-with-science-equipment-.jpg",
    icon: Zap,
  },
  "connection-of-resistors": {
    name: "Connection of Resistors & Practical Applications",
    price: "Br 9,199.00",
    category: "Physics",
    description:
      "Comprehensive kit for understanding series and parallel circuits with real-world applications in electrical engineering and electronics.",
    fullDescription:
      "This advanced electronics kit provides hands-on experience with resistor configurations, circuit analysis, and practical applications. Students learn fundamental concepts of electrical resistance, current flow, and voltage distribution through engaging experiments.",
    features: [
      "Multiple resistor values for diverse experiments",
      "Professional circuit boards for reliable connections",
      "Digital multimeter for accurate measurements",
      "Practical exercises with real-world scenarios",
      "Series and parallel circuit demonstrations",
      "Comprehensive lab manual included",
    ],
    contents: [
      "Assorted resistors (various values and wattages)",
      "Breadboard and circuit boards",
      "Connecting wires and clips",
      "Power supply unit",
      "Measurement tools",
      "Detailed instruction manual",
    ],
    applications: [
      "Circuit analysis and design",
      "Understanding Ohm's Law",
      "Series and parallel configurations",
      "Voltage divider circuits",
      "Current distribution studies",
    ],
    image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
    icon: Zap,
  },
  "basic-logic-gates": {
    name: "Basic Logic Gates",
    price: "Br 9,499.00",
    category: "Physics",
    description:
      "Explore digital electronics and computer science fundamentals with hands-on logic gate experiments and circuit building activities.",
    fullDescription:
      "This comprehensive digital electronics kit introduces students to the building blocks of modern computing. Learn how logic gates form the foundation of digital circuits, processors, and computer systems through interactive experiments.",
    features: [
      "AND, OR, NOT, NAND, NOR, XOR gates included",
      "Truth table exercises and verification",
      "Circuit building and testing capabilities",
      "Digital logic concepts explained clearly",
      "LED indicators for visual feedback",
      "Progressive learning modules",
    ],
    contents: [
      "Logic gate ICs (various types)",
      "Breadboard and mounting board",
      "LED indicators and resistors",
      "Power supply and switches",
      "Connecting wires",
      "Comprehensive instruction manual",
    ],
    applications: [
      "Digital circuit design",
      "Boolean algebra applications",
      "Computer science fundamentals",
      "Logic circuit analysis",
      "Sequential and combinational circuits",
    ],
    image: "/ethiopian-students-working-with-science-equipment-.jpg",
    icon: Zap,
  },
  "high-heat-capacity-of-water": {
    name: "High Heat Capacity of Water",
    price: "Br 4,599.00",
    category: "Chemistry",
    description:
      "Investigate thermal properties of water and understand heat capacity through practical experiments and temperature measurements.",
    fullDescription:
      "This thermodynamics kit allows students to explore why water is such an effective heat storage medium. Through carefully designed experiments, students measure and compare heat capacities, understand energy transfer, and learn about thermal equilibrium.",
    features: [
      "Professional calorimeter included",
      "Precision temperature sensors",
      "Heat transfer demonstration tools",
      "Data collection and analysis sheets",
      "Multiple experiment protocols",
      "Safety equipment included",
    ],
    contents: [
      "Insulated calorimeter",
      "Digital thermometers",
      "Heating elements",
      "Various liquid samples",
      "Measurement containers",
      "Lab manual with experiments",
    ],
    applications: [
      "Heat capacity calculations",
      "Thermal equilibrium studies",
      "Energy conservation principles",
      "Calorimetry experiments",
      "Temperature change analysis",
    ],
    image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
    icon: Beaker,
  },
  "pulley-mechanical-advantage": {
    name: "Pulley and Mechanical Advantage",
    price: "Br 11,699.00",
    category: "Physics",
    description:
      "Learn about simple machines, mechanical advantage, and force multiplication with comprehensive pulley systems and measurement tools.",
    fullDescription:
      "This mechanical engineering kit provides hands-on experience with one of humanity's oldest and most useful simple machines. Students explore how pulleys reduce effort force, understand mechanical advantage calculations, and see real-world applications of these principles.",
    features: [
      "Multiple pulley types (fixed, movable, compound)",
      "Calibrated weight set for experiments",
      "Force measurement tools (spring scales)",
      "Mechanical advantage calculation guides",
      "Durable mounting system",
      "Real-world application examples",
    ],
    contents: [
      "Various pulley wheels and axles",
      "Rope and cable systems",
      "Weight set (various masses)",
      "Spring scales for force measurement",
      "Mounting frame and clamps",
      "Comprehensive instruction manual",
    ],
    applications: [
      "Simple machine principles",
      "Force multiplication studies",
      "Work and energy concepts",
      "Engineering applications",
      "Mechanical advantage calculations",
    ],
    image: "/ethiopian-students-working-with-science-equipment-.jpg",
    icon: Cog,
  },
  "density-mass-volume-geometry": {
    name: "Density, Mass, Volume, and Basic Geometry Kit",
    price: "Br 9,479.00",
    category: "Mathematics",
    description:
      "Master fundamental concepts of measurement, density calculations, and geometric principles through hands-on activities.",
    fullDescription:
      "This comprehensive mathematics and physics kit combines measurement skills with geometric understanding. Students learn to calculate density, measure mass and volume accurately, and understand the relationship between these fundamental properties of matter.",
    features: [
      "Geometric shapes (cubes, spheres, cylinders, etc.)",
      "Precision measurement tools",
      "Digital balance scale",
      "Graduated volume containers",
      "Density calculation worksheets",
      "Multiple material samples",
    ],
    contents: [
      "Set of geometric solids (various materials)",
      "Digital balance scale",
      "Graduated cylinders and beakers",
      "Rulers and calipers",
      "Material samples for density testing",
      "Lab manual with exercises",
    ],
    applications: [
      "Density calculations",
      "Volume measurement techniques",
      "Mass determination",
      "Geometric property analysis",
      "Material identification",
    ],
    image: "/ethiopian-students-participating-in-science-fair-w.jpg",
    icon: Package,
  },
  "binomial-expansion": {
    name: "Binomial Expansion Equation",
    price: "Br 2,999.00",
    category: "Mathematics",
    description:
      "Visualize and understand binomial expansion through hands-on mathematical modeling and algebraic manipulation.",
    fullDescription:
      "This innovative mathematics kit makes abstract algebraic concepts tangible. Students use physical models to understand Pascal's Triangle, binomial coefficients, and expansion patterns, making advanced algebra accessible and engaging.",
    features: [
      "Visual models for binomial expansion",
      "Pascal's Triangle demonstration tools",
      "Algebraic tiles for manipulation",
      "Progressive practice problems",
      "Pattern recognition exercises",
      "Coefficient calculation guides",
    ],
    contents: [
      "Algebraic tiles and counters",
      "Pascal's Triangle model",
      "Expansion pattern charts",
      "Practice worksheets",
      "Visual aids and diagrams",
      "Instruction manual",
    ],
    applications: [
      "Binomial theorem understanding",
      "Algebraic expansion",
      "Coefficient calculations",
      "Pattern recognition",
      "Polynomial operations",
    ],
    image: "/ethiopian-students-participating-in-science-fair-w.jpg",
    icon: Package,
  },
  "gear-ratio": {
    name: "Gear Ratio",
    price: "Br 2,999.00",
    category: "Physics",
    description:
      "Explore mechanical engineering concepts with gear systems, ratio calculations, and speed-torque relationships.",
    fullDescription:
      "This mechanical engineering kit introduces students to the fundamental concepts of gear systems used in countless machines. Learn how gears transmit motion, change speed and torque, and understand the mathematical relationships that govern mechanical advantage.",
    features: [
      "Multiple gear sizes and configurations",
      "Ratio calculation worksheets",
      "Speed measurement tools",
      "Torque demonstration capabilities",
      "Modular mounting system",
      "Real-world application examples",
    ],
    contents: [
      "Assorted gears (various sizes and teeth counts)",
      "Mounting board and axles",
      "Speed measurement tools",
      "Connecting components",
      "Calculation guides",
      "Instruction manual",
    ],
    applications: [
      "Gear ratio calculations",
      "Speed and torque relationships",
      "Mechanical advantage",
      "Power transmission",
      "Engineering design principles",
    ],
    image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    icon: Cog,
  },
  "pascals-law": {
    name: "Pascal's Law",
    price: "Br 8,999.00",
    category: "Physics",
    description:
      "Demonstrate hydraulic principles and pressure transmission in fluids with practical applications in engineering.",
    fullDescription:
      "This hydraulics kit brings fluid mechanics to life through hands-on experiments. Students discover how hydraulic systems multiply force, understand pressure transmission in confined fluids, and see real-world applications in brakes, lifts, and heavy machinery.",
    features: [
      "Complete hydraulic system setup",
      "Pressure gauges for measurement",
      "Force multiplication demonstrations",
      "Real-world application examples",
      "Safety features included",
      "Comprehensive experiment guide",
    ],
    contents: [
      "Hydraulic cylinders (various sizes)",
      "Pressure gauges",
      "Connecting tubes and valves",
      "Fluid reservoir",
      "Force application tools",
      "Lab manual with experiments",
    ],
    applications: [
      "Hydraulic system principles",
      "Pressure transmission",
      "Force multiplication",
      "Fluid mechanics",
      "Engineering applications",
    ],
    image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
    icon: Zap,
  },
  equilibrium: {
    name: "Equilibrium",
    price: "Br 4,499.00",
    category: "Physics",
    description:
      "Study balance, torque, and center of mass through hands-on equilibrium experiments and demonstrations.",
    fullDescription:
      "This mechanics kit explores the fundamental concept of equilibrium in physics. Students learn about balanced forces, torque calculations, center of mass determination, and the conditions necessary for static equilibrium through engaging experiments.",
    features: [
      "Precision balance beam",
      "Calibrated weight sets",
      "Torque calculation guides",
      "Center of mass demonstration tools",
      "Multiple experiment configurations",
      "Detailed instruction manual",
    ],
    contents: [
      "Balance beam with measurement scale",
      "Weight set (various masses)",
      "Hanging apparatus",
      "Measurement tools",
      "Calculation worksheets",
      "Lab manual",
    ],
    applications: [
      "Static equilibrium studies",
      "Torque calculations",
      "Center of mass determination",
      "Balanced force analysis",
      "Lever principles",
    ],
    image: "/ethiopian-students-working-with-science-equipment-.jpg",
    icon: Zap,
  },
  hyperbola: {
    name: "Hyperbola",
    price: "Br 6,499.00",
    category: "Mathematics",
    description:
      "Visualize and understand hyperbolic functions and conic sections through physical models and graphing tools.",
    fullDescription:
      "This advanced mathematics kit makes conic sections tangible and understandable. Students explore hyperbolas through 3D models, understand their equations and properties, and see real-world applications in navigation, astronomy, and engineering.",
    features: [
      "3D hyperbola models",
      "Graphing tools and templates",
      "Equation visualization aids",
      "Practice exercises with solutions",
      "Real-world application examples",
      "Progressive learning modules",
    ],
    contents: [
      "3D conic section models",
      "Graphing paper and tools",
      "Equation templates",
      "Practice worksheets",
      "Visual aids",
      "Instruction manual",
    ],
    applications: [
      "Conic section understanding",
      "Hyperbolic function graphing",
      "Equation analysis",
      "Real-world applications",
      "Advanced algebra concepts",
    ],
    image: "/ethiopian-students-participating-in-science-fair-w.jpg",
    icon: Package,
  },
  "newtons-cradle": {
    name: "Newton's Cradle",
    price: "Br 9,899.00",
    category: "Physics",
    description:
      "Demonstrate conservation of momentum and energy with this classic physics demonstration tool and educational apparatus.",
    fullDescription:
      "This iconic physics demonstration device beautifully illustrates the principles of conservation of momentum and energy. Watch as kinetic energy transfers through a series of suspended spheres, creating a mesmerizing display that makes abstract physics concepts concrete and memorable.",
    features: [
      "Precision balanced spheres",
      "Durable metal construction",
      "Energy transfer demonstration",
      "Momentum conservation visualization",
      "Professional quality build",
      "Educational guide included",
    ],
    contents: [
      "Newton's Cradle apparatus (5 spheres)",
      "Sturdy base and frame",
      "Adjustment tools",
      "Educational guide",
      "Experiment suggestions",
      "Maintenance instructions",
    ],
    applications: [
      "Conservation of momentum",
      "Conservation of energy",
      "Elastic collisions",
      "Energy transfer",
      "Physics demonstrations",
    ],
    image: "/ethiopian-students-working-with-science-equipment-.jpg",
    icon: Zap,
  },
  "pelletizer-machine": {
    name: "Pelletizer Machine",
    price: "Br 375,000.00",
    category: "Agricultural Equipment",
    description:
      "High-capacity pelletizing machine for producing animal feed pellets. Suitable for commercial poultry, aquaculture, and livestock operations.",
    fullDescription:
      "This industrial-grade pelletizer machine is designed and fabricated locally to meet the needs of Ethiopian farmers and feed producers. With a capacity of 300-500 kg/hour, it efficiently converts raw materials into uniform, high-quality feed pellets for various livestock applications.",
    features: [
      "300-500 kg/hour production capacity",
      "Variable density control for different feed types",
      "Multiple die sizes for pellet customization",
      "Energy efficient motor design",
      "Easy maintenance and cleaning",
      "Durable construction for long-term use",
      "Local spare parts availability",
      "Training and support included",
    ],
    contents: [
      "Complete pelletizer unit",
      "Multiple die plates (various sizes)",
      "Motor and drive system",
      "Control panel",
      "Safety guards",
      "Operation manual",
      "Maintenance guide",
      "Spare parts kit",
    ],
    applications: [
      "Chicken feed production for poultry farms",
      "Fish feed manufacturing for aquaculture",
      "Livestock feed for cattle and sheep",
      "Commercial feed production operations",
      "Small to medium scale farming",
    ],
    image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    icon: Factory,
  },
  "silk-screen-printer": {
    name: "Automatic Silk Screen Printer",
    price: "Br 250,000.00",
    category: "Manufacturing Equipment",
    description:
      "Professional-grade automatic silk screen printing machine for textile printing, signage, and promotional materials production.",
    fullDescription:
      "This locally fabricated automatic silk screen printer brings professional printing capabilities to Ethiopian entrepreneurs and businesses. Perfect for textile printing, signage production, and promotional materials, it offers precision, speed, and reliability for commercial operations.",
    features: [
      "Fully automated operation for efficiency",
      "Adjustable print area for various sizes",
      "Multi-color printing capability",
      "Precision alignment system",
      "Fast production speed",
      "User-friendly control interface",
      "Durable construction",
      "Local technical support",
    ],
    contents: [
      "Automatic screen printer unit",
      "Screen frames (various sizes)",
      "Alignment tools",
      "Control system",
      "Drying unit",
      "Operation manual",
      "Maintenance guide",
      "Training materials",
    ],
    applications: [
      "T-shirt and apparel printing",
      "Textile manufacturing",
      "Signage and banner production",
      "Promotional materials printing",
      "Custom merchandise creation",
    ],
    image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    icon: Factory,
  },
  "bell-management-system": {
    name: "Automatic Bell Management System",
    price: "Br 24,000.00",
    category: "Automation",
    description:
      "Programmable bell system for schools and institutions with customizable schedules and automatic operation capabilities.",
    fullDescription:
      "This intelligent bell management system automates school schedules, factory shifts, and institutional timing. Designed and built locally, it offers reliable, programmable operation with battery backup to ensure continuous service even during power outages.",
    features: [
      "Fully programmable schedule system",
      "Multiple bell tones and patterns",
      "Automatic operation (no manual intervention)",
      "Battery backup for power outages",
      "Easy programming interface",
      "Reliable long-term performance",
      "Remote control capability",
      "Local technical support",
    ],
    contents: [
      "Control unit with display",
      "Bell/speaker system",
      "Battery backup unit",
      "Mounting hardware",
      "Programming interface",
      "Operation manual",
      "Installation guide",
      "Warranty documentation",
    ],
    applications: [
      "Schools and universities",
      "Factories and manufacturing facilities",
      "Institutions and offices",
      "Training centers",
      "Any facility requiring scheduled signals",
    ],
    image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    icon: Factory,
  },
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  const IconComponent = product.icon

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        {/* Breadcrumb Navigation */}
       


        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-start">
  <Button
    size="sm"
    className="flex items-center gap-2 bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all"
    asChild
  >
    <Link href="/programs/fablab/products" className="flex items-center">
      <ArrowLeft className="h-4 w-4" />
      Back to Products
    </Link>
  </Button>
</div>


        {/* Product Detail Section */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
  <div className="grid lg:grid-cols-2 gap-8">
    {/* Left Column - Image */}
    <div className="space-y-4">
      <Card className="overflow-hidden border shadow-lg">
        <div className="relative h-96 lg:h-[500px]">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/90 text-[#367375] border-[#24C3BC]">
              <IconComponent className="h-3.5 w-3.5 mr-1" />
              {product.category}
            </Badge>
          </div>
        </div>
      </Card>

      {/* Contact Card */}
      <Card className="border shadow-lg bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Ready to Order?</h3>
              <p className="text-sm text-white/90">Contact us for pricing and availability</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/90">Call or WhatsApp</p>
                <p className="font-semibold">+251 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/90">Email Us</p>
                <p className="font-semibold">products@stempower.org</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/90">Visit Our Office</p>
                <p className="font-semibold">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Right Column - Details */}
    <div className="space-y-6">
      {/* Product Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
          {product.name}
        </h1>
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-4xl font-bold text-[#367375]">{product.price}</span>
          <Badge variant="secondary" className="text-sm">
            <CheckCircle className="h-4 w-4 mr-1" />
            Available
          </Badge>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">{product.description}</p>
      </div>

      {/* Full Description */}
      <Card className="border shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center">
              <Info className="h-4 w-4 text-white" />
            </div>
            <CardTitle className="text-lg">Product Overview</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">{product.fullDescription}</p>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className="border shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <CardTitle className="text-lg">Key Features</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#367375] flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* What's Included */}
      <Card className="border shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center">
              <Package className="h-4 w-4 text-white" />
            </div>
            <CardTitle className="text-lg">What's Included</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            {product.contents.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#367375] rounded-full flex-shrink-0 mt-2" />
                <span className="text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Applications */}
      <Card className="border shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
            <CardTitle className="text-lg">Applications & Uses</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {product.applications.map((app, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {app}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>

 
</div>

      </div>
      <Footer />
    </>
  )
}
