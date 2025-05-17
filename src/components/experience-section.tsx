"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Target, Calendar, LineChart } from "lucide-react";

export function ExperienceSection() {
  const projects = [
    {
      title: "Automated Excel Dashboard For Communications' Operators",
      description:
        "Created automated dashboards to track and visualize key performance metrics for communications operators.",
      icon: <LineChart className="h-5 w-5" />,
      tags: ["Excel", "VBA", "Dashboard", "Data Analysis"],
    },
    {
      title: "Automated Excel and Power Bi Dashboard For Portfolio Management",
      description:
        'Developed portfolio management dashboards for "Moshtarak Tadbir" Fund utilizing Excel and Power BI.',
      icon: <LineChart className="h-5 w-5" />,
      tags: ["Excel", "Power BI", "Portfolio Management", "Automation"],
    },
    {
      title: "Database and Backend for Setad Portfolio Management",
      description:
        "Designed database architecture and backend systems for portfolio management application at one of the biggest organizations in Iran.",
      icon: <LineChart className="h-5 w-5" />,
      tags: ["Database Design", "Backend", "Portfolio Management"],
    },
    {
      title: 'Financial Evaluation of "Barekat Financial Group"',
      description:
        "Conducted specific financial evaluation for the largest financial group in the pharmaceutical sector of Iran.",
      icon: <LineChart className="h-5 w-5" />,
      tags: ["Financial Evaluation", "Pharmaceutical", "Analysis"],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Work Experience
          </h2>
          <Separator className="my-4 w-16 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative pl-8 border-l-2 border-muted">
            <div className="absolute -left-[10px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
              <Briefcase className="h-3 w-3 text-primary" />
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">Financial Analyst</h3>
                <Badge variant="outline" className="md:ml-2 w-fit">
                  Tadbirgaran Farda
                </Badge>
              </div>

              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="mr-2 h-4 w-4" />
                April 2020 - September 2024
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>
                      Financial Analysis and Research about Companies and
                      Industries
                    </li>
                    <li>Investment fund portfolio management</li>
                    <li>Market Trend Analysis</li>
                    <li>Financial Modelling and Forecasting</li>
                    <li>Taught financial subjects to colleagues and clients</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Financial Modelling of +50 firms</li>
                    <li>
                      Developed independent valuation projects of +10 firms
                      (Relative and Absolute)
                    </li>
                    <li>Supervising and leading the analysis team</li>
                    <li>
                      Financial Modelling and Forecasting of 3 main sectors'
                      firms of Iran (Refinery, Power Plant, Cement)
                    </li>
                    <li>
                      Represented the organization in analytical meetings and
                      annual general meetings
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Notable Projects
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    {project.icon}
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
