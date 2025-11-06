"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Megaphone,
  Search,
  Calendar,
  Briefcase,
  Bell,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  ExternalLink,
  Sparkles,
  CalendarDays,
  X,
} from "lucide-react"

const announcements = [
  {
    id: 1,
    title: "New STEM Center Opening in Bahir Dar",
    category: "Official Update",
    type: "update",
    date: "2024-03-15",
    location: "Bahir Dar, Ethiopia",
    priority: "high",
    excerpt:
      "We are excited to announce the opening of our newest STEM Center in Bahir Dar, equipped with state-of-the-art laboratory equipment and maker space facilities.",
    content:
      "STEMpower Ethiopia is proud to announce the grand opening of our 62nd STEM Center in Bahir Dar. This facility will serve over 2,000 students annually and features advanced science laboratories, a fully equipped maker space, and digital learning resources. The center will officially open on April 1st, 2024. This expansion represents our commitment to bringing quality STEM education to every corner of Ethiopia. The Bahir Dar center will offer programs in robotics, coding, environmental science, and entrepreneurship. We invite the community to join us for the grand opening ceremony and tour the facilities.",
    image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
    link: "/programs/stem-operations/stem-centers",
  },
  {
    id: 2,
    title: "Summer Internship Program Applications Now Open",
    category: "Opportunity",
    type: "opportunity",
    date: "2024-03-10",
    location: "Addis Ababa, Ethiopia",
    priority: "high",
    deadline: "2024-04-15",
    excerpt:
      "Apply now for our 2024 Summer Internship Program! We're looking for passionate students interested in STEM education, entrepreneurship, and community development.",
    content:
      "STEMpower Ethiopia is accepting applications for our competitive Summer Internship Program. Interns will work alongside our team on real projects, gain hands-on experience in STEM education delivery, and contribute to expanding access to quality education across Ethiopia. The program runs from June to August 2024. Selected interns will receive a stipend, mentorship from experienced professionals, and the opportunity to make a real impact in their communities. This is an excellent opportunity for students pursuing careers in education, technology, social entrepreneurship, or international development.",
    image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    googleFormUrl: "https://forms.gle/internship-application",
  },
  {
    id: 3,
    title: "National Science Fair 2024 Registration",
    category: "Event",
    type: "event",
    date: "2024-03-08",
    location: "Multiple Locations",
    priority: "medium",
    deadline: "2024-03-30",
    excerpt:
      "Registration is now open for the National Science Fair 2024. Students from all STEM Centers are invited to showcase their innovative projects and compete for prizes.",
    content:
      "The annual National Science Fair brings together the brightest young minds from across Ethiopia. This year's theme is 'Innovation for Sustainable Development.' Students can register their projects in categories including Environmental Science, Technology & Engineering, Health Sciences, and Social Innovation. Winners will receive scholarships, mentorship opportunities, and the chance to represent Ethiopia at international science competitions.",
    image: "/ethiopian-students-participating-in-science-fair-w.jpg",
    link: "/events",
  },
  {
    id: 4,
    title: "Partnership with Addis Ababa University Announced",
    category: "Official Update",
    type: "update",
    date: "2024-03-05",
    location: "Addis Ababa, Ethiopia",
    priority: "high",
    excerpt:
      "STEMpower Ethiopia has signed a strategic partnership with Addis Ababa University to enhance STEM education and research opportunities for students nationwide.",
    content:
      "This groundbreaking partnership will provide university students with opportunities to mentor high school students, conduct research projects at our STEM Centers, and develop innovative educational content. The collaboration aims to bridge the gap between secondary and higher education in STEM fields. Through this partnership, we will establish joint research initiatives, create pathways for talented students, and develop curriculum that meets international standards while addressing local challenges.",
    image: "/ethiopian-students-working-with-science-equipment-.jpg",
    link: "/about",
  },
  {
    id: 5,
    title: "FabLab Manager Position - Dire Dawa",
    category: "Opportunity",
    type: "opportunity",
    date: "2024-03-01",
    location: "Dire Dawa, Ethiopia",
    priority: "medium",
    deadline: "2024-03-25",
    excerpt:
      "We're hiring a FabLab Manager to oversee operations at our Dire Dawa maker space. This role involves managing equipment, training students, and developing innovative programs.",
    content:
      "The FabLab Manager will be responsible for the day-to-day operations of our maker space, including equipment maintenance, student training, project supervision, and community engagement. Ideal candidates have experience with digital fabrication tools, 3D printing, and educational program development. This position offers competitive salary, professional development opportunities, and the chance to shape the future of maker education in Ethiopia.",
    image: "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    googleFormUrl: "https://forms.gle/fablab-manager-application",
  },
  {
    id: 6,
    title: "Teacher Training Workshop - April 2024",
    category: "Event",
    type: "event",
    date: "2024-02-28",
    location: "Addis Ababa, Ethiopia",
    priority: "medium",
    deadline: "2024-03-20",
    excerpt:
      "Join our comprehensive teacher training workshop focused on hands-on STEM pedagogy, inquiry-based learning, and effective use of laboratory equipment.",
    content:
      "This intensive 5-day workshop will equip teachers with practical skills and methodologies to deliver engaging STEM education. Topics include experimental design, safety protocols, student-centered learning approaches, and integrating technology in the classroom. Participants will receive certification upon completion. The workshop includes hands-on laboratory sessions, collaborative lesson planning, and ongoing support through our teacher network.",
    image: "/ethiopian-students-working-with-science-equipment-.jpg",
    link: "/events",
  },
  {
    id: 7,
    title: "Annual Impact Report 2023 Released",
    category: "Official Update",
    type: "update",
    date: "2024-02-25",
    location: "National",
    priority: "low",
    excerpt:
      "Our 2023 Impact Report is now available, showcasing the achievements, challenges, and growth of STEMpower Ethiopia over the past year.",
    content:
      "The report highlights our expansion to 61 STEM Centers, reaching over 50,000 students, training 1,000+ teachers, and launching new entrepreneurship programs. It also includes financial transparency, partner testimonials, and our strategic vision for 2024-2025. Download the full report to learn about our impact metrics, success stories, and plans for continued growth.",
    image: "/ethiopian-students-participating-in-science-fair-w.jpg",
    link: "#download",
  },
  {
    id: 8,
    title: "Entrepreneurship Bootcamp for Young Innovators",
    category: "Opportunity",
    type: "opportunity",
    date: "2024-02-20",
    location: "Addis Ababa, Ethiopia",
    priority: "high",
    deadline: "2024-03-15",
    excerpt:
      "Applications open for our intensive 3-month entrepreneurship bootcamp designed for young innovators aged 18-25 with business ideas in STEM fields.",
    content:
      "This program provides mentorship, business development training, access to our FabLab facilities, and potential seed funding for promising ventures. Participants will learn business planning, financial management, marketing, and pitch presentation skills while developing their startup ideas. The bootcamp culminates in a pitch competition where top teams can win seed funding to launch their ventures.",
    image: "/young-ethiopian-entrepreneurs-presenting-business-.jpg",
    googleFormUrl: "https://forms.gle/bootcamp-application",
  },
]

