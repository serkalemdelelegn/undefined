"use client"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, ExternalLink, Heart, MessageCircle, Share2, Sparkles, TrendingUp, Users, Eye } from "lucide-react"

// Platform icons as SVG components
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

export default function SocialMediaPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [displayCount, setDisplayCount] = useState(9)

  const postsRef = useRef<HTMLElement>(null)

  const socialPosts = [
    {
      id: 1,
      platform: "Facebook",
      platformColor: "bg-blue-600",
      content:
        "🎉 Celebrating International Women's Day with our incredible female STEM leaders! These young women are breaking barriers and inspiring the next generation of scientists, engineers, and innovators across Ethiopia. #WomensDay #STEMpower #GirlsInSTEM",
      image: "/ethiopian-students-in-stem-lab.jpg",
      date: "March 8, 2024",
      likes: 1243,
      comments: 87,
      shares: 156,
      url: "https://facebook.com/stempowerethiopia",
    },
    {
      id: 2,
      platform: "LinkedIn",
      platformColor: "bg-blue-700",
      content:
        "Proud to announce our partnership with leading tech companies to establish a new state-of-the-art FabLab in Addis Ababa! This facility will provide students with access to 3D printers, laser cutters, and advanced manufacturing tools. Together, we're building Ethiopia's innovation ecosystem. #Innovation #Partnership #STEM",
      image: "/modern-fablab-maker-space.jpg",
      date: "March 5, 2024",
      likes: 892,
      comments: 45,
      shares: 234,
      url: "https://linkedin.com/company/stempower-ethiopia",
    },
    {
      id: 3,
      platform: "Twitter",
      platformColor: "bg-black",
      content:
        "Our students just won 1st place at the National Robotics Competition! 🏆🤖 Their innovative solution addresses water scarcity in rural communities. This is what happens when you give young minds the tools and support they need. #Robotics #Innovation #Ethiopia",
      image: "/students-with-science-fair-awards.jpg",
      date: "March 3, 2024",
      likes: 2156,
      comments: 143,
      shares: 567,
      url: "https://twitter.com/stempowereth",
    },
    {
      id: 4,
      platform: "Instagram",
      platformColor: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600",
      content:
        "Behind the scenes at our STEM workshop! 📸✨ Students learning hands-on electronics and circuit design. The excitement and curiosity in their eyes is what drives us every day. Swipe to see more moments from today's session! #STEMEducation #Ethiopia #Innovation",
      image: "/ethiopian-students-presenting-project.jpg",
      date: "March 1, 2024",
      likes: 3421,
      comments: 198,
      shares: 0,
      url: "https://instagram.com/stempowerethiopia",
    },
    {
      id: 5,
      platform: "Facebook",
      platformColor: "bg-blue-600",
      content:
        "Teacher Training Program Update: Over 200 educators completed our intensive STEM pedagogy training this quarter! These dedicated teachers are now equipped with innovative teaching methods and hands-on activities to inspire their students. Investing in teachers means investing in our future. 👩‍🏫👨‍🏫 #TeacherTraining #Education",
      image: "/teachers-in-training-workshop.jpg",
      date: "February 28, 2024",
      likes: 876,
      comments: 52,
      shares: 123,
      url: "https://facebook.com/stempowerethiopia",
    },
    {
      id: 6,
      platform: "LinkedIn",
      platformColor: "bg-blue-700",
      content:
        "Impact Report: In 2023, STEMpower Ethiopia reached 15,000+ students across 50 schools, trained 500+ teachers, and established 8 new STEM centers. But we're just getting started. Join us in transforming STEM education across Ethiopia. #ImpactReport #STEM #Education #Ethiopia",
      image: "/ethiopian-students-working-with-science-equipment-.jpg",
      date: "February 25, 2024",
      likes: 1567,
      comments: 89,
      shares: 345,
      url: "https://linkedin.com/company/stempower-ethiopia",
    },
    {
      id: 7,
      platform: "Twitter",
      platformColor: "bg-black",
      content:
        "Community outreach in action! 🌍 Our mobile STEM lab visited 5 rural schools this week, bringing hands-on science experiments to students who've never had access to lab equipment. Education should reach every child, everywhere. #Outreach #STEMforAll",
      image: "/outdoor-stem-workshop-ethiopia.jpg",
      date: "February 22, 2024",
      likes: 1834,
      comments: 76,
      shares: 423,
      url: "https://twitter.com/stempowereth",
    },
    {
      id: 8,
      platform: "Instagram",
      platformColor: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600",
      content:
        "Science Fair Season! 🔬🎨 Our students presented amazing projects ranging from renewable energy solutions to agricultural innovations. The creativity and problem-solving skills on display were absolutely inspiring! #ScienceFair #YoungScientists #Ethiopia",
      image: "/ethiopian-students-participating-in-science-fair-w.jpg",
      date: "February 20, 2024",
      likes: 2987,
      comments: 167,
      shares: 0,
      url: "https://instagram.com/stempowerethiopia",
    },
    {
      id: 9,
      platform: "Facebook",
      platformColor: "bg-blue-600",
      content:
        "New STEM Center Opening Alert! 🎊 We're thrilled to announce the opening of our newest learning center in Bahir Dar. This facility will serve 2,000+ students annually with cutting-edge equipment and expert mentorship. Thank you to all our partners who made this possible! #NewCenter #Expansion #STEM",
      image: "/modern-fablab-maker-space.jpg",
      date: "February 18, 2024",
      likes: 1456,
      comments: 94,
      shares: 267,
      url: "https://facebook.com/stempowerethiopia",
    },
    {
      id: 10,
      platform: "LinkedIn",
      platformColor: "bg-blue-700",
      content:
        "Entrepreneurship Program Success Story: Meet Alem, a graduate of our incubation program who just launched her EdTech startup! Her platform is helping students in remote areas access quality STEM content. This is the power of combining STEM skills with entrepreneurial mindset. #Entrepreneurship #StartupStory #EdTech",
      image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
      date: "February 15, 2024",
      likes: 2134,
      comments: 112,
      shares: 456,
      url: "https://linkedin.com/company/stempower-ethiopia",
    },
    {
      id: 11,
      platform: "Twitter",
      platformColor: "bg-black",
      content:
        "Exciting news! 🚀 We've been selected as a finalist for the African Education Innovation Award! This recognition belongs to our amazing students, dedicated teachers, and supportive community. Thank you for believing in our mission! #Award #Recognition #AfricanEducation",
      date: "February 12, 2024",
      likes: 3421,
      comments: 234,
      shares: 789,
      url: "https://twitter.com/stempowereth",
    },
    {
      id: 12,
      platform: "Instagram",
      platformColor: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600",
      content:
        "Maker Monday! 🛠️💡 Students designing and 3D printing their own inventions at our FabLab. From prosthetic hands to solar-powered devices, the innovation happening here is incredible. What would you create? #MakerMonday #3DPrinting #Innovation",
      image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
      date: "February 10, 2024",
      likes: 2765,
      comments: 145,
      shares: 0,
      url: "https://instagram.com/stempowerethiopia",
    },
  ]

  const platforms = [
    { name: "All", icon: null, color: "" },
   
      { name: "Facebook", icon: FacebookIcon, color: "bg-clip-text bg-gradient-to-br from-[#367375] to-[#24C3BC]" },
      { name: "LinkedIn", icon: LinkedInIcon, color: "bg-clip-text bg-gradient-to-br from-[#367375] to-[#24C3BC]" },
      { name: "Twitter", icon: TwitterIcon, color: "bg-clip-text bg-gradient-to-br from-[#367375] to-[#24C3BC]" },
      { name: "Instagram", icon: InstagramIcon, color: "bg-clip-text bg-gradient-to-br from-[#367375] to-[#24C3BC]" },
    
    
  ]

  const stats = [
    { icon: Users, label: "Total Followers", value: "25K+" },
    { icon: Eye, label: "Monthly Reach", value: "150K+" },
    { icon: TrendingUp, label: "Engagement Rate", value: "8.5%" },
  ]

  const filteredPosts = socialPosts.filter((post) => {
    const matchesPlatform = selectedPlatform === "All" || post.platform === selectedPlatform
    const matchesSearch =
      searchQuery === "" ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.platform.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesPlatform && matchesSearch
  })

  const displayedPosts = filteredPosts.slice(0, displayCount)
  const hasMorePosts = displayCount < filteredPosts.length

  const scrollToPosts = () => {
    postsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 9)
  }

  const getPlatformIcon = (platformName: string) => {
    const platform = platforms.find((p) => p.name === platformName)
    return platform?.icon
  }
 
