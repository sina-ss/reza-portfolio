import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-secondary/50 animate-fadeInUp animate-duration-1000 animate-delay-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          Get In Touch
        </h2>
        <p className="max-w-xl mx-auto text-lg text-foreground/80 mb-8">
          I&apos;m always open to discussing new opportunities, collaborations,
          or just a chat about finance and technology. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="default" size="lg">
            <Link
              href="mailto:rzafh79@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Email Me
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            {/* User should replace # with actual LinkedIn profile URL */}
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn Profile
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
