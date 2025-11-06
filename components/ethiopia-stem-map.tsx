"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import { ethiopiaStemCenters, type StemCenter } from "@/lib/ethiopia-stem-centers"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export function EthiopiaStemMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<L.Map | null>(null)
  const [selectedCenter, setSelectedCenter] = useState<StemCenter | null>(null)
  const markersRef = useRef<L.Marker[]>([])

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    map.current = L.map(mapContainer.current).setView([9.145, 38.7469], 6)

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map.current)

    // Custom gradient dot using divIcon for animation
    const gradientDot = (center: StemCenter) =>
      L.marker([center.latitude, center.longitude], {
        icon: L.divIcon({
          className: "",
          html: `
            <div 
              style="
                width: 12px; 
                height: 12px; 
                border-radius: 50%; 
                background: radial-gradient(circle at center, #24C3BC, #367375);
                transition: transform 0.2s ease-in-out; 
              " 
              class="dot-marker"
            ></div>
          `,
          iconSize: [12, 12],
          iconAnchor: [6, 6],
        }),
      }).on("click", () => {
        setSelectedCenter(center)
        map.current?.setView([center.latitude, center.longitude], 10)
      })

    // Add markers to map
    ethiopiaStemCenters.forEach((center) => {
      const marker = gradientDot(center).addTo(map.current!)
      markersRef.current.push(marker)
    })

    // Add grow effect on hover
    const style = document.createElement("style")
    style.innerHTML = `
      .dot-marker:hover {
        transform: scale(1.6);
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              STEM Centers Across Ethiopia
            </div>
            <h2 className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text">
              Discover Our 61 STEM Centers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {ethiopiaStemCenters.length} hands-on STEM Centers across Ethiopia, part of STEMpower's mission to empower
              150+ centers across Sub-Saharan Africa with practical science and technology education.
            </p>
            <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-br from-[#367375] to-[#24C3BC] mt-6" />
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 relative">
            <div className="relative w-full h-96 md:h-[600px] bg-slate-100">
              <div ref={mapContainer} className="w-full h-full" />

              {!selectedCenter && (
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-muted-foreground border border-slate-200 z-40">
                  Click on any dot to view center details
                </div>
              )}
            </div>
          </div>

          {/* Popup for selected center */}
          {selectedCenter && (
            <div className="fixed top-0 left-0 right-0 flex items-start justify-center pt-8 pointer-events-none z-[9999]">
              <div className="pointer-events-auto bg-white rounded-xl shadow-2xl p-6 max-w-sm border-2 border-[#24C3BC] animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#367375] to-[#24C3BC] flex items-center justify-center">
                      <span className="text-white text-lg font-bold">📍</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">STEM Center Info</h3>
                  </div>
                  <button
                    onClick={() => setSelectedCenter(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-foreground font-medium">
                    <span className="font-bold">Host:</span> {selectedCenter.host}
                  </p>
                  <p className="text-foreground font-medium">
                    <span className="font-bold">City:</span> {selectedCenter.city}
                  </p>
                  <p className="text-foreground font-medium">
                    <span className="font-bold">Country:</span> {selectedCenter.country}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCenter(null)}
                  className="w-full px-4 py-2 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
