"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Calendar,
  Search,
  Download,
  ArrowRight,
  Mail,
  TrendingUp,
  Users,
  BookOpen,
  Sparkles,
  CheckCircle,
  PartyPopper,
} from "lucide-react"
import Link from "next/link"

export default function NewsletterPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")
  const [displayCount, setDisplayCount] = useState(6)
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false)

  const subscriptionRef = useRef<HTMLElement>(null)
  const newslettersRef = useRef<HTMLElement>(null)

  const newsletters = [
    {
      id: 1,
      slug: "stempower-monthly-digest-march-2024",
      title: "STEMpower Ethiopia Monthly Digest - March 2024",
      excerpt:
        "Celebrating International Women's Day with our female STEM leaders, new partnerships announced, and upcoming robotics competition details.",
      date: "March 15, 2024",
      category: "Monthly Digest",
      image: "/ethiopian-students-in-stem-lab.jpg",
      featured: true,
      pdfUrl: "/newsletters/march-2024-digest.pdf",
      readTime: "8 min read",
    },
    {
      id: 2,
      slug: "innovation-spotlight-student-projects",
      title: "Innovation Spotlight: Student Projects Making Impact",
      excerpt: "Discover how our students are using STEM skills to solve real-world problems in their communities.",
      date: "March 8, 2024",
      category: "Impact Stories",
      image: "/ethiopian-students-presenting-project.jpg",
      featured: false,
      pdfUrl: "/newsletters/innovation-spotlight-march-2024.pdf",
      readTime: "6 min read",
    },
    {
      id: 3,
      slug: "new-fablab-addis-ababa",
      title: "Partnership Announcement: New FabLab Opening in Addis Ababa",
      excerpt: "We're excited to announce our newest maker space equipped with 3D printers, laser cutters, and more.",
      date: "March 1, 2024",
      category: "Announcements",
      image: "/modern-fablab-maker-space.jpg",
      featured: false,
      pdfUrl: "/newsletters/fablab-announcement-march-2024.pdf",
      readTime: "5 min read",
    },
    {
      id: 4,
      slug: "teacher-training-program-2024",
      title: "Teacher Training Program: Building STEM Capacity",
      excerpt: "Over 200 teachers completed our intensive STEM pedagogy training program this quarter.",
      date: "February 22, 2024",
      category: "Programs",
      image: "/teachers-in-training-workshop.jpg",
      featured: false,
      pdfUrl: "/newsletters/teacher-training-feb-2024.pdf",
      readTime: "7 min read",
    },
    {
      id: 5,
      slug: "national-science-fair-winners-2024",
      title: "Student Success: National Science Fair Winners",
      excerpt: "STEMpower students swept the top prizes at the National Science and Engineering Fair.",
      date: "February 15, 2024",
      category: "Achievements",
      image: "/students-with-science-fair-awards.jpg",
      featured: false,
      pdfUrl: "/newsletters/science-fair-winners-feb-2024.pdf",
      readTime: "4 min read",
    },
    {
      id: 6,
      slug: "community-outreach-rural-areas",
      title: "Community Outreach: STEM Workshops in Rural Areas",
      excerpt: "Bringing hands-on STEM education to underserved communities across Ethiopia.",
      date: "February 8, 2024",
      category: "Outreach",
      image: "/outdoor-stem-workshop-ethiopia.jpg",
      featured: false,
      pdfUrl: "/newsletters/community-outreach-feb-2024.pdf",
      readTime: "6 min read",
    },
    {
      id: 7,
      slug: "stempower-monthly-digest-february-2024",
      title: "STEMpower Ethiopia Monthly Digest - February 2024",
      excerpt: "Recap of our winter programs, new partnerships, and student success stories from across the country.",
      date: "February 1, 2024",
      category: "Monthly Digest",
      image: "/ethiopian-students-in-stem-lab.jpg",
      featured: false,
      pdfUrl: "/newsletters/february-2024-digest.pdf",
      readTime: "8 min read",
    },
    {
      id: 8,
      slug: "robotics-competition-success",
      title: "Robotics Competition: Ethiopian Students Shine",
      excerpt: "Our robotics teams placed in the top 10 at the East African Robotics Championship.",
      date: "January 28, 2024",
      category: "Achievements",
      image: "/students-with-science-fair-awards.jpg",
      featured: false,
      pdfUrl: "/newsletters/robotics-competition-jan-2024.pdf",
      readTime: "5 min read",
    },
    {
      id: 9,
      slug: "new-stem-center-opening",
      title: "New STEM Center Opens in Bahir Dar",
      excerpt: "Expanding our reach with a state-of-the-art STEM learning center in northern Ethiopia.",
      date: "January 20, 2024",
      category: "Announcements",
      image: "/modern-fablab-maker-space.jpg",
      featured: false,
      pdfUrl: "/newsletters/stem-center-opening-jan-2024.pdf",
      readTime: "6 min read",
    },
  ]

  const categories = [
    "All",
    "Monthly Digest",
    "Impact Stories",
    "Announcements",
    "Programs",
    "Achievements",
    "Outreach",
  ]

  const stats = [
    { icon: Users, label: "Subscribers", value: "5,000+" },
    { icon: BookOpen, label: "Newsletters", value: "48+" },
    { icon: TrendingUp, label: "Monthly Readers", value: "12,000+" },
  ]

  const filteredNewsletters = newsletters.filter((newsletter) => {
    const matchesCategory = selectedCategory === "All" || newsletter.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      newsletter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      newsletter.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredNewsletter = filteredNewsletters.find((n) => n.featured)
  const regularNewsletters = filteredNewsletters.filter((n) => !n.featured)

  const displayedNewsletters = regularNewsletters.slice(0, displayCount)
  const hasMoreNewsletters = displayCount < regularNewsletters.length

  const scrollToSubscription = () => {
    subscriptionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const scrollToNewsletters = () => {
    newslettersRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 6)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscriptionSuccess(true)
      setEmail("")
      setTimeout(() => {
        setSubscriptionSuccess(false)
      }, 5000)
    }
  }
 
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
        <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="flex justify-center">
  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
    <Sparkles className="h-3 w-3 mr-1.5" />
    STEMpower Newsletters
  </Badge>
</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Stay Connected
            </h1>
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
              Explore our latest stories, achievements, and updates from the STEMpower Ethiopia community. Get insights
              into how we're transforming STEM education across the nation through innovation, collaboration, and
              dedication.
            </p>
            {/* <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8"
                onClick={scrollToSubscription}
              >
                <Mail className="mr-2 h-5 w-5" />
                Subscribe Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                onClick={scrollToNewsletters}
              >
                View All Newsletters
              </Button>
            </div> */}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
        <br /><br /><br /><br />
      </section>

      <section className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
    {stats.map((stat, index) => {
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
            <div className="text-2xl font-bold text-[#367375] mb-1">{stat.value}</div>
            <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
          </CardContent>
        </Card>
      )
    })}
  </div>
