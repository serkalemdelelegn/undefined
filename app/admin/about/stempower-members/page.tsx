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
import { Users, Sparkles, Plus, Trash2, Upload, Save, MapPin, Globe } from "lucide-react"
import { useState, useRef } from "react"
import Image from "next/image"

export default function StemPowerMembersPage() {
  // Staff Hero State
  const [staffHero, setStaffHero] = useState({
    badge: "Meet the Ethiopian Team",
    title: "The Heart Behind STEMpower Ethiopia",
    subtitle: "Our dedicated team of passionate educators and leaders transforming STEM education across Ethiopia.",
    statistics: [
      { id: "1", label: "Team Members", value: "15+" },
      { id: "2", label: "STEM Centers", value: "61" },
      { id: "3", label: "Years Combined", value: "100+" },
      { id: "4", label: "Students Impacted", value: "1000s" },
    ],
  })

  // Board Members State
  const [boardOrganization, setBoardOrganization] = useState<"ethiopia" | "africa">("ethiopia")
  const [boardMembers, setBoardMembers] = useState({
    ethiopia: [
      {
        id: "1",
        name: "Dr. Ing. Getahun Mekuria",
        title: "Board Chairperson",
        image: "/board-member-1.jpg",
        bio: "Dr.-Ing. Getahun Mekuria Kuma is the former Minister of Education, former Minister of Innovation and Technology.",
        fullBio:
          "Dr.-Ing. Getahun Mekuria Kuma is the former Minister of Education, former Minister of Innovation and Technology, and former Minister of Water and Energy. He has extensive experience in education policy and STEM development.",
      },
      {
        id: "2",
        name: "Prof. Yalemtsehay Mekonnen",
        title: "Board Vice Chairperson",
        image: "/board-member-2.jpg",
        bio: "Yalemtsehay Mekonnen is a Professor of Cell and Human Physiology at the Department of Biology.",
        fullBio:
          "Yalemtsehay Mekonnen is a Professor of Cell and Human Physiology. Currently, she is an academic staff of the Department of Biology with decades of research experience.",
      },
    ],
    africa: [
      {
        id: "3",
        name: "Winta Yohannes",
        title: "Treasurer",
        image: "/board-member-3.jpg",
        bio: "Winta is the Managing Partner of Axiom Ventures Investment Services PLC.",
        fullBio:
          "Winta is the Managing Partner of Axiom Ventures Investment Services PLC, a boutique advisory firm established with an aim to engage in financial advisory services.",
      },
    ],
  })

  // Staff Members State
  const [staffMembers, setStaffMembers] = useState([
    {
      id: "1",
      name: "Dr. Simenew Keskes",
      position: "Country Director",
      image: "/staff-member-1.jpg",
      bio: "Dr. Simenew served Ministry of Innovation and Technology in different posts including, Innovation Advisor to the Minister.",
    },
    {
      id: "2",
      name: "Fasil Woldegebriel",
      position: "Fundraising Manager",
      image: "/staff-member-2.jpg",
      bio: "Fasil is supporting STEMpower as organizational development strategy consultant. He has worked for GIZ Ethiopia for more than 10 years.",
    },
    {
      id: "3",
      name: "Anteneh Fisseha",
      position: "STEM Operations Manager",
      image: "/staff-member-3.jpg",
      bio: "Anteneh is STEM Operations Manager at STEMpower. He brings a wide range of experience and accomplishments to his role.",
    },
  ])

  const boardMemberImageRefs = useRef<{ [key: string]: HTMLInputElement | null }>({})
  const staffMemberImageRefs = useRef<{ [key: string]: HTMLInputElement | null }>({})

  const addBoardMember = () => {
    const newMember = {
      id: Date.now().toString(),
      name: "",
      title: "",
      image: "/new-board-member.jpg",
      bio: "",
      fullBio: "",
    }
    setBoardMembers({
      ...boardMembers,
      [boardOrganization]: [...boardMembers[boardOrganization], newMember],
    })
  }

  const removeBoardMember = (id: string) => {
    setBoardMembers({
      ...boardMembers,
      [boardOrganization]: boardMembers[boardOrganization].filter((m) => m.id !== id),
    })
  }

  const addStaffMember = () => {
    setStaffMembers([
      ...staffMembers,
      {
        id: Date.now().toString(),
        name: "",
        position: "",
        image: "/new-staff-member.jpg",
        bio: "",
      },
    ])
  }

  const removeStaffMember = (id: string) => {
    setStaffMembers(staffMembers.filter((m) => m.id !== id))
  }

  const handleBoardMemberImageUpload = (memberId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const newMembers = boardMembers[boardOrganization].map((m) =>
          m.id === memberId ? { ...m, image: reader.result as string } : m,
        )
        setBoardMembers({ ...boardMembers, [boardOrganization]: newMembers })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleStaffMemberImageUpload = (memberId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const newMembers = staffMembers.map((m) => (m.id === memberId ? { ...m, image: reader.result as string } : m))
        setStaffMembers(newMembers)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    console.log("Saving STEMpower Members data...")
    alert("STEMpower Members content saved successfully!")
  }

  return (
    <div>
      <AdminHeader title="STEMpower Members Management" description="Manage board members and staff members profiles" />

      <div className="p-6 max-w-7xl">
        <BackButton />

        <div className="flex justify-end mb-6">
          <Button onClick={handleSave} size="lg" className="bg-[#00BFA6] hover:bg-[#00A693]">
            <Save className="mr-2 h-4 w-4" />
            Save All Changes
          </Button>
        </div>

        <Tabs defaultValue="staff-hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="staff-hero" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Staff Hero
            </TabsTrigger>
            <TabsTrigger value="board" className="gap-2">
              <Users className="h-4 w-4" />
              Board Members
            </TabsTrigger>
            <TabsTrigger value="staff" className="gap-2">
              <Users className="h-4 w-4" />
              Staff Members
            </TabsTrigger>
          </TabsList>

          {/* Staff Hero Section Tab */}
          <TabsContent value="staff-hero" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#00BFA6]" />
                  Staff Section Hero
                </CardTitle>
                <CardDescription>Customize the hero section for the staff members area</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="staff-badge">Badge Text</Label>
                    <Input
                      id="staff-badge"
                      value={staffHero.badge}
                      onChange={(e) => setStaffHero({ ...staffHero, badge: e.target.value })}
                      placeholder="Meet the Ethiopian Team"
                    />
                  </div>
                  <div>
                    <Label htmlFor="staff-title">Title</Label>
                    <Input
                      id="staff-title"
                      value={staffHero.title}
                      onChange={(e) => setStaffHero({ ...staffHero, title: e.target.value })}
                      placeholder="The Heart Behind STEMpower Ethiopia"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="staff-subtitle">Subtitle</Label>
                  <Textarea
                    id="staff-subtitle"
                    value={staffHero.subtitle}
                    onChange={(e) => setStaffHero({ ...staffHero, subtitle: e.target.value })}
                    rows={3}
                    placeholder="Our dedicated team..."
                  />
                </div>
                <div>
                  <Label className="mb-4 block">Statistics Cards</Label>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {staffHero.statistics.map((stat) => (
                      <Card key={stat.id}>
                        <CardContent className="pt-6 space-y-2">
                          <Input
                            value={stat.label}
                            onChange={(e) => {
                              const newStats = staffHero.statistics.map((s) =>
                                s.id === stat.id ? { ...s, label: e.target.value } : s,
                              )
                              setStaffHero({ ...staffHero, statistics: newStats })
                            }}
                            placeholder="Label"
                          />
                          <Input
                            value={stat.value}
                            onChange={(e) => {
                              const newStats = staffHero.statistics.map((s) =>
                                s.id === stat.id ? { ...s, value: e.target.value } : s,
                              )
                              setStaffHero({ ...staffHero, statistics: newStats })
                            }}
                            placeholder="Value"
                          />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Board Members Tab */}
          <TabsContent value="board" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#00BFA6]" />
                  Board of Directors
                </CardTitle>
                <CardDescription>Manage board members for both organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button
                      variant={boardOrganization === "ethiopia" ? "default" : "outline"}
                      onClick={() => setBoardOrganization("ethiopia")}
                      className={boardOrganization === "ethiopia" ? "bg-[#00BFA6] hover:bg-[#00A693]" : ""}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      STEMpower Ethiopia
                    </Button>
                    <Button
                      variant={boardOrganization === "africa" ? "default" : "outline"}
                      onClick={() => setBoardOrganization("africa")}
                      className={boardOrganization === "africa" ? "bg-[#00BFA6] hover:bg-[#00A693]" : ""}
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      STEMpower Africa
                    </Button>
                  </div>
                  <Button onClick={addBoardMember} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Board Member
                  </Button>
                </div>

                <div className="space-y-4">
                  {boardMembers[boardOrganization].map((member) => (
                    <Card key={member.id}>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 relative">
                              <Image
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <input
                              ref={(el) => {
                                boardMemberImageRefs.current[member.id] = el
                              }}
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleBoardMemberImageUpload(member.id, e)}
                              className="hidden"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-24 mt-2 bg-transparent"
                              onClick={() => boardMemberImageRefs.current[member.id]?.click()}
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
                                  value={member.name}
                                  onChange={(e) => {
                                    const newMembers = boardMembers[boardOrganization].map((m) =>
                                      m.id === member.id ? { ...m, name: e.target.value } : m,
                                    )
                                    setBoardMembers({ ...boardMembers, [boardOrganization]: newMembers })
                                  }}
                                  placeholder="Full name"
                                />
                              </div>
                              <div>
                                <Label>Title/Position</Label>
                                <Input
                                  value={member.title}
                                  onChange={(e) => {
                                    const newMembers = boardMembers[boardOrganization].map((m) =>
                                      m.id === member.id ? { ...m, title: e.target.value } : m,
                                    )
                                    setBoardMembers({ ...boardMembers, [boardOrganization]: newMembers })
                                  }}
                                  placeholder="Board Chairperson"
                                />
                              </div>
                            </div>
                            <div>
                              <Label>Short Bio</Label>
                              <Textarea
                                value={member.bio}
                                onChange={(e) => {
                                  const newMembers = boardMembers[boardOrganization].map((m) =>
                                    m.id === member.id ? { ...m, bio: e.target.value } : m,
                                  )
                                  setBoardMembers({ ...boardMembers, [boardOrganization]: newMembers })
                                }}
                                rows={2}
                                placeholder="Brief description..."
                              />
                            </div>
                            <div>
                              <Label>Full Bio</Label>
                              <Textarea
                                value={member.fullBio}
                                onChange={(e) => {
                                  const newMembers = boardMembers[boardOrganization].map((m) =>
                                    m.id === member.id ? { ...m, fullBio: e.target.value } : m,
                                  )
                                  setBoardMembers({ ...boardMembers, [boardOrganization]: newMembers })
                                }}
                                rows={3}
                                placeholder="Complete biography..."
                              />
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeBoardMember(member.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Staff Members Tab */}
          <TabsContent value="staff" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-[#00BFA6]" />
                      Staff Members
                    </CardTitle>
                    <CardDescription>Add and manage your team members</CardDescription>
                  </div>
                  <Button onClick={addStaffMember} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Staff Member
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {staffMembers.map((member) => (
                  <Card key={member.id}>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 relative">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <input
                            ref={(el) => {
                              staffMemberImageRefs.current[member.id] = el
                            }}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleStaffMemberImageUpload(member.id, e)}
                            className="hidden"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-24 mt-2 bg-transparent"
                            onClick={() => staffMemberImageRefs.current[member.id]?.click()}
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
                                value={member.name}
                                onChange={(e) => {
                                  const newMembers = staffMembers.map((m) =>
                                    m.id === member.id ? { ...m, name: e.target.value } : m,
                                  )
                                  setStaffMembers(newMembers)
                                }}
                                placeholder="Full name"
                              />
                            </div>
                            <div>
                              <Label>Position/Title</Label>
                              <Input
                                value={member.position}
                                onChange={(e) => {
                                  const newMembers = staffMembers.map((m) =>
                                    m.id === member.id ? { ...m, position: e.target.value } : m,
                                  )
                                  setStaffMembers(newMembers)
                                }}
                                placeholder="Country Director"
                              />
                            </div>
                          </div>
                          <div>
                            <Label>Bio/Description</Label>
                            <Textarea
                              value={member.bio}
                              onChange={(e) => {
                                const newMembers = staffMembers.map((m) =>
                                  m.id === member.id ? { ...m, bio: e.target.value } : m,
                                )
                                setStaffMembers(newMembers)
                              }}
                              rows={3}
                              placeholder="Brief description of their role and background..."
                            />
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeStaffMember(member.id)}
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