const pastAnnouncements = [
  {
    id: 101,
    title: "STEM Education Conference 2023 - Highlights",
    category: "Event",
    type: "event",
    date: "2023-12-15",
    location: "Addis Ababa, Ethiopia",
    priority: "low",
    excerpt:
      "A recap of our successful annual STEM Education Conference that brought together educators, policymakers, and students from across Ethiopia.",
    content:
      "The 2023 STEM Education Conference was a resounding success with over 500 participants. Key highlights included keynote speeches from international STEM education experts, workshops on innovative teaching methodologies, and the launch of our new digital learning platform. Participants shared best practices and formed valuable partnerships that will strengthen STEM education nationwide.",
    image: "/ethiopian-students-participating-in-science-fair-w.jpg",
    link: "#",
  },
  {
    id: 102,
    title: "Robotics Competition Winners Announced",
    category: "Official Update",
    type: "update",
    date: "2023-11-20",
    location: "Multiple Locations",
    priority: "low",
    excerpt:
      "Congratulations to all participants in our National Robotics Competition. Meet the winning teams and their innovative projects.",
    content:
      "After months of preparation and intense competition, we are proud to announce the winners of the 2023 National Robotics Competition. The first-place team from Hawassa designed an automated irrigation system for small-scale farmers. Second place went to a team from Mekelle who created a waste sorting robot. All winning teams will represent Ethiopia at the Pan-African Robotics Championship.",
    image: "/ethiopian-students-using-3d-printers-and-technolog.jpg",
    link: "#",
  },
  {
    id: 103,
    title: "Teacher Excellence Awards 2023",
    category: "Official Update",
    type: "update",
    date: "2023-10-10",
    location: "Addis Ababa, Ethiopia",
    priority: "low",
    excerpt:
      "Celebrating outstanding educators who have made exceptional contributions to STEM education in their communities.",
    content:
      "The Teacher Excellence Awards recognized 15 outstanding educators from across Ethiopia who have demonstrated exceptional dedication to STEM education. Winners received professional development grants, international conference opportunities, and recognition at our annual gala. These teachers have inspired thousands of students and serve as role models for the teaching community.",
    image: "/ethiopian-students-working-with-science-equipment-.jpg",
    link: "#",
  },
  {
    id: 104,
    title: "Girls in STEM Summer Camp - Success Story",
    category: "Event",
    type: "event",
    date: "2023-09-05",
    location: "Bahir Dar, Ethiopia",
    priority: "low",
    excerpt:
      "Our Girls in STEM Summer Camp empowered 200 young women with hands-on experience in science, technology, engineering, and mathematics.",
    content:
      "The inaugural Girls in STEM Summer Camp exceeded all expectations. Over 200 girls aged 13-17 participated in intensive workshops covering coding, robotics, environmental science, and entrepreneurship. The camp featured female role models from various STEM fields and provided mentorship opportunities. Post-camp surveys showed a 95% increase in participants' confidence in pursuing STEM careers.",
    image: "/ethiopian-students-in-science-laboratory-conductin.jpg",
    link: "#",
    googleFormUrl: "https://forms.gle/past-announcements",
  },
]

