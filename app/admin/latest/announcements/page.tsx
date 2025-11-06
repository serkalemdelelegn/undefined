"use client"

import type React from "react"

import { useState } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { BackButton } from "@/components/ui/back-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus,
  Edit,
  Trash2,
  Calendar,
  MapPin,
  Upload,
  Bell,
  Briefcase,
  CalendarDays,
  Users,
  TrendingUp,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface HeroBanner {
  badge: string
  title: string
  description: string
  statistics: {
    activeAnnouncements: string
    openOpportunities: string
    upcomingEvents: string
  }
}

interface Announcement {
  id: string
  type: "update" | "opportunity" | "event"
  title: string
  description: string
  date: string
  location: string
  priority?: string
  image?: string
  eventId?: string // For linking to events
}

export default function AnnouncementsPage() {
  const [heroBanner, setHeroBanner] = useState<HeroBanner>({
    badge: "Stay Informed",
    title: "Announcements & Opportunities",
    description:
      "Stay up to date with official updates, exciting opportunities, and upcoming events from STEMpower Ethiopia. Be the first to know about new programs, job openings, and partnership announcements.",
    statistics: {
      activeAnnouncements: "8+",
      openOpportunities: "5+",
      upcomingEvents: "3+",
    },
  })

  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: "1",
      type: "update",
      title: "New STEM Center Opening in Bahir Dar",
      description:
        "We are excited to announce the opening of our newest STEM Center in Bahir Dar, equipped with state-of-the-art laboratory equipment and maker space facilities.",
      date: "2024-03-15",
      location: "Bahir Dar, Ethiopia",
      priority: "Priority",
      image: "/students-in-science-lab.jpg",
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null)
  const [formData, setFormData] = useState({
    type: "update" as "update" | "opportunity" | "event",
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    location: "",
    priority: "",
    image: "",
    eventId: "",
  })

  const [heroForm, setHeroForm] = useState(heroBanner)

  const [filterType, setFilterType] = useState<"all" | "update" | "opportunity" | "event">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [dateFilter, setDateFilter] = useState("")

  const handleEdit = (announcement: Announcement) => {
    setEditingAnnouncement(announcement)
    setFormData({
      type: announcement.type,
      title: announcement.title,
      description: announcement.description,
      date: announcement.date,
      location: announcement.location,
      priority: announcement.priority || "",
      image: announcement.image || "",
      eventId: announcement.eventId || "",
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this announcement?")) {
      setAnnouncements(announcements.filter((a) => a.id !== id))
    }
  }

  const handleSave = () => {
    if (editingAnnouncement) {
      setAnnouncements(announcements.map((a) => (a.id === editingAnnouncement.id ? { ...a, ...formData } : a)))
    } else {
      setAnnouncements([...announcements, { id: Date.now().toString(), ...formData }])
    }
    setIsDialogOpen(false)
    setEditingAnnouncement(null)
    setFormData({
      type: "update",
      title: "",
      description: "",
      date: new Date().toISOString().split("T")[0],
      location: "",
      priority: "",
      image: "",
      eventId: "",
    })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveHero = () => {
    setHeroBanner(heroForm)
    alert("Hero banner updated successfully!")
  }

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesType = filterType === "all" || announcement.type === filterType
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDate = !dateFilter || announcement.date === dateFilter
    return matchesType && matchesSearch && matchesDate
  })

  return (
    <div>
      <AdminHeader title="Announcements" description="Manage announcements, updates, and opportunities" />
      <div className="p-6 max-w-7xl">
        <BackButton />

        <Tabs defaultValue="hero" className="mt-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="hero">Hero Banner</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
          </TabsList>

          <TabsContent value="hero" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Banner Settings</CardTitle>
                <CardDescription>Customize the announcements page hero section</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="hero-badge">Badge Text</Label>
                  <Input
                    id="hero-badge"
                    value={heroForm.badge}
                    onChange={(e) => setHeroForm({ ...heroForm, badge: e.target.value })}
                    placeholder="Stay Informed"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero-title">Title</Label>
                  <Input
                    id="hero-title"
                    value={heroForm.title}
                    onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })}
                    placeholder="Announcements & Opportunities"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero-description">Description</Label>
                  <Textarea
                    id="hero-description"
                    rows={4}
                    value={heroForm.description}
                    onChange={(e) => setHeroForm({ ...heroForm, description: e.target.value })}
                    placeholder="Stay up to date with official updates..."
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Statistics Cards</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="stat-announcements">Active Announcements</Label>
                      <Input
                        id="stat-announcements"
                        value={heroForm.statistics.activeAnnouncements}
                        onChange={(e) =>
                          setHeroForm({
                            ...heroForm,
                            statistics: { ...heroForm.statistics, activeAnnouncements: e.target.value },
                          })
                        }
                        placeholder="8+"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stat-opportunities">Open Opportunities</Label>
                      <Input
                        id="stat-opportunities"
                        value={heroForm.statistics.openOpportunities}
                        onChange={(e) =>
                          setHeroForm({
                            ...heroForm,
                            statistics: { ...heroForm.statistics, openOpportunities: e.target.value },
                          })
                        }
                        placeholder="5+"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stat-events">Upcoming Events</Label>
                      <Input
                        id="stat-events"
                        value={heroForm.statistics.upcomingEvents}
                        onChange={(e) =>
                          setHeroForm({
                            ...heroForm,
                            statistics: { ...heroForm.statistics, upcomingEvents: e.target.value },
                          })
                        }
                        placeholder="3+"
                      />
                    </div>
                  </div>
                </div>

                <Button onClick={handleSaveHero} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  Save Hero Banner
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-[#00BFA6] to-[#00897B] rounded-lg p-8 text-white">
                  <div className="flex justify-center mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                      <Bell className="h-4 w-4" />
                      {heroForm.badge}
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold text-center mb-4">{heroForm.title}</h1>
                  <p className="text-center text-lg mb-8 max-w-3xl mx-auto opacity-90">{heroForm.description}</p>
                  <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                      <Users className="h-8 w-8 mx-auto mb-3" />
                      <div className="text-3xl font-bold mb-1">{heroForm.statistics.activeAnnouncements}</div>
                      <div className="text-sm opacity-90">Active Announcements</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                      <Briefcase className="h-8 w-8 mx-auto mb-3" />
                      <div className="text-3xl font-bold mb-1">{heroForm.statistics.openOpportunities}</div>
                      <div className="text-sm opacity-90">Open Opportunities</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                      <TrendingUp className="h-8 w-8 mx-auto mb-3" />
                      <div className="text-3xl font-bold mb-1">{heroForm.statistics.upcomingEvents}</div>
                      <div className="text-sm opacity-90">Upcoming Events</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search announcements..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="md:w-48"
                  />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    variant={filterType === "all" ? "default" : "outline"}
                    onClick={() => setFilterType("all")}
                    size="sm"
                  >
                    All
                  </Button>
                  <Button
                    variant={filterType === "update" ? "default" : "outline"}
                    onClick={() => setFilterType("update")}
                    size="sm"
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Updates
                  </Button>
                  <Button
                    variant={filterType === "opportunity" ? "default" : "outline"}
                    onClick={() => setFilterType("opportunity")}
                    size="sm"
                  >
                    <Briefcase className="h-4 w-4 mr-2" />
                    Opportunities
                  </Button>
                  <Button
                    variant={filterType === "event" ? "default" : "outline"}
                    onClick={() => setFilterType("event")}
                    size="sm"
                  >
                    <CalendarDays className="h-4 w-4 mr-2" />
                    Events
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">Current Announcements</h2>
                <p className="text-sm text-muted-foreground">
                  Showing {filteredAnnouncements.length} active announcements
                </p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-[#00BFA6] hover:bg-[#00A693]"
                    onClick={() => {
                      setEditingAnnouncement(null)
                      setFormData({
                        type: "update",
                        title: "",
                        description: "",
                        date: new Date().toISOString().split("T")[0],
                        location: "",
                        priority: "",
                        image: "",
                        eventId: "",
                      })
                    }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Announcement
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingAnnouncement ? "Edit Announcement" : "Add New Announcement"}</DialogTitle>
                    <DialogDescription>Share official updates, opportunities, or events</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">Type</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value: "update" | "opportunity" | "event") =>
                          setFormData({ ...formData, type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="update">Official Update</SelectItem>
                          <SelectItem value="opportunity">Opportunity</SelectItem>
                          <SelectItem value="event">Event</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.type === "event" && (
                      <div className="space-y-2">
                        <Label htmlFor="eventId">Link to Event (Optional)</Label>
                        <Input
                          id="eventId"
                          value={formData.eventId}
                          onChange={(e) => setFormData({ ...formData, eventId: e.target.value })}
                          placeholder="Enter event ID to fetch details"
                        />
                        <p className="text-xs text-muted-foreground">
                          Leave blank to create a standalone announcement, or enter an event ID to link to an existing
                          event
                        </p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="New STEM Center Opening in Bahir Dar"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        rows={5}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="We are excited to announce..."
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Bahir Dar, Ethiopia"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority Badge (Optional)</Label>
                      <Input
                        id="priority"
                        value={formData.priority}
                        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                        placeholder="Priority, Featured, Urgent, etc."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="image">Image</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-[#00BFA6] transition-colors cursor-pointer">
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <label htmlFor="image" className="cursor-pointer">
                          {formData.image ? (
                            <div className="space-y-2">
                              <img
                                src={formData.image || "/placeholder.svg"}
                                alt="Preview"
                                className="max-h-48 mx-auto rounded"
                              />
                              <p className="text-sm text-muted-foreground">Click to change image</p>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                              <p className="text-sm text-muted-foreground">Click to upload image</p>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSave} className="bg-[#00BFA6] hover:bg-[#00A693]">
                        {editingAnnouncement ? "Update" : "Add"} Announcement
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4">
              {filteredAnnouncements.map((announcement) => (
                <Card key={announcement.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {announcement.image && (
                      <div className="md:w-64 h-48 md:h-auto relative">
                        <img
                          src={announcement.image || "/placeholder.svg"}
                          alt={announcement.title}
                          className="w-full h-full object-cover"
                        />
                        {announcement.priority && (
                          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-medium">
                            {announcement.priority}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                                  announcement.type === "update"
                                    ? "bg-blue-100 text-blue-700"
                                    : announcement.type === "opportunity"
                                      ? "bg-green-100 text-green-700"
                                      : "bg-purple-100 text-purple-700"
                                }`}
                              >
                                {announcement.type === "update" && <Bell className="h-3 w-3" />}
                                {announcement.type === "opportunity" && <Briefcase className="h-3 w-3" />}
                                {announcement.type === "event" && <CalendarDays className="h-3 w-3" />}
                                {announcement.type === "update"
                                  ? "Official Update"
                                  : announcement.type === "opportunity"
                                    ? "Opportunity"
                                    : "Event"}
                              </span>
                            </div>
                            <CardTitle className="text-xl mb-2">{announcement.title}</CardTitle>
                            <CardDescription className="flex flex-wrap items-center gap-4 text-sm">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(announcement.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {announcement.location}
                              </span>
                            </CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(announcement)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDelete(announcement.id)}>
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{announcement.description}</p>
                        <Button className="mt-4 bg-[#00BFA6] hover:bg-[#00A693]">Read More</Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
