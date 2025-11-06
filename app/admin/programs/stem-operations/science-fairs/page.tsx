"use client"

import type React from "react"

import { useState } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Save, Plus, Trash2, Edit, Upload, Users, Target, Trophy } from "lucide-react"

interface WinnerProject {
  id: string
  placement: string
  placementBadge: string
  projectTitle: string
  studentName: string
  university: string
  description: string
  image: string
}

interface JourneyStage {
  id: string
  icon: string
  badge: string
  title: string
  number: string
  description: string
}

interface Statistic {
  id: string
  icon: string
  number: string
  label: string
}

export default function ScienceFairsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [isWinnerDialogOpen, setIsWinnerDialogOpen] = useState(false)
  const [editingWinner, setEditingWinner] = useState<WinnerProject | null>(null)
  const [isJourneyDialogOpen, setIsJourneyDialogOpen] = useState(false)
  const [editingJourneyStage, setEditingJourneyStage] = useState<JourneyStage | null>(null)

  // Hero Banner Section - Added badge field
  const [heroBanner, setHeroBanner] = useState({
    badge: "Empowering Africa's Next Generation Since 2010",
    title: "Celebrating Excellence",
    subtitle: "Meet the brilliant minds whose innovations are making a real difference in communities across Ethiopia.",
  })

  // Statistics Section
  const [statistics, setStatistics] = useState<Statistic[]>([
    { id: "1", icon: "users", number: "1,000+", label: "Students Annually" },
    { id: "2", icon: "building", number: "50+", label: "STEM Centers" },
    { id: "3", icon: "lightbulb", number: "500+", label: "Innovative Projects" },
    { id: "4", icon: "calendar", number: "15", label: "Years Running" },
  ])

  // National Recognition Journey
  const [journeyStages, setJourneyStages] = useState<JourneyStage[]>([
    {
      id: "1",
      icon: "users",
      badge: "Starting Point",
      title: "Community Level",
      number: "1,000+ students",
      description:
        "Every journey begins at home. Students from grades 7-12 work with dedicated mentors at their local STEM centers.",
    },
    {
      id: "2",
      icon: "target",
      badge: "Rising Stars",
      title: "Regional Level",
      number: "200+ winners",
      description:
        "Top performers advance to regional competitions, where innovation meets excellence and creativity shines.",
    },
    {
      id: "3",
      icon: "trophy",
      badge: "Excellence Achieved",
      title: "National Level",
      number: "50+ finalists",
      description:
        "The pinnacle of achievement. Ethiopia's brightest minds showcase groundbreaking projects on the national stage.",
    },
  ])

  // Winner Projects
  const [winnerProjects, setWinnerProjects] = useState<WinnerProject[]>([
    {
      id: "1",
      placement: "1st",
      placementBadge: "1st Place National 2024",
      projectTitle: "Solar-Powered Water Purification",
      studentName: "Meron Tadesse",
      university: "Hawassa University STEM Center",
      description:
        "Developed an innovative solar-powered system that provides clean drinking water to rural communities, impacting over 500 families.",
      image: "/stem-laboratory-students.jpg",
    },
    {
      id: "2",
      placement: "2nd",
      placementBadge: "2nd Place National 2024",
      projectTitle: "Smart Irrigation System",
      studentName: "Dawit Bekele",
      university: "Bahirdar University STEM Center",
      description:
        "Created an IoT-based irrigation system that reduces water usage by 40% while increasing crop yields for small-scale farmers.",
      image: "/university-stem-laboratory.jpg",
    },
    {
      id: "3",
      placement: "3rd",
      placementBadge: "3rd Place National 2024",
      projectTitle: "Waste-to-Energy Converter",
      studentName: "Sara Mohammed",
      university: "Addis Ababa Science & Technology University",
      description:
        "Designed a biogas converter that transforms organic waste into cooking fuel, reducing deforestation and improving air quality.",
      image: "/modern-stem-center.jpg",
    },
  ])

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("Science Fairs page updated successfully!")
  }

  const addWinnerProject = () => {
    const newProject: WinnerProject = {
      id: Date.now().toString(),
      placement: "",
      placementBadge: "",
      projectTitle: "",
      studentName: "",
      university: "",
      description: "",
      image: "",
    }
    setEditingWinner(newProject)
    setIsWinnerDialogOpen(true)
  }

  const editWinnerProject = (project: WinnerProject) => {
    setEditingWinner({ ...project })
    setIsWinnerDialogOpen(true)
  }

  const saveWinnerProject = () => {
    if (!editingWinner) return

    const existing = winnerProjects.find((p) => p.id === editingWinner.id)
    if (existing) {
      setWinnerProjects(winnerProjects.map((p) => (p.id === editingWinner.id ? editingWinner : p)))
    } else {
      setWinnerProjects([...winnerProjects, editingWinner])
    }

    setIsWinnerDialogOpen(false)
    setEditingWinner(null)
  }

  const deleteWinnerProject = (id: string) => {
    if (confirm("Are you sure you want to delete this winner project?")) {
      setWinnerProjects(winnerProjects.filter((p) => p.id !== id))
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && editingWinner) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditingWinner({ ...editingWinner, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const updateStatistic = (id: string, field: keyof Statistic, value: string) => {
    setStatistics(statistics.map((s) => (s.id === id ? { ...s, [field]: value } : s)))
  }

  const updateJourneyStage = (id: string, field: keyof JourneyStage, value: string) => {
    setJourneyStages(journeyStages.map((j) => (j.id === id ? { ...j, [field]: value } : j)))
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users className="h-6 w-6" />
      case "target":
        return <Target className="h-6 w-6" />
      case "trophy":
        return <Trophy className="h-6 w-6" />
      default:
        return <Users className="h-6 w-6" />
    }
  }

  const addJourneyStage = () => {
    const newStage: JourneyStage = {
      id: Date.now().toString(),
      icon: "users",
      badge: "",
      title: "",
      number: "",
      description: "",
    }
    setEditingJourneyStage(newStage)
    setIsJourneyDialogOpen(true)
  }

  const editJourneyStage = (stage: JourneyStage) => {
    setEditingJourneyStage({ ...stage })
    setIsJourneyDialogOpen(true)
  }

  const saveJourneyStage = () => {
    if (!editingJourneyStage) return

    const existing = journeyStages.find((s) => s.id === editingJourneyStage.id)
    if (existing) {
      setJourneyStages(journeyStages.map((s) => (s.id === editingJourneyStage.id ? editingJourneyStage : s)))
    } else {
      setJourneyStages([...journeyStages, editingJourneyStage])
    }

    setIsJourneyDialogOpen(false)
    setEditingJourneyStage(null)
  }

  const deleteJourneyStage = (id: string) => {
    if (confirm("Are you sure you want to delete this recognition stage?")) {
      setJourneyStages(journeyStages.filter((s) => s.id !== id))
    }
  }

  return (
    <div>
      <AdminHeader title="Science Fairs" description="Manage science fairs content and winner showcases" />
      <div className="p-6 max-w-7xl">
        <div className="space-y-6">
          {/* Hero Banner Section */}
          <Card>
            <CardHeader>
              <CardTitle>Hero Banner</CardTitle>
              <CardDescription>Main banner content for the Science Fairs page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heroBadge">Badge Text</Label>
                <Input
                  id="heroBadge"
                  value={heroBanner.badge}
                  onChange={(e) => setHeroBanner({ ...heroBanner, badge: e.target.value })}
                  placeholder="e.g., Empowering Africa's Next Generation Since 2010"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroTitle">Title</Label>
                <Input
                  id="heroTitle"
                  value={heroBanner.title}
                  onChange={(e) => setHeroBanner({ ...heroBanner, title: e.target.value })}
                  placeholder="e.g., Celebrating Excellence"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroSubtitle">Description</Label>
                <Textarea
                  id="heroSubtitle"
                  rows={2}
                  value={heroBanner.subtitle}
                  onChange={(e) => setHeroBanner({ ...heroBanner, subtitle: e.target.value })}
                  placeholder="Describe the purpose and impact..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Statistics Section */}
          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
              <CardDescription>Key metrics about the Science Fairs program</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {statistics.map((stat) => (
                  <div key={stat.id} className="space-y-2 p-4 border rounded-lg">
                    <Label className="text-xs text-muted-foreground">Number</Label>
                    <Input
                      value={stat.number}
                      onChange={(e) => updateStatistic(stat.id, "number", e.target.value)}
                      placeholder="e.g., 1,000+"
                    />
                    <Label className="text-xs text-muted-foreground">Label</Label>
                    <Input
                      value={stat.label}
                      onChange={(e) => updateStatistic(stat.id, "label", e.target.value)}
                      placeholder="e.g., Students Annually"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* National Recognition Journey - Made dynamic with add/edit/delete */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Your Journey to National Recognition</CardTitle>
                  <CardDescription>Stages from community to national level</CardDescription>
                </div>
                <Button onClick={addJourneyStage} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Recognition Stage
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {journeyStages.map((stage, index) => (
                  <Card key={stage.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">Stage {index + 1}</Badge>
                            <Badge className="bg-[#00BFA6] text-white">{stage.badge}</Badge>
                          </div>
                          <h3 className="font-semibold text-lg">{stage.title}</h3>
                          <p className="text-[#00BFA6] font-semibold">{stage.number}</p>
                          <p className="text-sm text-muted-foreground">{stage.description}</p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                          <Button variant="outline" size="sm" onClick={() => editJourneyStage(stage)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => deleteJourneyStage(stage.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Winner Projects Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Celebrating Excellence - Winner Projects</CardTitle>
                  <CardDescription>Showcase winning projects from the national competition</CardDescription>
                </div>
                <Button onClick={addWinnerProject} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Winner
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {winnerProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    {project.image && (
                      <div className="h-48 overflow-hidden bg-muted">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.projectTitle}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-balance">{project.projectTitle || "Untitled Project"}</h3>
                        <Badge className="bg-[#00BFA6] text-white shrink-0">{project.placementBadge}</Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <p className="font-medium">{project.studentName}</p>
                        <p className="text-muted-foreground text-xs">{project.university}</p>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                      <div className="flex gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent"
                          onClick={() => editWinnerProject(project)}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => deleteWinnerProject(project.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
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

      {/* Winner Project Dialog */}
      <Dialog open={isWinnerDialogOpen} onOpenChange={setIsWinnerDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingWinner?.projectTitle || "New Winner Project"}</DialogTitle>
            <DialogDescription>Add or edit a winning project showcase</DialogDescription>
          </DialogHeader>

          {editingWinner && (
            <div className="space-y-4 py-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="placement">Placement</Label>
                  <Input
                    id="placement"
                    placeholder="e.g., 1st, 2nd, 3rd"
                    value={editingWinner.placement}
                    onChange={(e) => setEditingWinner({ ...editingWinner, placement: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="placementBadge">Placement Badge</Label>
                  <Input
                    id="placementBadge"
                    placeholder="e.g., 1st Place National 2024"
                    value={editingWinner.placementBadge}
                    onChange={(e) => setEditingWinner({ ...editingWinner, placementBadge: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectTitle">Project Title</Label>
                <Input
                  id="projectTitle"
                  placeholder="e.g., Solar-Powered Water Purification"
                  value={editingWinner.projectTitle}
                  onChange={(e) => setEditingWinner({ ...editingWinner, projectTitle: e.target.value })}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="studentName">Student Name</Label>
                  <Input
                    id="studentName"
                    placeholder="e.g., Meron Tadesse"
                    value={editingWinner.studentName}
                    onChange={(e) => setEditingWinner({ ...editingWinner, studentName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="university">University/Center</Label>
                  <Input
                    id="university"
                    placeholder="e.g., Hawassa University STEM Center"
                    value={editingWinner.university}
                    onChange={(e) => setEditingWinner({ ...editingWinner, university: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  rows={4}
                  placeholder="Describe the project and its impact..."
                  value={editingWinner.description}
                  onChange={(e) => setEditingWinner({ ...editingWinner, description: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectImage">Project Image</Label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Input
                      id="projectImage"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="cursor-pointer"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById("projectImage")?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                  </div>
                  {editingWinner.image && (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                      <img
                        src={editingWinner.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button variant="outline" onClick={() => setIsWinnerDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={saveWinnerProject} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Save className="mr-2 h-4 w-4" />
                  Save Project
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Journey Stage Dialog */}
      <Dialog open={isJourneyDialogOpen} onOpenChange={setIsJourneyDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingJourneyStage?.title || "New Recognition Stage"}</DialogTitle>
            <DialogDescription>Add or edit a recognition stage in the journey</DialogDescription>
          </DialogHeader>

          {editingJourneyStage && (
            <div className="space-y-4 py-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="stageBadge">Badge Text</Label>
                  <Input
                    id="stageBadge"
                    placeholder="e.g., Starting Point"
                    value={editingJourneyStage.badge}
                    onChange={(e) => setEditingJourneyStage({ ...editingJourneyStage, badge: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stageTitle">Title</Label>
                  <Input
                    id="stageTitle"
                    placeholder="e.g., Community Level"
                    value={editingJourneyStage.title}
                    onChange={(e) => setEditingJourneyStage({ ...editingJourneyStage, title: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stageNumber">Number/Metric</Label>
                <Input
                  id="stageNumber"
                  placeholder="e.g., 1,000+ students"
                  value={editingJourneyStage.number}
                  onChange={(e) => setEditingJourneyStage({ ...editingJourneyStage, number: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stageDescription">Description</Label>
                <Textarea
                  id="stageDescription"
                  rows={3}
                  placeholder="Describe this stage..."
                  value={editingJourneyStage.description}
                  onChange={(e) => setEditingJourneyStage({ ...editingJourneyStage, description: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button variant="outline" onClick={() => setIsJourneyDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={saveJourneyStage} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Save className="mr-2 h-4 w-4" />
                  Save Stage
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
