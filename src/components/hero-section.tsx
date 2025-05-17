"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Download, Phone, Globe } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-12 md:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="mb-2" variant="outline">
                Financial Analyst
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Reza Fakhr Hosseini
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Investment professional with expertise in financial modeling and
                investment analysis across major sectors.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="aspect-square rounded-full bg-muted mx-auto mb-4 overflow-hidden w-[180px] h-[180px]">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-3xl font-bold text-primary/60">
                  RFH
                </div>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="mailto:rzafh79@gmail.com"
                    className="text-sm hover:underline"
                  >
                    rzafh79@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="tel:+447351036696"
                    className="text-sm hover:underline"
                  >
                    +447351036696
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://rfhosseini.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    rfhosseini.me
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground"
        >
          <span className="text-sm font-medium mb-1">Scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
