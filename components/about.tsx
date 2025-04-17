import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-4 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                I'm a passionate Full Stack AI-ML Engineer currently pursuing my Computer Science degree. With a strong
                foundation in both software development and machine learning, I specialize in building intelligent
                applications that solve real-world problems.
              </p>
              <p className="text-lg">
                My expertise spans across the entire ML pipeline - from data preprocessing and model development to
                deployment and monitoring. I'm particularly interested in natural language processing, computer vision,
                and reinforcement learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
