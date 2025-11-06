"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Search,
  ExternalLink,
  Calendar,
  Sparkles,
  TrendingUp,
  Globe,
  Award,
  ArrowRight,
  Building2,
  User,
} from "lucide-react"
import Image from "next/image"

export default function OthersTalkingAboutSTEMpowerPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [displayCount, setDisplayCount] = useState(9)

  const articlesRef = useRef<HTMLElement>(null)

  const mediaArticles = [
    {
      id: 1,
      title: "STEMpower Ethiopia: Transforming Education Through Innovation",
      publication: "The Ethiopian Herald",
      publicationType: "National News",
      author: "Alemayehu Tadesse",
      date: "March 15, 2024",
      excerpt:
        "STEMpower Ethiopia has emerged as a beacon of hope for science education in the country, establishing 148 STEM centers across the nation and reaching over 500,000 students with hands-on learning experiences.",
      quote:
        "This initiative is not just about teaching science; it's about transforming how Ethiopian students think, innovate, and solve problems.",
      url: "https://ethiopianherald.com/stempower-ethiopia-transforming-education",
      category: "National News",
      featured: true,
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
    },
    {
      id: 2,
      title: "How FabLabs Are Nurturing Ethiopia's Next Generation of Innovators",
      publication: "Addis Standard",
      publicationType: "Magazine",
      author: "Meron Bekele",
      date: "March 10, 2024",
      excerpt:
        "In maker spaces across Addis Ababa and beyond, young Ethiopians are turning ideas into reality. STEMpower's FabLabs provide access to 3D printers, laser cutters, and mentorship that was previously unavailable.",
      quote:
        "These FabLabs are democratizing innovation, giving every student the tools to become an inventor regardless of their background.",
      url: "https://addisstandard.com/fablabs-nurturing-innovators",
      category: "Education",
      featured: false,
      image: "/ethiopian-students-using-3d-printers-and-technolog.jpg",
    },
    {
      id: 3,
      title: "Ethiopian Students Win International Science Competition",
      publication: "Capital Ethiopia",
      publicationType: "Business News",
      author: "Dawit Hailu",
      date: "March 5, 2024",
      excerpt:
        "Students from STEMpower Ethiopia's program secured top positions at the East African Science and Engineering Fair, showcasing innovative solutions to regional challenges including water purification and renewable energy.",
      quote:
        "The success of these students demonstrates the world-class quality of STEM education being delivered in Ethiopia.",
      url: "https://capitalethiopia.com/students-win-international-competition",
      category: "Achievement",
      featured: false,
      image: "/ethiopian-students-presenting-science-projects-at-.jpg",
    },
    {
      id: 4,
      title: "Bridging the Gender Gap in Ethiopian STEM Education",
      publication: "Ethiopian Monitor",
      publicationType: "National News",
      author: "Sara Yohannes",
      date: "February 28, 2024",
      excerpt:
        "STEMpower's targeted programs for girls have resulted in a 45% female participation rate in STEM centers, significantly higher than the national average. The organization's commitment to gender equity is reshaping Ethiopia's scientific landscape.",
      quote:
        "When we empower girls with STEM education, we're not just changing individual lives—we're transforming entire communities.",
      url: "https://ethiopianmonitor.com/bridging-gender-gap-stem",
      category: "Education",
      featured: false,
      image: "/ethiopian-girls-coding-and-programming-computers-i.jpg",
    },
    {
      id: 5,
      title: "Public-Private Partnership Model: STEMpower's Success Story",
      publication: "Ethiopian Business Review",
      publicationType: "Business News",
      author: "Yonas Mekonnen",
      date: "February 22, 2024",
      excerpt:
        "The collaboration between STEMpower, government institutions, and private sector partners has created a sustainable model for educational innovation that other African nations are now studying and replicating.",
      quote:
        "This partnership demonstrates how strategic collaboration can multiply impact and create lasting change in education.",
      url: "https://ethiopianbusinessreview.com/stempower-partnership-model",
      category: "Business",
      featured: false,
      image: "/business-networking-event-professionals-shaking-ha.jpg",
    },
    {
      id: 6,
      title: "From Classroom to Career: STEMpower Alumni Making Impact",
      publication: "Addis Fortune",
      publicationType: "Business News",
      author: "Bethlehem Alemu",
      date: "February 15, 2024",
      excerpt:
        "Graduates of STEMpower programs are now leading tech startups, working in research institutions, and pursuing advanced degrees abroad. The program's impact extends far beyond the classroom.",
      quote:
        "STEMpower didn't just teach us science—it taught us to believe we could change the world, and now we're doing exactly that.",
      url: "https://addisfortune.com/stempower-alumni-impact",
      category: "Achievement",
      featured: false,
      image: "/ethiopian-startup-founders-working-in-incubation-s.jpg",
    },
    {
      id: 7,
      title: "Rural STEM Centers: Bringing Innovation to Every Corner of Ethiopia",
      publication: "The Reporter Ethiopia",
      publicationType: "National News",
      author: "Getachew Worku",
      date: "February 8, 2024",
      excerpt:
        "STEMpower's expansion into rural areas is ensuring that geography is no longer a barrier to quality STEM education. Mobile labs and regional centers are reaching students in the most remote communities.",
      quote: "Every Ethiopian child deserves access to world-class STEM education, regardless of where they live.",
      url: "https://thereporterethiopia.com/rural-stem-centers",
      category: "Education",
      featured: false,
      image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
    },
    {
      id: 8,
      title: "Teacher Training: The Backbone of STEMpower's Success",
      publication: "Ethiopian Education Journal",
      publicationType: "Academic",
      author: "Dr. Tigist Assefa",
      date: "February 1, 2024",
      excerpt:
        "Research shows that STEMpower's comprehensive teacher training program has significantly improved pedagogical approaches to science education across participating schools, with measurable improvements in student engagement and learning outcomes.",
      quote:
        "Investing in teachers is investing in sustainable educational transformation. STEMpower understands this fundamental truth.",
      url: "https://ethiopianeducationjournal.com/teacher-training-success",
      category: "Academic",
      featured: false,
      image: "/ethiopian-teachers-learning-modern-stem-education-.jpg",
    },
    {
      id: 9,
      title: "Ethiopian Innovation Ecosystem: STEMpower's Catalytic Role",
      publication: "Tech Ethiopia",
      publicationType: "Technology",
      author: "Henok Assefa",
      date: "January 25, 2024",
      excerpt:
        "As Ethiopia positions itself as a regional tech hub, STEMpower's role in building the talent pipeline has become increasingly critical. The organization's FabLabs and incubation programs are feeding directly into the country's growing startup ecosystem.",
      quote:
        "You can't build a tech ecosystem without talent. STEMpower is creating that talent pipeline from the ground up.",
      url: "https://techethiopia.com/innovation-ecosystem-stempower",
      category: "Technology",
      featured: false,
      image: "/ethiopian-young-inventors-presenting-their-innovat.jpg",
    },
    {
      id: 10,
      title: "Science Fair Excellence: Ethiopian Students Showcase Innovation",
      publication: "Addis Zemen",
      publicationType: "National News",
      author: "Mulugeta Gebru",
      date: "January 18, 2024",
      excerpt:
        "The 9th National Science and Engineering Fair saw record participation from STEMpower centers, with students presenting projects ranging from agricultural innovations to healthcare solutions.",
      quote:
        "These young scientists are not just learning theory—they're applying knowledge to solve real problems facing our nation.",
      url: "https://addiszemen.com/science-fair-excellence",
      category: "Achievement",
      featured: false,
      image: "/ethiopian-students-celebrating-at-national-science.jpg",
    },
    {
      id: 11,
      title: "International Recognition for Ethiopian STEM Education Model",
      publication: "Ethiopian News Agency",
      publicationType: "National News",
      author: "Selamawit Tesfaye",
      date: "January 10, 2024",
      excerpt:
        "UNESCO and other international organizations have recognized STEMpower Ethiopia's innovative approach to STEM education as a model for developing nations, with delegations from across Africa visiting to study the program.",
      quote:
        "Ethiopia is showing the world how to democratize STEM education and create pathways to innovation for all students.",
      url: "https://ethiopiannewsagency.com/international-recognition",
      category: "International",
      featured: false,
      image: "/ethiopian-university-students-and-professors-condu.jpg",
    },
    {
      id: 12,
      title: "Corporate Partnerships Fuel STEM Education Expansion",
      publication: "Ethiopian Business Times",
      publicationType: "Business News",
      author: "Abebe Kebede",
      date: "December 28, 2023",
      excerpt:
        "Leading Ethiopian and international corporations are investing in STEMpower's expansion, recognizing the program's role in developing the skilled workforce needed for Ethiopia's economic transformation.",
      quote:
        "This is not charity—it's strategic investment in Ethiopia's future workforce and economic competitiveness.",
      url: "https://ethiopianbusinesstimes.com/corporate-partnerships-stem",
      category: "Business",
      featured: false,
      image: "/business-professionals-analyzing-market-data-on-sc.jpg",
    },
  ]

  const categories = [
    "All",
    "National News",
    "Education",
    "Achievement",
    "Business",
    "Technology",
    "Academic",
    "International",
  ]

  const stats = [
    { icon: Globe, label: "Media Features", value: "150+" },
    { icon: TrendingUp, label: "Monthly Mentions", value: "25+" },
    { icon: Award, label: "Recognition Awards", value: "12+" },
  ]

  const filteredArticles = mediaArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.publication.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticle = filteredArticles.find((a) => a.featured)
  const regularArticles = filteredArticles.filter((a) => !a.featured)

  const displayedArticles = regularArticles.slice(0, displayCount)
  const hasMoreArticles = displayCount < regularArticles.length

  const scrollToArticles = () => {
    articlesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 9)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <Header />
      {/* Hero Section */}
     <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
  <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div className="order-2 lg:order-1">
        <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
          <Sparkles className="h-3 w-3 mr-1.5" />
          Media Coverage
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Others Talking About <span className="text-white drop-shadow-lg">STEMpower</span>
        </h1>

        <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
          Discover how leading Ethiopian media outlets, journalists, and thought leaders are covering our
          mission to transform STEM education nationwide.
        </p>
