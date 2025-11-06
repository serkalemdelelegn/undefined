"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Save, Plus, Trash2, Upload, X } from "lucide-react"

interface University {
  id: string
  name: string
  location: string
  description: string
  students: string
  programs: string
  facilities: string
  keyFacilities: string[]
  notableAchievements: string[]
  image: string
  establishmentYear: string
}

interface HeroStats {
  label: string
  value: string
  icon: string
}

export default function UniversityOutreachPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [heroData, setHeroData] = useState({
    badge: "University Partnerships",
    title: "University STEM Outreach",
    description: "Collaborative programs with universities to advance STEM education and research across Africa.",
  })

  const [stats, setStats] = useState<HeroStats[]>([
    { label: "Public Universities", value: "40+", icon: "building" },
    { label: "Students Annually", value: "10,000+", icon: "users" },
    { label: "To Full Adoption", value: "2 Years", icon: "calendar" },
    { label: "Government Backed", value: "100%", icon: "shield" },
  ])

  const [universities, setUniversities] = useState<University[]>([
    {
      id: "1",
      name: "Addis Ababa University",
      location: "Addis Ababa",
      description:
        "Ethiopia's oldest and most prestigious university, AAU has been a cornerstone of the University STEM Outreach program. Their extensive lab facilities and experienced faculty provide exceptional mentorship to talented youth during summer programs.",
      students: "1,200+",
      programs: "Since 2022",
      facilities: "4",
      keyFacilities: ["Advanced Physics Labs", "Computer Science Center", "Engineering Workshop", "Research Library"],
      notableAchievements: [
        "First university to pilot the program",
        "Highest student satisfaction rate",
        "Trained 50+ student mentors",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eIowdbBXKFs2BLexRAmaeLluunWkpL.png",
      establishmentYear: "Est. 1950",
    },
  ])

  const handleImageUpload = (id: string, file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const base64String = e.target?.result as string
      updateUniversity(id, "image", base64String)
    }
    reader.readAsDataURL(file)
  }

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("University Outreach updated successfully!")
  }

  const addUniversity = () => {
    setUniversities([
      ...universities,
      {
        id: Date.now().toString(),
        name: "",
        location: "",
        description: "",
        students: "",
        programs: "",
        facilities: "",
        keyFacilities: [],
        notableAchievements: [],
        image: "",
        establishmentYear: "",
      },
    ])
  }

  const updateUniversity = (id: string, field: keyof University, value: string | string[]) => {
    setUniversities(universities.map((u) => (u.id === id ? { ...u, [field]: value } : u)))
  }

  const deleteUniversity = (id: string) => {
    setUniversities(universities.filter((u) => u.id !== id))
  }

  const clearImage = (id: string) => {
    updateUniversity(id, "image", "")
  }

  const addKeyFacility = (id: string) => {
    setUniversities(universities.map((u) => (u.id === id ? { ...u, keyFacilities: [...u.keyFacilities, ""] } : u)))
  }

  const updateKeyFacility = (id: string, index: number, value: string) => {
    setUniversities(
      universities.map((u) =>
        u.id === id
          ? {
              ...u,
              keyFacilities: u.keyFacilities.map((f, i) => (i === index ? value : f)),
            }
          : u,
      ),
    )
  }

  const removeKeyFacility = (id: string, index: number) => {
    setUniversities(
      universities.map((u) =>
        u.id === id ? { ...u, keyFacilities: u.keyFacilities.filter((_, i) => i !== index) } : u,
      ),
    )
  }

  const addAchievement = (id: string) => {
    setUniversities(
      universities.map((u) => (u.id === id ? { ...u, notableAchievements: [...u.notableAchievements, ""] } : u)),
    )
  }

  const updateAchievement = (id: string, index: number, value: string) => {
    setUniversities(
      universities.map((u) =>
        u.id === id
          ? {
              ...u,
              notableAchievements: u.notableAchievements.map((a, i) => (i === index ? value : a)),
            }
          : u,
      ),
    )
  }

  const removeAchievement = (id: string, index: number) => {
    setUniversities(
      universities.map((u) =>
        u.id === id ? { ...u, notableAchievements: u.notableAchievements.filter((_, i) => i !== index) } : u,
      ),
    )
  }

  return (
    <div>
      <AdminHeader title="University STEM Outreach" description="Manage university partnerships and programs" />
      <div className="p-6 max-w-6xl">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Configure the hero section with badge, title, and description</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="badge">Badge Text</Label>
                <Input
                  id="badge"
                  value={heroData.badge}
                  onChange={(e) => setHeroData({ ...heroData, badge: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={heroData.title}
                  onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={heroData.description}
                  onChange={(e) => setHeroData({ ...heroData, description: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
              <CardDescription>Configure hero section statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="grid gap-3 md:grid-cols-2">
                  <Input
                    placeholder="Label (e.g., Public Universities)"
                    value={stat.label}
                    onChange={(e) => {
                      const newStats = [...stats]
                      newStats[index].label = e.target.value
                      setStats(newStats)
                    }}
                  />
                  <Input
                    placeholder="Value (e.g., 40+)"
                    value={stat.value}
                    onChange={(e) => {
                      const newStats = [...stats]
                      newStats[index].value = e.target.value
                      setStats(newStats)
                    }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Universities</CardTitle>
                  <CardDescription>Manage university partnerships with detailed information</CardDescription>
                </div>
                <Button onClick={addUniversity} variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add University
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {universities.map((university) => (
                <div key={university.id} className="p-4 border rounded-lg space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-lg">{university.name || "New University"}</h3>
                    <Button variant="ghost" size="icon" onClick={() => deleteUniversity(university.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>

                  {/* Basic Information */}
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>University Name</Label>
                      <Input
                        placeholder="e.g., Addis Ababa University"
                        value={university.name}
                        onChange={(e) => updateUniversity(university.id, "name", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Input
                        placeholder="e.g., Addis Ababa"
                        value={university.location}
                        onChange={(e) => updateUniversity(university.id, "location", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      placeholder="Detailed description of the university and its STEM program"
                      rows={3}
                      value={university.description}
                      onChange={(e) => updateUniversity(university.id, "description", e.target.value)}
                    />
                  </div>

                  {/* Statistics */}
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label>Students</Label>
                      <Input
                        placeholder="e.g., 1,200+"
                        value={university.students}
                        onChange={(e) => updateUniversity(university.id, "students", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Programs</Label>
                      <Input
                        placeholder="e.g., Since 2022"
                        value={university.programs}
                        onChange={(e) => updateUniversity(university.id, "programs", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Facilities</Label>
                      <Input
                        placeholder="e.g., 4"
                        value={university.facilities}
                        onChange={(e) => updateUniversity(university.id, "facilities", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>University Image</Label>
                      <div className="flex flex-col gap-2">
                        <label className="flex items-center justify-center w-full px-4 py-2 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition">
                          <div className="flex items-center gap-2">
                            <Upload className="h-4 w-4" />
                            <span className="text-sm">Upload Image</span>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                handleImageUpload(university.id, file)
                              }
                            }}
                          />
                        </label>
                        {university.image && (
                          <div className="relative w-full h-40 rounded-lg overflow-hidden border">
                            <img
                              src={university.image || "/placeholder.svg"}
                              alt={university.name}
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={() => clearImage(university.id)}
                              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Establishment Year</Label>
                      <Input
                        placeholder="e.g., Est. 1950"
                        value={university.establishmentYear}
                        onChange={(e) => updateUniversity(university.id, "establishmentYear", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Key Facilities */}
                  <div className="space-y-3 border-t pt-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-semibold">Key Facilities</Label>
                      <Button onClick={() => addKeyFacility(university.id)} variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Facility
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {university.keyFacilities.map((facility, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            placeholder="e.g., Advanced Physics Labs"
                            value={facility}
                            onChange={(e) => updateKeyFacility(university.id, index, e.target.value)}
                          />
                          <Button variant="ghost" size="icon" onClick={() => removeKeyFacility(university.id, index)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notable Achievements */}
                  <div className="space-y-3 border-t pt-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-semibold">Notable Achievements</Label>
                      <Button onClick={() => addAchievement(university.id)} variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Achievement
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {university.notableAchievements.map((achievement, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            placeholder="e.g., First university to pilot the program"
                            value={achievement}
                            onChange={(e) => updateAchievement(university.id, index, e.target.value)}
                          />
                          <Button variant="ghost" size="icon" onClick={() => removeAchievement(university.id, index)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleSave} disabled={isSaving} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
