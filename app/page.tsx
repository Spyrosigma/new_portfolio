import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Chatbot from "@/components/chatbot"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Chatbot />
    </main>
  )
}
