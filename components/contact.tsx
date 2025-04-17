import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-primary" />
                <span>namdev2003satyam@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <GithubIcon className="h-5 w-5 text-primary" />
                <a href="https://github.com/spyrosigma" target="_blank"><span>Spyrosigma</span></a>
              </div>
              <div className="flex items-center gap-3">
                <LinkedinIcon className="h-5 w-5 text-primary" />
                <a href="https://linkedin.com/in/spyrosigma" target="_blank"><span>Spyrosigma</span></a>
              </div>
              <div className="flex items-center gap-3">
                <TwitterIcon className="h-5 w-5 text-primary" />
                <a href="https://x.com/spyrosigma" target="_blank"><span>Spyrosigma</span></a>
              </div>
              {/* <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <span>+91 123-4567</span>
              </div> */}
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-primary" />
                <span>Ghaziabad, India</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
