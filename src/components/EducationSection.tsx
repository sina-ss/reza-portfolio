"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
} from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getEducationIcon = (degree: string) => {
    if (degree.includes("M.Sc.") || degree.includes("Master")) {
      return "🎓";
    } else if (degree.includes("B.Sc.") || degree.includes("Bachelor")) {
      return "📚";
    } else if (degree.includes("Minor")) {
      return "📖";
    } else if (degree.includes("High School")) {
      return "🏫";
    }
    return "🎓";
  };

  const getEducationPriority = (degree: string) => {
    if (degree.includes("M.Sc.")) return 1;
    if (degree.includes("B.Sc.")) return 2;
    if (degree.includes("Minor")) return 3;
    return 4;
  };

  const sortedEducation = [...education].sort(
    (a, b) => getEducationPriority(a.degree) - getEducationPriority(b.degree)
  );

  return (
    <section id="education" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education & Academic Background
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strong academic foundation combining engineering, economics, and
            finance
          </p>
        </motion.div>

        <div className="space-y-8">
          {sortedEducation.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">
                          {getEducationIcon(edu.degree)}
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-foreground">
                            {edu.degree} in {edu.field}
                          </CardTitle>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mt-2">
                            <div className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4" />
                              <span className="font-semibold text-primary">
                                {edu.institution}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <Badge variant="outline" className="text-sm">
                        {edu.startDate} - {edu.endDate}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* GPA Information */}
                    {edu.gpa && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      >
                        <Card className="border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-900/10">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="h-4 w-4 text-blue-600" />
                              <h4 className="font-semibold text-foreground">
                                Academic Performance
                              </h4>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">GPA:</span>{" "}
                              {edu.gpa}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Ranking Information */}
                    {edu.ranking && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: 20 }
                        }
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      >
                        <Card className="border-l-4 border-l-green-500 bg-green-50/50 dark:bg-green-900/10">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Award className="h-4 w-4 text-green-600" />
                              <h4 className="font-semibold text-foreground">
                                Institution Ranking
                              </h4>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {edu.ranking}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </div>

                  {/* Graduation Date */}
                  {edu.graduationDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="text-center"
                    >
                      <Badge variant="secondary" className="text-sm px-4 py-2">
                        Expected Graduation: {edu.graduationDate}
                      </Badge>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-blue-600/5">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
                Educational Journey
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden lg:block"></div>

                <div className="space-y-8">
                  {sortedEducation.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.9 }
                      }
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className={`flex flex-col lg:flex-row items-center gap-6 ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="hidden lg:flex w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                      {/* Content */}
                      <div
                        className={`flex-1 max-w-lg ${
                          index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                        }`}
                      >
                        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-md border">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">
                              {getEducationIcon(edu.degree)}
                            </span>
                            <h4 className="font-semibold text-foreground">
                              {edu.degree}
                            </h4>
                          </div>
                          <p className="text-sm text-primary font-medium">
                            {edu.field}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {edu.institution}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {edu.startDate} - {edu.endDate}
                          </p>
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden lg:block flex-1"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Academic Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {education.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Academic Qualifications
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-sm text-muted-foreground">
                Universities Attended
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <div className="text-sm text-muted-foreground">
                Years of Education
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-sm text-muted-foreground">
                Disciplines Studied
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
