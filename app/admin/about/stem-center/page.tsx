"use client"

import type React from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { BackButton } from "@/components/ui/back-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Target, MessageSquare, Plus, Trash2, Upload, Save } from "lucide-react"
import { useState, useRef } from "react"
import Image from "next/image"

export default function StemCenterPage() {
  // Hero Section State
  const [heroData, setHeroData] = useState({
    badge: "Who We Are",
    title: "Inside Every Child is a Scientist",
    description:
      "Empowering Ethiopia's future through hands-on STEM education. With 61 active STEM Centers across the nation, we're transforming how students learn science, technology, engineering, and mathematics.",
    image: "/stem-center-hero.jpg",
    statistic: "5+ Years of Impact",
  })

  // Vision, Mission, Values State
  const [missionVision, setMissionVision] = useState({
    mission:
      "To empower Ethiopian youth through accessible, high-quality STEM education that prepares them for the challenges and opportunities of the 21st century.",
    vision:
      "A future where every Ethiopian child has the opportunity to explore, discover, and excel in STEM fields, driving innovation and progress across the nation.",
    values: [
      { id: "1", title: "Excellence", description: "We strive for the highest standards in everything we do" },
      { id: "2", title: "Innovation", description: "We embrace creativity and new approaches to education" },
      { id: "3", title: "Inclusivity", description: "We ensure every child has access to quality STEM education" },
      { id: "4", title: "Integrity", description: "We operate with transparency and accountability" },
    ],
  })

  // Testimonials State
  const [testimonials, setTestimonials] = useState([
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Student",
      message: "STEMpower changed my perspective on science. The hands-on learning approach made everything click!",
      image: "/student-avatar.jpg",
    },
    {
      id: "2",
      name: "Dr. Abebe Tekle",
      role: "Teacher",
      message:
        "The resources and training provided by STEMpower have transformed my classroom. My students are more engaged than ever.",
      image: "/teacher-avatar.jpg",
    },
  ])

  const heroImageRef = useRef<HTMLInputElement>(null)
  const testimonialImageRefs = useRef<{ [key: string]: HTMLInputElement | null }>({})

  const addValue = () => {
    setMissionVision({
      ...missionVision,
      values: [...missionVision.values, { id: Date.now().toString(), title: "", description: "" }],
    })
  }

  const removeValue = (id: string) => {
    setMissionVision({
      ...missionVision,
      values: missionVision.values.filter((v) => v.id !== id),
    })
  }

  const addTestimonial = () => {
    setTestimonials([
      ...testimonials,
      {
        id: Date.now().toString(),
        name: "",
        role: "",
        message: "",
        image: "/diverse-avatars.png",
      },
    ])
  }

  const removeTestimonial = (id: string) => {
    setTestimonials(testimonials.filter((t) => t.id !== id))
  }

  const handleHeroImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setHeroData({ ...heroData, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTestimonialImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const newTestimonials = testimonials.map((t) => (t.id === id ? { ...t, image: reader.result as string } : t))
        setTestimonials(newTestimonials)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    console.log("Saving STEM Center data...")
    alert("STEM Center content saved successfully!")
  }

  return (
    <div>
      <AdminHeader
        title="About STEM Center Management"
        description="Manage hero section, vision, mission, values, and testimonials"
      />

      <div className="p-6 max-w-7xl">
        <BackButton />

        <div className="flex justify-end mb-6">
          <Button onClick={handleSave} size="lg" className="bg-[#00BFA6] hover:bg-[#00A693]">
            <Save className="mr-2 h-4 w-4" />
            Save All Changes
          </Button>
        </div>

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="hero" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Hero
            </TabsTrigger>
            <TabsTrigger value="mission" className="gap-2">
              <Target className="h-4 w-4" />
              Mission & Vision
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Testimonials
            </TabsTrigger>
          </TabsList>

          {/* Hero Section Tab */}
          <TabsContent value="hero" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#00BFA6]" />
                  Hero Section
                </CardTitle>
                <CardDescription>Manage the main hero banner for the About STEM Center page</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="hero-badge">Badge Text</Label>
                      <Input
                        id="hero-badge"
                        value={heroData.badge}
                        onChange={(e) => setHeroData({ ...heroData, badge: e.target.value })}
                        placeholder="Who We Are"
                      />
                    </div>

                    <div>
                      <Label htmlFor="hero-title">Main Title</Label>
                      <Input
                        id="hero-title"
                        value={heroData.title}
                        onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                        placeholder="Inside Every Child is a Scientist"
                      />
                    </div>

                    <div>
                      <Label htmlFor="hero-description">Description</Label>
                      <Textarea
                        id="hero-description"
                        value={heroData.description}
                        onChange={(e) => setHeroData({ ...heroData, description: e.target.value })}
                        rows={4}
                        placeholder="Describe your STEM center..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="hero-stat">Statistical Value</Label>
                      <Input
                        id="hero-stat"
                        value={heroData.statistic}
                        onChange={(e) => setHeroData({ ...heroData, statistic: e.target.value })}
                        placeholder="5+ Years of Impact"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Hero Image</Label>
                      <input
                        ref={heroImageRef}
                        type="file"
                        accept="image/*"
                        onChange={handleHeroImageUpload}
                        className="hidden"
                      />
                      <div
                        onClick={() => heroImageRef.current?.click()}
                        className="mt-2 border-2 border-dashed rounded-lg p-4 text-center hover:border-[#00BFA6] transition-colors cursor-pointer"
                      >
                        <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p>
                      </div>
                      {heroData.image && (
                        <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                          <Image src={heroData.image || "/placeholder.svg"} alt="Hero" fill className="object-cover" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mission & Vision Tab */}
          <TabsContent value="mission" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-[#00BFA6]" />
                  Mission, Vision & Core Values
                </CardTitle>
                <CardDescription>Define your organization's purpose and guiding principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="mission">Mission Statement</Label>
                  <Textarea
                    id="mission"
                    value={missionVision.mission}
                    onChange={(e) => setMissionVision({ ...missionVision, mission: e.target.value })}
                    rows={4}
                    placeholder="Our mission is to..."
                  />
                </div>

                <div>
                  <Label htmlFor="vision">Vision Statement</Label>
                  <Textarea
                    id="vision"
                    value={missionVision.vision}
                    onChange={(e) => setMissionVision({ ...missionVision, vision: e.target.value })}
                    rows={4}
                    placeholder="We envision a future where..."
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Label>Core Values</Label>
                    <Button onClick={addValue} size="sm" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Value
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {missionVision.values.map((value) => (
                      <Card key={value.id}>
                        <CardContent className="pt-6">
                          <div className="flex gap-4">
                            <div className="flex-1 space-y-4">
                              <Input
                                value={value.title}
                                onChange={(e) => {
                                  const newValues = missionVision.values.map((v) =>
                                    v.id === value.id ? { ...v, title: e.target.value } : v,
                                  )
                                  setMissionVision({ ...missionVision, values: newValues })
                                }}
                                placeholder="Value title (e.g., Excellence)"
                              />
                              <Textarea
                                value={value.description}
                                onChange={(e) => {
                                  const newValues = missionVision.values.map((v) =>
                                    v.id === value.id ? { ...v, description: e.target.value } : v,
                                  )
                                  setMissionVision({ ...missionVision, values: newValues })
                                }}
                                rows={2}
                                placeholder="Value description"
                              />
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeValue(value.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-[#00BFA6]" />
                      Testimonials
                    </CardTitle>
                    <CardDescription>Add and manage testimonials from students, teachers, and partners</CardDescription>
                  </div>
                  <Button onClick={addTestimonial} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Testimonial
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id}>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 relative">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <input
                            ref={(el) => {
                              testimonialImageRefs.current[testimonial.id] = el
                            }}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleTestimonialImageUpload(testimonial.id, e)}
                            className="hidden"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-20 mt-2 bg-transparent text-xs"
                            onClick={() => testimonialImageRefs.current[testimonial.id]?.click()}
                          >
                            <Upload className="h-3 w-3 mr-1" />
                            Upload
                          </Button>
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div>
                              <Label>Name</Label>
                              <Input
                                value={testimonial.name}
                                onChange={(e) => {
                                  const newTestimonials = testimonials.map((t) =>
                                    t.id === testimonial.id ? { ...t, name: e.target.value } : t,
                                  )
                                  setTestimonials(newTestimonials)
                                }}
                                placeholder="Full name"
                              />
                            </div>
                            <div>
                              <Label>Role/Title</Label>
                              <Input
                                value={testimonial.role}
                                onChange={(e) => {
                                  const newTestimonials = testimonials.map((t) =>
                                    t.id === testimonial.id ? { ...t, role: e.target.value } : t,
                                  )
                                  setTestimonials(newTestimonials)
                                }}
                                placeholder="Student, Teacher, etc."
                              />
                            </div>
                          </div>
                          <div>
                            <Label>Testimonial Message</Label>
                            <Textarea
                              value={testimonial.message}
                              onChange={(e) => {
                                const newTestimonials = testimonials.map((t) =>
                                  t.id === testimonial.id ? { ...t, message: e.target.value } : t,
                                )
                                setTestimonials(newTestimonials)
                              }}
                              rows={3}
                              placeholder="What do they say about STEMpower?"
                            />
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeTestimonial(testimonial.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