</section>



<section className="max-w-6xl mx-auto px-4 py-16">
  <div className="mb-8">
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        placeholder="Search newsletters by title, topic, or keyword..."
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
            ? "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-md hover:from-[#367375] hover:to-[#24C3BC] transition-all"
            : "hover:bg-gradient-to-br hover:from-[#367375] hover:to-[#24C3BC] hover:text-white transition-all"
        }
        size="lg"
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </Button>
    ))}
  </div>
</section>



      {/* Featured Newsletter */}
{featuredNewsletter && (
  <section
    ref={newslettersRef}
    className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
  >
    {/* Header */}
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-foreground mb-2">
        Featured Newsletter
      </h2>
      <p className="text-muted-foreground">
        Our most recent and impactful story
      </p>
    </div>

    {/* Card */}
    <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group bg-card">
      <div className="grid lg:grid-cols-5 gap-0">
        {/* Image */}
        <div className="relative lg:col-span-2 h-80 lg:h-auto overflow-hidden">
          <img
            src={featuredNewsletter.image || "/placeholder.svg"}
            alt={featuredNewsletter.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <Badge className="absolute top-6 left-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white border-0 text-sm px-4 py-1.5 shadow-lg">
            ⭐ Featured
          </Badge>
        </div>

        {/* Content */}
        <CardContent className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
          {/* Category Badge */}
          <Badge
            variant="outline"
            className="w-fit mb-4 border-[#367375] text-[#367375] px-3 py-1 transition-colors duration-300 group-hover:border-[#24C3BC] group-hover:text-[#24C3BC]"
          >
            {featuredNewsletter.category}
          </Badge>

          {/* Title with gradient on hover */}
          <h3
            className="
              text-3xl lg:text-4xl font-bold mb-4 transition-all duration-300
              text-foreground
              group-hover:text-transparent group-hover:bg-clip-text
              group-hover:bg-gradient-to-r group-hover:from-[#367375] group-hover:to-[#24C3BC]
            "
          >
            {featuredNewsletter.title}
          </h3>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{featuredNewsletter.date}</span>
            </div>
            <span>•</span>
            <span>{featuredNewsletter.readTime}</span>
          </div>

          {/* Excerpt */}
          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
            {featuredNewsletter.excerpt}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            {/* Read Full Newsletter */}
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-md transition-all duration-300 hover:brightness-110"
            >
              <Link href={`/latest/news/newsletter/${featuredNewsletter.slug}`}>
                Read Full Newsletter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            {/* Download PDF */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="shadow-md border-[#367375] text-[#367375] hover:bg-gradient-to-br hover:from-[#367375] hover:to-[#24C3BC] hover:text-white transition-all duration-300"
            >
              <a href={featuredNewsletter.pdfUrl} download>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  </section>
)}



{/* Newsletter Grid */}
{regularNewsletters.length > 0 && (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
    {/* Header */}
    <div className="mb-10 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          {selectedCategory === "All"
            ? "Recent Newsletters"
            : `${selectedCategory} Newsletters`}
        </h2>
        <p className="text-muted-foreground">
          Catch up on our latest updates and stories
        </p>
      </div>

      <Badge
        variant="outline"
        className="text-base px-4 py-2 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-md"
      >
        {regularNewsletters.length} newsletter
        {regularNewsletters.length !== 1 ? "s" : ""}
      </Badge>
    </div>

    {/* Newsletter Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedNewsletters.map((newsletter) => (
        <Card
          key={newsletter.id}
          className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group bg-card"
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={newsletter.image || "/placeholder.svg"}
              alt={newsletter.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <Badge className="absolute top-4 left-4 text-xs border-0 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-md">
              {newsletter.category}
            </Badge>
          </div>

          {/* Content */}
          <CardContent className="p-6">
          <h3
  className="
    text-xl font-bold mb-3 line-clamp-2 leading-snug
    text-foreground
    transition-all duration-300
    group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#367375] group-hover:to-[#24C3BC]
  "
>
  {newsletter.title}
</h3>


            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{newsletter.date}</span>
              </div>
              <span>•</span>
              <span>{newsletter.readTime}</span>
            </div>

            <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
              {newsletter.excerpt}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {/* Read More */}
              <Button
                asChild
                size="sm"
                className="flex-1 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-sm transition-all duration-300 hover:brightness-110"
              >
                <Link href={`/latest/news/newsletter/${newsletter.slug}`}>
                  Read More
                  <ArrowRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              {/* Download */}
              <Button
                asChild
                size="sm"
                variant="outline"
                className="shadow-sm bg-transparent transition-all duration-300 hover:bg-gradient-to-br hover:from-[#367375] hover:to-[#24C3BC] hover:text-white"
              >
                <a href={newsletter.pdfUrl} download>
                  <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Load More / Load Less */}
    <div className="mt-16 text-center flex justify-center gap-4">
      {hasMoreNewsletters && (
        <Button
          variant="outline"
          size="lg"
          className="min-w-[240px] shadow-md bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white transition-all duration-300 hover:brightness-110"
          onClick={handleLoadMore}
        >
          Load More
        </Button>
      )}

      {displayCount > 6 && (
        <Button
          variant="outline"
          size="lg"
          className="min-w-[240px] shadow-md bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white transition-all duration-300 hover:brightness-110"
          onClick={() => setDisplayCount(6)}
        >
          Load Less
        </Button>
      )}
    </div>
  </section>
)}





      {/* No Results Message */}
      {filteredNewsletters.length === 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <Card className="p-16 text-center border-dashed">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">No newsletters found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                }}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Clear Filters
              </Button>
            </div>
          </Card>
        </section>
      )}

