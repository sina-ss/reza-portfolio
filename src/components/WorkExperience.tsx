import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";
import React from "react";

interface WorkExperienceProps {
  company: string;
  role: string;
  location: string;
  date: string;
  responsibilities: string[];
  achievements: string[];
}

export function WorkExperience({
  company,
  role,
  location,
  date,
  responsibilities,
  achievements,
}: WorkExperienceProps) {
  return (
    <Card className="w-full max-w-2xl p-6 mb-8 shadow-md border border-primary/10 bg-card/95">
      <div className="flex items-center gap-3 mb-2">
        <Briefcase className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold">{role}</h3>
        <Badge className="ml-2 bg-muted text-primary font-medium">
          {company}
        </Badge>
      </div>
      <div className="flex flex-wrap justify-between text-sm text-muted-foreground mb-2">
        <span>{location}</span>
        <span>{date}</span>
      </div>
      <Separator className="mb-3" />
      <div className="mb-2">
        <span className="font-medium">Responsibilities:</span>
        <ul className="list-disc list-inside ml-4 mt-1">
          {responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-medium">Achievements:</span>
        <ul className="list-disc list-inside ml-4 mt-1">
          {achievements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
