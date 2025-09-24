"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Zap, Lightbulb, Settings } from "lucide-react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])
  const [currentTrait, setCurrentTrait] = useState(0)

  const traits = [
    { icon: Settings, text: "Engineer", color: "text-blue-400" }, // Changed to Settings icon for outlined gear
    { icon: Lightbulb, text: "Innovator", color: "text-yellow-400" },
    { icon: Zap, text: "Problem Solver", color: "text-purple-400" },
    {
      icon: () => <span className="text-orange-400 font-mono text-2xl">&lt;&gt;</span>,
      text: "Tech Architect",
      color: "text-orange-400",
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 3,
      }))
      setSparkles(newSparkles)
    }

    generateSparkles()
    const interval = setInterval(generateSparkles, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrait((prev) => (prev + 1) % traits.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = traits[currentTrait].icon

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.65 0.15 200 / 0.1), transparent 40%)`,
        }}
      />

      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-pulse"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: "2s",
          }}
        >
          <Sparkles className="text-primary/30" size={16} />
        </div>
      ))}

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="text-gradient">Abigail Hartzell</span>
              <span className="inline-block animate-bounce ml-4">🚀</span>
            </h1>
            <div className="flex items-center justify-center space-x-3">
              <CurrentIcon className={`${traits[currentTrait].color} transition-all duration-500`} size={32} />
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                <span className={`${traits[currentTrait].color} transition-all duration-500`}>
                  {traits[currentTrait].text}
                </span>
              </h2>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From coding innovative solutions to engineering breakthrough systems, I'm constantly exploring how
            cutting-edge tech can solve real-world problems. Whether I'm diving into the latest frameworks, contributing
            to open-source projects, or mentoring fellow engineers, I enjoy utilizing technology to create positive
            change and build stronger communities.
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Python", "Machine Learning", "Biotech", "Open Source", "Mentoring"].map((skill, index) => (
              <div
                key={skill}
                className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-all hover:scale-105 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow hover:scale-105 transition-transform"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Zap className="mr-2" size={18} />
              See My Impact
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-transform bg-transparent"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More About Me
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 pt-8">
            <a
              href="https://github.com/abigailhartzell"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abigail-hartzell/"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ahartz0118@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  )
}
