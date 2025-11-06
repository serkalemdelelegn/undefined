"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter. You'll receive updates about our programs and impact.",
    })

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC]">
      <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-10 bg-cover bg-center" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/stempower_logo.png"
                alt="STEMpower Ethiopia Logo"
                width={150}
                height={50}
                className="h-10 w-auto bg-white/90 rounded px-2 py-1"
              />
            </Link>
            <p className="text-sm text-white/90 leading-relaxed">
              Empowering Ethiopian youth through science, technology, engineering, and mathematics education. Building
              the next generation of innovators and problem solvers.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20" asChild>
                <a href="https://facebook.com/stempowerethiopia" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20" asChild>
                <a href="https://twitter.com/stempowereth" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20" asChild>
                <a href="https://instagram.com/stempowerethiopia" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20" asChild>
                <a href="https://youtube.com/@stempowerethiopia" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20" asChild>
                <a href="https://linkedin.com/company/stempower-ethiopia" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/programs" className="text-sm text-white/80 hover:text-white transition-colors">
                Programs
              </Link>
              <Link href="/stem-centers" className="text-sm text-white/80 hover:text-white transition-colors">
                STEM Centers
              </Link>
              <Link href="/stem-tv" className="text-sm text-white/80 hover:text-white transition-colors">
                STEM-TV
              </Link>
              <Link href="/latest" className="text-sm text-white/80 hover:text-white transition-colors">
                News & Events
              </Link>
              <Link href="/donate" className="text-sm text-white/80 hover:text-white transition-colors">
                Donate
              </Link>
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Programs</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/programs/stem-operations"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                STEM Operations
              </Link>
              <Link href="/programs/fablab" className="text-sm text-white/80 hover:text-white transition-colors">
                FabLab
              </Link>
              <Link
                href="/programs/entrepreneurship"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Entrepreneurship & Incubation
              </Link>
              <Link
                href="/programs/stem-operations/science-fairs"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Science Fairs
              </Link>
              <Link href="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm text-white/90">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Addis+Ababa+Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Addis Ababa, Ethiopia
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/90">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@stempowerethiopia.org" className="hover:text-white transition-colors">
                  info@stempowerethiopia.org
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/90">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+251911234567" className="hover:text-white transition-colors">
                  +251 91 123 4567
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-white">Subscribe to our newsletter</p>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="h-9 text-sm bg-white/90 border-white/20 placeholder:text-gray-500"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                <Button
                  size="sm"
                  className="h-9 bg-white text-[#367375] hover:bg-white/90 font-semibold"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/90">
            © {new Date().getFullYear()} STEMpower Ethiopia. All rights reserved. | Empowering the next generation
            through STEM education.
          </p>
          <div className="mt-2 flex items-center justify-center text-xs text-white/80">
  Developed by{" "}
  <Link href="https://cassiopeiatech.org/" className="ml-1 font-semibold text-white hover:underline">
    Cassiopeia Tech
  </Link>
</div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
