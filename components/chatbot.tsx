"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"
import { useApp } from "@/lib/app-context"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your STEMpower Ethiopia assistant. How can I help you learn about our programs, FabLabs, or STEM initiatives today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatPanelRef = useRef<HTMLDivElement>(null)
  const { selectedLanguage } = useApp()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && chatPanelRef.current && !chatPanelRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response - Replace this with your actual backend API call
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message! This is a demo response. Connect me to your backend to provide real answers about STEMpower Ethiopia programs.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "What programs do you offer?",
    "Tell me about FabLabs",
    "How can I get involved?",
    "Where are your centers located?",
  ]

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    inputRef.current?.focus()
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#367375]/90 hover:to-[#24C3BC]/90"
          aria-label="Open chat"
        >
          <MessageCircle className="h-7 w-7 text-white animate-pulse" />
        </Button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div
          ref={chatPanelRef}
          className="fixed bottom-13 right-6 w-[380px] max-h-[calc(100vh-6rem)] h-[calc(100vh-6rem)] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-gray-200 animate-in slide-in-from-bottom-4 duration-300 max-[480px]:w-[calc(100vw-2rem)] max-[480px]:max-h-[calc(100vh-5rem)] max-[480px]:h-[calc(100vh-6rem)] max-[480px]:bottom-13 max-[480px]:right-4"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#367375] to-[#24C3BC] p-3 flex items-center justify-between shadow-lg flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">STEMpower Assistant</h3>
                <p className="text-white/90 text-sm flex items-center gap-1">
                  <span className="h-2 w-2 bg-green-300 rounded-full animate-pulse" />
                  Online now
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-9 w-9 text-white hover:bg-white/20 rounded-full transition-all hover:rotate-90 duration-300"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages Area - Increased padding and improved scrolling */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white min-h-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-5 py-3.5 shadow-md ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-[#367375] to-[#24C3BC] text-white rounded-br-sm"
                      : "bg-white border-2 border-gray-100 text-gray-800 rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1.5 ${message.sender === "user" ? "text-white/80" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString(selectedLanguage === "am" ? "am-ET" : "en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-white border-2 border-gray-100 rounded-2xl rounded-bl-sm px-5 py-4 shadow-md">
                  <div className="flex gap-1.5">
                    <div
                      className="w-2.5 h-2.5 bg-[#24C3BC] rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2.5 h-2.5 bg-[#24C3BC] rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2.5 h-2.5 bg-[#24C3BC] rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Questions - Improved styling and layout */}
            {messages.length === 1 && !isTyping && (
              <div className="space-y-3 pt-2">
                <p className="text-sm font-medium text-gray-600 text-center">Quick questions to get started:</p>
                <div className="grid grid-cols-1 gap-2.5">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-sm p-3.5 rounded-xl border-2 border-gray-200 bg-white hover:bg-gradient-to-r hover:from-[#367375]/10 hover:to-[#24C3BC]/10 hover:border-[#24C3BC] transition-all text-left font-medium text-gray-700 hover:text-[#367375] shadow-sm hover:shadow-md"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area - Enhanced input design and spacing */}
          <div className="p-5 bg-white border-t-2 border-gray-100 shadow-lg flex-shrink-0">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={selectedLanguage === "am" ? "መልእክት ይጻፉ..." : "Type your message..."}
                className="flex-1 px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#24C3BC] focus:border-transparent text-sm bg-gray-50 placeholder:text-gray-400 transition-all"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="h-[52px] w-[52px] rounded-xl bg-gradient-to-r from-[#367375] to-[#24C3BC] hover:from-[#367375]/90 hover:to-[#24C3BC]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 shadow-lg disabled:hover:scale-100"
              >
                <Send className="h-5 w-5 text-white" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-3 font-medium">
              {selectedLanguage === "am" ? "ስለ STEMpower Ethiopia ይጠይቁ" : "Ask about STEMpower Ethiopia"}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
