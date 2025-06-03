"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Download,
} from "lucide-react";
import { personalData } from "@/lib/data";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleContactClick = (type: "email" | "phone" | "linkedin") => {
    switch (type) {
      case "email":
        window.open(`mailto:${personalData.email}`);
        break;
      case "phone":
        window.open(`tel:${personalData.phone}`);
        break;
      case "linkedin":
        window.open(personalData.linkedin, "_blank");
        break;
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-slate-50/50 dark:to-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting & Name */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge variant="outline" className="mb-4 text-sm font-medium">
                  Available for new opportunities
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
              >
                Hi, I'm{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Reza
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-2"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  {personalData.title}
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{personalData.location}</span>
                </div>
              </motion.div>
            </div>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Experienced financial analyst with{" "}
              <span className="font-semibold text-foreground">4+ years</span> of
              expertise in financial modeling, having analyzed{" "}
              <span className="font-semibold text-foreground">
                50+ companies
              </span>{" "}
              across major sectors. Specializing in investment analysis,
              portfolio management, and advanced financial modeling techniques.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">
                  Companies Analyzed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Valuation Projects
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="flex items-center gap-2 text-base px-8 py-3"
              >
                <Mail className="h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#about")}
                className="flex items-center gap-2 text-base px-8 py-3"
              >
                Learn More
                <ExternalLink className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleContactClick("email")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{personalData.email}</span>
                <span className="sm:hidden">Email</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleContactClick("phone")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{personalData.phone}</span>
                <span className="sm:hidden">Phone</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleContactClick("linkedin")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                <span className="hidden sm:inline">LinkedIn</span>
                <span className="sm:hidden">LinkedIn</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Professional Photo Placeholder */}
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full flex items-center justify-center border-4 border-primary/10 shadow-2xl">
                <div className="w-64 h-64 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-full flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground">
                    {personalData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                CFA Level 1
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                Bloomberg Certified
              </motion.div>

              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/2 -left-8 bg-green-600 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                M.Sc. Finance
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
