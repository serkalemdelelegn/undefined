"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Plus } from "lucide-react"
import Link from "next/link"

interface NavItem {
  id: string
  label: string
  type: "static" | "dynamic"
  url: string
  children?: NavItem[]
}

export default function HeaderManagementPage() {
  const [navItems] = useState<NavItem[]>([
    { id: "1", label: "Home", type: "static", url: "/" },
    {
      id: "2",
      label: "About Us",
      type: "static",
      url: "/about",
      children: [
        { id: "2-1", label: "About STEMPower", type: "static", url: "/about/about-STEMPower" },
        { id: "2-2", label: "Staff Members", type: "static", url: "/about/staff" },
      ],
    },
    {
      id: "3",
      label: "Programs",
      type: "static",
      url: "/programs",
      children: [
        { id: "3-1", label: "STEM Operations", type: "static", url: "/programs/stem-operations" },
        { id: "3-2", label: "FabLab", type: "static", url: "/programs/fablab" },
        { id: "3-3", label: "Entrepreneurship", type: "static", url: "/programs/entrepreneurship" },
      ],
    },
    {
      id: "4",
      label: "Latest",
      type: "static",
      url: "/latest",
      children: [
        { id: "4-1", label: "Newsletter", type: "static", url: "/latest/news/newsletter" },
        { id: "4-2", label: "Events", type: "static", url: "/events" },
        { id: "4-3", label: "Announcements", type: "static", url: "/announcements" },
      ],
    },
    { id: "5", label: "Contact Us", type: "static", url: "/contact" },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Header Navigation</h1>
          <p className="text-gray-600 mt-2">View existing navigation structure and manage dynamic pages</p>
        </div>
        <Link href="/admin/pages">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Dynamic Page
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Navigation Structure</CardTitle>
          <CardDescription>
            Static pages are part of the core website structure. Dynamic pages can be created and managed from the
            Dynamic Pages section.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {navItems.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-lg">{item.label}</h3>
                    <Badge variant={item.type === "static" ? "secondary" : "default"}>
                      {item.type === "static" ? "Static" : "Dynamic"}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mb-2">{item.url}</p>
                {item.children && item.children.length > 0 && (
                  <div className="ml-4 mt-3 space-y-2 border-l-2 border-gray-200 pl-4">
                    {item.children.map((child) => (
                      <div key={child.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{child.label}</span>
                          <Badge variant="outline" className="text-xs">
                            {child.type}
                          </Badge>
                        </div>
                        <span className="text-xs text-gray-500">{child.url}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">About Dynamic Pages</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-800">
          <p className="mb-3">
            Dynamic pages allow you to create new pages without coding. When you create a dynamic page, it will
            automatically be added to the header navigation.
          </p>
          <p className="mb-3">Features of dynamic pages:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Customizable hero sections with images and CTAs</li>
            <li>Flexible content sections (text, images, cards, statistics)</li>
            <li>SEO-friendly with meta tags and descriptions</li>
            <li>Responsive layouts that work on all devices</li>
            <li>Automatically linked in the header navigation</li>
          </ul>
          <div className="mt-4">
            <Link href="/admin/pages">
              <Button>Go to Dynamic Pages</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
