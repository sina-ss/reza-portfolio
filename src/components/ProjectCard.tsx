import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FolderKanban } from "lucide-react";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  details?: string[];
}

export function ProjectCard({ title, description, details }: ProjectCardProps) {
  return (
    <Card className="w-full max-w-2xl p-6 mb-6 shadow-md border border-primary/10 bg-card/95">
      <div className="flex items-center gap-3 mb-2">
        <FolderKanban className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <Badge className="ml-2 bg-muted text-primary font-medium">
          Project
        </Badge>
      </div>
      <Separator className="mb-3" />
      <p className="text-base text-muted-foreground mb-2">{description}</p>
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