<section ref={subscriptionRef} className="max-w-6xl mx-auto px-4 pb-24">
  <Card className="overflow-hidden border-2 shadow-2xl">
    <div className="grid md:grid-cols-2 gap-0">
      {/* Left side - Image and benefits */}
      <div className="relative bg-gradient-to-br from-[#367375] to-[#24C3BC] p-12 text-white">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Join Our Newsletter Community
          </h2>
          <p className="text-emerald-50 mb-8 text-lg leading-relaxed">
            Get exclusive insights, inspiring stories, and the latest updates from STEMpower Ethiopia delivered
            directly to your inbox.
          </p>

          <div className="space-y-4">
            {[
              "Monthly digest of our programs and impact",
              "Exclusive stories from students and teachers",
              "Early access to events and opportunities",
              "Behind-the-scenes updates and announcements",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 backdrop-blur-sm">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <span className="text-emerald-50">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-emerald-100">
              Join <span className="font-bold text-white">5,000+ subscribers</span> who stay informed about our
              mission to transform STEM education in Ethiopia.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Right side - Subscription form */}
      <div className="p-12 bg-white flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {subscriptionSuccess ? (
            <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <PartyPopper className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Welcome Aboard!</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for subscribing to our newsletter. You'll receive our next edition soon!
              </p>
              <div className="bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10 border-2 border-[#367375] rounded-lg p-6">
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle className="h-5 w-5 text-[#367375] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#367375] mb-1">Subscription Confirmed</p>
                    <p className="text-sm text-[#24C3BC]">
                      Check your inbox for a welcome email with exclusive content and resources.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => setSubscriptionSuccess(false)}
                variant="outline"
                className="mt-6 border-2 border-[#367375] text-[#367375] hover:bg-gradient-to-br hover:from-[#367375] hover:to-[#24C3BC] hover:text-white"
              >
                Subscribe Another Email
              </Button>
            </div>
          ) : (
            <>
              <Badge className="mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white border-0">
                <Sparkles className="h-3 w-3 mr-1" />
                Free Newsletter
              </Badge>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Subscribe Today</h3>
              <p className="text-muted-foreground mb-8">
                Enter your email below and never miss an update from our community.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="h-12 text-base border-2 border-[#367375]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-br from-[#367375] to-[#24C3BC] hover:from-[#24C3BC] hover:to-[#367375] text-white h-12 text-base font-semibold shadow-md"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-6 text-center">
                By subscribing, you agree to receive our monthly newsletter. You can unsubscribe at any time. We
                respect your privacy and will never share your information.
              </p>

              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center justify-center gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#367375]">48+</div>
                    <div className="text-xs text-muted-foreground">Issues Published</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <div className="text-2xl font-bold text-[#367375]">12K+</div>
                    <div className="text-xs text-muted-foreground">Monthly Readers</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  </Card>
</section>

      <Footer />
    </div>
  )
}
