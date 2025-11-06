import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Eye, Heart, Users, Award, Globe, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const boardMembers = [
  {
    name: "Dr. Alemayehu Tadesse",
    position: "Chairman of the Board",
    image: "/professional-ethiopian-man-in-business-suit--chair.jpg",
    bio: "Former Minister of Education with 20+ years in educational policy and STEM development.",
    expertise: "Educational Policy, STEM Strategy",
  },
  {
    name: "Prof. Hanan Mohammed",
    position: "Vice Chairwoman",
    image: "/professional-ethiopian-woman-professor-in-academic.jpg",
    bio: "Leading researcher in engineering education and women in STEM advocacy.",
    expertise: "Engineering Education, Gender Equity",
  },
  {
    name: "Eng. Dawit Bekele",
    position: "Board Member",
    image: "/ethiopian-engineer-in-professional-setting-with-te.jpg",
    bio: "Technology entrepreneur and founder of multiple successful tech startups in Ethiopia.",
    expertise: "Technology Innovation, Entrepreneurship",
  },
  {
    name: "Dr. Meron Teshome",
    position: "Board Member",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Renowned scientist specializing in sustainable technology and environmental solutions.",
    expertise: "Environmental Science, Sustainability",
  },
]

const staffMembers = [
  {
    name: "Kidist Alemayehu",
    position: "Executive Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Passionate educator with 15 years of experience in STEM program development and youth empowerment.",
    department: "Leadership",
  },
  {
    name: "Bereket Tadesse",
    position: "Program Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in curriculum development and STEM center operations across Ethiopia.",
    department: "Programs",
  },
  {
    name: "Selamawit Girma",
    position: "FabLab Coordinator",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Digital fabrication specialist managing our network of FabLabs and maker spaces.",
    department: "FabLab",
  },
  {
    name: "Yohannes Bekele",
    position: "Outreach Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Community engagement expert connecting STEM education with local communities.",
    department: "Outreach",
  },
  {
    name: "Tigist Hailu",
    position: "Research Coordinator",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Research specialist focusing on educational impact assessment and program evaluation.",
    department: "Research",
  },
  {
    name: "Daniel Worku",
    position: "Technology Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "IT specialist managing digital infrastructure and educational technology platforms.",
    department: "Technology",
  },
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for the highest standards in STEM education and innovation, ensuring quality in everything we do.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "We believe every Ethiopian child deserves access to quality STEM education, regardless of background or location.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "We empower students, educators, and communities to become agents of positive change through STEM.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description:
      "We foster creativity and innovative thinking to solve local and global challenges through science and technology.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                About STEMpower Ethiopia
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                Transforming Ethiopia Through
                <span className="text-primary"> STEM Education</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                We are dedicated to empowering Ethiopian youth through comprehensive STEM education, fostering
                innovation, and building a generation of problem-solvers who will shape our nation's future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:scale-105 transition-all"
                  asChild
                >
                  <Link href="/programs">Explore Our Programs</Link>
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-all bg-transparent" asChild>
                  <Link href="/contact">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 mb-20">
              {/* Mission */}
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, high-quality STEM education that empowers Ethiopian youth to become innovative
                  problem-solvers, entrepreneurs, and leaders who will drive sustainable development in their
                  communities and beyond.
                </p>
              </Card>

              {/* Vision */}
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A future where every Ethiopian child has access to world-class STEM education, creating a generation
                  of innovators who will position Ethiopia as a leader in science, technology, and sustainable
                  development.
                </p>
              </Card>

              {/* Impact */}
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With 148+ STEM centers across Ethiopia, we've reached over 500,000 students, trained thousands of
                  educators, and fostered countless innovations that are making a real difference in communities
                  nationwide.
                </p>
              </Card>
            </div>

            {/* Values */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These fundamental principles guide everything we do and shape our approach to STEM education.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Board of Directors</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our distinguished board members bring decades of experience in education, technology, and leadership to
                guide STEMpower Ethiopia's strategic direction.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {boardMembers.map((member, index) => (
                <Card
                  key={index}
                  className="text-center overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.position}
                    </Badge>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{member.bio}</p>
                    <p className="text-xs text-primary font-medium">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Staff Members */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the dedicated professionals who work tirelessly to deliver exceptional STEM education programs
                across Ethiopia.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffMembers.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary/90 text-white">{member.department}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto text-center bg-gradient-to-br from-card to-card/50 border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Mission</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you're an educator, student, parent, or community leader, there are many ways to get involved
                  and support STEM education in Ethiopia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:scale-105 transition-all"
                    asChild
                  >
                    <Link href="/programs">
                      Explore Programs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="hover:scale-105 transition-all bg-transparent" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
        </section>
      </main>
      <Footer />
    </div>
  )
}
