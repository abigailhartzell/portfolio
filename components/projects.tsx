"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Users, Lightbulb, FlaskConical, Cog, Zap, Atom, Rocket, Sparkles } from "lucide-react"

export function Projects() {
  const originalProjects = [
    {
      title: "Prime Editor LNP Optimization 🧬",
      description:
        "Collaborated with engineers and scientists at Prime Medicine to optimize mRNA and prime editor lipid nanoparticles! Refined experimental procedures and improved LNP stability, contributing to the next generation of genetic therapies. This work could revolutionize how we treat genetic diseases! ✨",
      image: "/ai-medical-diagnostic-interface-with-brain-scans.jpg",
      technologies: ["mRNA Technology", "Lipid Nanoparticles", "Gene Therapy", "Process Optimization", "Biotechnology"],
      category: "Gene Therapy",
      impact: "Enhanced LNP stability & consistency",
      icon: <Cog className="w-5 h-5" />,
    },
    {
      title: "3D-Printed Drug Delivery Systems 💊",
      description:
        "Designed and tested four innovative 3D-printed stabilization models for micro-sized, minimally invasive drug delivery particles at UIC's Liu Lab. This research explored how we can make drug delivery more precise and less invasive for patients worldwide! 🌍",
      image: "/global-health-monitoring-dashboard-with-world-map.jpg",
      technologies: ["3D Printing", "Drug Delivery", "Nanoparticle Formulation", "Research", "Biomedical Engineering"],
      category: "Drug Delivery",
      impact: "Novel minimally invasive delivery method",
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      title: "Renewable Energy Transmission ⚡",
      description:
        "Leading the design for multiple HVAC transmission line projects across the US at Invenergy! Contributing to the global energy transition through strategic design, modeling, and process optimization. Clean energy for a healthier planet! 🌱",
      image: "/telemedicine-video-call-interface-for-rural-health.jpg",
      technologies: [
        "HVAC Design",
        "Transmission Lines",
        "Process Optimization",
        "Project Management",
        "Renewable Energy",
      ],
      category: "Clean Energy",
      impact: "Multiple US transmission projects",
      icon: <Cog className="w-5 h-5" />,
    },
    {
      title: "Future Biotech Innovations 🚀",
      description:
        "Dreaming big about the intersection of sustainable energy and revolutionary healthcare! Combining my renewable energy expertise with biotech passion to envision solutions that could transform global health outcomes. The future is bright and sustainable! ✨",
      image: "/wearable-health-monitoring-device-with-solar-panel.jpg",
      technologies: ["Biotechnology", "Sustainable Energy", "Global Health", "Innovation", "R&D"],
      category: "Vision",
      impact: "Bridging energy & healthcare",
      icon: <Lightbulb className="w-5 h-5" />,
    },
  ]

  const organizations = [
    {
      title: "WRISE Chicago Chapter ⚡",
      description:
        "Serving as a Board Member for Women of Renewable Industries and Sustainable Energy (WRISE) Chicago Chapter, where I help advance women's leadership in the clean energy sector. Working to create opportunities, mentorship, and community for women driving the energy transition! 🌱",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WRISE-logo-4pXMBcPwjsQAI9HfJcW5wXeOIXw0NJ.png",
      technologies: ["Leadership", "Renewable Energy", "Women in STEM", "Board Governance", "Community Building"],
      category: "Board Member",
      impact: "Advancing women in clean energy",
      icon: <Cog className="w-5 h-5" />,
      website: "https://wrisenergy.org/",
    },
    {
      title: "Illinois Science & Technology Coalition 🎓",
      description:
        "Mentoring the next generation of STEM professionals through ISTC, where I share my engineering expertise and career insights. Passionate about guiding young innovators and helping them navigate their paths in science and technology! 🚀",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISTC-logo-8wxqUgstxvgjdGV7PsT2yjCDlA06KF.png",
      technologies: ["Mentorship", "STEM Education", "Career Development", "Innovation", "Technology"],
      category: "Mentor",
      impact: "Guiding future STEM leaders",
      icon: <Lightbulb className="w-5 h-5" />,
      website: "https://www.istcoalition.org/",
    },
    {
      title: "Women in Bio 🧬",
      description:
        "Active member of Women in Bio, attending events and connecting with fellow professionals at the intersection of biology and technology. Engaging with the biotech community to stay current on industry trends and build meaningful professional relationships! 💡",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WIB-logo-VnWS3eey2eHnO9XhwMnuNA3dageikC.png",
      technologies: ["Biotechnology", "Networking", "Professional Development", "Life Sciences", "Innovation"],
      category: "Member",
      impact: "Building biotech community",
      icon: <FlaskConical className="w-5 h-5" />,
      website: "https://www.womeninbio.org/",
    },
    {
      title: "Society of Women Engineers 👩‍💻",
      description:
        "Proud member of SWE, participating in events and initiatives that support women in engineering. Connecting with fellow engineers, sharing experiences, and contributing to a community that champions diversity and inclusion in engineering! 🤝",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SWE-logo-vMGpzPPW6I7jgIg9KMCuMluAszK2El.png",
      technologies: ["Engineering", "Professional Development", "Diversity & Inclusion", "Networking", "STEM Advocacy"],
      category: "Member",
      impact: "Supporting women engineers",
      icon: <Users className="w-5 h-5" />,
      website: "https://swe.org/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.65_0.15_200_/_0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.75_0.18_160_/_0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_60%,oklch(0.7_0.2_280_/_0.1),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_30%,oklch(0.8_0.15_60_/_0.08),transparent_45%)]" />
      </div>

      <div className="absolute top-20 left-10 float">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center pulse-glow">
          <Zap className="text-primary" size={24} />
        </div>
      </div>
      <div className="absolute top-40 right-20 float-delayed">
        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center pulse-glow">
          <FlaskConical className="text-accent" size={20} />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 float">
        <div className="w-14 h-14 bg-chart-3/20 rounded-full flex items-center justify-center pulse-glow">
          <Rocket className="text-chart-3" size={28} />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 float-delayed">
        <div className="w-8 h-8 bg-chart-4/20 rounded-full flex items-center justify-center pulse-glow">
          <Sparkles className="text-chart-4" size={18} />
        </div>
      </div>
      <div className="absolute top-1/2 right-1/4 float">
        <div className="w-11 h-11 bg-chart-5/20 rounded-full flex items-center justify-center pulse-glow">
          <Atom className="text-chart-5" size={22} />
        </div>
      </div>
      <div className="absolute top-1/4 left-1/3 float-delayed">
        <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center pulse-glow">
          <Users className="text-primary" size={20} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Impact</span> 🌟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building community and advancing innovation through leadership and mentorship! 🌍
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* {originalProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-hover group hover:scale-[1.02] transition-all duration-300 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/30"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground flex items-center gap-2">
                    {project.icon}
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent font-medium">🎯 {project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 hover:scale-105 transition-transform"
                    onClick={() => window.open("https://www.linkedin.com/in/abigail-hartzell/", "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    Learn More
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent hover:scale-105 transition-transform"
                    onClick={() => window.open(project.website, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))} */}
          {organizations.map((org, index) => (
            <Card
              key={index}
              className="overflow-hidden card-hover group bg-card/60 backdrop-blur-md border-2 border-border/50"
            >
              <div className="aspect-video bg-muted/50 relative overflow-hidden">
                <img
                  src={org.image || "/placeholder.svg"}
                  alt={org.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground flex items-center gap-2 glow">
                    {org.icon}
                    {org.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{org.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{org.description}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent font-medium">🎯 {org.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {org.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs tile-hover bg-secondary/60 backdrop-blur-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 glow hover:scale-105 transition-all duration-300"
                    onClick={() => window.open("https://www.linkedin.com/in/abigail-hartzell/", "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    Learn More
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent hover:scale-105 transition-all duration-300 hover:bg-primary/10 hover:border-primary/50"
                    onClick={() => window.open(org.website, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