const initialDisplayCount = 6; 




  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
        <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="flex justify-center">
  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
    <Sparkles className="h-3 w-3 mr-1.5" />
    Social Media Updates
  </Badge>
</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Follow Our Journey on Social Media
            </h1>
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
              Stay connected with our daily updates, inspiring stories, and behind-the-scenes moments from the STEMpower
              Ethiopia community across all social platforms.
            </p>
            {/* <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8"
                onClick={scrollToPosts}
              >
                View All Posts
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                asChild
              >
                <a href="https://facebook.com/stempowerethiopia" target="_blank" rel="noopener noreferrer">
                  Follow Us
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div> */}
          </div>
        </div><br /><br /><br />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Stats Section */}
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

     {/* Search and Filter Section */}
<section className="max-w-6xl mx-auto px-4 py-16">
  <div className="mb-8">
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        placeholder="Search posts by content or platform..."
        className="pl-12 h-14 text-base shadow-md border-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  </div>

  <div className="flex flex-wrap gap-3 justify-center">
    {platforms.map((platform) => {
      const IconComponent = platform.icon
      const isSelected = platform.name === selectedPlatform

      return (
        <Button
          key={platform.name}
          variant={isSelected ? "default" : "outline"}
          size="lg"
          onClick={() => setSelectedPlatform(platform.name)}
          className={`
            ${isSelected 
              ? "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-md hover:brightness-110" 
              : "border-[#367375] text-[#367375] hover:bg-gradient-to-br hover:from-[#367375] hover:to-[#24C3BC] hover:text-white transition-all duration-300"
            } 
          `}
        >
          {IconComponent && (
            <span className={isSelected ? "text-white" : platform.color}>
              <IconComponent />
            </span>
          )}
          <span className="ml-2">{platform.name}</span>
        </Button>
      )
    })}
  </div>
