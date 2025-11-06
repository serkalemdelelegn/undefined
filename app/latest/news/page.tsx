"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ExternalLink, BookOpen, Share2, Globe, Search, ArrowRight, Mail } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const newsletters = [
    {
      title: "STEMpower Monthly Newsletter - December 2024",
      date: "December 1, 2024",
      excerpt:
        "Highlights from our expansion across Africa, new partnerships, and student achievements. Discover how we're making an impact in 132 STEM Centers.",
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
      category: "Newsletter",
      readTime: "5 min read",
    },
    {
      title: "November Impact Report: Breaking Barriers",
      date: "November 1, 2024",
      excerpt:
        "Monthly statistics on STEM Center activities, student participation, and program outcomes. See the numbers behind our mission.",
      image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
      category: "Newsletter",
      readTime: "4 min read",
    },
    {
      title: "October Innovation Showcase",
      date: "October 1, 2024",
      excerpt:
        "Featuring groundbreaking student projects from our FabLabs and STEM Centers. Innovation knows no boundaries.",
      image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
      category: "Newsletter",
      readTime: "6 min read",
    },
  ]

  const socialPosts = [
    {
      title: "Student Innovation Spotlight: Solar Water Purifier",
      date: "December 18, 2024",
      excerpt:
        "Meet Alem, a 16-year-old innovator who designed a solar-powered water purification system for rural communities.",
      image: "/ethiopian-students-participating-in-science-fair-w.jpg",
      category: "Social Media",
      readTime: "3 min read",
    },
    {
      title: "Behind the Scenes at FabLab Addis",
      date: "December 15, 2024",
      excerpt:
        "Take a look at students working on cutting-edge projects in our fabrication laboratory. From 3D printing to robotics.",
      image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
      category: "Social Media",
      readTime: "4 min read",
    },
    {
      title: "Science Fair Winners Announced",
      date: "December 10, 2024",
      excerpt:
        "Celebrating the brilliant minds who won at the 9th National Science and Engineering Fair. Their projects are changing lives.",
      image: "/ethiopian-students-participating-in-science-fair-w.jpg",
      category: "Social Media",
      readTime: "3 min read",
    },
  ]

  const mediaCoverage = [
    {
      title: "How a Boston-based retired physicist is spreading the gospel of science in Africa",
      date: "December 10, 2024",
      excerpt:
        "International media coverage of STEMpower's impact across Sub-Saharan Africa. A story of dedication and transformation.",
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
      category: "Media Coverage",
      readTime: "8 min read",
      external: true,
    },
    {
      title: "UNESCO Recognizes STEMpower's Educational Impact",
      date: "November 25, 2024",
      excerpt:
        "Official recognition from UNESCO for innovative STEM education approaches. A milestone for African education.",
      image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
      category: "Media Coverage",
      readTime: "5 min read",
      external: true,
    },
    {
      title: "The Future of STEM Education in Africa",
      date: "November 15, 2024",
      excerpt:
        "Featured in leading education journals for our innovative approach to making STEM accessible across the continent.",
      image: "/ethiopian-students-participating-in-science-fair-w.jpg",
      category: "Media Coverage",
      readTime: "7 min read",
      external: true,
    },
  ]

  const featuredArticle = {
    title: "20 New African STEM Centers in Half-Year: A Historic Milestone",
    date: "December 15, 2024",
    category: "Expansion",
    excerpt:
      "STEMpower continues its rapid expansion across Sub-Saharan Africa, establishing 20 new STEM Centers in just six months.",
    content:
      "This brings our total to 132 centers across 31 countries. The expansion includes new centers in Democratic Republic of Congo, Guinea-Conakry, Burkina Faso, Mali, and Côte d'Ivoire.",
    image: "/ethiopian-students-working-with-science-equipment-.jpg",
    readTime: "10 min read",
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 max-w-6xl">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">Latest Updates</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              News & Updates from STEMpower
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty leading-relaxed">
              Stay informed about our latest developments, student achievements, and media coverage as we empower the
              next generation of African innovators.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search news and updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-white text-gray-900 border-0 focus-visible:ring-2 focus-visible:ring-white/50"
              />
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
              stroke="none"
            />
          </svg>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-4 -mt-16 relative z-20 max-w-6xl">
        <Card className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-shadow duration-300">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <Image
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-emerald-500 text-white border-0">Featured</Badge>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredArticle.date}
                </span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
                <Badge variant="secondary">{featuredArticle.category}</Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{featuredArticle.title}</h2>
              <p className="text-lg text-muted-foreground mb-4 text-pretty">{featuredArticle.excerpt}</p>
              <p className="text-muted-foreground mb-6">{featuredArticle.content}</p>
              <Button
                size="lg"
                className="w-fit bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
              >
                Read Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* News Categories Tabs */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <Tabs defaultValue="newsletter" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Explore by Category</h2>
              <p className="text-muted-foreground text-lg">
                Browse through newsletters, social media highlights, and media coverage
              </p>
            </div>
            <TabsList className="grid w-full md:w-auto grid-cols-3 h-auto p-1 bg-muted">
              <TabsTrigger
                value="newsletter"
                className="gap-2 py-3 px-4 data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Newsletter</span>
              </TabsTrigger>
              <TabsTrigger
                value="social"
                className="gap-2 py-3 px-4 data-[state=active]:bg-teal-500 data-[state=active]:text-white"
              >
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Social Media</span>
              </TabsTrigger>
              <TabsTrigger
                value="media"
                className="gap-2 py-3 px-4 data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">Media Coverage</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Newsletter Tab */}
          <TabsContent value="newsletter" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsletters.map((article, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-emerald-500 text-white border-0">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-balance group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-pretty line-clamp-3">{article.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-semibold text-emerald-600 hover:text-emerald-700 hover:bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Social Media Tab */}
          <TabsContent value="social" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialPosts.map((article, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-teal-500 text-white border-0">{article.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-balance group-hover:text-teal-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-pretty line-clamp-3">{article.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-semibold text-teal-600 hover:text-teal-700 hover:bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Media Coverage Tab */}
          <TabsContent value="media" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaCoverage.map((article, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-cyan-500 text-white border-0">{article.category}</Badge>
                    {article.external && (
                      <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900 border-0">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        External
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-balance group-hover:text-cyan-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-pretty line-clamp-3">{article.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-semibold text-cyan-600 hover:text-cyan-700 hover:bg-transparent"
                    >
                      {article.external ? "View External Article" : "Read More"}
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Newsletter Subscription */}
      <section className="container mx-auto px-4 pb-16 md:pb-24 max-w-6xl">
        <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-xl text-white/90 mb-8 text-pretty">
                Get monthly updates on STEMpower activities, student achievements, and expansion news delivered straight
                to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white text-gray-900 border-0 focus-visible:ring-2 focus-visible:ring-white/50 h-12"
                />
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90 font-semibold h-12 px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                Join 5,000+ subscribers. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
