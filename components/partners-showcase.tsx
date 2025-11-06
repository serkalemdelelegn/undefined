"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const partners = [
  {
    name: "Israel Partnership",
    logo: "/israel-flag-partner.jpg",
    url: "https://www.stempower.org",
  },
  {
    name: "Egg Foundation",
    logo: "/egg-foundation-logo.jpg",
    url: "https://www.stempower.org",
  },
  {
    name: "PORTA Human Capital",
    logo: "/porta-human-capital-logo.jpg",
    url: "https://portahumancapital.com",
  },
  {
    name: "Ethiopian Prison Commission",
    logo: "/ethiopian-prison-commission-logo.jpg",
    url: "https://www.stempower.org",
  },
  {
    name: "EHEMIA",
    logo: "/ehemia-logo.jpg",
    url: "https://www.stempower.org",
  },
  {
    name: "Deborah International School",
    logo: "/deborah-international-school-logo.jpg",
    url: "https://www.stempower.org",
  },
  {
    name: "Partners in Education",
    logo: "/partners-in-education-logo.jpg",
    url: "https://www.stempower.org",
  },
  {
    name: "VISA",
    logo: "/visa-logo.jpg",
    url: "https://www.visa.com",
  },
  {
    name: "Ministry of Education",
    logo: "/ethiopian-ministry-of-education-official-logo.jpg",
    url: "https://www.moe.gov.et/",
  },
  {
    name: "Addis Ababa University",
    logo: "/addis-ababa-university-official-logo.jpg",
    url: "https://www.aau.edu.et/",
  },
  {
    name: "Ethiopian Science Museum",
    logo: "/ethiopian-science-museum-logo-with-science-symbols.jpg",
    url: "https://www.stempower.org",
  },
  {
    name: "IBM SkillsBuild",
    logo: "/ibm-logo.png",
    url: "https://www.ibm.com/skillsbuild",
  },
  {
    name: "UNICEF Ethiopia",
    logo: "/unicef-logo.png",
    url: "https://www.unicef.org/ethiopia/",
  },
  {
    name: "World Bank",
    logo: "/world-bank-logo.png",
    url: "https://www.worldbank.org/",
  },
  {
    name: "African Development Bank",
    logo: "/african-development-bank-logo.jpg",
    url: "https://www.afdb.org/",
  },
  {
    name: "UNESCO",
    logo: "/unesco-logo.png",
    url: "https://www.unesco.org/",
  },
  {
    name: "Ethiopian Airlines",
    logo: "/ethiopian-airlines-logo.jpg",
    url: "https://www.ethiopianairlines.com",
  },
  {
    name: "Commercial Bank of Ethiopia",
    logo: "/commercial-bank-of-ethiopia-logo.jpg",
    url: "https://www.combanketh.et",
  },
  {
    name: "Ethio Telecom",
    logo: "/ethio-telecom-logo.jpg",
    url: "https://www.ethiotelecom.et",
  },
  {
    name: "Ethiopian Electric Power",
    logo: "/ethiopian-electric-power-logo.jpg",
    url: "https://www.eep.com.et",
  },
  {
    name: "Safaricom Ethiopia",
    logo: "/safaricom-ethiopia-logo.jpg",
    url: "https://www.safaricom.et",
  },
  {
    name: "Microsoft",
    logo: "/microsoft-logo.png",
    url: "https://www.microsoft.com",
  },
  {
    name: "Google for Education",
    logo: "/google-for-education-logo.jpg",
    url: "https://edu.google.com",
  },
  {
    name: "Intel",
    logo: "/intel-logo.png",
    url: "https://www.intel.com",
  },
]

export function PartnersShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const itemsPerView = 6

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / itemsPerView))
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / itemsPerView))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Math.ceil(partners.length / itemsPerView)) % Math.ceil(partners.length / itemsPerView),
    )
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const visiblePartners = partners.slice(currentIndex * itemsPerView, (currentIndex + 1) * itemsPerView)

  return (
    <section className="py-1 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center text-balance text-[#367375]">
  Our Partners
</h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We collaborate with leading organizations, institutions, and companies to bring world-class STEM education
            to Ethiopian students across the nation.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(partners.length / itemsPerView) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
                    {partners
                      .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                      .map((partner, index) => (
                        <a
                          key={index}
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group transition-all duration-300 hover:scale-105"
                          onMouseEnter={() => setIsAutoPlaying(false)}
                          onMouseLeave={() => setIsAutoPlaying(true)}
                        >
                          <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 h-28 flex items-center justify-center">
                            <img
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              className="w-full h-full object-contain transition-all duration-300"
                              title={partner.name}
                            />
                          </div>
                        </a>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/95 backdrop-blur-sm shadow-lg hover:bg-background z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/95 backdrop-blur-sm shadow-lg hover:bg-background z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(partners.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">Interested in partnering with STEMpower Ethiopia?</p>
          <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-all  bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
            <a href="/contact">Become a Partner</a>
          </Button> <br /> <br /><br />

        </div>
      </div>
    </section>
  )
}
