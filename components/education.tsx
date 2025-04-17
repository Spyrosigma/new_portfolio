import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCapIcon } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Education</h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <GraduationCapIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Bachelor of Science in Computer Science</CardTitle>
                <p className="text-sm text-muted-foreground">Currently Pursuing</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Focusing on artificial intelligence, machine learning, and data science. Participating in research
                projects and hackathons to apply theoretical knowledge to real-world problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
