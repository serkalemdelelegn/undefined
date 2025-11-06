import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Package,
  Beaker,
  Lightbulb,
  GraduationCap,
  ShoppingCart,
  Sparkles,
  FlaskConical,
  Wheat,
  Factory,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ScienceKitsPage() {
  const impactStats = [
    { number: "500+", label: "Schools Equipped", icon: GraduationCap },
    { number: "50+", label: "Experiment Types", icon: FlaskConical },
    { number: "10,000+", label: "Students Reached", icon: Lightbulb },
    { number: "100%", label: "Curriculum Aligned", icon: CheckCircle },
  ]

  const kitFeatures = [
    {
      title: "Curriculum-Based Design",
      description:
        "Every kit is carefully aligned with Ethiopia's national curricula, ensuring relevance and educational value.",
      icon: GraduationCap,
    },
    {
      title: "Hands-On Learning",
      description:
        "Transform abstract concepts into tangible experiments that students can see, touch, and understand.",
      icon: Beaker,
    },
    {
      title: "Affordable & Accessible",
      description:
        "Designed to be cost-effective and easy to use, making STEM education accessible to all communities.",
      icon: Package,
    },
    {
      title: "Complete Materials",
      description: "Each kit includes all necessary materials and clear instructions for successful experiments.",
      icon: CheckCircle,
    },
  ]

  const scienceCategories = [
    {
      title: "Physics Kits",
      description: "Explore mechanics, electricity, magnetism, and optics through engaging hands-on experiments.",
      icon: "⚡",
      experiments: ["Simple Circuits", "Magnetic Fields", "Light & Optics", "Motion & Forces"],
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
    },
    {
      title: "Chemistry Kits",
      description:
        "Discover chemical reactions, acids and bases, and molecular structures in safe, controlled experiments.",
      icon: "🧪",
      experiments: ["Acid-Base Reactions", "Crystal Formation", "Chemical Indicators", "Safe Reactions"],
      image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
    },
    {
      title: "Biology Kits",
      description: "Study living organisms, cells, ecosystems, and life processes through microscopy and observation.",
      icon: "🔬",
      experiments: ["Cell Structure", "Plant Biology", "Microorganisms", "Ecosystem Studies"],
      image: "/ethiopian-students-participating-in-science-fair-w.jpg",
    },
    {
      title: "Mathematics Kits",
      description: "Make math tangible with geometry tools, measurement instruments, and problem-solving activities.",
      icon: "📐",
      experiments: ["Geometric Shapes", "Measurement Tools", "Pattern Recognition", "Problem Solving"],
      image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    },
  ]

  const educationalProducts = [
    {
      name: "Complete Science Kit - Grade 7-8",
      description:
        "Comprehensive kit covering physics, chemistry, and biology experiments for lower secondary students.",
      price: "Contact for pricing",
      features: ["30+ experiments", "Teacher guide included", "Durable materials", "Curriculum aligned"],
    },
    {
      name: "Complete Science Kit - Grade 9-10",
      description: "Advanced experiments in all science disciplines for upper secondary students.",
      price: "Contact for pricing",
      features: ["40+ experiments", "Detailed instructions", "Safety equipment", "Assessment tools"],
    },
    {
      name: "Physics Experiment Set",
      description: "Specialized kit focusing on electricity, magnetism, mechanics, and optics.",
      price: "Contact for pricing",
      features: ["15+ physics experiments", "Circuit components", "Measurement tools", "Lab manual"],
    },
    {
      name: "Chemistry Lab Kit",
      description: "Safe chemistry experiments with all necessary reagents and safety equipment.",
      price: "Contact for pricing",
      features: ["20+ chemistry experiments", "Safety goggles", "Test tubes & beakers", "Chemical indicators"],
    },
  ]

  const agriculturalProducts = [
    {
      name: "Pelletizing Machine - Small Scale",
      description: "Compact pelletizing machine ideal for small farms and educational institutions.",
      capacity: "50-100 kg/hour",
      features: ["Adjustable pellet size", "Easy to operate", "Low maintenance", "Energy efficient"],
      applications: ["Chicken feed", "Fish feed", "Small livestock", "Educational demos"],
    },
    {
      name: "Pelletizing Machine - Industrial",
      description: "High-capacity machine suitable for large-scale feed production facilities.",
      capacity: "300-500 kg/hour",
      features: ["Variable density control", "Automated operation", "Durable construction", "Multiple die sizes"],
      applications: ["Commercial poultry", "Aquaculture", "Livestock farms", "Feed production"],
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
          <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-12">
            <div className="max-w-4xl mx-auto text-center">
              
              <div className="flex justify-center">
  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
    <Sparkles className="h-3 w-3 mr-1.5" />
    Learning Made Hands-On
  </Badge>
</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Science Kits & Products
              </h1>
              <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
                Science Kits bring the classroom to life by turning abstract concepts into fun, practical
                experiments. Each kit is carefully designed to spark curiosity.
              </p><br />
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8" asChild>
                  <Link href="/programs/fablab/products">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Browse All Products
                  </Link>
                </Button>
               
              </div>
            </div>
          </div><br /> <br /><br />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
        </section><br />

        {/* Impact Stats */}
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


        {/* What Makes Our Kits Special */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
              <Package className="h-3 w-3 mr-1" />
              Why Choose Our Kits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Designed for Ethiopian Classrooms
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Easy to use, affordable, and adaptable for all ages, these kits empower teachers, schools, and communities
              to make STEM learning accessible, engaging, and unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kitFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Science Categories */}
        <section className="bg-gradient-to-br from-slate-50 to-emerald-50/50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
                <Beaker className="h-3 w-3 mr-1" />
                Explore by Subject
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                Comprehensive Science Coverage
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                From physics to biology, our kits cover all major science disciplines with curriculum-aligned
                experiments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {scienceCategories.map((category, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
                >
                  <div className="relative h-48">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-5xl mb-2">{category.icon}</div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-emerald-600">Includes experiments on:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {category.experiments.map((exp, expIndex) => (
                          <div key={expIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                            <span>{exp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Products Overview */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
              <ShoppingCart className="h-3 w-3 mr-1" />
              Our Products
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Educational & Agricultural Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From hands-on science kits for classrooms to innovative agricultural equipment from our FabLab, we provide
              practical solutions that empower learning and entrepreneurship across Ethiopia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
              <div className="relative h-64">
                <Image
                  src="/ethiopian-students-in-science-laboratory-conductin.jpg"
                  alt=" Science Kits"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">Science Kits</h3>
                  <p className="text-emerald-100 text-lg">Physics, Chemistry, Biology & Mathematics</p>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive science kits aligned with national curricula, featuring hands-on experiments that make
                  learning engaging and accessible for all students.
                </p>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600" asChild>
                  <Link href="/programs/fablab/products#kits">
                    <Package className="mr-2 h-4 w-4" />
                    View Science Kits
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
              <div className="relative h-64">
                <Image
                  src="/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg"
                  alt="FabLab Agricultural Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">FabLab Products</h3>
                  <p className="text-emerald-100 text-lg">Agricultural Equipment & Automation</p>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Innovative agricultural solutions including pelletizing machines and automation systems, designed and
                  fabricated locally to support Ethiopian farmers and entrepreneurs.
                </p>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600" asChild>
                  <Link href="/programs/fablab/products#fablab">
                    <Factory className="mr-2 h-4 w-4" />
                    View FabLab Products
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Agricultural Products Section */}
        <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Factory className="h-3 w-3 mr-1" />
                FabLab Innovation
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Agricultural Products for Sale</h2>
              <p className="text-xl text-emerald-50 max-w-3xl mx-auto text-pretty">
                FabLab agricultural products for sale are innovative tools and technologies designed to support modern
                farming through locally fabricated solutions.
              </p>
              <p className="text-lg text-emerald-50 max-w-3xl mx-auto text-pretty mt-4">
                The FabLab produce items such as pelletizing machine for chicken and fish feeds suitable for small-scale
                farms and large feed production facilities alike, the machine can be adjusted to produce pellets of
                various sizes and densities, meeting the specific dietary needs of different livestock and aquaculture
                species.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {agriculturalProducts.map((product, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
                >
                  <CardHeader className="bg-gradient-to-br from-slate-50 to-emerald-50/50">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <Wheat className="h-7 w-7 text-white" />
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {product.capacity}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mt-4 text-balance">{product.name}</CardTitle>
                    <CardDescription className="text-base">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-emerald-600 mb-2">Key Features:</h4>
                        <div className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-emerald-600 mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, appIndex) => (
                            <Badge key={appIndex} variant="secondary" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-teal-600" asChild>
                      <Link href="/programs/fablab/products#fablab" target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Request Quote
                      </Link>
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
