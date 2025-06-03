"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { skillCategories } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Monitor, TrendingUp, Users, Star } from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "programming skills":
        return Code;
      case "software skills":
        return Monitor;
      case "financial analysis":
        return TrendingUp;
      case "soft skills":
        return Users;
      default:
        return Star;
    }
  };

  const getSkillProgress = (level: string) => {
    switch (level) {
      case "familiar":
        return 40;
      case "intermediate":
        return 70;
      case "advanced":
        return 95;
      default:
        return 50;
    }
  };

  const getSkillBadgeVariant = (level: string) => {
    switch (level) {
      case "familiar":
        return "secondary";
      case "intermediate":
        return "outline";
      case "advanced":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <section
      id="skills"
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
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning financial analysis, programming,
            and professional software tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = getCategoryIcon(category.name);

            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                          <Badge
                            variant={getSkillBadgeVariant(skill.level) as any}
                            className="text-xs"
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <Progress
                            value={getSkillProgress(skill.level)}
                            className="h-2"
                          />
                          <div className="text-xs text-muted-foreground text-right">
                            {getSkillProgress(skill.level)}%
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-blue-600/5">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
                Skills Overview
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Advanced Skills Count */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-4xl font-bold text-primary mb-2"
                  >
                    {skillCategories.reduce(
                      (total, category) =>
                        total +
                        category.skills.filter(
                          (skill) => skill.level === "advanced"
                        ).length,
                      0
                    )}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    Advanced Skills
                  </div>
                </div>

                {/* Intermediate Skills Count */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="text-4xl font-bold text-blue-600 mb-2"
                  >
                    {skillCategories.reduce(
                      (total, category) =>
                        total +
                        category.skills.filter(
                          (skill) => skill.level === "intermediate"
                        ).length,
                      0
                    )}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    Intermediate Skills
                  </div>
                </div>

                {/* Total Skills Count */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-4xl font-bold text-green-600 mb-2"
                  >
                    {skillCategories.reduce(
                      (total, category) => total + category.skills.length,
                      0
                    )}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    Total Skills
                  </div>
                </div>
              </div>

              {/* Skill Categories Grid */}
              <div className="mt-8 flex flex-wrap gap-2 justify-center">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                  >
                    <Badge variant="outline" className="text-sm py-1 px-3">
                      {category.name}: {category.skills.length} skills
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
