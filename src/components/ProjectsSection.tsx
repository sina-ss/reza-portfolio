"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Zap,
  BarChart3,
  TrendingUp,
  Code,
  Filter,
  ExternalLink,
  Briefcase,
} from "lucide-react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "automation":
        return Zap;
      case "analysis":
        return BarChart3;
      case "modeling":
        return TrendingUp;
      case "development":
        return Code;
      default:
        return Briefcase;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "automation":
        return "bg-blue-500";
      case "analysis":
        return "bg-green-500";
      case "modeling":
        return "bg-purple-500";
      case "development":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "automation",
      name: "Automation",
      count: projects.filter((p) => p.category === "automation").length,
    },
    {
      id: "analysis",
      name: "Analysis",
      count: projects.filter((p) => p.category === "analysis").length,
    },
    {
      id: "modeling",
      name: "Modeling",
      count: projects.filter((p) => p.category === "modeling").length,
    },
    {
      id: "development",
      name: "Development",
      count: projects.filter((p) => p.category === "development").length,
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key financial projects demonstrating expertise in automation,
            analysis, and development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground border"
              }`}
            >
              <Filter className="h-4 w-4" />
              <span className="font-medium">{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = getCategoryIcon(project.category);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                layout
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-10 h-10 ${getCategoryColor(
                              project.category
                            )} rounded-lg flex items-center justify-center`}
                          >
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <Badge
                            variant="outline"
                            className="text-xs capitalize"
                          >
                            {project.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.name}
                        </CardTitle>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                      </motion.div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Project Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.3,
                              delay: 0.6 + index * 0.1 + techIndex * 0.05,
                            }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    {project.impact && (
                      <div className="border-t pt-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Impact & Results
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.impact}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Projects Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-blue-600/5">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
                Project Portfolio Overview
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-3xl font-bold text-primary mb-2"
                  >
                    {projects.length}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    Total Projects
                  </div>
                </div>
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="text-3xl font-bold text-blue-600 mb-2"
                  >
                    {projects.filter((p) => p.category === "automation").length}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    Automation Projects
                  </div>
                </div>
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-3xl font-bold text-green-600 mb-2"
                  >
                    {projects.filter((p) => p.category === "analysis").length}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    Analysis Projects
                  </div>
                </div>
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="text-3xl font-bold text-purple-600 mb-2"
                  >
                    {
                      projects.filter((p) => p.category === "development")
                        .length
                    }
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    Development Projects
                  </div>
                </div>
              </div>

              {/* Key Technologies */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
                  Key Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {Array.from(
                    new Set(projects.flatMap((p) => p.technologies))
                  ).map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.05 }}
                    >
                      <Badge variant="outline" className="text-sm py-1 px-3">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
