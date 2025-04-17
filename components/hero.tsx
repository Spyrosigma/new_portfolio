import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5" />
      <div className="container px-4 md:px-6 z-10 text-center">
        <div className="flex flex-col items-center mb-8 animate-fade-up">
          <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/30">
            <Image 
              src="/myimg.jpeg" 
              alt="Satyam Namdev" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Satyam Namdev</h2>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 animate-fade-up animation-delay-100">
          Full Stack AI-ML Engineer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up animation-delay-200">
          Building intelligent solutions with cutting-edge AI and machine learning technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
          <Button asChild size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}