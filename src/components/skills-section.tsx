"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, FileSpreadsheet, UserCheck, Cpu } from "lucide-react";

export function SkillsSection() {
  const programmingSkills = [
    { name: "VBA", level: 90, status: "Advanced" },
    { name: "MATLAB", level: 90, status: "Advanced" },
    { name: "Python", level: 90, status: "Advanced" },
    { name: "JavaScript", level: 70, status: "Intermediate" },
    { name: "TypeScript", level: 70, status: "Intermediate" },
    { name: "C++", level: 60, status: "Intermediate" },
    { name: "LaTeX", level: 40, status: "Familiar" },
    { name: "Assembly", level: 40, status: "Familiar" },
    { name: "Figma", level: 40, status: "Familiar" },
    { name: "HTML", level: 40, status: "Familiar" },
  ];

  const softwareSkills = [
    { name: "Microsoft Office Suite", level: 95, status: "Advanced" },
    { name: "Windows OS", level: 95, status: "Advanced" },
    { name: "Bloomberg Terminal", level: 75, status: "Intermediate" },
  ];

  const investmentSkills = [
    "Financial and Investment Spreadsheet Modeling",
    "Merge/Acquisition Modeling",
    "Asset Management",
    "Discounted Cash Flow (DCF) Modeling",
    "Comparable Company Analysis (CCA) and Precedent Transactions",
    "LBO and Leveraged Buyout Modeling",
    "Financial Statement Analysis and Forecasting",
    "Equity Valuation Metrics (P/E, EV/EBITDA, PEG, ROE)",
    "Sensitivity and Scenario Analysis",
    "Financial Ratio Analysis and Interpretation",
    "Industry-Specific Valuation Models",
    "Merger Consequence Analysis",
    "Pro Forma Financial Statement Projections",
    "Working Capital and Cash Flow Optimization Models",
    "Monte Carlo Simulation for Risk Assessment",
    "Multifactor Models and CAPM Analysis",
    "Bloomberg Terminal and Capital IQ Data Analysis",
  ];

  const softSkills = [
    "No Ego",
    "Openness to Feedback",
    "Adaptability",
    "Emotional Intelligence",
    "Team Player",
    "Positive Attitude",
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
          <Separator className="my-4 w-16 mx-auto" />
          <p className="text-muted-foreground max-w-[800px]">
            A diverse range of technical and soft skills gathered through
            education and professional experience.
          </p>
        </div>

        <Tabs defaultValue="programming" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger
              value="programming"
              className="flex items-center gap-2"
            >
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Programming</span>
            </TabsTrigger>
            <TabsTrigger value="software" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              <span className="hidden sm:inline">Software</span>
            </TabsTrigger>
            <TabsTrigger value="investment" className="flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4" />
              <span className="hidden sm:inline">Investment Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="soft" className="flex items-center gap-2">
              <UserCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Soft Skills</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="programming" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Programming Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {programmingSkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline">{skill.status}</Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="software" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Software Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {softwareSkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline">{skill.status}</Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investment" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Investment Analysis Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {investmentSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="soft" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <Badge key={index} className="text-sm py-1.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-muted-foreground">Other: Piano</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
