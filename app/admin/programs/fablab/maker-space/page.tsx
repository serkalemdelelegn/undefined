"use client"

import type React from "react"

import { useState } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Save, Plus, Trash2, Edit, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Statistic {
  id: string
  icon: string
  number: string
  label: string
}

interface GalleryImage {
  id: string
  image: string
  caption?: string
}

interface Workshop {
  id: string
  date: string
  title: string
  level: string
  duration: string
  location: string
  description: string
  image: string
  registrationLink: string
}

export default function MakerSpacePage() {
  const [isSaving, setIsSaving] = useState(false)
  const [isStatDialogOpen, setIsStatDialogOpen] = useState(false)
  const [isGalleryDialogOpen, setIsGalleryDialogOpen] = useState(false)
  const [isWorkshopDialogOpen, setIsWorkshopDialogOpen] = useState(false)
  const [editingStat, setEditingStat] = useState<Statistic | null>(null)
  const [editingGalleryImage, setEditingGalleryImage] = useState<GalleryImage | null>(null)
  const [editingWorkshop, setEditingWorkshop] = useState<Workshop | null>(null)

  // Hero Banner Section
  const [heroBanner, setHeroBanner] = useState({
    badge: "FabLab Program",
    title: "Maker Space: Dream. Build. Discover.",
    subtitle:
      "A place where creativity comes alive. Explore ideas, experiment with new tools, and bring bold dreams to life—together.",
    image: "",
  })

  // Statistics Section
  const [statistics, setStatistics] = useState<Statistic[]>([
    { id: "1", icon: "users", number: "12+", label: "3D Printers" },
    { id: "2", icon: "users", number: "2500+", label: "Active Students" },
    { id: "3", icon: "lightbulb", number: "1200+", label: "Projects Built" },
    { id: "4", icon: "award", number: "35+", label: "Mentors" },
  ])

  // Inside the Maker Space Gallery
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([
    { id: "1", image: "/stem-laboratory-students.jpg", caption: "Students collaborating on projects" },
    { id: "2", image: "/university-stem-laboratory.jpg", caption: "Working with technology" },
    { id: "3", image: "/modern-stem-center.jpg", caption: "Hands-on learning" },
    { id: "4", image: "/stem-laboratory-students.jpg", caption: "Project presentations" },
  ])

  // Workshops Section
  const [workshopsSection, setWorkshopsSection] = useState({
    ctaButton: "Request Full Schedule",
  })

  const [workshops, setWorkshops] = useState<Workshop[]>([
    {
      id: "1",
      date: "Oct 12, 2025",
      title: "Intro to 3D Printing",
      level: "Beginner",
      duration: "2 hours",
      location: "FabLab, Addis Ababa",
      description: "Learn the basics of 3D printing and create your first model.",
      image: "/stem-laboratory-students.jpg",
      registrationLink: "https://forms.gle/example1",
    },
    {
      id: "2",
      date: "Oct 19, 2025",
      title: "Arduino for Makers",
      level: "Beginner/Intermediate",
      duration: "3 hours",
      location: "FabLab, Addis Ababa",
      description: "Build interactive projects with Arduino microcontrollers.",
      image: "/university-stem-laboratory.jpg",
      registrationLink: "https://forms.gle/example2",
    },
    {
      id: "3",
      date: "Oct 26, 2025",
      title: "Laser Cutting & Safety",
      level: "All Levels",
      duration: "2 hours",
      location: "FabLab, Addis Ababa",
      description: "Master laser cutting techniques and safety protocols.",
      image: "/modern-stem-center.jpg",
      registrationLink: "https://forms.gle/example3",
    },
  ])

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("Maker Space page updated successfully!")
  }

  // Statistics handlers
  const addStatistic = () => {
    const newStat: Statistic = { id: Date.now().toString(), icon: "users", number: "", label: "" }
    setEditingStat(newStat)
    setIsStatDialogOpen(true)
  }

  const editStatistic = (stat: Statistic) => {
    setEditingStat({ ...stat })
    setIsStatDialogOpen(true)
  }

  const saveStatistic = () => {
    if (!editingStat) return
    const existing = statistics.find((s) => s.id === editingStat.id)
    if (existing) {
      setStatistics(statistics.map((s) => (s.id === editingStat.id ? editingStat : s)))
    } else {
      setStatistics([...statistics, editingStat])
    }
    setIsStatDialogOpen(false)
    setEditingStat(null)
  }

  const deleteStatistic = (id: string) => {
    if (confirm("Are you sure you want to delete this statistic?")) {
      setStatistics(statistics.filter((s) => s.id !== id))
    }
  }

  // Gallery handlers
  const addGalleryImage = () => {
    const newImage: GalleryImage = { id: Date.now().toString(), image: "", caption: "" }
    setEditingGalleryImage(newImage)
    setIsGalleryDialogOpen(true)
  }

  const editGalleryImage = (image: GalleryImage) => {
    setEditingGalleryImage({ ...image })
    setIsGalleryDialogOpen(true)
  }

  const saveGalleryImage = () => {
    if (!editingGalleryImage) return
    const existing = galleryImages.find((i) => i.id === editingGalleryImage.id)
    if (existing) {
      setGalleryImages(galleryImages.map((i) => (i.id === editingGalleryImage.id ? editingGalleryImage : i)))
    } else {
      setGalleryImages([...galleryImages, editingGalleryImage])
    }
    setIsGalleryDialogOpen(false)
    setEditingGalleryImage(null)
  }

  const deleteGalleryImage = (id: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      setGalleryImages(galleryImages.filter((i) => i.id !== id))
    }
  }

  const handleGalleryImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && editingGalleryImage) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditingGalleryImage({ ...editingGalleryImage, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  // Workshop handlers
  const addWorkshop = () => {
    const newWorkshop: Workshop = {
      id: Date.now().toString(),
      date: "",
      title: "",
      level: "",
      duration: "",
      location: "",
      description: "",
      image: "",
      registrationLink: "",
    }
    setEditingWorkshop(newWorkshop)
    setIsWorkshopDialogOpen(true)
  }

  const editWorkshop = (workshop: Workshop) => {
    setEditingWorkshop({ ...workshop })
    setIsWorkshopDialogOpen(true)
  }

  const saveWorkshop = () => {
    if (!editingWorkshop) return
    const existing = workshops.find((w) => w.id === editingWorkshop.id)
    if (existing) {
      setWorkshops(workshops.map((w) => (w.id === editingWorkshop.id ? editingWorkshop : w)))
    } else {
      setWorkshops([...workshops, editingWorkshop])
    }
    setIsWorkshopDialogOpen(false)
    setEditingWorkshop(null)
  }

  const deleteWorkshop = (id: string) => {
    if (confirm("Are you sure you want to delete this workshop?")) {
      setWorkshops(workshops.filter((w) => w.id !== id))
    }
  }

  const handleWorkshopImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && editingWorkshop) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditingWorkshop({ ...editingWorkshop, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleHeroImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setHeroBanner({ ...heroBanner, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <div className="flex items-center gap-2 px-6 pt-6">
        <Link
          href="/admin/programs/fablab"
          className="flex items-center gap-2 text-[#367375] hover:text-[#24C3BC] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to FabLab</span>
        </Link>
      </div>
      <AdminHeader title="Maker Space" description="Manage maker space content, mentors, and workshops" />
      <div className="p-6 max-w-7xl">
        <div className="space-y-6">
          {/* Hero Banner Section */}
          <Card>
            <CardHeader>
              <CardTitle>Hero Banner</CardTitle>
              <CardDescription>Main banner content for the Maker Space page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heroBadge">Badge Text</Label>
                <Input
                  id="heroBadge"
                  value={heroBanner.badge}
                  onChange={(e) => setHeroBanner({ ...heroBanner, badge: e.target.value })}
                  placeholder="e.g., FabLab Program"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroTitle">Title</Label>
                <Input
                  id="heroTitle"
                  value={heroBanner.title}
                  onChange={(e) => setHeroBanner({ ...heroBanner, title: e.target.value })}
                  placeholder="e.g., Maker Space: Dream. Build. Discover."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroSubtitle">Subtitle</Label>
                <Textarea
                  id="heroSubtitle"
                  rows={2}
                  value={heroBanner.subtitle}
                  onChange={(e) => setHeroBanner({ ...heroBanner, subtitle: e.target.value })}
                  placeholder="Describe the maker space..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroImage">Hero Image</Label>
                <div className="space-y-3">
                  <Input id="heroImage" type="file" accept="image/*" onChange={handleHeroImageUpload} />
                  {heroBanner.image && (
                    <div className="h-48 rounded-lg overflow-hidden border">
                      <img
                        src={heroBanner.image || "/placeholder.svg"}
                        alt="Hero Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistics Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Statistics</CardTitle>
                  <CardDescription>Key metrics about the Maker Space</CardDescription>
                </div>
                <Button onClick={addStatistic} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Statistic
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {statistics.map((stat) => (
                  <Card key={stat.id}>
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-[#00BFA6]">{stat.number}</p>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" onClick={() => editStatistic(stat)}>
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => deleteStatistic(stat.id)}>
                            <Trash2 className="h-3 w-3 text-destructive" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Inside the Maker Space Gallery */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Inside the Maker Space</CardTitle>
                  <CardDescription>Photo gallery showcasing the maker space environment</CardDescription>
                </div>
                <Button onClick={addGalleryImage} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Image
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {galleryImages.map((image) => (
                  <Card key={image.id} className="overflow-hidden">
                    <div className="h-48 bg-muted">
                      {image.image && (
                        <img
                          src={image.image || "/placeholder.svg"}
                          alt={image.caption || "Gallery"}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <CardContent className="p-3 space-y-2">
                      <p className="text-xs text-muted-foreground line-clamp-2">{image.caption}</p>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent"
                          onClick={() => editGalleryImage(image)}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => deleteGalleryImage(image.id)}>
                          <Trash2 className="h-3 w-3 text-destructive" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Workshops Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Upcoming Workshops</CardTitle>
                  <CardDescription>Manage workshop details</CardDescription>
                </div>
                <Button onClick={addWorkshop} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Workshop
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-4">
                {workshops.map((workshop) => (
                  <Card key={workshop.id} className="overflow-hidden flex flex-col">
                    <div className="h-40 bg-muted">
                      {workshop.image && (
                        <img
                          src={workshop.image || "/placeholder.svg"}
                          alt={workshop.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <CardContent className="p-4 space-y-3 flex-1 flex flex-col">
                      <div>
                        <h3 className="font-semibold text-balance text-lg">{workshop.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{workshop.description}</p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{workshop.date}</span>
                      </div>

                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>
                          <span className="font-medium">Level:</span> {workshop.level}
                        </p>
                        <p>
                          <span className="font-medium">Duration:</span> {workshop.duration}
                        </p>
                        <p>
                          <span className="font-medium">Location:</span> {workshop.location}
                        </p>
                      </div>

                      <div className="flex gap-2 pt-2 mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent"
                          onClick={() => editWorkshop(workshop)}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => deleteWorkshop(workshop.id)}>
                          <Trash2 className="h-3 w-3 text-destructive" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleSave} disabled={isSaving} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save All Changes"}
            </Button>
          </div>
        </div>
      </div>

      {/* Statistic Dialog */}
      <Dialog open={isStatDialogOpen} onOpenChange={setIsStatDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Statistic</DialogTitle>
            <DialogDescription>Update the statistic information</DialogDescription>
          </DialogHeader>
          {editingStat && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="statNumber">Number</Label>
                <Input
                  id="statNumber"
                  placeholder="e.g., 12+"
                  value={editingStat.number}
                  onChange={(e) => setEditingStat({ ...editingStat, number: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="statLabel">Label</Label>
                <Input
                  id="statLabel"
                  placeholder="e.g., 3D Printers"
                  value={editingStat.label}
                  onChange={(e) => setEditingStat({ ...editingStat, label: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsStatDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={saveStatistic} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Gallery Image Dialog */}
      <Dialog open={isGalleryDialogOpen} onOpenChange={setIsGalleryDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Gallery Image</DialogTitle>
            <DialogDescription>Add or edit a gallery image</DialogDescription>
          </DialogHeader>
          {editingGalleryImage && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="galleryImage">Image</Label>
                <div className="space-y-3">
                  <Input id="galleryImage" type="file" accept="image/*" onChange={handleGalleryImageUpload} />
                  {editingGalleryImage.image && (
                    <div className="h-48 rounded-lg overflow-hidden border">
                      <img
                        src={editingGalleryImage.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="galleryCaption">Caption (Optional)</Label>
                <Input
                  id="galleryCaption"
                  placeholder="e.g., Students collaborating on projects"
                  value={editingGalleryImage.caption}
                  onChange={(e) => setEditingGalleryImage({ ...editingGalleryImage, caption: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsGalleryDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={saveGalleryImage} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Workshop Dialog */}
      <Dialog open={isWorkshopDialogOpen} onOpenChange={setIsWorkshopDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingWorkshop?.title || "New Workshop"}</DialogTitle>
            <DialogDescription>Add or edit workshop details</DialogDescription>
          </DialogHeader>
          {editingWorkshop && (
            <div className="space-y-4 py-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="workshopDate">Date</Label>
                  <Input
                    id="workshopDate"
                    placeholder="e.g., Oct 12, 2025"
                    value={editingWorkshop.date}
                    onChange={(e) => setEditingWorkshop({ ...editingWorkshop, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workshopLevel">Level</Label>
                  <Input
                    id="workshopLevel"
                    placeholder="e.g., Beginner"
                    value={editingWorkshop.level}
                    onChange={(e) => setEditingWorkshop({ ...editingWorkshop, level: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workshopTitle">Title</Label>
                <Input
                  id="workshopTitle"
                  placeholder="e.g., Intro to 3D Printing"
                  value={editingWorkshop.title}
                  onChange={(e) => setEditingWorkshop({ ...editingWorkshop, title: e.target.value })}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="workshopDuration">Duration</Label>
                  <Input
                    id="workshopDuration"
                    placeholder="e.g., 2 hours"
                    value={editingWorkshop.duration}
                    onChange={(e) => setEditingWorkshop({ ...editingWorkshop, duration: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workshopLocation">Location</Label>
                  <Input
                    id="workshopLocation"
                    placeholder="e.g., FabLab, Addis Ababa"
                    value={editingWorkshop.location}
                    onChange={(e) => setEditingWorkshop({ ...editingWorkshop, location: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workshopDescription">Description</Label>
                <Textarea
                  id="workshopDescription"
                  rows={3}
                  placeholder="Describe the workshop..."
                  value={editingWorkshop.description}
                  onChange={(e) => setEditingWorkshop({ ...editingWorkshop, description: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workshopRegistration">Registration Google Form Link</Label>
                <Input
                  id="workshopRegistration"
                  type="url"
                  placeholder="e.g., https://forms.gle/..."
                  value={editingWorkshop.registrationLink}
                  onChange={(e) => setEditingWorkshop({ ...editingWorkshop, registrationLink: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workshopImage">Image</Label>
                <div className="space-y-3">
                  <Input id="workshopImage" type="file" accept="image/*" onChange={handleWorkshopImageUpload} />
                  {editingWorkshop.image && (
                    <div className="h-48 rounded-lg overflow-hidden border">
                      <img
                        src={editingWorkshop.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsWorkshopDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={saveWorkshop} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
