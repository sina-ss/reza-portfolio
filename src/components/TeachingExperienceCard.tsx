import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen } from "lucide-react";
import React from "react";

interface TeachingExperienceCardProps {
  role: string;
  department: string;
  institution: string;
  course: string;
  professor: string;
  duration: string;
  date?: string;
}

export function TeachingExperienceCard({
  role,
  department,
  institution,
  course,
  professor,
  duration,
  date,
}: TeachingExperienceCardProps) {
  return (
    <Card className="w-full max-w-2xl p-6 mb-6 shadow-md border border-primary/10 bg-card/95">
      <div className="flex items-center gap-3 mb-2">
        <BookOpen className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">{role}</h3>
        <Badge className="ml-2 bg-muted text-primary font-medium">
          {department}
        </Badge>
      </div>
      <Separator className="mb-3" />
      <div className="flex flex-wrap justify-between text-sm text-muted-foreground mb-1">
        <span>{institution}</span>
        {date && <span>{date}</span>}
      </div>
      <div className="mt-2 text-sm">
        <span className="font-medium">Course:</span> {course}
      </div>
      <div className="text-sm">
        <span className="font-medium">Professor:</span> {professor}
      </div>
      <div className="text-sm">
        <span className="font-medium">Duration:</span> {duration}
      </div>
    </Card>
  );
}
