"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Coffee, Lightbulb, Target, Rocket, Sparkles, Zap } from "lucide-react"

export function SkillsShowcase() {
  const [activeSkill, setActiveSkill] = useState(0)

  const skillCategories = [
    {
      icon: Code,
      title: "Technical Skills",
      skills: ["Python", "SQL", "MATLAB", "Machine Learning", "Data Analysis", "Process Optimization"],
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      skills: ["Problem Solving", "Creative Thinking", "R&D", "Prototyping", "System Design", "Tech Strategy"],
    },
    {
      icon: Users,
      title: "Leadership",
      skills: [
        "Team Building",
        "Mentoring",
        "Community Organizing",
        "Public Speaking",
        "Project Management",
        "Collaboration",
      ],
    },
    {
      icon: Target,
      title: "Impact Focus",
      skills: [
        "Global Health",
        "Sustainability",
        "Biotech Innovation",
        "Social Impact",
        "Healthcare Tech",
        "Clean Energy",
      ],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skillCategories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-10 left-10 animate-pulse" style={{ animationDelay: "0s" }}>
        <Sparkles className="text-primary/15" size={32} />
      </div>
      <div className="absolute top-1/4 right-20 animate-bounce" style={{ animationDelay: "1s" }}>
        <Zap className="text-accent/20" size={28} />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-spin" style={{ animationDuration: "12s" }}>
        <Code className="text-chart-4/15" size={36} />
      </div>
      <div className="absolute bottom-10 right-10 animate-pulse" style={{ animationDelay: "2s" }}>
        <Rocket className="text-primary/20" size={30} />
      </div>
      <div
        className="absolute top-1/2 left-1/3 animate-bounce"
        style={{ animationDelay: "3s", animationDuration: "4s" }}
      >
        <Lightbulb className="text-yellow-500/15" size={24} />
      </div>
      <div className="absolute top-20 right-1/3 animate-pulse" style={{ animationDelay: "1.5s" }}>
        <Target className="text-purple-500/15" size={26} />
      </div>
      <div
        className="absolute bottom-1/3 right-1/4 animate-spin"
        style={{ animationDuration: "20s", animationDelay: "2.5s" }}
      >
        <Users className="text-green-500/15" size={28} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I Bring to the <span className="text-gradient">Table</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A unique blend of technical expertise, creative problem-solving, and genuine passion for making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const isActive = index === activeSkill

            const colorSchemes = [
              { text: "text-blue-500", border: "border-blue-500/50", glow: "hover:shadow-blue-500/20" },
              { text: "text-purple-500", border: "border-purple-500/50", glow: "hover:shadow-purple-500/20" },
              { text: "text-green-500", border: "border-green-500/50", glow: "hover:shadow-green-500/20" },
              { text: "text-orange-500", border: "border-orange-500/50", glow: "hover:shadow-orange-500/20" },
            ]
            const colorScheme = colorSchemes[index]

            return (
              <Card
                key={category.title}
                className={`p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-lg bg-background/50 backdrop-blur-sm border-2 ${colorScheme.border} ${colorScheme.glow} hover:shadow-xl ${
                  isActive ? `ring-2 ring-current shadow-lg scale-102 ${colorScheme.glow}` : ""
                }`}
                onClick={() => setActiveSkill(index)}
              >
                <div
                  className={`p-4 bg-muted/50 rounded-xl w-fit mx-auto mb-4 transition-all duration-300 ${
                    isActive ? "scale-110" : "hover:scale-105"
                  }`}
                >
                  <Icon className={`${colorScheme.text} transition-all duration-300`} size={32} />
                </div>
                <h3 className={`font-bold text-center mb-4 text-lg ${colorScheme.text}`}>{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.slice(0, 3).map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`text-xs transition-all duration-300 hover:scale-105 ${colorScheme.text} ${colorScheme.border} ${
                        isActive ? "bg-current/10 border-current/50" : ""
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Coffee className="text-primary animate-bounce" size={24} />
            <span className="text-lg font-bold">Always ready to tackle the next challenge!</span>
            <Rocket className="text-accent animate-pulse" size={24} />
          </div>
          <p className="text-muted-foreground text-lg">
            Whether it's debugging complex systems, mentoring junior engineers, or brainstorming the next big innovation
          </p>
        </div>
      </div>
    </section>
  )
}
