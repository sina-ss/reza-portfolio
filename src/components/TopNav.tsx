"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "personal-statement", label: "About" },
  { id: "work-experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "teaching-experience", label: "Teaching" },
  { id: "other", label: "Other" },
];

export function TopNav() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY + 80 >= el.offsetTop) {
          current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-2">
        <span className="font-bold text-lg tracking-tight text-primary">
          Reza Fakhr Hosseini
        </span>
        <div className="flex items-center gap-2 md:gap-4">
          <ul className="flex gap-2 md:gap-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={cn(
                    "px-2 md:px-3 py-1 rounded transition-colors text-sm font-medium hover:bg-primary/10 focus:outline-none",
                    active === section.id
                      ? "text-primary bg-primary/10 font-bold"
                      : "text-muted-foreground"
                  )}
                  onClick={() => handleClick(section.id)}
                  aria-current={active === section.id ? "page" : undefined}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-2 hidden md:flex"
          >
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4" /> Resume
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
