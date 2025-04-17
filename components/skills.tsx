import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      category: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Computer Vision", "NLP", "Reinforcement Learning"],
    },
    {
      category: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "R"],
    },
    {
      category: "Web Development",
      skills: ["React", "Next.js", "Node.js", "Express", "Django", "Flask"],
    },
    {
      category: "Data",
      skills: ["SQL", "MongoDB", "PostgreSQL", "Pandas", "NumPy", "Data Visualization"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Git"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
