"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  FileText,
  Lightbulb,
  Newspaper,
  LogOut,
  X,
  Phone,
  Layout,
  Navigation,
  FileCode,
  MapPin,
  User,
} from "lucide-react"
import { logout } from "@/lib/auth"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navigation = [
  {
    name: "Home",
    icon: Home,
    href: "/admin/home",
  },
  {
    name: "About Us",
    href: "/admin/about",
    icon: FileText,
  },
  {
    name: "Programs",
    icon: Lightbulb,
    href: "/admin/programs",
  },
  {
    name: "Latest News",
    icon: Newspaper,
    href: "/admin/latest",
  },
  { name: "Contact Us", href: "/admin/contact", icon: Phone },
  { name: "Locations", href: "/admin/location", icon: MapPin },
  { name: "Header Navigation", href: "/admin/header", icon: Navigation },
  { name: "Footer", href: "/admin/footer", icon: Layout },
  { name: "Dynamic Pages", href: "/admin/pages", icon: FileCode },
  { name: "Account Management", href: "/admin/account", icon: Home },
  { name: "Profile", href: "/admin/profile", icon: User },
]

export function AdminSidebar({
  isCollapsed,
  setIsCollapsed,
}: { isCollapsed: boolean; setIsCollapsed: (value: boolean) => void }) {
  const pathname = usePathname()
  const [aboutOpen, setAboutOpen] = useState(true)

  return (
    <div
      className={cn(
        "flex h-screen flex-col bg-gradient-to-b from-[#367375] to-[#24C3BC] text-white transition-all duration-300",
        isCollapsed ? "w-0 overflow-hidden" : "w-64",
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/stempower-logo.png"
            alt="STEMpower Logo"
            width={50}
            height={50}
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="font-semibold text-lg leading-tight">STEMpower</h1>
            <p className="text-xs text-white/80">Admin Dashboard</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(true)}
          className="h-8 w-8 text-white hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-[#E0F7F6] hover:text-[#367375] transition-colors",
                  pathname === item.href && "bg-white/20 text-white",
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-white/10 p-3">
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-[#E0F7F6] hover:text-[#367375] transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
