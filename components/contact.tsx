"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Sparkles, Github, Linkedin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span> ✨
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about biotech, renewable energy, or just want to chat about the future of global health? I'd love
            to hear from you! 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Chat! 💬</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss innovative biotech solutions, renewable energy projects, or opportunities
                to bridge engineering and global health! Whether you're working on the next breakthrough in drug
                delivery, have ideas about sustainable healthcare, or just want to geek out about nanoparticles - let's
                connect!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">ahartz0118@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Linkedin className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-muted-foreground">linkedin.com/in/abigail-hartzell</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <div className="p-3 bg-chart-4/10 rounded-lg">
                  <Github className="text-chart-4" size={20} />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-muted-foreground">github.com/abigailhartzell</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 hover:scale-[1.02] transition-transform">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-primary" size={20} />
              <h3 className="text-lg font-semibold">Send me a message!</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="hover:scale-[1.02] transition-transform"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="hover:scale-[1.02] transition-transform"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about? 🤔"
                  className="hover:scale-[1.02] transition-transform"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or just say hi! 👋"
                  rows={5}
                  className="hover:scale-[1.02] transition-transform"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform"
              >
                <Send size={16} className="mr-2" />
                Send Message 🚀
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
