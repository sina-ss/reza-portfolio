"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  personalStatement,
  languageProficiency,
  teachingExperience,
} from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Users,
  Globe,
  TrendingUp,
  BarChart3,
  Target,
} from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const highlights = [
    {
      icon: TrendingUp,
      title: "Financial Modeling Expert",
      description:
        "Completed financial modeling for 50+ companies across three major sectors including refineries, power plants, and cement industries.",
    },
    {
      icon: BarChart3,
      title: "Investment Analysis",
      description:
        "Developed independent valuation projects for 10+ firms using both relative and absolute valuation methods.",
    },
    {
      icon: Target,
      title: "Team Leadership",
      description:
        "Successfully supervised and led the financial analysis team at one of Iran's most established brokerage institutions.",
    },
    {
      icon: Users,
      title: "Client Relations",
      description:
        "Represented organization in analytical meetings and annual general meetings, building strong stakeholder relationships.",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description:
        "Unique combination of Biomedical Engineering background with Economics minor and Finance Master's degree.",
    },
    {
      icon: Globe,
      title: "International Perspective",
      description:
        "Transitioning from Iranian markets to global finance, bringing diverse analytical perspectives and cultural understanding.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-50/50 dark:bg-slate-900/50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated financial professional with a unique journey from
            biomedical engineering to finance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  My Journey
                </h3>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {personalStatement}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      Teaching Experience
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium">
                      {teachingExperience.position}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {teachingExperience.course}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {teachingExperience.duration}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      Language Proficiency
                    </h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">IELTS Overall</span>
                      <Badge variant="secondary">
                        {languageProficiency.overall}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div>Listening: {languageProficiency.listening}</div>
                      <div>Reading: {languageProficiency.reading}</div>
                      <div>Speaking: {languageProficiency.speaking}</div>
                      <div>Writing: {languageProficiency.writing}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Key Highlights
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <highlight.icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">
                            {highlight.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
