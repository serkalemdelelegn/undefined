"use client"

import type React from "react"

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
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

interface HeroSection {
  badge: string
  title: string
  description: string
  image: string
}

interface StatCard {
  id: string
  icon: string
  value: string
  label: string
}

interface FundingPartner {
  id: string
  image: string
  title: string
  contribution: string
  contributionDescription: string
  focusArea: string
  partnerSince: string
  peopleImpacted: string
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

export default function BusinessDevelopmentPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [isAddStatOpen, setIsAddStatOpen] = useState(false)
  const [isAddPartnerOpen, setIsAddPartnerOpen] = useState(false)
  const [isAddStoryOpen, setIsAddStoryOpen] = useState(false)
  const [editingStory, setEditingStory] = useState<SuccessStory | null>(null)

  const [heroSection, setHeroSection] = useState<HeroSection>({
    badge: "Business Development",
    title: "Business Development Services",
    description:
      "Comprehensive support for entrepreneurs to transform ideas into thriving businesses through mentorship, training, and strategic guidance.",
    image: "",
  })

  const [stats, setStats] = useState<StatCard[]>([
    { id: "1", icon: "rocket", value: "50+", label: "Startups Incubated" },
    { id: "2", icon: "trending", value: "85%", label: "Success Rate" },
    { id: "3", icon: "users", value: "200+", label: "Jobs Created" },
    { id: "4", icon: "dollar", value: "15M+", label: "Birr in Funding" },
  ])

  const [fundingPartners, setFundingPartners] = useState<FundingPartner[]>([
    {
      id: "1",
      image: "",
      title: "World Bank",
      contribution: "$2.5M",
      contributionDescription: "Infrastructure and program development funding",
      focusArea: "Education infrastructure & Capacity Building",
      partnerSince: "2018",
      peopleImpacted: "5,000+ students and educators",
    },
  ])

  const [successStories, setSuccessStories] = useState<SuccessStory[]>([
    {
      id: "1",
      businessName: "2D and Rotary CNC Machine",
      licenseStatus: "Licensed",
      category: "Manufacturing",
      categoryColor: "blue",
      contactPerson: "George Girmay",
      phone: "+251 98 707 7304",
      email: "",
    },
    {
      id: "2",
      businessName: "Agricultural Chemical Spray and Arial Mapping Drone",
      licenseStatus: "Licensed",
      category: "Engineering/Agriculture",
      categoryColor: "green",
      contactPerson: "Mekonen Asmare",
      phone: "+251 98 698 8369",
      email: "",
    },
    {
      id: "3",
      businessName: "Akolle",
      licenseStatus: "Licensed",
      category: "Technology/Agriculture",
      categoryColor: "teal",
      contactPerson: "Dawit Workneh",
      phone: "+251963167684",
      email: "worknehdawit@gmail.com",
    },
    {
      id: "4",
      businessName: "Aluminum Works",
      licenseStatus: "Licensed",
      category: "Engineering/Service",
      categoryColor: "purple",
      contactPerson: "Amanuel Zewdie",
      phone: "+251 90 007 0009",
      email: "amanuelzewdie16@gmail.com",
    },
  ])

  const [newStat, setNewStat] = useState<Omit<StatCard, "id">>({
    icon: "rocket",
    value: "",
    label: "",
  })

  const [newPartner, setNewPartner] = useState<Omit<FundingPartner, "id">>({
    image: "",
    title: "",
    contribution: "",
    contributionDescription: "",
    focusArea: "",
    partnerSince: "",
    peopleImpacted: "",
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

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("Business Development Services page updated successfully!")
  }

  const handleHeroImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setHeroSection({ ...heroSection, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePartnerImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isNew = true) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (isNew) {
          setNewPartner({ ...newPartner, image: reader.result as string })
        }
      }
      reader.readAsDataURL(file)
    }
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

  const addFundingPartner = () => {
    if (newPartner.title && newPartner.contribution) {
      setFundingPartners([...fundingPartners, { ...newPartner, id: Date.now().toString() }])
      setNewPartner({
        image: "",
        title: "",
        contribution: "",
        contributionDescription: "",
        focusArea: "",
        partnerSince: "",
        peopleImpacted: "",
      })
      setIsAddPartnerOpen(false)
    }
  }

