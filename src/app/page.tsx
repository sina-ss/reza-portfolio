import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Globe, Phone } from "lucide-react";
import { WorkExperience } from "@/components/WorkExperience";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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

      {/* Personal Statement Section */}
      <section
        id="personal-statement"
        className="w-full flex justify-center mt-12"
      >
        <Card className="w-full max-w-2xl p-8 shadow-lg border border-primary/10 bg-card/90">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Personal Statement
          </h2>
          <Separator className="mb-4" />
          <p className="text-lg leading-relaxed text-muted-foreground text-center">
            As a Financial Analyst, I have completed financial modeling for over
            50 companies across three major sectors in my country, including
            refineries. Over the past four years, I dedicated myself to this
            role, often working extra unpaid hours, progressing from an
            untrained beginner to leading the financial team at one of my
            country's most established and reputable brokerage and fund
            institution. Originally a Biomedical Engineering major, my curiosity
            led me to add an Economics minor and make a career pivot into
            finance. This path has inspired me to pursue advanced studies in the
            UK, where I look forward to entering the global finance job market
            with a strong work ethic, curiosity, and analytical
            rigour—especially in technical sectors that demand precision and
            insight.
          </p>
        </Card>
      </section>

      {/* Work Experience Section */}
      <section
        id="work-experience"
        className="w-full flex flex-col items-center mt-12"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Work Experience
        </h2>
        <WorkExperience
          company="Tadbirgaran Farda"
          role="Financial Analyst"
          location="Tehran, Iran"
          date="April 2020 - September 2024"
          responsibilities={[
            "Financial Analysis and Research about Companies and Industries",
            "Investment fund portfolio management",
            "Market Trend Analysis",
            "Financial Modelling and Forecasting",
            "Taught financial subjects to colleagues and clients",
          ]}
          achievements={[
            "Financial Modelling of +50 firms",
            "Developed independent valuation projects of +10 firms (Relative and Absolute)",
            "Supervising and leading the analysis team",
            "Financial Modelling and Forecasting of 3 main sectors' firms of Iran (Refinery, Power Plant, Cement)",
            "Represented the organization in analytical meetings and annual general meetings",
          ]}
        />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full flex flex-col items-center mt-12"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Projects</h2>
        <ProjectCard
          title="Automated Excel Dashboard For Communications' Operators"
          description="Developed an automated Excel dashboard to streamline and visualize key metrics for communications operators."
        />
        <ProjectCard
          title="Automated Excel and Power Bi Dashboard For Portfolio Management of 'Moshtarak Tadbir' Fund"
          description="Built automated dashboards in Excel and Power BI for real-time portfolio management and reporting for the 'Moshtarak Tadbir' Fund."
        />
        <ProjectCard
          title="Designing database and backend for Setad Portfolio Management Application"
          description="Designed the database and backend architecture for Setad, one of the largest organizations in Iran, to support their portfolio management application."
        />
        <ProjectCard
          title="Specific Financial Evaluation of 'Barekat Financial Group'"
          description="Conducted a comprehensive financial evaluation for Barekat Financial Group, the largest financial group in Iran's pharmaceutical sector."
        />
      </section>
    </>
  );
}
