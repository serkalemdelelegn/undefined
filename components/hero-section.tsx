"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

const heroSlides = [
  {
    image: "/ethiopian-students-working-with-advanced-science-e.jpg",
    title: "Inside Every Child is a Scientist",
    subtitle: "Nurture that Scientist, You Will Change the World",
    description:
      "STEMpower Ethiopia is transforming education nationwide through hands-on STEM learning. With 61+ centers, we're empowering over 100,000 students to become innovators and leaders shaping Ethiopia's future.",
    stats: { centers: "61+", students: "100K+", regions: "11+" },
  },
  {
    image: "/young-ethiopian-entrepreneurs-working-in-modern-fa.jpg",
    title: "Innovation Through Making",
    subtitle: "Where Ideas Become Reality",
    description:
      "Our FabLabs are innovation hubs equipped with 3D printers, laser cutters, and robotics tools. Students transform creative ideas into tangible solutions, developing entrepreneurial skills and technical expertise.",
    stats: { fablabs: "25+", projects: "1000+", innovations: "Growing" },
  },
  {
    image: "/ethiopian-students-celebrating-at-national-science.jpg",
    title: "Science at Its Finest",
    subtitle: "Recognizing Young Talent Nationwide",
    description:
      "Through 155+ science fairs, we celebrate curiosity, creativity, and innovation. Over 7,000 students showcase projects tackling Ethiopia’s challenges in energy, agriculture, and healthcare.",
    stats: { fairs: "155+", participants: "7K+", awards: "Hundreds" },
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length),
      7000
    )
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative min-h-[65vh] lg:min-h-[480px] overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
      <div className="absolute top-12 left-6 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-12 right-6 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10 py-8 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="flex-1 text-white space-y-5 lg:space-y-6">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 border-white/30 backdrop-blur-sm text-sm lg:text-base font-semibold shadow-sm">
              <Sparkles className="h-3 w-3 lg:h-4" />
              {slide.subtitle}
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-snug">{slide.title}</h1>

            {/* Description */}
            <p className="text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed">
              {slide.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-8 pt-2">
              {Object.entries(slide.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-xl lg:text-3xl font-bold">{value}</div>
                  <div className="text-sm lg:text-base text-white/80 capitalize font-medium">{key}</div>
                </div>
              ))}
            </div>
          </div>

        {/* Image Section */}
        <div className="flex-1 relative w-full aspect-video sm:aspect-[4/3] lg:h-[420px] min-h-[250px] flex items-center justify-center">
          {heroSlides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1000 ${
                i === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="h-full w-full rounded-2xl overflow-hidden shadow-xl border border-white/20">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur border shadow-md hover:shadow-lg transition-all hover:scale-110 z-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur border shadow-md hover:shadow-lg transition-all hover:scale-110 z-20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "bg-white shadow-md scale-125"
                : "bg-white/50 hover:bg-white/70 hover:scale-110"
            }`}
          />
        ))}
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