  const deleteFundingPartner = (id: string) => {
    setFundingPartners(fundingPartners.filter((p) => p.id !== id))
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

  return (
    <div>
      <div className="flex items-center gap-2 px-6 pt-6">
        <Link
          href="/admin/programs/entrepreneurship"
          className="flex items-center gap-2 text-[#367375] hover:text-[#24C3BC] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to Entrepreneurship</span>
        </Link>
      </div>
      <AdminHeader
        title="Business Development Services"
        description="Manage BDS content, statistics, funding partners, and success stories"
      />
      <div className="p-6 max-w-7xl">
        <div className="space-y-6">
          {/* Hero Section */}
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Main banner with badge, title, description, and image</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hero-badge">Badge Text</Label>
                <Input
                  id="hero-badge"
                  value={heroSection.badge}
                  onChange={(e) => setHeroSection({ ...heroSection, badge: e.target.value })}
                />
              </div>
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
              <div className="space-y-2">
                <Label htmlFor="hero-image">Hero Image</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-muted/50 transition-colors">
                  <input
                    id="hero-image"
                    type="file"
                    accept="image/*"
                    onChange={handleHeroImageUpload}
                    className="hidden"
                  />
                  <label htmlFor="hero-image" className="cursor-pointer">
                    {heroSection.image ? (
                      <div className="space-y-2">
                        <img
                          src={heroSection.image || "/placeholder.svg"}
                          alt="Hero preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <Button variant="outline" size="sm">
                          Change Image
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Drag and drop your image here or click to select
                        </p>
                        <Button variant="outline" size="sm">
                          Select Image
                        </Button>
                      </div>
                    )}
                  </label>
                </div>
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

          {/* Funding Partners & Donors Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Funding Partners & Donors</CardTitle>
                  <CardDescription>Manage funding partners and their contributions</CardDescription>
                </div>
                <Dialog open={isAddPartnerOpen} onOpenChange={setIsAddPartnerOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Partner
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Add Funding Partner</DialogTitle>
                      <DialogDescription>Add a new funding partner or donor</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
                      <div className="space-y-2">
                        <Label>Partner Logo/Image</Label>
                        <div className="border-2 border-dashed rounded-lg p-4 text-center hover:bg-muted/50 transition-colors">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handlePartnerImageUpload(e, true)}
                            className="hidden"
                            id="partner-image-input"
                          />
                          <label htmlFor="partner-image-input" className="cursor-pointer">
                            {newPartner.image ? (
                              <div className="space-y-2">
                                <img
                                  src={newPartner.image || "/placeholder.svg"}
                                  alt="Partner preview"
                                  className="w-full h-32 object-contain rounded"
                                />
                                <Button variant="outline" size="sm">
                                  Change Image
                                </Button>
                              </div>
                            ) : (
                              <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">Click to upload partner logo</p>
                                <Button variant="outline" size="sm">
                                  Select Image
                                </Button>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Partner Name</Label>
                        <Input
                          placeholder="e.g., World Bank"
                          value={newPartner.title}
                          onChange={(e) => setNewPartner({ ...newPartner, title: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Contribution Amount</Label>
                        <Input
                          placeholder="e.g., $2.5M"
                          value={newPartner.contribution}
                          onChange={(e) => setNewPartner({ ...newPartner, contribution: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Contribution Description</Label>
                        <Textarea
                          placeholder="e.g., Infrastructure and program development funding"
                          rows={2}
                          value={newPartner.contributionDescription}
                          onChange={(e) => setNewPartner({ ...newPartner, contributionDescription: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Focus Area</Label>
                        <Textarea
                          placeholder="e.g., Education infrastructure & Capacity Building"
                          rows={2}
                          value={newPartner.focusArea}
                          onChange={(e) => setNewPartner({ ...newPartner, focusArea: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Partner Since (Year)</Label>
                          <Input
                            placeholder="e.g., 2018"
                            value={newPartner.partnerSince}
                            onChange={(e) => setNewPartner({ ...newPartner, partnerSince: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>People Impacted</Label>
                          <Input
                            placeholder="e.g., 5,000+ students"
                            value={newPartner.peopleImpacted}
                            onChange={(e) => setNewPartner({ ...newPartner, peopleImpacted: e.target.value })}
                          />
                        </div>
                      </div>
                      <Button onClick={addFundingPartner} className="w-full bg-[#00BFA6] hover:bg-[#00A693]">
                        Add Funding Partner
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fundingPartners.map((partner) => (
                  <Card key={partner.id} className="relative group overflow-hidden">
                    {partner.image && (
                      <div className="h-32 bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={partner.image || "/placeholder.svg"}
                          alt={partner.title}
                          className="h-full w-full object-contain p-2"
                        />
                      </div>
                    )}
                    <CardContent className={`${partner.image ? "pt-4" : "pt-6"}`}>
                      <h3 className="font-semibold text-lg mb-2">{partner.title}</h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-medium text-[#00BFA6]">{partner.contribution}</p>
                          <p className="text-muted-foreground text-xs">{partner.contributionDescription}</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Focus Area</p>
                          <p className="text-muted-foreground text-xs">{partner.focusArea}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t">
                          <div>
                            <p className="text-xs text-muted-foreground">Partner Since</p>
                            <p className="font-semibold">{partner.partnerSince}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">People Impacted</p>
                            <p className="font-semibold text-xs">{partner.peopleImpacted}</p>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => deleteFundingPartner(partner.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Success Stories Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Success Stories</CardTitle>
                  <CardDescription>Showcase businesses supported through your program</CardDescription>
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
