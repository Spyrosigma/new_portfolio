import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Image Recognition",
      description:
        "A computer vision application that can identify objects in images with high accuracy using deep learning models.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["PyTorch", "Computer Vision", "React", "FastAPI"],
      github: "#",
      demo: "#",
    },
    {
      title: "NLP Chatbot Framework",
      description:
        "An extensible framework for building intelligent chatbots with natural language understanding capabilities.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["NLP", "TensorFlow", "Node.js", "Socket.IO"],
      github: "#",
      demo: "#",
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "A dashboard for visualizing and analyzing time-series data with predictive capabilities.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "React", "D3.js", "Scikit-learn"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
