import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap } from "lucide-react";
import React from "react";

interface EducationCardProps {
  degree: string;
  field?: string;
  institution: string;
  location?: string;
  date: string;
  gpa?: string;
  details?: string[];
}

export function EducationCard({
  degree,
  field,
  institution,
  location,
  date,
  gpa,
  details,
}: EducationCardProps) {
  return (
    <Card className="w-full max-w-2xl p-6 mb-6 shadow-md border border-primary/10 bg-card/95">
      <div className="flex items-center gap-3 mb-2">
        <GraduationCap className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">
          {degree}
          {field ? ` in ${field}` : ""}
        </h3>
        <Badge className="ml-2 bg-muted text-primary font-medium">
          {institution}
        </Badge>
      </div>
      <Separator className="mb-3" />
      <div className="flex flex-wrap justify-between text-sm text-muted-foreground mb-1">
        {location && <span>{location}</span>}
        <span>{date}</span>
        {gpa && <span>GPA: {gpa}</span>}
      </div>
      {details && details.length > 0 && (
        <ul className="list-disc list-inside ml-4 mt-1 text-sm">
          {details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </Card>
  );
}
