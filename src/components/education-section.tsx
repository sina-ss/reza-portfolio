"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, School, BookOpen } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "M.Sc. in Finance",
      institution: "Manchester Metropolitan",
      location: "Manchester, UK",
      date: "2024 – 2025",
      description: "Expected graduation date: September 2025",
      icon: <GraduationCap className="h-5 w-5" />,
      additional: "Rank 51+ in World, QS Universities",
    },
    {
      degree: "B.Sc. in Biomedical Engineering (Bioelectric)",
      institution: "Amirkabir University of Technology",
      location: "Tehran, Iran",
      date: "2019 – 2023",
      description:
        "GPA: 3.45 (16.43 / 20), GPA of last 60 units: 3.71 (17.138 / 20)",
      icon: <GraduationCap className="h-5 w-5" />,
      additional: "Rank 1 BioElectrics Department in Iran, Ministry of Science",
    },
    {
      degree: "Economy Minor Course",
      institution: "Management Department, Amirkabir University of Technology",
      location: "Tehran, Iran",
      date: "2021 – 2022",
      description: "GPA: 3.8 (17.82 / 20)",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      degree: "High school in Mathematics",
      institution: "Atomic Energy High School",
      location: "Tehran, Iran",
      date: "2016 – 2019",
      description: "GPA: 19.52 / 20",
      icon: <School className="h-5 w-5" />,
      additional: "Rank 1 High School in Iran, Ministry of Science",
    },
  ];

  const certifications = [
    {
      name: "Bloomberg Market Concepts",
      issuer: "Bloomberg",
      date: "May 2025",
      id: "srbcSSX6bmAxvXgaMj4mWADV",
    },
    {
      name: "Bloomberg Spreadsheet Analysis",
      issuer: "Bloomberg",
      date: "May 2025",
      id: "rpu4HEP4p2bp9QYBm1cBRUFS",
    },
    {
      name: "Environmental Social Governance",
      issuer: "Bloomberg",
      date: "May 2025",
      id: "qqqz3Ua7cBbc9o1CcrSs9ntN",
    },
    {
      name: "Finance Accelerator",
      issuer: "Morgan Stanley and UBS",
      date: "Oct 2024",
      id: "f7d3907c-2efc-47b8-b358-1b8a60b27f6e",
    },
    {
      name: "CFA level 1 Candidate",
      issuer: "CFA Institute",
      date: "Aug 2025",
      id: "Scheduled (due to take)",
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Education & Certifications
          </h2>
          <Separator className="my-4 w-16 mx-auto" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6" />
              <h3 className="text-2xl font-bold">Educational Background</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          {item.icon}
                          {item.degree}
                        </CardTitle>
                        <CardDescription>{item.institution}</CardDescription>
                        <CardDescription>{item.location}</CardDescription>
                      </div>
                      <Badge variant="outline" className="font-medium">
                        <Calendar className="mr-1 h-3 w-3" />
                        {item.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    {item.additional && (
                      <p className="text-xs text-muted-foreground mt-1 italic">
                        {item.additional}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Teaching Experience</h3>
              </div>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle>Teaching assistant</CardTitle>
                      <CardDescription>
                        Department of Biomedical Engineering
                      </CardDescription>
                      <CardDescription>
                        Amirkabir University of Technology, Tehran, Iran
                      </CardDescription>
                    </div>
                    <Badge variant="outline">
                      <Calendar className="mr-1 h-3 w-3" />
                      2022 – 2023
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Course: Management and Entrepreneurship in Biomedical
                    Engineering
                    <br />
                    Professor: Dr.Hamed Azarnoush
                    <br />
                    Duration: 2 semesters
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-6 w-6" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>{cert.name}</CardTitle>
                      <Badge variant="outline">
                        <Calendar className="mr-1 h-3 w-3" />
                        {cert.date}
                      </Badge>
                    </div>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Credential ID: {cert.id}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-6 w-6" />
                <h3 className="text-2xl font-bold">English Proficiency</h3>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>IELTS</CardTitle>
                  <CardDescription>
                    Official English language test
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold">Overall</div>
                      <div className="text-2xl font-bold text-primary">7.0</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base font-bold">Listening</div>
                      <div className="text-lg font-bold text-primary">7.5</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base font-bold">Reading</div>
                      <div className="text-lg font-bold text-primary">7.0</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base font-bold">Speaking</div>
                      <div className="text-lg font-bold text-primary">7.0</div>
                    </div>
                    <div className="text-center md:col-span-4">
                      <div className="text-base font-bold">Writing</div>
                      <div className="text-lg font-bold text-primary">6.5</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
