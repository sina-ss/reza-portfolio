import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Globe, Phone } from "lucide-react";

export default function Home() {
  return (
    <section id="hero" className="w-full flex justify-center mt-12">
      <Card className="w-full max-w-2xl p-8 shadow-xl border-2 border-primary/20 bg-card/80">
        <div className="flex flex-col items-center gap-6">
          <Avatar className="w-28 h-28 border-4 border-primary/30 shadow-md">
            {/* Placeholder for profile photo */}
            <AvatarFallback className="text-4xl">RFH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Reza Fakhr Hosseini
            </h1>
            <Badge className="text-base px-4 py-1 bg-primary/90">
              Finance Expert & Financial Analyst
            </Badge>
          </div>
          <Separator className="my-2" />
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a
                href="https://www.linkedin.com/in/rfhosseini"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href="mailto:rzafh79@gmail.com">
                <Mail className="w-4 h-4" /> Email
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a
                href="https://rfhosseini.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-4 h-4" /> Website
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href="tel:+447351036696">
                <Phone className="w-4 h-4" /> +44 7351 036696
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
