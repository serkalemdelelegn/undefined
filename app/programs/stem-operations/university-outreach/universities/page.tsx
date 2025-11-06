import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, TrendingUp, CheckCircle2, Users, Calendar, GraduationCap, Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ParticipatingUniversitiesPage() {
  const universities = [
    {
      name: "Addis Ababa University",
      location: "Addis Ababa",
      established: 1950,
      studentsServed: "1,200+",
      programStartYear: 2022,
      description:
        "Ethiopia's oldest and most prestigious university, AAU has been a cornerstone of the University STEM Outreach program. Their extensive lab facilities and experienced faculty provide exceptional mentorship to talented youth during summer programs.",
      facilities: ["Advanced Physics Labs", "Computer Science Center", "Engineering Workshop", "Research Library"],
      achievements: [
        "First university to pilot the program",
        "Highest student satisfaction rate",
        "Trained 50+ student mentors",
      ],
      image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
      website: "https://www.aau.edu.et",
    },
    {
      name: "Bahir Dar University",
      location: "Bahir Dar, Amhara Region",
      established: 2000,
      studentsServed: "800+",
      programStartYear: 2022,
      description:
        "Located near Lake Tana, Bahir Dar University brings STEM education to the northern region. Their commitment to hands-on learning and community engagement makes them an ideal partner for summer outreach programs.",
      facilities: ["Biotechnology Lab", "Robotics Center", "Maker Space", "Digital Learning Hub"],
      achievements: [
        "Expanded program to rural communities",
        "Developed mobile STEM kits",
        "Partnership with local schools",
      ],
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
      website: "https://www.bdu.edu.et",
    },
    {
      name: "Jimma University",
      location: "Jimma, Oromia Region",
      established: 1999,
      studentsServed: "650+",
      programStartYear: 2023,
      description:
        "Jimma University's focus on health sciences and technology creates unique opportunities for students interested in medical innovation and biotechnology. Their summer programs emphasize practical applications of STEM in healthcare.",
      facilities: ["Medical Simulation Lab", "Chemistry Research Center", "Innovation Hub", "Tech Incubator"],
      achievements: [
        "Specialized health-tech programs",
        "Student-led research projects",
        "Community health initiatives",
      ],
      image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
      website: "https://www.ju.edu.et",
    },
    {
      name: "Hawassa University",
      location: "Hawassa, SNNPR",
      established: 2000,
      studentsServed: "700+",
      programStartYear: 2023,
      description:
        "Situated in the beautiful city of Hawassa, this university combines environmental science with technology education. Their lakeside campus provides a unique setting for STEM exploration and ecological studies.",
      facilities: ["Environmental Science Lab", "Agricultural Tech Center", "Engineering Workshop", "Data Science Lab"],
      achievements: [
        "Environmental STEM programs",
        "Agricultural innovation projects",
        "Regional science competitions",
      ],
      image: "/ethiopian-students-participating-in-science-fair-w.jpg",
      website: "https://www.hu.edu.et",
    },
    {
      name: "Mekelle University",
      location: "Mekelle, Tigray Region",
      established: 2000,
      studentsServed: "600+",
      programStartYear: 2023,
      description:
        "Mekelle University serves as a beacon of education in the northern region. Despite challenges, their dedication to STEM education and student development remains unwavering, providing crucial opportunities for youth in the area.",
      facilities: ["Engineering Labs", "Computer Center", "Science Library", "Innovation Space"],
      achievements: [
        "Resilient program delivery",
        "Community rebuilding through education",
        "Student mentorship programs",
      ],
      image: "/ethiopian-students-using-3d-printers-and-technolog.jpg",
      website: "https://www.mu.edu.et",
    },
    {
      name: "Adama Science and Technology University",
      location: "Adama, Oromia Region",
      established: 1993,
      studentsServed: "900+",
      programStartYear: 2022,
      description:
        "As a specialized science and technology institution, ASTU brings cutting-edge facilities and expertise to the summer outreach program. Their focus on innovation and entrepreneurship inspires students to become future tech leaders.",
      facilities: ["Advanced Robotics Lab", "3D Printing Center", "AI Research Lab", "Startup Incubator"],
      achievements: [
        "Highest tech startup rate",
        "National robotics competition wins",
        "Industry partnership programs",
      ],
      image: "/young-ethiopian-entrepreneurs-presenting-business-.jpg",
      website: "https://www.astu.edu.et",
    },
  ]
  const impactStats = [
    { number: "40+", label: "Public Universities", icon: Building2 },
    { number: "10,000+", label: "Students Annually", icon: Users },
    { number: "All Regions", label: "Nationwide Coverage", icon: TrendingUp },
    { number: "100%", label: "Government Backed", icon: CheckCircle2 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-500 text-white">
      <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] bg-cover bg-center opacity-20" />

        <div className="container relative mx-auto px-4 py-24 md:py-15">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Building2 className="h-3 w-3 mr-1" />
              40+ Universities Nationwide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Participating Universities</h1>
           <p className="text-xl md:text-2xl text-cyan-50 mb-4 text-pretty leading-relaxed">
              Meet the universities transforming summer break into opportunity
            </p>
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
              These institutions open their doors, labs, and hearts every summer to provide exceptional STEM learning
              experiences for thousands of talented Ethiopian youth.
            </p><br />
          </div>
          
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Impact Stats */}
      <section className="max-w-6xl mx-auto px-2 -mt-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <CardContent className="pt-6 pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          
        </div>
      </section>

      {/* Universities List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Partner Universities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the universities leading the way in summer STEM education across Ethiopia
              </p>
            </div>

            <div className="space-y-8">
              {universities.map((university, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="grid md:grid-cols-5 gap-6">
                    {/* University Image */}
                    <div className="md:col-span-2 relative h-64 md:h-auto">
                      <Image
                        src={university.image || "/placeholder.svg"}
                        alt={university.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-teal-700 border-0 font-semibold">
                          Est. {university.established}
                        </Badge>
                      </div>
                    </div>

                    {/* University Details */}
                    <div className="md:col-span-3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{university.name}</h3>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{university.location}</span>
                          </div>
                        </div>
                        {university.website && (
                          <Link
                            href={university.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 hover:text-teal-700"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </Link>
                        )}
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{university.description}</p>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-teal-600" />
                          <div>
                            <div className="text-sm font-semibold">{university.studentsServed}</div>
                            <div className="text-xs text-muted-foreground">Students</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-cyan-600" />
                          <div>
                            <div className="text-sm font-semibold">Since {university.programStartYear}</div>
                            <div className="text-xs text-muted-foreground">Program</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-teal-600" />
                          <div>
                            <div className="text-sm font-semibold">{university.facilities.length}</div>
                            <div className="text-xs text-muted-foreground">Facilities</div>
                          </div>
                        </div>
                      </div>

                      {/* Facilities */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2 flex items-center">
                          <Building2 className="h-4 w-4 mr-1 text-teal-600" />
                          Key Facilities
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {university.facilities.map((facility, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {facility}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-1 text-cyan-600" />
                          Notable Achievements
                        </h4>
                        <ul className="space-y-1">
                          {university.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-teal-600 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Universities Note */}
            <Card className="mt-12 bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200">
              <CardContent className="p-8 text-center">
                <Building2 className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">And 34+ More Universities</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The University STEM Outreach program operates across all public universities in Ethiopia, reaching
                  every region and providing opportunities to thousands of students nationwide. The universities
                  featured above represent the diversity and excellence of our partner institutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