export default function AnnouncementsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<(typeof announcements)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false)
  const [email, setEmail] = useState("")

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || announcement.type === selectedCategory
    const matchesDate = !selectedDate || announcement.date === selectedDate
    return matchesSearch && matchesCategory && matchesDate
  })

  const filteredPastAnnouncements = pastAnnouncements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || announcement.type === selectedCategory
    const matchesDate = !selectedDate || announcement.date === selectedDate
    return matchesSearch && matchesCategory && matchesDate
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case "update":
        return <Bell className="w-4 h-4" />
      case "opportunity":
        return <Briefcase className="w-4 h-4" />
      case "event":
        return <Calendar className="w-4 h-4" />
      default:
        return <Megaphone className="w-4 h-4" />
    }
  }

  const handleReadMore = (announcement: (typeof announcements)[0]) => {
    setSelectedAnnouncement(announcement)
    setIsDialogOpen(true)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscriptionSuccess(true)
      setEmail("")
      setTimeout(() => setSubscriptionSuccess(false), 5000)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] via-[#2a9b96] to-[#24C3BC]">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-10 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
            <div className="text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-base px-4 py-2">
                <Sparkles className="h-4 w-4 mr-2" />
                Stay Informed
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                Announcements & Opportunities
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
                Stay up to date with official updates, exciting opportunities, and upcoming events from STEMpower
                Ethiopia. Be the first to know about new programs, job openings, and partnership announcements.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-1">8+</div>
                  <div className="text-sm text-white/90">Active Announcements</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-1">5+</div>
                  <div className="text-sm text-white/90">Open Opportunities</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-1">3+</div>
                  <div className="text-sm text-white/90">Upcoming Events</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="mb-8 border-2 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6">
                    {/* Search and Date Filter Row */}
                    <div className="grid md:grid-cols-[1fr_auto] gap-4">
                      <div className="relative group">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-[#367375] transition-colors" />
                        <Input
                          placeholder="Search announcements by title or keyword..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-12 h-14 text-base border-2 focus:border-[#367375] shadow-sm"
                        />
                      </div>
                      <div className="relative group w-full md:w-72">
                        <CalendarDays className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none group-focus-within:text-[#367375] transition-colors" />
                        <Input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="pl-12 pr-10 h-14 text-base border-2 focus:border-[#367375] shadow-sm"
                          placeholder="Filter by date"
                        />
                        {selectedDate && (
                          <button
                            onClick={() => setSelectedDate("")}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Clear date filter"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="border-t pt-6">
                      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                        <TabsList className="grid grid-cols-4 h-14 w-full bg-slate-100">
                          <TabsTrigger value="all" className="text-base font-medium data-[state=active]:bg-white">
                            All Announcements
                          </TabsTrigger>
                          <TabsTrigger value="update" className="text-base font-medium data-[state=active]:bg-white">
                            <Bell className="w-4 h-4 mr-2" />
                            Updates
                          </TabsTrigger>
                          <TabsTrigger
                            value="opportunity"
                            className="text-base font-medium data-[state=active]:bg-white"
                          >
                            <Briefcase className="w-4 h-4 mr-2" />
                            Opportunities
                          </TabsTrigger>
                          <TabsTrigger value="event" className="text-base font-medium data-[state=active]:bg-white">
                            <Calendar className="w-4 h-4 mr-2" />
                            Events
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Announcements Section */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Current Announcements</h2>
                    <p className="text-muted-foreground">
                      Showing <span className="font-semibold text-foreground">{filteredAnnouncements.length}</span>{" "}
                      active {filteredAnnouncements.length === 1 ? "announcement" : "announcements"}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6">
                  {filteredAnnouncements.map((announcement) => (
                    <Card
                      key={announcement.id}
                      className="overflow-hidden border-2 hover:border-[#367375]/50 hover:shadow-xl transition-all group"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="relative w-full md:w-72 h-48 overflow-hidden bg-muted flex-shrink-0">
                          <img
                            src={announcement.image || "/placeholder.svg"}
                            alt={announcement.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge
                            className={`absolute top-3 left-3 ${getPriorityColor(announcement.priority)} border font-semibold text-xs`}
                          >
                            {announcement.priority === "high" ? "Priority" : announcement.priority}
                          </Badge>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-5">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                              {getCategoryIcon(announcement.type)}
                              {announcement.category}
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(announcement.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {announcement.location}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold mb-2 text-balance group-hover:text-[#367375] transition-colors line-clamp-2">
                            {announcement.title}
                          </h3>

                          <p className="text-sm text-muted-foreground mb-3 text-pretty leading-relaxed line-clamp-2">
                            {announcement.excerpt}
                          </p>

                          {announcement.deadline && (
                            <div className="flex items-center gap-2 mb-3 p-2 bg-amber-50 border border-amber-200 rounded-lg">
                              <Clock className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                              <span className="text-xs font-medium text-amber-900">
                                Deadline:{" "}
                                {new Date(announcement.deadline).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2">
                            <Button
                              size="sm"
                              onClick={() => handleReadMore(announcement)}
                              className="bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#2a9b96] hover:to-[#1fa89f]"
                            >
                              Read More
                              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                            </Button>
                            {announcement.type === "opportunity" && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-gradient-white hover:bg-gradient-to-r from-[#367375] to-[#24C3BC]"
                                onClick={() => {
                                  if (announcement.googleFormUrl) {
                                    window.open(announcement.googleFormUrl, "_blank")
                                  }
                                }}
                              >
                                Apply Now
                                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* No Results */}
                {filteredAnnouncements.length === 0 && (
                  <Card className="p-12 text-center border-2 border-dashed">
                    <Megaphone className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No current announcements found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search or filter to find what you're looking for.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedCategory("all")
                        setSelectedDate("")
                      }}
                    >
                      Clear Filters
                    </Button>
                  </Card>
                )}
              </div>

              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Past Announcements</h2>
                    <p className="text-muted-foreground">
                      Browse through our archive of{" "}
                      <span className="font-semibold text-foreground">{filteredPastAnnouncements.length}</span> previous{" "}
                      {filteredPastAnnouncements.length === 1 ? "announcement" : "announcements"}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#367375]/5 via-[#2a9b96]/5 to-[#24C3BC]/5 rounded-lg p-6 border-2 border-[#367375]/20">
                  <div className="grid gap-6">
                    {filteredPastAnnouncements.map((announcement) => (
                      <Card
                        key={announcement.id}
                        className="overflow-hidden border-2 hover:border-[#367375]/50 hover:shadow-xl transition-all group opacity-90"
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Image */}
                          <div className="relative w-full md:w-72 h-48 overflow-hidden bg-muted flex-shrink-0">
                            <img
                              src={announcement.image || "/placeholder.svg"}
                              alt={announcement.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 grayscale-[30%]"
                            />
                            <Badge className="absolute top-3 left-3 bg-slate-100 text-slate-700 border-slate-300 font-semibold text-xs">
                              Archived
                            </Badge>
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-5">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                                {getCategoryIcon(announcement.type)}
                                {announcement.category}
                              </Badge>
                              <div className="flex items-center text-xs text-muted-foreground gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {new Date(announcement.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {announcement.location}
                              </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-balance group-hover:text-[#367375] transition-colors line-clamp-2">
                              {announcement.title}
                            </h3>

                            <p className="text-sm text-muted-foreground mb-3 text-pretty leading-relaxed line-clamp-2">
                              {announcement.excerpt}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleReadMore(announcement)}
                                className="bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#2a9b96] hover:to-[#1fa89f] text-white"
                              >
                                Read More
                                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                              </Button>
                              {announcement.type === "opportunity" && (
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#367375] to-[#24C3BC]"
                                  onClick={() => {
                                    if (announcement.googleFormUrl) {
                                      window.open(announcement.googleFormUrl, "_blank")
                                    }
                                  }}
                                >
                                  Apply Now
                                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  {/* No Past Results */}
                  {filteredPastAnnouncements.length === 0 && (
                    <Card className="p-12 text-center border-2 border-dashed">
                      <Clock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No past announcements found</h3>
                      <p className="text-muted-foreground">
                        Try adjusting your search or filter to find archived announcements.
                      </p>
                    </Card>
                  )}
                </div>
              </div>

              <Card className="mt-12 bg-gradient-to-br from-[#367375]/5 to-[#24C3BC]/5 border-2 border-[#367375]/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#367375]/10 flex items-center justify-center">
                          <Bell className="w-6 h-6 text-[#367375]" />
                        </div>
                        <h3 className="text-2xl font-bold">Never Miss an Update</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Subscribe to our newsletter and get the latest announcements, opportunities, and event updates
                        delivered directly to your inbox.
                      </p>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-[#367375] flex-shrink-0 mt-0.5" />
                        <span>Weekly digest of new announcements</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground mt-2">
                        <CheckCircle2 className="w-4 h-4 text-[#367375] flex-shrink-0 mt-0.5" />
                        <span>Priority access to opportunities</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground mt-2">
                        <CheckCircle2 className="w-4 h-4 text-[#367375] flex-shrink-0 mt-0.5" />
                        <span>Exclusive event invitations</span>
                      </div>
                    </div>
                    <div>
                      {subscriptionSuccess ? (
                        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                          <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
                          <h4 className="text-lg font-bold text-green-900 mb-2">Successfully Subscribed!</h4>
                          <p className="text-sm text-green-700">
                            Thank you for subscribing. You'll receive our latest updates in your inbox.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubscribe} className="space-y-4">
                          <Input
                            placeholder="Your email address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="h-12 text-base border-2"
                          />
                          <Button
                            type="submit"
                            className="w-full h-12 text-base bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#2a9b96] hover:to-[#1fa89f]"
                          >
                            Subscribe to Updates
                          </Button>
                          <p className="text-xs text-muted-foreground text-center">
                            We respect your privacy. Unsubscribe at any time.
                          </p>
                        </form>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedAnnouncement && (
            <>
              <DialogHeader>
                <div className="relative w-full h-64 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img
                    src={selectedAnnouncement.image || "/placeholder.svg"}
                    alt={selectedAnnouncement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge
                    className={`absolute top-4 left-4 ${getPriorityColor(selectedAnnouncement.priority)} border font-semibold`}
                  >
                    {selectedAnnouncement.priority === "high" ? "Priority" : selectedAnnouncement.priority}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {getCategoryIcon(selectedAnnouncement.type)}
                    {selectedAnnouncement.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(selectedAnnouncement.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedAnnouncement.location}
                  </div>
                </div>
                <DialogTitle className="text-2xl font-bold text-balance leading-tight">
                  {selectedAnnouncement.title}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-base text-foreground leading-relaxed space-y-4">
                {selectedAnnouncement.deadline && (
                  <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-amber-900">
                      Application Deadline:{" "}
                      {new Date(selectedAnnouncement.deadline).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                )}
                <p className="text-pretty">{selectedAnnouncement.content}</p>
                {selectedAnnouncement.type === "opportunity" && (
                  <div className="pt-4">
                    <Button
                      className="w-full bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#2a9b96] hover:to-[#1fa89f]"
                      onClick={() => {
                        if (selectedAnnouncement.googleFormUrl) {
                          window.open(selectedAnnouncement.googleFormUrl, "_blank")
                        }
                      }}
                    >
                      Apply Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  )
}
