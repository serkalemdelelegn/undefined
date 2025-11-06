"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Users,
  CheckCircle2,
  MessageSquare,
  Info,
  Shield,
  FileText,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormSubmitted(true)
    setIsSubmitting(false)

    // Reset after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-4 py-18 md:py-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-base font-medium mb-6">
                  <MessageSquare className="h-5 w-5" />
                  Get in Touch
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                  Let's Transform STEM Education Together
                </h1>
                <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
                  Whether you're interested in partnerships, volunteering, or learning more about our programs, we're
                  here to help. Reach out and join us in empowering Ethiopia's future innovators.
                </p>
              </div>
              <div className="order-1 lg:order-2 flex justify-center relative">
                <div className="relative w-full sm:w-[90%] md:w-[95%] lg:w-[100%] aspect-[5/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/ethiopian-students-working-with-science-equipment-.jpg"
                    alt="STEMpower Ethiopia team and students"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Call Us Card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 sm:p-4 border border-emerald-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Call Us</div>
                      <div className="font-semibold text-sm sm:text-base text-black">+251 11 123 4567</div>
                    </div>
                  </div>
                </div>

                {/* Email Us Card */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 sm:p-4 border border-teal-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Email Us</div>
                      <div className="font-semibold text-xs sm:text-sm text-black">info@stempower.org</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
        </section>

        {/* Interactive Map Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold">
                  Find Us on the Map
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Visit our STEMpower Head Quarter in Addis Ababa. Click the map to get directions.
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#367375]/20 h-[500px] md:h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5234567890123!2d38.798434!3d9.0124191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8506070d9eff%3A0x601ed238bf442109!2sSTEMpower%20Inc.!5e0!3m2!1sen!2set!4v1728000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="mt-8 text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white font-semibold shadow-md hover:opacity-90 transition-all"
                  asChild
                >
                  <a
                    href="https://www.google.com/maps/place/STEMpower+Inc./@9.0124191,38.798434,17z/data=!3m1!4b1!4m6!3m5!1s0x164b8506070d9eff:0x601ed238bf442109!8m2!3d9.0124191!4d38.798434!16s%2Fg%2F11j944fnml?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section id="contact-info" className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Multiple ways to reach us. Choose what works best for you.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Visit Our Office Card */}
                <Card className="text-center hover:shadow-xl transition-all hover:scale-105 border-2 border-[#367375]/30">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="bg-gradient-to-br from-[#367375] to-[#24C3BC] bg-clip-text text-transparent text-xl font-semibold">
                      Visit Our Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Addis Ababa, Ethiopia
                      <br />
                      Bole Sub-City
                      <br />
                      Woreda 03, House No. 123
                    </p>
                    <Button
                      className="mt-4 w-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white font-semibold shadow-md hover:opacity-90 transition-all"
                      asChild
                    >
                      <a href="https://www.google.com/maps/place/STEMpower+Inc./@9.0124191,38.798434,17z/data=!3m1!4b1!4m6!3m5!1s0x164b8506070d9eff:0x601ed238bf442109!8m2!3d9.0124191!4d38.798434!16s%2Fg%2F11j944fnml?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Call Us Card */}
                <Card className="text-center hover:shadow-xl transition-all hover:scale-105 border-2 border-[#367375]/30">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="bg-gradient-to-br from-[#367375] to-[#24C3BC] bg-clip-text text-transparent text-xl font-semibold">
                      Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      <a href="tel:+251111234567" className="hover:text-[#24C3BC] transition-colors">
                        +251 11 123 4567
                      </a>
                      <br />
                      <a href="tel:+251912345678" className="hover:text-[#24C3BC] transition-colors">
                        +251 91 234 5678
                      </a>
                      <br />
                      Mon-Fri: 8:00 AM - 6:00 PM
                    </p>
                    <Button
                      className="mt-4 w-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white font-semibold shadow-md hover:opacity-90 transition-all"
                      asChild
                    >
                      <a href="tel:+251111234567">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Email Us Card */}
                <Card className="text-center hover:shadow-xl transition-all hover:scale-105 border-2 border-[#367375]/30">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="bg-gradient-to-br from-[#367375] to-[#24C3BC] bg-clip-text text-transparent text-xl font-semibold">
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      <a href="mailto:info@stempowerethiopia.org" className="hover:text-[#24C3BC] transition-colors">
                        info@stempowerethiopia.org
                      </a>
                      <br />
                      <a
                        href="mailto:programs@stempowerethiopia.org"
                        className="hover:text-[#24C3BC] transition-colors"
                      >
                        programs@stempowerethiopia.org
                      </a>
                      <br />
                      <a
                        href="mailto:partnerships@stempowerethiopia.org"
                        className="hover:text-[#24C3BC] transition-colors"
                      >
                        partnerships@stempowerethiopia.org
                      </a>
                    </p>
                    <Button
                      className="mt-4 w-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white font-semibold shadow-md hover:opacity-90 transition-all"
                      asChild
                    >
                      <a href="mailto:info@stempowerethiopia.org">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 bg-gradient-to-b from-slate-50 to-[#F8FAFA]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card className="border-2 border-[#367375]/30 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-3xl mb-2 bg-gradient-to-br from-[#367375] to-[#24C3BC] bg-clip-text text-transparent">
                        Send us a Message
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      {formSubmitted && (
                        <div className="mb-6 p-4 bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10 border-2 border-[#367375]/30 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                          <CheckCircle2 className="w-6 h-6 text-[#24C3BC] flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-[#367375] text-lg">Message Sent Successfully!</p>
                            <p className="text-sm text-muted-foreground">
                              Thank you for contacting us. We'll respond within 24 hours.
                            </p>
                          </div>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-base font-medium">
                              First Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="firstName"
                              placeholder="Abebe"
                              className="h-12 text-base border-2 border-[#367375]/30 focus:border-[#24C3BC] focus:ring-[#24C3BC]"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-base font-medium">
                              Last Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="lastName"
                              placeholder="Ayalew"
                              className="h-12 text-base border-2 border-[#367375]/30 focus:border-[#24C3BC] focus:ring-[#24C3BC]"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base font-medium">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="abebe.ayalew@example.com"
                            className="h-12 text-base border-2 border-[#367375]/30 focus:border-[#24C3BC] focus:ring-[#24C3BC]"
                            required
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+251 91 234 5678"
                            className="h-12 text-base border-2 border-[#367375]/30 focus:border-[#24C3BC] focus:ring-[#24C3BC]"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="organization" className="text-base font-medium">
                            Organization (Optional)
                          </Label>
                          <Input
                            id="organization"
                            placeholder="Your school, company, or organization"
                            className="h-12 text-base border-2 border-[#367375]/30 focus:border-[#24C3BC] focus:ring-[#24C3BC]"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-base font-medium">
                            Subject <span className="text-destructive">*</span>
                          </Label>

                          <select
                            id="subject"
                            required
                            disabled={isSubmitting}
                            value={selectedSubject}
                            onChange={(e) => setSelectedSubject(e.target.value)}
                            className="h-12 text-base border-2 border-[#367375]/30 focus:border-[#24C3BC] focus:ring-[#24C3BC] rounded-md w-full px-3 outline-none transition-all"
                          >
                            <option value="">Select a subject...</option>
                            <option value="Students Inquiry">Students Inquiry</option>
                            <option value="Partnership Proposal">Partnership Proposal</option>
                            <option value="Training Request">Training Request</option>
                            <option value="STEM Club Support">STEM Club Support</option>
                            <option value="Event Collaboration">Event Collaboration</option>
                            <option value="Other">Other</option>
                          </select>

                          {selectedSubject === "Other" && (
                            <div className="mt-3 space-y-2 animate-in fade-in slide-in-from-top-1">
                              <Label htmlFor="otherSubject" className="text-base font-medium">
                                Please specify
                              </Label>
                              <Input
                                id="otherSubject"
                                type="text"
                                placeholder="Please describe your subject..."
                                className="h-12 text-base border-2 border-[#367375]/30 focus:border-[#24C3BC] focus:ring-[#24C3BC]"
                                required
                                disabled={isSubmitting}
                              />
                            </div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-base font-medium">
                            Message <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us more about your inquiry, partnership ideas, or how you'd like to get involved..."
                            className="min-h-[150px] text-base border-2 border-[#367375]/30 focus:border-[#24C3BC] focus:ring-[#24C3BC]"
                            required
                            disabled={isSubmitting}
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting || formSubmitted}
                          className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all"
                        >
                          {formSubmitted ? (
                            <>
                              <CheckCircle2 className="w-5 h-5 mr-2" />
                              Message Sent
                            </>
                          ) : isSubmitting ? (
                            <>
                              <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>

                        <p className="text-sm text-muted-foreground text-center">
                          We typically respond within 24 hours during business days
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Office Hours */}
                  <Card className="border-2 border-[#367375]/20 hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 bg-gradient-to-br from-[#367375] to-[#24C3BC] bg-clip-text text-transparent">
                        <Clock className="h-5 w-5 text-[#24C3BC]" />
                        Office Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-[#367375]/10">
                        <span className="font-medium">Monday - Friday</span>
                        <span className="text-muted-foreground text-sm">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-[#367375]/10">
                        <span className="font-medium">Saturday</span>
                        <span className="text-muted-foreground text-sm">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium">Sunday</span>
                        <span className="text-muted-foreground text-sm">Closed</span>
                      </div>
                      <div className="pt-3 mt-3 border-t border-[#367375]/10">
                        <p className="text-xs text-muted-foreground">
                          <strong>Note:</strong> We observe Ethiopian public holidays
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Important Information */}
                  <Card className="border-2 border-[#367375]/20 hover:shadow-lg transition-all bg-gradient-to-br from-[#367375]/5 to-[#24C3BC]/10">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 bg-gradient-to-br from-[#367375] to-[#24C3BC] bg-clip-text text-transparent">
                        <Info className="h-5 w-5 text-[#24C3BC]" />
                        Important Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#367375]/10">
                        <Shield className="h-5 w-5 text-[#24C3BC] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Privacy & Security</h4>
                          <p className="text-xs text-muted-foreground">
                            Your information is secure and will only be used to respond to your inquiry.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#367375]/10">
                        <FileText className="h-5 w-5 text-[#24C3BC] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Response Time</h4>
                          <p className="text-xs text-muted-foreground">
                            We typically respond within 24 hours during business days.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#367375]/10">
                        <MessageSquare className="h-5 w-5 text-[#24C3BC] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Language Support</h4>
                          <p className="text-xs text-muted-foreground">
                            We provide support in English and Amharic for your convenience.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connect With Us */}
                  <Card className="border-2 border-[#367375]/20 hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 bg-gradient-to-br from-[#367375] to-[#24C3BC] bg-clip-text text-transparent">
                        <Users className="h-5 w-5 text-[#24C3BC]" />
                        Connect With Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Follow us on social media for daily updates, success stories, and opportunities.
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <Button
                          size="icon"
                          className="h-12 w-12 rounded-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all shadow-md"
                          asChild
                        >
                          <a
                            href="https://www.facebook.com/STEMPowerEthiopia"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                          >
                            <Facebook className="h-5 w-5" />
                          </a>
                        </Button>

                        <Button
                          size="icon"
                          className="h-12 w-12 rounded-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all shadow-md"
                          asChild
                        >
                          <a
                            href="https://www.linkedin.com/company/stempower-ethiopia"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </Button>

                        <Button
                          size="icon"
                          className="h-12 w-12 rounded-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all shadow-md"
                          asChild
                        >
                          <a
                            href="https://www.instagram.com/stempowerethiopia"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                          >
                            <Instagram className="h-5 w-5" />
                          </a>
                        </Button>

                        <Button
                          size="icon"
                          className="h-12 w-12 rounded-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all shadow-md"
                          asChild
                        >
                          <a
                            href="https://www.threads.net/@stempowerethiopia"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Threads"
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12.186 3.998c-.43.002-1.066.014-1.82.096-1.953.213-3.273.904-4.432 2.063C4.775 7.316 4.084 8.636 3.87 10.59c-.082.754-.094 1.39-.092 1.82v.18c-.002.43.01 1.066.092 1.82.214 1.953.905 3.273 2.064 4.432 1.159 1.159 2.479 1.85 4.432 2.063.754.082 1.39.094 1.82.092h.18c.43.002 1.066-.01 1.82-.092 1.953-.213 3.273-.904 4.432-2.063 1.159-1.159 1.85-2.479 2.063-4.432.082-.754.094-1.39.092-1.82v-.18c.002-.43-.01-1.066-.092-1.82-.213-1.953-.904-3.273-2.063-4.432-1.159-1.159-2.479-1.85-4.432-2.063-.754-.082-1.39-.094-1.82-.096h-.18z" />
                            </svg>
                          </a>
                        </Button>

                        <Button
                          size="icon"
                          className="h-12 w-12 rounded-full bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all shadow-md"
                          asChild
                        >
                          <a
                            href="https://www.youtube.com/@STEMPowerEthiopia"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                          >
                            <Youtube className="h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
