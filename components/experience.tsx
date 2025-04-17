import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseIcon } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "ML Engineer",
      company: "TunableLabs",
      location: "USA",
      period: "Nov 2024 - Present",
      description:
        "Working on cutting-edge machine learning solutions for enterprise clients. Developing and deploying models for natural language processing and computer vision applications.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Work Experience</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <BriefcaseIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} • {exp.location} • {exp.period}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
