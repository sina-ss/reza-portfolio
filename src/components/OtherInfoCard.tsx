import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Music, Languages } from "lucide-react";
import React from "react";

interface IELTS {
  overall: string;
  listening: string;
  reading: string;
  speaking: string;
  writing: string;
}

interface OtherInfoCardProps {
  piano?: boolean;
  ielts?: IELTS;
}

export function OtherInfoCard({ piano, ielts }: OtherInfoCardProps) {
  return (
    <Card className="w-full max-w-2xl p-6 mb-6 shadow-md border border-primary/10 bg-card/95">
      <div className="flex items-center gap-3 mb-2">
        <Music className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Other</h3>
      </div>
      <Separator className="mb-3" />
      {piano && (
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-muted text-primary font-medium">Piano</Badge>
          <span className="text-sm text-muted-foreground">Pianist</span>
        </div>
      )}
      {ielts && (
        <div className="mt-2">
          <div className="flex items-center gap-2 mb-1">
            <Languages className="w-4 h-4 text-primary" />
            <span className="font-medium">English Proficiency (IELTS)</span>
          </div>
          <ul className="ml-6 text-sm text-muted-foreground list-disc">
            <li>Overall: {ielts.overall}</li>
            <li>Listening: {ielts.listening}</li>
            <li>Reading: {ielts.reading}</li>
            <li>Speaking: {ielts.speaking}</li>
            <li>Writing: {ielts.writing}</li>
          </ul>
        </div>
      )}
    </Card>
  );
}
