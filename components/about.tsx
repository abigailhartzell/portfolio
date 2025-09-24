import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Atom, Battery, Users, BookOpen, Coffee, Heart, Sparkles, Zap, Lightbulb } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.65_0.15_200_/_0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,oklch(0.75_0.18_160_/_0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.7_0.2_280_/_0.08),transparent_60%)]" />
      </div>

      <div className="absolute top-10 left-10 float">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center pulse-glow">
          <Sparkles className="text-primary" size={24} />
        </div>
      </div>
      <div className="absolute bottom-20 right-20 float-delayed">
        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center pulse-glow">
          <Heart className="text-accent" size={20} />
        </div>
      </div>
      <div className="absolute top-1/2 left-20 float">
        <div className="w-8 h-8 bg-chart-4/20 rounded-full flex items-center justify-center pulse-glow">
          <Atom className="text-chart-4" size={18} />
        </div>
      </div>
      <div className="absolute top-1/3 right-10 float-delayed">
        <div className="w-14 h-14 bg-chart-3/20 rounded-full flex items-center justify-center pulse-glow">
          <Zap className="text-chart-3" size={28} />
        </div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 float">
        <div className="w-9 h-9 bg-chart-5/20 rounded-full flex items-center justify-center pulse-glow">
          <Lightbulb className="text-chart-5" size={22} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a creative problem-solver who gets energized by tackling complex challenges and building meaningful
            connections in the tech community. I have a strong interest in community building and am a lifelong learner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get to Know Me</h3>
            <p className="text-muted-foreground leading-relaxed">
              As a passionate community builder, I love to learn, work on side projects, participate in hackathons, and
              have thoughtful conversations (especially about how technology, education, global health, and social
              change go hand in hand). I enjoy photography, fitness, and exploring nature.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Fun Facts About Me:</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Coffee className="text-primary" size={16} />
                  <span className="text-sm">I debug best with a good cup of matcha</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="text-primary" size={16} />
                  <span className="text-sm">Always reading 3 books at a time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-primary" size={16} />
                  <span className="text-sm">Always looking to collaborate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="p-6 tile-hover bg-card/60 backdrop-blur-md border-2 border-border/50">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg glow">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Community Builder</h4>
                  <p className="text-sm text-muted-foreground">Connecting people and fostering collaboration</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 tile-hover bg-card/60 backdrop-blur-md border-2 border-border/50">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/20 rounded-lg glow">
                  <Battery className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Impact Driven</h4>
                  <p className="text-sm text-muted-foreground">Technology solutions for global challenges</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 tile-hover bg-card/60 backdrop-blur-md border-2 border-border/50">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-chart-4/20 rounded-lg glow">
                  <BookOpen className="text-chart-4" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Lifelong Learner</h4>
                  <p className="text-sm text-muted-foreground">Always exploring new technologies and ideas</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Chemical Engineering",
              "Drug Delivery",
              "Nanoparticle Formulation",
              "Gene Therapy",
              "mRNA Technology",
              "Process Optimization",
              "Renewable Energy",
              "Biotechnology",
              "3D Printing",
              "Research & Development",
              "Global Health",
              "Python",
              "Machine Learning",
              "Open Source",
              "Mentoring",
              "Community Building",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-3 py-1 text-xs font-medium tile-hover cursor-default backdrop-blur-sm border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-current/20 bg-transparent border-primary/50 text-primary"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