</section>


    
{displayedPosts.length > 0 && (
  <section
    ref={postsRef}
    className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
  >
    {/* Header */}
    <div className="mb-10 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          {selectedPlatform === "All"
            ? "Recent Posts"
            : `${selectedPlatform} Posts`}
        </h2>
        <p className="text-muted-foreground">
          Stay updated with our latest social media activity
        </p>
      </div>
      <Badge
        variant="outline"
        className="text-base px-4 py-2 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-md"
      >
        {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}
      </Badge>
    </div>

    {/* Posts Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedPosts.map((post) => {
        const PlatformIcon = getPlatformIcon(post.platform)
        return (
          <Card
            key={post.id}
            className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group bg-card flex flex-col"
          >
            {/* Platform Badge */}
            <div className="p-4 pb-0">
              <Badge className="border-0 shadow-md px-3 py-1 text-sm bg-white flex items-center gap-2">
                {PlatformIcon && (
                  <span className="w-5 h-5 bg-gradient-to-br from-[#367375] to-[#24C3BC] inline-block">
                    <PlatformIcon className="w-full h-full fill-white" />
                  </span>
                )}
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#367375] to-[#24C3BC]">
                  {post.platform}
                </span>
              </Badge>
            </div>

            {/* Post Image */}
            {post.image && (
              <div className="relative h-48 overflow-hidden mx-4 mt-4 rounded-lg">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={`${post.platform} post`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            )}

            {/* Post Content */}
            <CardContent className="p-6 flex-1 flex flex-col">
              <p className="text-sm text-foreground mb-4 leading-relaxed line-clamp-4 flex-1">
                {post.content}
              </p>

              <p className="text-xs text-muted-foreground mb-4">{post.date}</p>

              {/* Engagement Metrics */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments}</span>
                </div>
                {post.shares > 0 && (
                  <div className="flex items-center gap-1.5">
                    <Share2 className="w-4 h-4" />
                    <span>{post.shares}</span>
                  </div>
                )}
              </div>

              {/* View Original Button - gradient background */}
              <Button
                asChild
                size="sm"
                className="w-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-md hover:opacity-90 transition-all duration-300"
              >
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  View Original Post
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>

    {/* Load More / Load Less Buttons */}
    <div className="mt-16 text-center flex justify-center gap-4">
      {displayCount < filteredPosts.length && (
        <Button
          size="lg"
          className="min-w-[240px] bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-md hover:opacity-90 transition-all duration-300"
          onClick={() => setDisplayCount((prev) => prev + 6)}
        >
          Load More Posts
        </Button>
      )}

      {displayCount > 6 && displayCount >= filteredPosts.length && (
        <Button
          size="lg"
          className="min-w-[240px] bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-md hover:opacity-90 transition-all duration-300"
          onClick={() => setDisplayCount(6)}
        >
          Load Less
        </Button>
      )}
    </div>
  </section>
)}





      {/* No Results Message */}
      {filteredPosts.length === 0 && (
  <section className="max-w-6xl mx-auto px-4 pb-20">
    <Card className="p-16 text-center border-dashed">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold mb-3">No posts found</h3>
        <p className="text-muted-foreground mb-6">
          Try adjusting your search or filter to find what you're looking for.
        </p>
        <Button
          onClick={() => {
            setSelectedPlatform("All")
            setSearchQuery("")
          }}
          className="bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-md transition-all duration-300 hover:brightness-110"
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