<br />
        <div className="grid grid-cols-4 gap-6 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">150+</div>
            <div className="text-xs text-emerald-100">Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">25+</div>
            <div className="text-xs text-emerald-100">Publications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">12</div>
            <div className="text-xs text-emerald-100">Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">2M+</div>
            <div className="text-xs text-emerald-100">Reach</div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="order-1 lg:order-2 flex justify-center">
        <div className="relative w-full sm:w-[90%] md:w-[95%] lg:w-[100%] aspect-[5/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
          <Image
            src="/ethiopian-students-working-with-science-equipment-.jpg"
            alt="Ethiopian students in STEM education"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-3">
              Latest Coverage
            </Badge>
            <h3 className="text-xl font-bold text-balance">
              Transforming Ethiopia's Future Through STEM Education
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div><br /><br />

  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
</section>
<br />

      

      {/* Search and Filter Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by publication, author, title, or keyword..."
              className="pl-12 h-14 text-base shadow-md border-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className={
                category === selectedCategory
                  ? "bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#24C3BC] hover:to-[#367375] text-white shadow-md transition-all duration-300"
                  : "hover:border-[#367375] hover:text-transparent hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:bg-clip-text border-2 transition-all duration-300"
              }
              size="lg"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section ref={articlesRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#367375] to-[#24C3BC] bg-clip-text text-transparent mb-2">
              Featured Coverage
            </h2>
            <p className="bg-gradient-to-r from-[#367375] to-[#24C3BC] bg-clip-text text-transparent font-medium">
              Highlighted media feature about our impact
            </p>
          </div>

          <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group bg-gradient-to-br from-card to-muted/20">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="relative lg:col-span-2 h-80 lg:h-auto overflow-hidden bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10">
                {featuredArticle.image ? (
                  <Image
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Building2 className="w-20 h-20 text-[#367375]/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#367375]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-6 left-6 bg-[#367375] text-white border-0 text-sm px-4 py-1.5 shadow-lg">
                  ⭐ Featured
                </Badge>
              </div>

              <CardContent className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4 border-[#367375] text-[#367375] px-3 py-1">
                  {featuredArticle.category}
                </Badge>

                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-[#367375] to-[#24C3BC] bg-clip-text text-transparent transition-colors leading-tight">
                  {featuredArticle.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-medium">{featuredArticle.author}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>

                <div className="bg-[#367375]/5 border-l-4 border-[#367375] p-4 mb-6 rounded-r">
                  <p className="text-[#367375] italic leading-relaxed">"{featuredArticle.quote}"</p>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{featuredArticle.excerpt}</p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#24C3BC] hover:to-[#367375] shadow-md transition-all duration-300"
                  >
                    <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer">
                      Read Full Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>
      )}

      {/* Articles Grid */}
      {regularArticles.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#367375] to-[#24C3BC] bg-clip-text text-transparent mb-2">
                {selectedCategory === "All" ? "All Media Coverage" : `${selectedCategory} Coverage`}
              </h2>
              <p className="bg-gradient-to-r from-[#367375] to-[#24C3BC] bg-clip-text text-transparent font-medium">
                What Ethiopian media is saying about our work
              </p>
            </div>
            <Badge variant="outline" className="text-base px-4 py-2">
              {regularArticles.length} article{regularArticles.length !== 1 ? "s" : ""}
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group bg-card flex flex-col hover:border-[#24C3BC]/30"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10">
                  {article.image ? (
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Building2 className="w-16 h-16 text-[#367375]/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#367375]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Publication Header */}
                <div className="relative bg-gradient-to-br from-[#367375]/5 to-[#24C3BC]/5 p-6 border-b">
                  <div className="flex items-start justify-between mb-3">
                    <Building2 className="w-10 h-10 text-[#367375]" />
                    <Badge className="bg-[#367375] text-white text-xs">{article.category}</Badge>
                  </div>
                  <h4 className="font-bold text-lg bg-gradient-to-r from-[#367375] to-[#24C3BC] bg-clip-text text-transparent mb-1">
                    {article.publication}
                  </h4>
                  <p className="text-sm bg-gradient-to-r from-[#2a9b96] to-[#24C3BC] bg-clip-text text-transparent font-medium">
                    {article.publicationType}
                  </p>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-balance bg-gradient-to-r from-[#367375] to-[#24C3BC] bg-clip-text text-transparent transition-colors line-clamp-2 leading-snug group-hover:opacity-80">
                    {article.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4 pb-4 border-b">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span className="font-medium">{article.author}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-[#367375]/5 border-l-4 border-[#367375] p-3 mb-4 rounded-r group-hover:bg-[#24C3BC]/10 group-hover:border-[#24C3BC] transition-all duration-300">
                    <p className="text-sm text-[#367375] italic line-clamp-2 group-hover:text-[#24C3BC]">{`"${article.quote}"`}</p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-1">
                    {article.excerpt}
                  </p>

                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#24C3BC] hover:to-[#367375] shadow-sm transition-all duration-300"
                  >
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      Read Full Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {hasMoreArticles && (
            <div className="mt-16 text-center">
              <Button
                size="lg"
                className="min-w-[240px] shadow-md bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white hover:from-[#24C3BC] hover:to-[#367375] transition-all duration-300 font-semibold"
                onClick={handleLoadMore}
              >
                Load More Articles
              </Button>
            </div>
          )}
        </section>
      )}

      {/* No Results Message */}
      {filteredArticles.length === 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <Card className="p-16 text-center border-dashed">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#367375] to-[#24C3BC] bg-clip-text text-transparent">
                No articles found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                }}
                className="bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#24C3BC] hover:to-[#367375] text-white transition-all duration-300"
              >
                Clear Filters
              </Button>
            </div>
          </Card>
        </section>
      )}

     
      <Footer />
    </div>
  )
}
