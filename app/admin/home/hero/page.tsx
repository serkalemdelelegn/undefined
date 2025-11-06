"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Save, ImageIcon, ArrowLeft } from "lucide-react"

interface HeroSlide {
  id: string
  image: string
  title: string
  subtitle: string
  description: string
  cta: string
  ctaSecondary: string
  stat1Label: string
  stat1Value: string
  stat2Label: string
  stat2Value: string
  stat3Label: string
  stat3Value: string
}

export default function HeroSectionPage() {
  const [slides, setSlides] = useState<HeroSlide[]>([
    {
      id: "1",
      image: "/ethiopian-students-working-with-advanced-science-e.jpg",
      title: "Inside Every Child is a Scientist",
      subtitle: "Nurture that Scientist, You Will Change the World",
      description:
        "STEMpower Ethiopia is transforming education across the nation through hands-on STEM learning. With 61+ centers nationwide, we're empowering over 100,000 students to become the innovators, problem solvers, and leaders who will shape Ethiopia's future.",
      cta: "Explore Our Programs",
      ctaSecondary: "Watch Our Story",
      stat1Label: "centers",
      stat1Value: "61+",
      stat2Label: "students",
      stat2Value: "100K+",
      stat3Label: "regions",
      stat3Value: "11+",
    },
    {
      id: "2",
      image: "/young-ethiopian-entrepreneurs-working-in-modern-fa.jpg",
      title: "Innovation Through Making",
      subtitle: "Where Ideas Become Reality",
      description:
        "Our FabLabs are innovation hubs equipped with cutting-edge technology including 3D printers, laser cutters, and robotics equipment. Students transform creative ideas into tangible solutions, developing entrepreneurial skills and technical expertise that drive real-world impact.",
      cta: "Visit Our FabLabs",
      ctaSecondary: "See Student Projects",
      stat1Label: "fablabs",
      stat1Value: "25+",
      stat2Label: "projects",
      stat2Value: "1000+",
      stat3Label: "innovations",
      stat3Value: "Growing",
    },
    {
      id: "3",
      image: "/ethiopian-students-celebrating-at-national-science.jpg",
      title: "Celebrating Scientific Excellence",
      subtitle: "Recognizing Young Talent Nationwide",
      description:
        "Through 155+ science fairs across Ethiopia, we celebrate curiosity, creativity, and achievement. Over 7,000 students annually showcase groundbreaking projects addressing real challenges in water, energy, agriculture, and healthcare, competing for recognition and opportunities.",
      cta: "Join Competitions",
      ctaSecondary: "View Past Winners",
      stat1Label: "fairs",
      stat1Value: "155+",
      stat2Label: "participants",
      stat2Value: "7K+",
      stat3Label: "awards",
      stat3Value: "Hundreds",
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null)

  const addSlide = () => {
    const newSlide: HeroSlide = {
      id: Date.now().toString(),
      image: "",
      title: "",
      subtitle: "",
      description: "",
      cta: "",
      ctaSecondary: "",
      stat1Label: "",
      stat1Value: "",
      stat2Label: "",
      stat2Value: "",
      stat3Label: "",
      stat3Value: "",
    }
    setEditingSlide(newSlide)
    setIsDialogOpen(true)
  }

  const editSlide = (slide: HeroSlide) => {
    setEditingSlide({ ...slide })
    setIsDialogOpen(true)
  }

  const saveSlide = () => {
    if (!editingSlide) return
    const existing = slides.find((s) => s.id === editingSlide.id)
    if (existing) {
      setSlides(slides.map((s) => (s.id === editingSlide.id ? editingSlide : s)))
    } else {
      setSlides([...slides, editingSlide])
    }
    setIsDialogOpen(false)
    setEditingSlide(null)
  }

  const deleteSlide = (id: string) => {
    if (confirm("Are you sure you want to delete this slide?")) {
      setSlides(slides.filter((s) => s.id !== id))
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && editingSlide) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditingSlide({ ...editingSlide, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <AdminHeader title="Hero Section" description="Manage homepage hero carousel slides" />
      <div className="p-6 max-w-6xl">
        <Link href="/admin/home">
          <Button variant="outline" size="sm" className="mb-6 bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Create and manage hero carousel slides with images, titles, and CTAs</p>
          <Button onClick={addSlide} className="bg-[#00BFA6] hover:bg-[#00A693]">
            <Plus className="mr-2 h-4 w-4" />
            Add Slide
          </Button>
        </div>

        <div className="grid gap-6">
          {slides.map((slide, index) => (
            <Card key={slide.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Slide {index + 1}</CardTitle>
                    <CardDescription>{slide.title || "Untitled Slide"}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => editSlide(slide)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => deleteSlide(slide.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    {slide.image ? (
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                        <ImageIcon className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium">Subtitle</p>
                      <p className="text-sm text-muted-foreground">{slide.subtitle || "No subtitle"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Description</p>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {slide.description || "No description"}
                      </p>
                    </div>
                    <div className="flex gap-4 pt-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Primary CTA</p>
                        <p className="text-sm font-medium">{slide.cta || "N/A"}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Secondary CTA</p>
                        <p className="text-sm font-medium">{slide.ctaSecondary || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingSlide?.title || "New Slide"}</DialogTitle>
              <DialogDescription>Configure hero slide content and appearance</DialogDescription>
            </DialogHeader>
            {editingSlide && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="image">Hero Image</Label>
                  <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} />
                  {editingSlide.image && (
                    <img
                      src={editingSlide.image || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Main Title</Label>
                    <Input
                      id="title"
                      value={editingSlide.title}
                      onChange={(e) => setEditingSlide({ ...editingSlide, title: e.target.value })}
                      placeholder="Inside Every Child is a Scientist"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subtitle">Subtitle/Badge Text</Label>
                    <Input
                      id="subtitle"
                      value={editingSlide.subtitle}
                      onChange={(e) => setEditingSlide({ ...editingSlide, subtitle: e.target.value })}
                      placeholder="Nurture that Scientist..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    value={editingSlide.description}
                    onChange={(e) => setEditingSlide({ ...editingSlide, description: e.target.value })}
                    placeholder="Enter slide description..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cta">Primary CTA Text</Label>
                    <Input
                      id="cta"
                      value={editingSlide.cta}
                      onChange={(e) => setEditingSlide({ ...editingSlide, cta: e.target.value })}
                      placeholder="Explore Our Programs"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ctaSecondary">Secondary CTA Text</Label>
                    <Input
                      id="ctaSecondary"
                      value={editingSlide.ctaSecondary}
                      onChange={(e) => setEditingSlide({ ...editingSlide, ctaSecondary: e.target.value })}
                      placeholder="Watch Our Story"
                    />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <Label className="text-base mb-3 block">Statistics (3 stats displayed)</Label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="stat1Value">Stat 1 Value</Label>
                      <Input
                        id="stat1Value"
                        value={editingSlide.stat1Value}
                        onChange={(e) => setEditingSlide({ ...editingSlide, stat1Value: e.target.value })}
                        placeholder="61+"
                      />
                      <Label htmlFor="stat1Label">Stat 1 Label</Label>
                      <Input
                        id="stat1Label"
                        value={editingSlide.stat1Label}
                        onChange={(e) => setEditingSlide({ ...editingSlide, stat1Label: e.target.value })}
                        placeholder="centers"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stat2Value">Stat 2 Value</Label>
                      <Input
                        id="stat2Value"
                        value={editingSlide.stat2Value}
                        onChange={(e) => setEditingSlide({ ...editingSlide, stat2Value: e.target.value })}
                        placeholder="100K+"
                      />
                      <Label htmlFor="stat2Label">Stat 2 Label</Label>
                      <Input
                        id="stat2Label"
                        value={editingSlide.stat2Label}
                        onChange={(e) => setEditingSlide({ ...editingSlide, stat2Label: e.target.value })}
                        placeholder="students"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stat3Value">Stat 3 Value</Label>
                      <Input
                        id="stat3Value"
                        value={editingSlide.stat3Value}
                        onChange={(e) => setEditingSlide({ ...editingSlide, stat3Value: e.target.value })}
                        placeholder="11+"
                      />
                      <Label htmlFor="stat3Label">Stat 3 Label</Label>
                      <Input
                        id="stat3Label"
                        value={editingSlide.stat3Label}
                        onChange={(e) => setEditingSlide({ ...editingSlide, stat3Label: e.target.value })}
                        placeholder="regions"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={saveSlide} className="bg-[#00BFA6] hover:bg-[#00A693]">
                    <Save className="mr-2 h-4 w-4" />
                    Save Slide
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
