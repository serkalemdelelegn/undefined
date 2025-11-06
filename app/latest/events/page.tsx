"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, MapPin, Clock, Users, ArrowRight, Star, Filter, Search, Sparkles, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { allEvents, type Event } from "@/lib/events-data"

const categoryColors = {
  Competition: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800",
  Workshop: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800",
  Summit:
    "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800",
  Bootcamp:
    "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800",
  Training:
    "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800",
  Showcase: "bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800",
}

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [activeTab, setActiveTab] = useState("upcoming")
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = ["all", ...Array.from(new Set(allEvents.map((event) => event.category)))]

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    const matchesTab = event.status === activeTab
    return matchesSearch && matchesCategory && matchesTab
  })

  const upcomingEvents = filteredEvents.filter((event) => event.status === "upcoming")
  const featuredEvents = upcomingEvents.filter((event) => event.featured)

  const scrollToUpcomingEvents = () => {
    setActiveTab("upcoming")
    const element = document.getElementById("events-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToPastEvents = () => {
    setActiveTab("past")
    const element = document.getElementById("events-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleSubscribe = () => {
    if (email && email.includes("@")) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  const handleLearnMore = (event: Event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden  bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-12">
          <div className="text-center text-white">
              
              <div className="flex justify-center">
  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
    <Sparkles className="h-3 w-3 mr-1.5" />
    STEMpower Ethiopia Events
  </Badge>
</div><br />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              Join Our STEM Community Events
              </h1>
              <p className="text-xl text-emerald-50 mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
              Discover workshops, competitions, and networking opportunities designed to advance STEM education and
              innovation across Ethiopia. Connect with fellow students, educators, and industry professionals.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToUpcomingEvents}
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Browse Upcoming Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToPastEvents}
                className="text-lg px-8 py-6 hover:scale-105 transition-all bg-background/80 backdrop-blur border-2"
              >
                View Past Events
              </Button>
            </div> */}
          </div>
        </div>
        <br /><br /><br /><br />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      <section className="py-8 bg-muted/30 border-b backdrop-blur-lg bg-background/80">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#2d5f62] hover:to-[#1fa89f] text-white shadow-md hover:scale-105 transition-all"
                      : "hover:border-[#367375] hover:text-[#367375] hover:bg-gradient-to-r hover:from-[#367375]/10 hover:to-[#24C3BC]/10 hover:scale-105 transition-all"
                  }
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="events-section" className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming" className="text-base">
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger value="past" className="text-base">
                Past Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-16">
              {featuredEvents.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <Star className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl font-bold">Featured Events</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredEvents.map((event) => (
                      <Card
                        key={event.id}
                        className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 border-primary/20 bg-gradient-to-br from-card to-card/50"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <Badge className="absolute top-4 left-4 bg-primary text-white shadow-lg">Featured</Badge>
                          <Badge
                            className={`absolute top-4 right-4 shadow-lg ${
                              categoryColors[event.category as keyof typeof categoryColors]
                            }`}
                          >
                            {event.category}
                          </Badge>
                        </div>
                        <CardHeader className="pb-4">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-3">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-start gap-2">
                              <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-xs text-muted-foreground">Date</p>
                                <p className="font-medium text-sm">{event.date}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-xs text-muted-foreground">Time</p>
                                <p className="font-medium text-sm">{event.time}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-xs text-muted-foreground">Location</p>
                                <p className="font-medium text-sm">{event.location}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-xs text-muted-foreground">Participants</p>
                                <p className="font-medium text-sm">{event.participants}</p>
                              </div>
                            </div>
                          </div>
                          <div className="pt-4 border-t">
                            <p className="text-sm text-muted-foreground mb-4">
                              Registration Deadline:{" "}
                              <span className="font-medium text-foreground">{event.registrationDeadline}</span>
                            </p>
                            <Button
                              asChild
                              className="w-full bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#2d5f62] hover:to-[#1fa89f] text-white shadow-lg hover:shadow-xl transition-all"
                            >
                              <Link
                                href="https://forms.gle/your-google-form-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Register Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-3xl font-bold mb-8">All Upcoming Events</h2>
                {upcomingEvents.length === 0 ? (
                  <Card className="p-12 text-center">
                    <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No events found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                  </Card>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingEvents.map((event) => (
                      <Card
                        key={event.id}
                        className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur overflow-hidden"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <Badge
                            className={`absolute top-3 right-3 shadow-lg ${
                              categoryColors[event.category as keyof typeof categoryColors]
                            }`}
                          >
                            {event.category}
                          </Badge>
                        </div>
                        <CardContent className="p-5 space-y-4">
                          <h4 className="font-bold text-lg group-hover:text-primary transition-colors leading-tight">
                            {event.title}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                            {event.description}
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span className="line-clamp-1">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="h-4 w-4 text-primary" />
                              <span>{event.participants}</span>
                            </div>
                          </div>
                         
                          <div className="pt-4 border-t">
                            
                            <Button
                              asChild
                              className="w-full bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#2d5f62] hover:to-[#1fa89f] text-white shadow-lg hover:shadow-xl transition-all"
                            >
                              <Link
                                href="https://forms.gle/your-google-form-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Register Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                            <Button
  onClick={() => handleLearnMore(event)}
  variant="ghost"
  size="sm"
  className="w-full bg-transparent hover:bg-transparent"
>
  <span className="transition-colors duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC]">
    Learn More
  </span>
</Button>

                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Past Events</h2>
                <p className="text-muted-foreground mb-8">
                  Explore our previous events and see the impact we've made in the STEM community.
                </p>
                {filteredEvents.length === 0 ? (
                  <Card className="p-12 text-center">
                    <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No past events found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                  </Card>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map((event) => (
                      <Card
                        key={event.id}
                        className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/60 backdrop-blur overflow-hidden"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110 grayscale-[30%]"
                          />
                          <Badge
                            className={`absolute top-3 right-3 ${
                              categoryColors[event.category as keyof typeof categoryColors]
                            }`}
                          >
                            {event.category}
                          </Badge>
                          <Badge className="absolute top-3 left-3 bg-muted text-muted-foreground">Completed</Badge>
                        </div>
                        <CardContent className="p-5 space-y-4">
                          <h4 className="font-bold text-lg group-hover:text-primary transition-colors leading-tight">
                            {event.title}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                            {event.description}
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span className="line-clamp-1">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="h-4 w-4 text-primary" />
                              <span>{event.participants}</span>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleLearnMore(event)}
                            variant="outline"
                            size="sm"
                            className="w-full hover:scale-105 transition-all bg-transparent"
                          >
                            View Highlights
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container max-w-6xl mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Never Miss an Event</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about upcoming workshops, competitions, and
                networking opportunities in Ethiopia's STEM community.
              </p>
              {isSubscribed ? (
                <div className="flex items-center justify-center gap-2 text-primary text-lg font-medium">
                  <CheckCircle2 className="h-6 w-6" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSubscribe}
                    size="lg"
                    className="bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#2d5f62] hover:to-[#1fa89f] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Subscribe
                  </Button>
                </div>
              )}
              <p className="text-sm text-muted-foreground mt-4">
                Join 5,000+ students and educators already subscribed
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="relative w-full h-48 -mt-6 -mx-6 mb-4 overflow-hidden">
                  <img
                    src={selectedEvent.image || "/placeholder.svg"}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge
                    className={`absolute top-4 right-4 ${
                      categoryColors[selectedEvent.category as keyof typeof categoryColors]
                    }`}
                  >
                    {selectedEvent.category}
                  </Badge>
                </div>
                <DialogTitle className="text-3xl">{selectedEvent.title}</DialogTitle>
                <DialogDescription className="text-base leading-relaxed pt-2">
                  {selectedEvent.fullDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 pt-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Date</p>
                      <p className="font-medium">{selectedEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Time</p>
                      <p className="font-medium">{selectedEvent.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-medium">{selectedEvent.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Participants</p>
                      <p className="font-medium">{selectedEvent.participants}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Event Highlights</h4>
                  <ul className="space-y-2">
                    {selectedEvent.highlights?.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedEvent.status === "upcoming" && (
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-4">
                      Registration Deadline:{" "}
                      <span className="font-medium text-foreground">{selectedEvent.registrationDeadline}</span>
                    </p>
                    <Button asChild className="w-full bg-gradient-to-r from-[#367375] to-[#24C3BC]" size="lg">
                      <Link href={`/events/register/${selectedEvent.id}`}>
                        Register for This Event
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
