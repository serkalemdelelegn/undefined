"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { BackButton } from "@/components/ui/back-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Calendar, MapPin, Users, Clock, X, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface HeroBanner {
  badge: string
  title: string
  description: string
  statistics: {
    id: string
    icon: string
    value: string
    label: string
  }[]
}

interface Event {
  id: string
  badge: string
  title: string
  description: string
  date: string
  endDate?: string
  time: string
  location: string
  participants: string
  registrationLink: string
  registrationDeadline: string
  highlights: string[]
  image: string | null
  type: "upcoming" | "past"
  featured: boolean
}

export default function EventsPage() {
  const [heroBanner, setHeroBanner] = useState<HeroBanner>({
    badge: "STEMpower Events",
    title: "Join Our STEM Community Events",
    description:
      "Participate in workshops, competitions, and networking opportunities that advance STEM education across Ethiopia.",
    statistics: [
      { id: "1", icon: "calendar", value: "50+", label: "Annual Events" },
      { id: "2", icon: "users", value: "10,000+", label: "Total Participants" },
      { id: "3", icon: "trophy", value: "25+", label: "Competitions Hosted" },
    ],
  })

  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      badge: "Competition",
      title: "National Science Fair 2025",
      description:
        "Ethiopia's largest student science competition featuring innovative projects from across the country. Students will present groundbreaking research in renewable energy, agriculture, healthcare, and technology solutions.",
      date: "2025-03-15",
      endDate: "2025-03-17",
      time: "9:00 AM - 6:00 PM",
      location: "Addis Ababa Science Museum",
      participants: "500+ Expected",
      registrationLink: "https://forms.google.com/science-fair-2025",
      registrationDeadline: "2025-03-01",
      highlights: [
        "Project presentations and judging",
        "Workshops with industry experts",
        "Networking sessions",
        "Awards ceremony and scholarships",
      ],
      image: null,
      type: "upcoming",
      featured: true,
    },
  ])

  const [isHeroDialogOpen, setIsHeroDialogOpen] = useState(false)
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [activeTab, setActiveTab] = useState("hero")
  const [eventFilter, setEventFilter] = useState<"upcoming" | "past">("upcoming")

  const [heroFormData, setHeroFormData] = useState(heroBanner)

  const [eventFormData, setEventFormData] = useState({
    badge: "",
    title: "",
    description: "",
    date: "",
    endDate: "",
    time: "",
    location: "",
    participants: "",
    registrationLink: "",
    registrationDeadline: "",
    highlights: [""],
    image: null as File | null,
    type: "upcoming" as "upcoming" | "past",
    featured: false,
  })

  const handleSaveHero = () => {
    setHeroBanner(heroFormData)
    setIsHeroDialogOpen(false)
  }

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event)
    setEventFormData({
      badge: event.badge,
      title: event.title,
      description: event.description,
      date: event.date,
      endDate: event.endDate || "",
      time: event.time,
      location: event.location,
      participants: event.participants,
      registrationLink: event.registrationLink,
      registrationDeadline: event.registrationDeadline,
      highlights: event.highlights,
      image: null,
      type: event.type,
      featured: event.featured,
    })
    setIsEventDialogOpen(true)
  }

  const handleDeleteEvent = (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((e) => e.id !== id))
    }
  }

  const handleSaveEvent = () => {
    const imageUrl = eventFormData.image ? URL.createObjectURL(eventFormData.image) : null

    if (editingEvent) {
      setEvents(
        events.map((e) =>
          e.id === editingEvent.id
            ? {
                ...e,
                ...eventFormData,
                image: imageUrl || e.image,
              }
            : e,
        ),
      )
    } else {
      setEvents([
        ...events,
        {
          id: Date.now().toString(),
          ...eventFormData,
          image: imageUrl,
        },
      ])
    }
    setIsEventDialogOpen(false)
    setEditingEvent(null)
    setEventFormData({
      badge: "",
      title: "",
      description: "",
      date: "",
      endDate: "",
      time: "",
      location: "",
      participants: "",
      registrationLink: "",
      registrationDeadline: "",
      highlights: [""],
      image: null,
      type: "upcoming",
      featured: false,
    })
  }

  const addHighlight = () => {
    setEventFormData({
      ...eventFormData,
      highlights: [...eventFormData.highlights, ""],
    })
  }

  const updateHighlight = (index: number, value: string) => {
    const newHighlights = [...eventFormData.highlights]
    newHighlights[index] = value
    setEventFormData({ ...eventFormData, highlights: newHighlights })
  }

  const removeHighlight = (index: number) => {
    setEventFormData({
      ...eventFormData,
      highlights: eventFormData.highlights.filter((_, i) => i !== index),
    })
  }

  const addStatistic = () => {
    setHeroFormData({
      ...heroFormData,
      statistics: [...heroFormData.statistics, { id: Date.now().toString(), icon: "star", value: "", label: "" }],
    })
  }

  const updateStatistic = (id: string, field: "icon" | "value" | "label", value: string) => {
    setHeroFormData({
      ...heroFormData,
      statistics: heroFormData.statistics.map((stat) => (stat.id === id ? { ...stat, [field]: value } : stat)),
    })
  }

  const removeStatistic = (id: string) => {
    setHeroFormData({
      ...heroFormData,
      statistics: heroFormData.statistics.filter((stat) => stat.id !== id),
    })
  }

  const filteredEvents = events.filter((event) => event.type === eventFilter)
  const featuredEvents = filteredEvents.filter((event) => event.featured)
  const regularEvents = filteredEvents.filter((event) => !event.featured)

  return (
    <div>
      <AdminHeader title="Events" description="Manage events, workshops, and competitions" />
      <div className="p-6 max-w-7xl">
        <BackButton />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="hero">Hero Banner</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          {/* Hero Banner Tab */}
          <TabsContent value="hero" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Hero Banner</CardTitle>
                    <CardDescription>Manage the events page hero section</CardDescription>
                  </div>
                  <Dialog open={isHeroDialogOpen} onOpenChange={setIsHeroDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setHeroFormData(heroBanner)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Hero
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Edit Hero Banner</DialogTitle>
                        <DialogDescription>Update the hero section content and statistics</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="hero-badge">Badge Text</Label>
                          <Input
                            id="hero-badge"
                            value={heroFormData.badge}
                            onChange={(e) => setHeroFormData({ ...heroFormData, badge: e.target.value })}
                            placeholder="STEMpower Events"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hero-title">Title</Label>
                          <Input
                            id="hero-title"
                            value={heroFormData.title}
                            onChange={(e) => setHeroFormData({ ...heroFormData, title: e.target.value })}
                            placeholder="Join Our STEM Community Events"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hero-description">Description</Label>
                          <Textarea
                            id="hero-description"
                            rows={3}
                            value={heroFormData.description}
                            onChange={(e) => setHeroFormData({ ...heroFormData, description: e.target.value })}
                            placeholder="Participate in workshops, competitions..."
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label>Statistics</Label>
                            <Button type="button" variant="outline" size="sm" onClick={addStatistic}>
                              <Plus className="h-4 w-4 mr-1" />
                              Add Statistic
                            </Button>
                          </div>
                          {heroFormData.statistics.map((stat, index) => (
                            <Card key={stat.id} className="p-4">
                              <div className="flex items-start gap-3">
                                <div className="flex-1 space-y-3">
                                  <div className="grid grid-cols-3 gap-3">
                                    <div className="space-y-2">
                                      <Label>Icon</Label>
                                      <select
                                        value={stat.icon}
                                        onChange={(e) => updateStatistic(stat.id, "icon", e.target.value)}
                                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                                      >
                                        <option value="calendar">Calendar</option>
                                        <option value="users">Users</option>
                                        <option value="trophy">Trophy</option>
                                        <option value="star">Star</option>
                                        <option value="target">Target</option>
                                      </select>
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Value</Label>
                                      <Input
                                        value={stat.value}
                                        onChange={(e) => updateStatistic(stat.id, "value", e.target.value)}
                                        placeholder="50+"
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Label</Label>
                                      <Input
                                        value={stat.label}
                                        onChange={(e) => updateStatistic(stat.id, "label", e.target.value)}
                                        placeholder="Annual Events"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeStatistic(stat.id)}
                                  className="mt-6"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </Card>
                          ))}
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                          <Button variant="outline" onClick={() => setIsHeroDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleSaveHero} className="bg-[#00BFA6] hover:bg-[#00A693]">
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-gradient-to-br from-[#00BFA6] to-[#00897B] p-8 text-white">
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">{heroBanner.badge}</div>
                  <h2 className="text-3xl font-bold mb-3">{heroBanner.title}</h2>
                  <p className="text-white/90 mb-6 max-w-3xl">{heroBanner.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {heroBanner.statistics.map((stat) => (
                      <div key={stat.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                  <Button
                    variant={eventFilter === "upcoming" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setEventFilter("upcoming")}
                    className={eventFilter === "upcoming" ? "bg-[#00BFA6] hover:bg-[#00A693]" : ""}
                  >
                    Upcoming Events
                  </Button>
                  <Button
                    variant={eventFilter === "past" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setEventFilter("past")}
                    className={eventFilter === "past" ? "bg-[#00BFA6] hover:bg-[#00A693]" : ""}
                  >
                    Past Events
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">{filteredEvents.length} events</p>
              </div>

              <Dialog open={isEventDialogOpen} onOpenChange={setIsEventDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-[#00BFA6] hover:bg-[#00A693]"
                    onClick={() => {
                      setEditingEvent(null)
                      setEventFormData({
                        badge: "",
                        title: "",
                        description: "",
                        date: "",
                        endDate: "",
                        time: "",
                        location: "",
                        participants: "",
                        registrationLink: "",
                        registrationDeadline: "",
                        highlights: [""],
                        image: null,
                        type: eventFilter,
                        featured: false,
                      })
                    }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingEvent ? "Edit Event" : "Add New Event"}</DialogTitle>
                    <DialogDescription>Manage event details and information</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="badge">Badge</Label>
                        <Input
                          id="badge"
                          value={eventFormData.badge}
                          onChange={(e) => setEventFormData({ ...eventFormData, badge: e.target.value })}
                          placeholder="Competition, Workshop, Training..."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">Event Type</Label>
                        <select
                          id="type"
                          value={eventFormData.type}
                          onChange={(e) =>
                            setEventFormData({ ...eventFormData, type: e.target.value as "upcoming" | "past" })
                          }
                          className="w-full rounded-md border border-input bg-background px-3 py-2"
                        >
                          <option value="upcoming">Upcoming</option>
                          <option value="past">Past</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Event Title</Label>
                      <Input
                        id="title"
                        value={eventFormData.title}
                        onChange={(e) => setEventFormData({ ...eventFormData, title: e.target.value })}
                        placeholder="National Science Fair 2025"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        rows={4}
                        value={eventFormData.description}
                        onChange={(e) => setEventFormData({ ...eventFormData, description: e.target.value })}
                        placeholder="Detailed event description..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="image">Event Image</Label>
                      <div className="flex items-center gap-3">
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              setEventFormData({ ...eventFormData, image: file })
                            }
                          }}
                          className="flex-1"
                        />
                        {eventFormData.image && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => setEventFormData({ ...eventFormData, image: null })}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      {eventFormData.image && (
                        <div className="mt-2 rounded-lg overflow-hidden border">
                          <img
                            src={URL.createObjectURL(eventFormData.image) || "/placeholder.svg"}
                            alt="Preview"
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Start Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={eventFormData.date}
                          onChange={(e) => setEventFormData({ ...eventFormData, date: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">End Date (Optional)</Label>
                        <Input
                          id="endDate"
                          type="date"
                          value={eventFormData.endDate}
                          onChange={(e) => setEventFormData({ ...eventFormData, endDate: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        value={eventFormData.time}
                        onChange={(e) => setEventFormData({ ...eventFormData, time: e.target.value })}
                        placeholder="9:00 AM - 6:00 PM"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={eventFormData.location}
                          onChange={(e) => setEventFormData({ ...eventFormData, location: e.target.value })}
                          placeholder="Addis Ababa Science Museum"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="participants">Participants</Label>
                        <Input
                          id="participants"
                          value={eventFormData.participants}
                          onChange={(e) => setEventFormData({ ...eventFormData, participants: e.target.value })}
                          placeholder="500+ Expected"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registrationLink">Registration Link (Google Form)</Label>
                      <Input
                        id="registrationLink"
                        type="url"
                        value={eventFormData.registrationLink}
                        onChange={(e) => setEventFormData({ ...eventFormData, registrationLink: e.target.value })}
                        placeholder="https://forms.google.com/..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registrationDeadline">Registration Deadline</Label>
                      <Input
                        id="registrationDeadline"
                        type="date"
                        value={eventFormData.registrationDeadline}
                        onChange={(e) => setEventFormData({ ...eventFormData, registrationDeadline: e.target.value })}
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Event Highlights</Label>
                        <Button type="button" variant="outline" size="sm" onClick={addHighlight}>
                          <Plus className="h-4 w-4 mr-1" />
                          Add Highlight
                        </Button>
                      </div>
                      {eventFormData.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Input
                            value={highlight}
                            onChange={(e) => updateHighlight(index, e.target.value)}
                            placeholder="Project presentations and judging"
                          />
                          <Button type="button" variant="ghost" size="icon" onClick={() => removeHighlight(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={eventFormData.featured}
                        onChange={(e) => setEventFormData({ ...eventFormData, featured: e.target.checked })}
                        className="rounded border-gray-300"
                      />
                      <Label htmlFor="featured" className="cursor-pointer">
                        Mark as Featured Event
                      </Label>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline" onClick={() => setIsEventDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSaveEvent} className="bg-[#00BFA6] hover:bg-[#00A693]">
                        {editingEvent ? "Update" : "Add"} Event
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Featured Events */}
            {featuredEvents.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#00BFA6]" />
                  Featured Events
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {featuredEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      {event.image && (
                        <div className="relative h-48">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 bg-[#00BFA6] text-white text-xs font-medium rounded-full">
                              {event.badge}
                            </span>
                          </div>
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                            <CardDescription className="text-sm line-clamp-2">{event.description}</CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon" onClick={() => handleEditEvent(event)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteEvent(event.id)}>
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4 text-[#00BFA6]" />
                            <span>
                              {new Date(event.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                              {event.endDate &&
                                ` - ${new Date(event.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4 text-[#00BFA6]" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 text-[#00BFA6]" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4 text-[#00BFA6]" />
                            <span>{event.participants}</span>
                          </div>
                        </div>
                        {event.highlights.length > 0 && (
                          <div className="pt-2">
                            <p className="text-sm font-medium mb-2">Event Highlights:</p>
                            <ul className="space-y-1">
                              {event.highlights.slice(0, 3).map((highlight, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-[#00BFA6] mt-0.5 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="pt-2 text-sm">
                          <span className="text-muted-foreground">Registration Deadline: </span>
                          <span className="font-medium">
                            {new Date(event.registrationDeadline).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Events */}
            {regularEvents.length > 0 && (
              <div className="space-y-4">
                {featuredEvents.length > 0 && <h3 className="text-lg font-semibold">All Events</h3>}
                <div className="grid gap-4 md:grid-cols-3">
                  {regularEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      {event.image && (
                        <div className="relative h-40">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2">
                            <span className="px-2 py-1 bg-[#00BFA6] text-white text-xs font-medium rounded-full">
                              {event.badge}
                            </span>
                          </div>
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base line-clamp-2">{event.title}</CardTitle>
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleEditEvent(event)}
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleDeleteEvent(event.id)}
                            >
                              <Trash2 className="h-3 w-3 text-destructive" />
                            </Button>
                          </div>
                        </div>
                        <CardDescription className="text-xs line-clamp-2">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-3 w-3 text-[#00BFA6]" />
                          <span>
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-3 w-3 text-[#00BFA6]" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-3 w-3 text-[#00BFA6]" />
                          <span>{event.participants}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {filteredEvents.length === 0 && (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No {eventFilter} events yet</p>
                  <Button className="mt-4 bg-[#00BFA6] hover:bg-[#00A693]" onClick={() => setIsEventDialogOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Your First Event
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
