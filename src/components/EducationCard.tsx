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
    <Card className="w-full max-w-2xl p-4 md:p-6 mb-6 shadow-md border border-primary/10 bg-card/95">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
        <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
        <h3 className="text-base md:text-lg font-semibold break-words flex-1">
          {degree}
          {field ? ` in ${field}` : ""}
        </h3>
        <Badge
          className="ml-0 sm:ml-2 bg-muted text-primary font-medium text-xs md:text-sm max-w-[140px] sm:max-w-xs truncate"
          title={institution}
        >
          {institution}
        </Badge>
      </div>
      <Separator className="mb-3" />
      <div className="flex flex-col sm:flex-row flex-wrap justify-between text-xs md:text-sm text-muted-foreground mb-1 gap-1">
        {location && (
          <span className="truncate max-w-[120px] sm:max-w-none">
            {location}
          </span>
        )}
        <span>{date}</span>
        {gpa && <span>GPA: {gpa}</span>}
      </div>
      {details && details.length > 0 && (
        <ul className="list-disc list-inside ml-4 mt-1 text-xs md:text-sm break-words">
          {details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </Card>
  );
}
