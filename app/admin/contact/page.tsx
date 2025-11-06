"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Save, MapPin, Phone, Mail, Globe, Plus, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const SOCIAL_MEDIA_PLATFORMS = [
  { id: "facebook", name: "Facebook", icon: "f" },
  { id: "twitter", name: "Twitter / X", icon: "𝕏" },
  { id: "linkedin", name: "LinkedIn", icon: "in" },
  { id: "instagram", name: "Instagram", icon: "📷" },
  { id: "youtube", name: "YouTube", icon: "▶" },
  { id: "tiktok", name: "TikTok", icon: "♪" },
  { id: "whatsapp", name: "WhatsApp", icon: "💬" },
  { id: "telegram", name: "Telegram", icon: "✈" },
  { id: "github", name: "GitHub", icon: "⚙" },
  { id: "pinterest", name: "Pinterest", icon: "P" },
]

interface SocialMediaLink {
  id: string
  platform: string
  url: string
}

export default function ContactPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    address: "Addis Ababa, Ethiopia",
    addressDetails: "Bole Sub-City, Woreda 03, House No. 123",
    phone: "+251 11 123 4567",
    mobile: "+251 91 234 5678",
    email: "info@stempowerethiopia.org",
    website: "www.stempowerethiopia.org",
    officeHours: "Monday - Friday: 8:00 AM - 5:00 PM",
    mapLink: "https://maps.google.com/maps?q=Addis+Ababa",
  })

  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>([
    { id: "1", platform: "facebook", url: "facebook.com/stempowerethiopia" },
    { id: "2", platform: "twitter", url: "twitter.com/stempower_et" },
    { id: "3", platform: "linkedin", url: "linkedin.com/company/stempower-ethiopia" },
  ])

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("Contact information updated successfully!")
  }

  const addSocialMediaLink = () => {
    const newId = Date.now().toString()
    setSocialMediaLinks([...socialMediaLinks, { id: newId, platform: "", url: "" }])
  }

  const removeSocialMediaLink = (id: string) => {
    setSocialMediaLinks(socialMediaLinks.filter((link) => link.id !== id))
  }

  const updateSocialMediaLink = (id: string, field: "platform" | "url", value: string) => {
    setSocialMediaLinks(socialMediaLinks.map((link) => (link.id === id ? { ...link, [field]: value } : link)))
  }

  const getPlatformName = (platformId: string) => {
    return SOCIAL_MEDIA_PLATFORMS.find((p) => p.id === platformId)?.name || platformId
  }

  return (
    <div>
      <AdminHeader title="Contact Information" description="Manage contact details and office information" />
      <div className="p-6 max-w-4xl">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Office Information</CardTitle>
              <CardDescription>Primary contact details and location</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Address
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="addressDetails">Address Details</Label>
                <Textarea
                  id="addressDetails"
                  rows={2}
                  value={formData.addressDetails}
                  onChange={(e) => setFormData({ ...formData, addressDetails: e.target.value })}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Office Phone
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Website
                  </Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="officeHours">Office Hours</Label>
                <Input
                  id="officeHours"
                  value={formData.officeHours}
                  onChange={(e) => setFormData({ ...formData, officeHours: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Social Media</CardTitle>
                <CardDescription>Social media profiles and links</CardDescription>
              </div>
              <Button onClick={addSocialMediaLink} size="sm" className="bg-[#00BFA6] hover:bg-[#00A693]">
                <Plus className="mr-2 h-4 w-4" />
                Add Link
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialMediaLinks.length === 0 ? (
                <p className="text-sm text-gray-500">No social media links added yet.</p>
              ) : (
                socialMediaLinks.map((link) => (
                  <div key={link.id} className="flex gap-3 items-end">
                    <div className="flex-1 space-y-2">
                      <Label className="text-xs">Platform</Label>
                      <Select
                        value={link.platform}
                        onValueChange={(value) => updateSocialMediaLink(link.id, "platform", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          {SOCIAL_MEDIA_PLATFORMS.map((platform) => (
                            <SelectItem key={platform.id} value={platform.id}>
                              {platform.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-[2] space-y-2">
                      <Label className="text-xs">URL</Label>
                      <Input
                        placeholder="https://..."
                        value={link.url}
                        onChange={(e) => updateSocialMediaLink(link.id, "url", e.target.value)}
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeSocialMediaLink(link.id)}
                      className="h-10 w-10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Map Integration</CardTitle>
              <CardDescription>Google Maps link for location display</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mapLink">Map Link</Label>
                <Input
                  id="mapLink"
                  placeholder="https://maps.google.com/maps?q=..."
                  value={formData.mapLink}
                  onChange={(e) => setFormData({ ...formData, mapLink: e.target.value })}
                />
                <p className="text-xs text-gray-500">
                  Paste the Google Maps link here (e.g., https://maps.google.com/maps?q=Addis+Ababa)
                </p>
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
