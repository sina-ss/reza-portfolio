"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Mail, Github, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              Reza Fakhr Hosseini
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Investment Analyst & Financial Modeler
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="mailto:rzafh79@gmail.com"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://rfhosseini.me"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 transition-colors"
              aria-label="Website"
            >
              <Globe className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {currentYear} Reza Fakhr Hosseini. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#home" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
