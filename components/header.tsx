"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Languages, Volume2, VolumeX } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useApp } from "@/lib/app-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const [isLatestOpen, setIsLatestOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const { selectedLanguage, setSelectedLanguage, isSpeaking, handleVoiceReader } = useApp()
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isMobileLanguageDropdownOpen, setIsMobileLanguageDropdownOpen] = useState(false)
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const mobileLanguageDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
      if (mobileLanguageDropdownRef.current && !mobileLanguageDropdownRef.current.contains(event.target as Node)) {
        setIsMobileLanguageDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (lang: "en" | "am") => {
    setSelectedLanguage(lang)
    setIsLanguageDropdownOpen(false)
    setIsMobileLanguageDropdownOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full transition-all border-b border-border bg-white/60 backdrop-blur-lg supports-[backdrop-filter]:bg-white/50">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 pl-10">
            
              <Image
                src="/stempower_logo.png"
                alt="STEMpower Ethiopia Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-4">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:scale-105 hover:text-white text-foreground">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 rounded-lg hover:scale-105 transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white data-[state=open]:bg-gradient-to-r data-[state=open]:from-[#367375] data-[state=open]:to-[#24C3BC] data-[state=open]:text-white text-foreground bg-transparent">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px]">
                      <Link
                        href="/about/about-STEMPower"
                        className="block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105 border border-border"
                      >
                        <div className="text-base font-semibold text-primary border-b border-primary/20 pb-1">About STEMPower</div>
                        <p className="line-clamp-2 text-sm leading-snug opacity-80">
                        Mission, Vision, and Core Values

                        </p>
                      </Link>

                      <Link
                        href="/about/members"
                        className="block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105 border border-border"
                      >
                        <div className="text-base font-semibold text-primary border-b border-primary/20 pb-1">STEMPower Members</div>
                        <p className="line-clamp-2 text-sm leading-snug opacity-80">
                          Meet the dedicated team behind STEMpower Ethiopia
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 rounded-lg hover:scale-105 transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white data-[state=open]:bg-gradient-to-r data-[state=open]:from-[#367375] data-[state=open]:to-[#24C3BC] data-[state=open]:text-white text-foreground bg-transparent">
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-4 p-6 md:w-[600px] lg:w-[650px] lg:grid-cols-3">
                      {/* STEM Operations */}
                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-primary border-b border-primary/20 pb-1">
                          STEM Operations
                        </h3>
                        <div className="space-y-1">
                          <Link
                            href="/programs/stem-operations/stem-centers"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">STEM Centers</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">61 centers across Ethiopia</p>
                          </Link>
                          <Link
                            href="/programs/stem-operations/science-fairs"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">Science Fairs</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">
                              National competitions & exhibitions
                            </p>
                          </Link>
                          <Link
                            href="/programs/stem-operations/university-outreach"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">University STEM Outreach</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">
                              Higher education partnerships
                            </p>
                          </Link>
                          <Link
                            href="/programs/stem-operations/stem-tv"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">STEM TV</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">Educational video content</p>
                          </Link>
                        </div>
                      </div>

                      {/* FabLab */}
                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-primary border-b border-primary/20 pb-1">FabLab</h3>
                        <div className="space-y-1">
                          <Link
                            href="/programs/fablab/maker-space"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">Maker Space</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">Creative fabrication labs</p>
                          </Link>
                          <Link
                            href="/programs/fablab/training-consultancy"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">Training & Consultancy</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">
                              Professional development services
                            </p>
                          </Link>
                          <Link
                            href="/programs/fablab/products"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">Fablab Products</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">Products and kits</p>
                          </Link>
                          <Link
                            href="/programs/fablab/services"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">Fablab services</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">
                              Advanced fabrication equipment
                            </p>
                          </Link>
                        </div>
                      </div>

                      {/* Entrepreneurship & Incubation */}
                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-primary border-b border-primary/20 pb-1">
                          Entrepreneurship & Incubation
                        </h3>
                        <div className="space-y-1">
                          <Link
                            href="/programs/entrepreneurship/business-development"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">Business Development Services (BDS)</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">Startup support & mentorship</p>
                          </Link>
                          <Link
                            href="/programs/entrepreneurship/incubation"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">Incubation</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">
                              Early-stage business incubation
                            </p>
                          </Link>
                          <Link
                            href="/programs/entrepreneurship/digital-skills"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">Digital Skills</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">
                              Technology & digital literacy
                            </p>
                          </Link>
                          <Link
                            href="/programs/entrepreneurship/soft-skills"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">Soft Skills</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">
                              Leadership & communication training
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 rounded-lg hover:scale-105 transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white data-[state=open]:bg-gradient-to-r data-[state=open]:from-[#367375] data-[state=open]:to-[#24C3BC] data-[state=open]:text-white text-foreground bg-transparent">
                    Latest
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[450px] lg:grid-cols-2">
                      {/* News - with sub-items */}
                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-primary border-b border-primary/20 pb-1">News</h3>
                        <div className="space-y-1">
                          <Link
                            href="/latest/news/newsletter"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">Newsletter</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">Monthly updates & insights</p>
                          </Link>
                          <Link
                            href="/latest/news/social-media"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105"
                          >
                            <div className="text-sm font-medium leading-none">Social Media Posts</div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">Latest social updates</p>
                          </Link>
                          <Link
                            href="/latest/news/others-talking-about-stempower"
                            className="block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105 border border-border"
                          >
                            <div className="text-sm font-medium leading-none">
                              Others talking about STEMpower Ethiopia
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug opacity-80">Media coverage & mentions</p>
                          </Link>
                        </div>
                      </div>

                      {/* Events and Announcements - as direct links */}
                      <div className="space-y-3">
                        <Link
                          href="/latest/events"
                          className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105 border border-border"
                        >
                          <div className="text-base font-semibold text-primary border-b border-primary/20 pb-1">Events</div>
                          <p className="line-clamp-2 text-sm leading-snug opacity-80">
                            Calendar & highlights of upcoming events
                          </p>
                        </Link>

                        <Link
                          href="/latest/announcements"
                          className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:text-white hover:scale-105 border border-border"
                        >
                          <div className="text-base font-semibold text-primary border-b border-primary/20 pb-1">Announcements</div>
                          <p className="line-clamp-2 text-sm leading-snug opacity-80">
                            Official updates & opportunities
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] focus:bg-gradient-to-r focus:from-[#367375] focus:to-[#24C3BC] focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:scale-105 hover:text-white text-foreground">
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              className="hidden lg:flex bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0"
              asChild
            >
              <Link href="/donate">Donate</Link>
            </Button>

            <div className="hidden lg:flex flex-col gap-1">
              <div className="relative" ref={languageDropdownRef}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-lg hover:scale-110 transition-all group bg-transparent border-0 shadow-none"
                  onClick={() => {
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                    console.log("[v0] Language dropdown toggled:", !isLanguageDropdownOpen)
                  }}
                >
                  <Languages className="h-4 w-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-[#367375] group-hover:to-[#24C3BC] group-hover:bg-clip-text group-hover:text-transparent transition-all" />
                  <span className="sr-only">Switch Language</span>
                </Button>

                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-32 bg-white border-2 border-gray-300 rounded-lg shadow-2xl z-[9999] p-2">
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className={`w-full flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-md p-3 ${
                        selectedLanguage === "en"
                          ? "bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white shadow-lg scale-105"
                          : "hover:scale-105 hover:shadow-md hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-base">🇺🇸</span>
                      <span
                        className={`text-sm font-medium ${selectedLanguage === "en" ? "text-white" : "text-foreground"}`}
                      >
                        EN
                      </span>
                    </button>
                    <button
                      onClick={() => handleLanguageChange("am")}
                      className={`w-full flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-md p-3 mt-1 ${
                        selectedLanguage === "am"
                          ? "bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white shadow-lg scale-105"
                          : "hover:scale-105 hover:shadow-md hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-base">🇪🇹</span>
                      <span
                        className={`text-sm font-medium ${selectedLanguage === "am" ? "text-white" : "text-foreground"}`}
                      >
                        AM
                      </span>
                    </button>
                  </div>
                )}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleVoiceReader}
                className={`h-8 w-8 rounded-lg transition-all hover:scale-110 group bg-transparent border-0 shadow-none ${
                  isSpeaking ? "bg-gradient-to-r from-[#367375] to-[#24C3BC]" : ""
                }`}
              >
                {isSpeaking ? (
                  <VolumeX className="h-4 w-4 text-white" />
                ) : (
                  <Volume2 className="h-4 w-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-[#367375] group-hover:to-[#24C3BC] group-hover:bg-clip-text group-hover:text-transparent transition-all" />
                )}
                <span className="sr-only">{isSpeaking ? "Stop Reading" : "Read Page"}</span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t py-6 bg-white/95 backdrop-blur-md max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white rounded-lg transition-colors"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white rounded-lg transition-colors"
                >
                  About Us
                  <ChevronDown className={`h-4 w-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`} />
                </button>
                {isAboutOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-border pl-4">
                    <Link
                      href="/about/about-STEMPower"
                      className="block px-4 py-2 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                    >
                      About STEMPower
                    </Link>
                    <Link
                      href="/about/members"
                      className="block px-4 py-2 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                    >
                      STEMPower Members
                    </Link>
                  </div>
                )}
              </div>

              {/* Programs Dropdown */}
              <div>
                <button
                  onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white rounded-lg transition-colors"
                >
                  Programs
                  <ChevronDown className={`h-4 w-4 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} />
                </button>
                {isProgramsOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-border pl-4">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide">STEM Operations</p>
                      <Link
                        href="/programs/stem-operations/stem-centers"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        STEM Centers
                      </Link>
                      <Link
                        href="/programs/stem-operations/science-fairs"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Science Fairs
                      </Link>
                      <Link
                        href="/programs/stem-operations/university-outreach"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        University Outreach
                      </Link>
                      <Link
                        href="/programs/stem-operations/stem-tv"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        STEM TV
                      </Link>
                    </div>
                    <div className="space-y-1 pt-2">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide">FabLab</p>
                      <Link
                        href="/programs/fablab/maker-space"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Maker Space
                      </Link>
                      <Link
                        href="/programs/fablab/training-consultancy"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Training & Consultancy
                      </Link>
                      <Link
                        href="/programs/fablab/products"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Fablab Products
                      </Link>
                      <Link
                        href="/programs/fablab/services"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Fablab services
                      </Link>
                    </div>
                    <div className="space-y-1 pt-2">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Entrepreneurship</p>
                      <Link
                        href="/programs/entrepreneurship/business-development"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Business Development
                      </Link>
                      <Link
                        href="/programs/entrepreneurship/incubation"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Incubation
                      </Link>
                      <Link
                        href="/programs/entrepreneurship/digital-skills"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Digital Skills
                      </Link>
                      <Link
                        href="/programs/entrepreneurship/soft-skills"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Soft Skills
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Latest Dropdown */}
              <div>
                <button
                  onClick={() => setIsLatestOpen(!isLatestOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white rounded-lg transition-colors"
                >
                  Latest
                  <ChevronDown className={`h-4 w-4 transition-transform ${isLatestOpen ? "rotate-180" : ""}`} />
                </button>
                {isLatestOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-border pl-4">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide">News</p>
                      <Link
                        href="/latest/news/newsletter"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Newsletter
                      </Link>
                      <Link
                        href="/latest/news/social-media"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Social Media Posts
                      </Link>
                      <Link
                        href="/latest/news/others-talking-about-stempower"
                        className="block px-2 py-1 text-sm text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Others talking about STEMpower Ethiopia
                      </Link>
                    </div>
                    <div className="space-y-1 pt-2">
                      <Link
                        href="/latest/events"
                        className="block px-2 py-1 text-sm font-medium text-foreground hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Events
                      </Link>
                    </div>
                    <div className="space-y-1 pt-2">
                      <Link
                        href="/latest/announcements"
                        className="block px-2 py-1 text-sm font-medium text-foreground hover:text-white hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] rounded-lg"
                      >
                        Announcements
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-[#367375] hover:to-[#24C3BC] hover:text-white rounded-lg transition-colors"
              >
                Contact Us
              </Link>
              <div className="px-4 pt-4">
                <Button
                  className="w-full bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#367375]/90 hover:to-[#24C3BC]/90 text-white font-semibold"
                  asChild
                >
                  <Link href="/donate">Donate</Link>
                </Button>
              </div>

              <div className="px-4 pt-2">
                <div className="relative" ref={mobileLanguageDropdownRef}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-full h-12 flex items-center justify-center rounded-lg transition-all hover:scale-105 bg-transparent border border-border group"
                    onClick={() => {
                      setIsMobileLanguageDropdownOpen(!isMobileLanguageDropdownOpen)
                      console.log("[v0] Mobile language dropdown toggled:", !isMobileLanguageDropdownOpen)
                    }}
                  >
                    <Languages className="h-6 w-6 text-foreground group-hover:bg-gradient-to-r group-hover:from-[#367375] group-hover:to-[#24C3BC] group-hover:bg-clip-text group-hover:text-transparent transition-all" />
                    <span className="sr-only">Switch Language</span>
                  </Button>

                  {isMobileLanguageDropdownOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-32 bg-white border-2 border-gray-300 rounded-lg shadow-2xl z-[9999] p-2">
                      <button
                        onClick={() => handleLanguageChange("en")}
                        className={`w-full flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-md p-3 ${
                          selectedLanguage === "en"
                            ? "bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white shadow-lg scale-105"
                            : "hover:scale-105 hover:shadow-md hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-base">🇺🇸</span>
                        <span
                          className={`text-sm font-medium ${selectedLanguage === "en" ? "text-white" : "text-foreground"}`}
                        >
                          EN
                        </span>
                      </button>
                      <button
                        onClick={() => handleLanguageChange("am")}
                        className={`w-full flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-md p-3 mt-1 ${
                          selectedLanguage === "am"
                            ? "bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white shadow-lg scale-105"
                            : "hover:scale-105 hover:shadow-md hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-base">🇪🇹</span>
                        <span
                          className={`text-sm font-medium ${selectedLanguage === "am" ? "text-white" : "text-foreground"}`}
                        >
                          AM
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="px-4 pt-2">
                <Button
                  variant="ghost"
                  onClick={handleVoiceReader}
                  className={`w-full h-12 flex items-center justify-center gap-2 rounded-lg transition-all hover:scale-105 border border-border group ${
                    isSpeaking ? "bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white" : "bg-transparent"
                  }`}
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="h-6 w-6 text-white" />
                      <span className="text-sm font-medium text-white">Stop Reading</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-6 w-6 text-foreground group-hover:bg-gradient-to-r group-hover:from-[#367375] group-hover:to-[#24C3BC] group-hover:bg-clip-text group-hover:text-transparent transition-all" />
                      <span className="text-sm font-medium text-foreground group-hover:bg-gradient-to-r group-hover:from-[#367375] group-hover:to-[#24C3BC] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        Read Page
                      </span>
                    </>
                  )}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
