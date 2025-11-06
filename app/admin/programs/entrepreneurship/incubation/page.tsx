"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Save,
  Plus,
  Trash2,
  Edit,
  Rocket,
  TrendingUp,
  Users,
  DollarSign,
  Building2,
  Phone,
  Mail,
  User,
  FileText,
  BookOpen,
  Zap,
} from "lucide-react"

interface HeroSection {
  title: string
  description: string
}

interface StatCard {
  id: string
  icon: string
  value: string
  label: string
}

interface IncubationPhase {
  id: string
  title: string
  duration: string
  badge: string
  description: string
  icon: string
  iconColor: string
}

interface SuccessStory {
  id: string
  businessName: string
  licenseStatus: string
  category: string
  categoryColor: string
  contactPerson: string
  phone: string
  email: string
}

const iconMap = {
  rocket: Rocket,
  trending: TrendingUp,
  users: Users,
  dollar: DollarSign,
}

const phaseIconMap = {
  fileText: FileText,
  book: BookOpen,
  zap: Zap,
  rocket: Rocket,
}

export default function IncubationPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [isAddStatOpen, setIsAddStatOpen] = useState(false)
  const [isAddStoryOpen, setIsAddStoryOpen] = useState(false)
  const [isAddPhaseOpen, setIsAddPhaseOpen] = useState(false)
  const [editingStory, setEditingStory] = useState<SuccessStory | null>(null)
  const [editingPhase, setEditingPhase] = useState<IncubationPhase | null>(null)

  const [heroSection, setHeroSection] = useState<HeroSection>({
    title: "Incubation Program",
    description:
      "Nurturing early-stage startups with workspace, resources, mentorship, and strategic support to accelerate growth and market readiness.",
  })

  const [stats, setStats] = useState<StatCard[]>([
    { id: "1", icon: "rocket", value: "50+", label: "Startups Incubated" },
    { id: "2", icon: "trending", value: "85%", label: "Success Rate" },
    { id: "3", icon: "users", value: "200+", label: "Jobs Created" },
    { id: "4", icon: "dollar", value: "15M+", label: "Birr in Funding" },
  ])

  const [incubationPhases, setIncubationPhases] = useState<IncubationPhase[]>([
    {
      id: "1",
      title: "Application & Selection",
      duration: "2-4 weeks",
      badge: "Getting Started",
      description:
        "Submit your innovative idea through our application portal. Our selection committee evaluates proposals based on innovation potential, market viability, team capability, and social impact. Selected startups receive acceptance and onboarding materials.",
      icon: "fileText",
      iconColor: "teal",
    },
    {
      id: "2",
      title: "Foundation Building",
      duration: "3 months",
      badge: "Months 1-3",
      description:
        "Intensive business planning phase where you work with mentors to refine your business model, conduct market research, develop financial projections, and create a comprehensive roadmap. Access workshops on legal structures, IP protection, and compliance.",
      icon: "book",
      iconColor: "cyan",
    },
    {
      id: "3",
      title: "Development & Prototyping",
      duration: "5 months",
      badge: "Months 4-8",
      description:
        "Build and test your product or service with access to our FabLab facilities, technical mentorship, and development resources. Iterate based on user feedback and prepare for market entry.",
      icon: "zap",
      iconColor: "blue",
    },
    {
      id: "4",
      title: "Growth & Launch",
      duration: "4 months",
      badge: "Months 9-12",
      description:
        "Scale your operations with support in marketing, sales strategy, and customer acquisition. Connect with investors, partners, and potential customers. Prepare for graduation and sustainable growth.",
      icon: "rocket",
      iconColor: "blue",
    },
  ])

  const [successStories, setSuccessStories] = useState<SuccessStory[]>([
    {
      id: "1",
      businessName: "Animal feed production using Hydroponic",
      licenseStatus: "Licensed",
      category: "Agriculture/Food",
      categoryColor: "green",
      contactPerson: "Sample Contact",
      phone: "+251 XX XXX XXXX",
      email: "",
    },
    {
      id: "2",
      businessName: "Automated Jacquard Needle Loom",
      licenseStatus: "Licensed",
      category: "Engineering/Manufacturing",
      categoryColor: "purple",
      contactPerson: "Sample Contact",
      phone: "+251 XX XXX XXXX",
      email: "",
    },
    {
      id: "3",
      businessName: "Ayat Mar",
      licenseStatus: "Licensed",
      category: "Food",
      categoryColor: "orange",
      contactPerson: "Sample Contact",
      phone: "+251 XX XXX XXXX",
      email: "",
    },
    {
      id: "4",
      businessName: "Bahredin Omer food product retaill",
      licenseStatus: "Licensed",
      category: "Food",
      categoryColor: "orange",
      contactPerson: "Sample Contact",
      phone: "+251 XX XXX XXXX",
      email: "",
    },
  ])

  const [newStat, setNewStat] = useState<Omit<StatCard, "id">>({
    icon: "rocket",
    value: "",
    label: "",
  })

  const [newStory, setNewStory] = useState<Omit<SuccessStory, "id">>({
    businessName: "",
    licenseStatus: "Licensed",
    category: "",
    categoryColor: "blue",
    contactPerson: "",
    phone: "",
    email: "",
  })

  const [newPhase, setNewPhase] = useState<Omit<IncubationPhase, "id">>({
    title: "",
    duration: "",
    badge: "",
    description: "",
    icon: "fileText",
    iconColor: "teal",
  })

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("Incubation page updated successfully!")
  }

  const addStat = () => {
    if (newStat.value && newStat.label) {
      setStats([...stats, { ...newStat, id: Date.now().toString() }])
      setNewStat({ icon: "rocket", value: "", label: "" })
      setIsAddStatOpen(false)
    }
  }

  const deleteStat = (id: string) => {
    setStats(stats.filter((s) => s.id !== id))
  }

  const addSuccessStory = () => {
    if (newStory.businessName && newStory.category && newStory.contactPerson) {
      setSuccessStories([...successStories, { ...newStory, id: Date.now().toString() }])
      setNewStory({
        businessName: "",
        licenseStatus: "Licensed",
        category: "",
        categoryColor: "blue",
        contactPerson: "",
        phone: "",
        email: "",
      })
      setIsAddStoryOpen(false)
    }
  }

  const updateSuccessStory = () => {
    if (editingStory) {
      setSuccessStories(successStories.map((s) => (s.id === editingStory.id ? editingStory : s)))
      setEditingStory(null)
    }
  }

  const deleteSuccessStory = (id: string) => {
    setSuccessStories(successStories.filter((s) => s.id !== id))
  }

  const addPhase = () => {
    if (newPhase.title && newPhase.duration && newPhase.description) {
      setIncubationPhases([...incubationPhases, { ...newPhase, id: Date.now().toString() }])
      setNewPhase({
        title: "",
        duration: "",
        badge: "",
        description: "",
        icon: "fileText",
        iconColor: "teal",
      })
      setIsAddPhaseOpen(false)
    }
  }

  const updatePhase = () => {
    if (editingPhase) {
      setIncubationPhases(incubationPhases.map((p) => (p.id === editingPhase.id ? editingPhase : p)))
      setEditingPhase(null)
    }
  }

  const deletePhase = (id: string) => {
    setIncubationPhases(incubationPhases.filter((p) => p.id !== id))
  }

  const getCategoryColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-100 text-blue-700",
      green: "bg-green-100 text-green-700",
      teal: "bg-teal-100 text-teal-700",
      purple: "bg-purple-100 text-purple-700",
      orange: "bg-orange-100 text-orange-700",
      red: "bg-red-100 text-red-700",
    }
    return colorMap[color] || colorMap.blue
  }

  const getIconColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      teal: "bg-[#00BFA6]",
      cyan: "bg-cyan-500",
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
    }
    return colorMap[color] || colorMap.teal
  }

  return (
    <div>
      <AdminHeader
        title="Incubation Program"
        description="Manage incubation content, statistics, and success stories"
      />
      <div className="p-6 max-w-7xl">
        <div className="space-y-6">
          {/* Hero Section */}
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Main banner title and description</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hero-title">Title</Label>
                <Input
                  id="hero-title"
                  value={heroSection.title}
                  onChange={(e) => setHeroSection({ ...heroSection, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-description">Description</Label>
                <Textarea
                  id="hero-description"
                  rows={3}
                  value={heroSection.description}
                  onChange={(e) => setHeroSection({ ...heroSection, description: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Statistics Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Statistical Information</CardTitle>
                  <CardDescription>Key metrics and achievements</CardDescription>
                </div>
                <Dialog open={isAddStatOpen} onOpenChange={setIsAddStatOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Stat
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Statistical Card</DialogTitle>
                      <DialogDescription>Add a new statistic to showcase your impact</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label>Icon</Label>
                        <Select value={newStat.icon} onValueChange={(value) => setNewStat({ ...newStat, icon: value })}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rocket">Rocket</SelectItem>
                            <SelectItem value="trending">Trending Up</SelectItem>
                            <SelectItem value="users">Users</SelectItem>
                            <SelectItem value="dollar">Dollar Sign</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Value</Label>
                        <Input
                          placeholder="e.g., 50+, 85%, 200+"
                          value={newStat.value}
                          onChange={(e) => setNewStat({ ...newStat, value: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Label</Label>
                        <Input
                          placeholder="e.g., Startups Incubated"
                          value={newStat.label}
                          onChange={(e) => setNewStat({ ...newStat, label: e.target.value })}
                        />
                      </div>
                      <Button onClick={addStat} className="w-full bg-[#00BFA6] hover:bg-[#00A693]">
                        Add Statistic
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => {
                  const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
                  return (
                    <Card key={stat.id} className="relative group">
                      <CardContent className="pt-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-[#00BFA6] flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-[#00BFA6] mb-2">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => deleteStat(stat.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Incubation Program Phases</CardTitle>
                  <CardDescription>Manage the stages of your incubation program</CardDescription>
                </div>
                <Dialog open={isAddPhaseOpen} onOpenChange={setIsAddPhaseOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Phase
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Add Program Phase</DialogTitle>
                      <DialogDescription>Add a new phase to your incubation program</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label>Phase Title</Label>
                        <Input
                          placeholder="e.g., Application & Selection"
                          value={newPhase.title}
                          onChange={(e) => setNewPhase({ ...newPhase, title: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Duration</Label>
                          <Input
                            placeholder="e.g., 2-4 weeks"
                            value={newPhase.duration}
                            onChange={(e) => setNewPhase({ ...newPhase, duration: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Badge Text</Label>
                          <Input
                            placeholder="e.g., Getting Started"
                            value={newPhase.badge}
                            onChange={(e) => setNewPhase({ ...newPhase, badge: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Icon</Label>
                          <Select
                            value={newPhase.icon}
                            onValueChange={(value) => setNewPhase({ ...newPhase, icon: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fileText">Document</SelectItem>
                              <SelectItem value="book">Book</SelectItem>
                              <SelectItem value="zap">Lightning</SelectItem>
                              <SelectItem value="rocket">Rocket</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Icon Color</Label>
                          <Select
                            value={newPhase.iconColor}
                            onValueChange={(value) => setNewPhase({ ...newPhase, iconColor: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="teal">Teal</SelectItem>
                              <SelectItem value="cyan">Cyan</SelectItem>
                              <SelectItem value="blue">Blue</SelectItem>
                              <SelectItem value="purple">Purple</SelectItem>
                              <SelectItem value="orange">Orange</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                          rows={4}
                          placeholder="Describe this phase of the program..."
                          value={newPhase.description}
                          onChange={(e) => setNewPhase({ ...newPhase, description: e.target.value })}
                        />
                      </div>
                      <Button onClick={addPhase} className="w-full bg-[#00BFA6] hover:bg-[#00A693]">
                        Add Phase
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {incubationPhases.map((phase) => {
                  const PhaseIcon = phaseIconMap[phase.icon as keyof typeof phaseIconMap]
                  return (
                    <Card key={phase.id} className="relative group">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl ${getIconColorClass(phase.iconColor)} flex items-center justify-center flex-shrink-0`}
                          >
                            <PhaseIcon className="h-6 w-6 text-white" />
                          </div>
                          {phase.badge && (
                            <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-700">
                              {phase.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{phase.title}</h3>
                        <p className="text-sm text-[#00BFA6] font-medium mb-3">Duration: {phase.duration}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" onClick={() => setEditingPhase(phase)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Edit Program Phase</DialogTitle>
                              </DialogHeader>
                              {editingPhase && (
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <Label>Phase Title</Label>
                                    <Input
                                      value={editingPhase.title}
                                      onChange={(e) => setEditingPhase({ ...editingPhase, title: e.target.value })}
                                    />
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                      <Label>Duration</Label>
                                      <Input
                                        value={editingPhase.duration}
                                        onChange={(e) => setEditingPhase({ ...editingPhase, duration: e.target.value })}
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Badge Text</Label>
                                      <Input
                                        value={editingPhase.badge}
                                        onChange={(e) => setEditingPhase({ ...editingPhase, badge: e.target.value })}
                                      />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                      <Label>Icon</Label>
                                      <Select
                                        value={editingPhase.icon}
                                        onValueChange={(value) => setEditingPhase({ ...editingPhase, icon: value })}
                                      >
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="fileText">Document</SelectItem>
                                          <SelectItem value="book">Book</SelectItem>
                                          <SelectItem value="zap">Lightning</SelectItem>
                                          <SelectItem value="rocket">Rocket</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Icon Color</Label>
                                      <Select
                                        value={editingPhase.iconColor}
                                        onValueChange={(value) =>
                                          setEditingPhase({ ...editingPhase, iconColor: value })
                                        }
                                      >
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="teal">Teal</SelectItem>
                                          <SelectItem value="cyan">Cyan</SelectItem>
                                          <SelectItem value="blue">Blue</SelectItem>
                                          <SelectItem value="purple">Purple</SelectItem>
                                          <SelectItem value="orange">Orange</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Description</Label>
                                    <Textarea
                                      rows={4}
                                      value={editingPhase.description}
                                      onChange={(e) =>
                                        setEditingPhase({ ...editingPhase, description: e.target.value })
                                      }
                                    />
                                  </div>
                                  <Button onClick={updatePhase} className="w-full bg-[#00BFA6] hover:bg-[#00A693]">
                                    Update Phase
                                  </Button>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          <Button variant="ghost" size="icon" onClick={() => deletePhase(phase.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Success Stories Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Success Stories</CardTitle>
                  <CardDescription>Showcase businesses incubated through your program</CardDescription>
                </div>
                <Dialog open={isAddStoryOpen} onOpenChange={setIsAddStoryOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Success Story
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Add Success Story</DialogTitle>
                      <DialogDescription>Add a new business success story</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
                      <div className="space-y-2">
                        <Label>Business Name</Label>
                        <Input
                          placeholder="Enter business name"
                          value={newStory.businessName}
                          onChange={(e) => setNewStory({ ...newStory, businessName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>License Status</Label>
                        <Select
                          value={newStory.licenseStatus}
                          onValueChange={(value) => setNewStory({ ...newStory, licenseStatus: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Licensed">Licensed</SelectItem>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="In Progress">In Progress</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Category</Label>
                          <Input
                            placeholder="e.g., Manufacturing"
                            value={newStory.category}
                            onChange={(e) => setNewStory({ ...newStory, category: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Category Color</Label>
                          <Select
                            value={newStory.categoryColor}
                            onValueChange={(value) => setNewStory({ ...newStory, categoryColor: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="blue">Blue</SelectItem>
                              <SelectItem value="green">Green</SelectItem>
                              <SelectItem value="teal">Teal</SelectItem>
                              <SelectItem value="purple">Purple</SelectItem>
                              <SelectItem value="orange">Orange</SelectItem>
                              <SelectItem value="red">Red</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Contact Person</Label>
                        <Input
                          placeholder="Enter contact person name"
                          value={newStory.contactPerson}
                          onChange={(e) => setNewStory({ ...newStory, contactPerson: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input
                          placeholder="+251 XX XXX XXXX"
                          value={newStory.phone}
                          onChange={(e) => setNewStory({ ...newStory, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Email (Optional)</Label>
                        <Input
                          type="email"
                          placeholder="email@example.com"
                          value={newStory.email}
                          onChange={(e) => setNewStory({ ...newStory, email: e.target.value })}
                        />
                      </div>
                      <Button onClick={addSuccessStory} className="w-full bg-[#00BFA6] hover:bg-[#00A693]">
                        Add Success Story
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {successStories.map((story) => (
                  <Card key={story.id} className="relative group">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#00BFA6] flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-700">
                          {story.licenseStatus}
                        </span>
                      </div>
                      <h3 className="font-semibold text-sm mb-3 line-clamp-2">{story.businessName}</h3>
                      <div className="mb-3">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getCategoryColorClass(story.categoryColor)}`}
                        >
                          {story.category}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{story.contactPerson}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{story.phone}</span>
                        </div>
                        {story.email && (
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{story.email}</span>
                          </div>
                        )}
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => setEditingStory(story)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Edit Success Story</DialogTitle>
                            </DialogHeader>
                            {editingStory && (
                              <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
                                <div className="space-y-2">
                                  <Label>Business Name</Label>
                                  <Input
                                    value={editingStory.businessName}
                                    onChange={(e) => setEditingStory({ ...editingStory, businessName: e.target.value })}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label>License Status</Label>
                                  <Select
                                    value={editingStory.licenseStatus}
                                    onValueChange={(value) =>
                                      setEditingStory({ ...editingStory, licenseStatus: value })
                                    }
                                  >
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Licensed">Licensed</SelectItem>
                                      <SelectItem value="Pending">Pending</SelectItem>
                                      <SelectItem value="In Progress">In Progress</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label>Category</Label>
                                    <Input
                                      value={editingStory.category}
                                      onChange={(e) => setEditingStory({ ...editingStory, category: e.target.value })}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Category Color</Label>
                                    <Select
                                      value={editingStory.categoryColor}
                                      onValueChange={(value) =>
                                        setEditingStory({ ...editingStory, categoryColor: value })
                                      }
                                    >
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="blue">Blue</SelectItem>
                                        <SelectItem value="green">Green</SelectItem>
                                        <SelectItem value="teal">Teal</SelectItem>
                                        <SelectItem value="purple">Purple</SelectItem>
                                        <SelectItem value="orange">Orange</SelectItem>
                                        <SelectItem value="red">Red</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label>Contact Person</Label>
                                  <Input
                                    value={editingStory.contactPerson}
                                    onChange={(e) =>
                                      setEditingStory({ ...editingStory, contactPerson: e.target.value })
                                    }
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label>Phone Number</Label>
                                  <Input
                                    value={editingStory.phone}
                                    onChange={(e) => setEditingStory({ ...editingStory, phone: e.target.value })}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label>Email (Optional)</Label>
                                  <Input
                                    type="email"
                                    value={editingStory.email}
                                    onChange={(e) => setEditingStory({ ...editingStory, email: e.target.value })}
                                  />
                                </div>
                                <Button onClick={updateSuccessStory} className="w-full bg-[#00BFA6] hover:bg-[#00A693]">
                                  Update Success Story
                                </Button>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="icon" onClick={() => deleteSuccessStory(story.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
