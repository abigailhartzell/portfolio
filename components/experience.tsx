import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Rocket, Code2, Sparkles, ChevronDown } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      period: "Mar 2025 — Present",
      title: "Senior Staff Engineer",
      company: "Invenergy LLC",
      description:
        "Leading the design for multiple HVAC transmission line projects across the US! 🇺🇸 Focusing on executing projects efficiently and preparing for reliable operation through strategic design, modeling, and process optimization. Contributing to the global energy transition while strengthening analytical skills for future biotech challenges! ⚡",
      technologies: [
        "HVAC Design",
        "Project Management",
        "Process Optimization",
        "Data Analysis",
        "Cross-functional Collaboration",
      ],
    },
    {
      period: "Jun 2023 — Mar 2025",
      title: "Staff Engineer",
      company: "Invenergy LLC",
      description:
        "Developed expertise in renewable energy systems and project execution. Built strong foundation in complex systems management and data-driven decision making. 🌱",
      technologies: ["Renewable Energy", "Systems Design", "Project Execution", "Data Analysis"],
    },
    {
      period: "May 2022 — Dec 2022",
      title: "Technical R&D Co-Op/Intern",
      company: "Prime Medicine, Inc.",
      description:
        "Worked with mRNA and prime editor lipid nanoparticles (LNPs)! 🧬 Collaborated with engineers and scientists to optimize SOPs and LNP formulation methods. Refined experimental procedures and improved LNP stability, contributing to enhancing consistency and efficacy of novel genetic therapies. This experience deepened my understanding of nanoparticle-based delivery systems! ✨",
      technologies: ["mRNA Technology", "Lipid Nanoparticles", "Gene Therapy", "Process Optimization", "Biotechnology"],
    },
    {
      period: "Jul 2021 — Jan 2023",
      title: "Undergraduate Student Researcher",
      company: "University of Illinois Chicago - Liu Lab",
      description:
        "Dove deep into drug delivery systems! 💊 Formulated nanoparticles through various methods and characterized formulations to understand how consistency is impacted by lipids and experimental variables. Designed and tested four 3D-printed stabilization models for micro-sized, minimally invasive drug delivery particles. This hands-on research sparked my passion for biotech! 🔬",
      technologies: ["Nanoparticle Formulation", "Drug Delivery", "3D Printing", "Research", "Characterization"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-20 right-10 animate-spin" style={{ animationDuration: "20s" }}>
        <Code2 className="text-primary/10" size={40} />
      </div>
      <div className="absolute bottom-10 left-10 animate-pulse" style={{ animationDelay: "1s" }}>
        <Rocket className="text-accent/20" size={32} />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-bounce" style={{ animationDelay: "2s" }}>
        <Zap className="text-chart-4/15" size={28} />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-pulse" style={{ animationDelay: "3s" }}>
        <Sparkles className="text-primary/15" size={24} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">A path of innovation and impact! 🌠</p>
        </div>

        <div className="relative">
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <Card className="p-8 card-hover hover:scale-[1.02] transition-transform bg-card/80 backdrop-blur-sm border-primary/10">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <p className="text-sm text-primary font-mono font-medium">{exp.period}</p>
                    </div>

                    <div className="md:col-span-3 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs hover:scale-105 transition-transform bg-background/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {index < experiences.length - 1 && (
                  <div className="flex justify-center my-3">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-px h-6 bg-gradient-to-b from-primary to-accent opacity-40"></div>
                      <div className="relative">
                        <ChevronDown
                          className="text-primary animate-bounce"
                          size={24}
                          style={{
                            animationDuration: "2s",
                            animationDelay: `${index * 0.5}s`,
                          }}
                        />
                        <div className="absolute inset-0 animate-ping">
                          <ChevronDown
                            className="text-primary/30"
                            size={24}
                            style={{
                              animationDuration: "2s",
                              animationDelay: `${index * 0.5}s`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="w-px h-6 bg-gradient-to-b from-accent to-chart-4 opacity-40"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
