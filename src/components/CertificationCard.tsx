import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Award } from "lucide-react";
import React from "react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeClassName?: string;
}

export function CertificationCard({
  title,
  issuer,
  date,
  credentialId,
  badgeClassName,
}: CertificationCardProps) {
  return (
    <Card className="w-full max-w-2xl p-6 mb-6 shadow-md border border-primary/10 bg-card/95">
      <div className="flex items-center gap-3 mb-2">
        <Award className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <Badge
          className={`ml-2 bg-muted text-primary font-medium ${
            badgeClassName ?? ""
          }`}
        >
          {issuer}
        </Badge>
      </div>
      <Separator className="mb-3" />
      <div className="flex flex-wrap justify-between text-sm text-muted-foreground mb-1">
        <span>{date}</span>
        {credentialId && <span>Credential ID: {credentialId}</span>}
      </div>
    </Card>
  );
}

export default CertificationCard;
