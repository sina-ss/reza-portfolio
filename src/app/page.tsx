import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Globe, Phone, Download } from "lucide-react";
import { WorkExperience } from "@/components/WorkExperience";
import { ProjectCard } from "@/components/ProjectCard";
import { CertificationCard } from "@/components/CertificationCard";
import { EducationCard } from "@/components/EducationCard";
import { SkillsSection } from "@/components/SkillsSection";
import { TeachingExperienceCard } from "@/components/TeachingExperienceCard";
import { OtherInfoCard } from "@/components/OtherInfoCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full flex justify-center mt-8 md:mt-12 animate-fadeIn px-2"
      >
        <Card className="w-full max-w-2xl p-4 md:p-8 shadow-xl border-2 border-primary/20 bg-card/80">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <Avatar className="w-24 h-24 md:w-28 md:h-28 border-4 border-primary/30 shadow-md">
              {/* Placeholder for profile photo */}
              <AvatarFallback className="text-3xl md:text-4xl">
                RFH
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center gap-1 md:gap-2">
              <h1 className="text-2xl md:text-4xl font-bold text-center">
                Reza Fakhr Hosseini
              </h1>
              <Badge className="text-sm md:text-base px-3 md:px-4 py-1 bg-primary/90">
                Finance Expert & Financial Analyst
              </Badge>
            </div>
            <Separator className="my-2" />
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
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
            <Button
              asChild
              variant="default"
              size="lg"
              className="mt-2 md:mt-4 gap-2 gold-accent w-full md:w-auto"
            >
              <a href="/resume.pdf" download>
                <Download className="w-5 h-5" /> Download Resume
              </a>
            </Button>
          </div>
        </Card>
      </section>

      {/* Personal Statement Section */}
      <section
        id="personal-statement"
        className="w-full flex justify-center mt-8 md:mt-12 animate-fadeIn px-2"
      >
        <Card className="w-full max-w-2xl p-4 md:p-8 shadow-lg border border-primary/10 bg-card/90">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center">
            Personal Statement
          </h2>
          <Separator className="mb-3 md:mb-4" />
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-center">
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
        className="w-full flex flex-col items-center mt-8 md:mt-12 animate-fadeIn px-2"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center">
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
        className="w-full flex flex-col items-center mt-8 md:mt-12 animate-fadeIn px-2"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center">
          Projects
        </h2>
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

      {/* Certifications Section */}
      <section
        id="certifications"
        className="w-full flex flex-col items-center mt-8 md:mt-12 animate-fadeIn px-2"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center">
          Certifications
        </h2>
        <CertificationCard
          title="Bloomberg Market Concepts"
          issuer="Bloomberg"
          date="Issued: May 2025"
          credentialId="srbcSSX6bmAxvXgaMj4mWADV"
          badgeClassName="gold-accent"
        />
        <CertificationCard
          title="Bloomberg Spreadsheet Analysis"
          issuer="Bloomberg"
          date="Issued: May 2025"
          credentialId="rpu4HEP4p2bp9QYBm1cBRUFS"
          badgeClassName="gold-accent"
        />
        <CertificationCard
          title="Environmental Social Governance"
          issuer="Bloomberg"
          date="Issued: May 2025"
          credentialId="qqqz3Ua7cBbc9o1CcrSs9ntN"
          badgeClassName="gold-accent"
        />
        <CertificationCard
          title="Finance Accelerator"
          issuer="Morgan Stanley and UBS"
          date="Issued: Oct 2024"
          credentialId="f7d3907c-2efc-47b8-b358-1b8a60b27f6e"
          badgeClassName="gold-accent"
        />
        <CertificationCard
          title="CFA level 1 Candidate"
          issuer="CFA Institute"
          date="Scheduled in: Aug 2025 (due to take)"
          badgeClassName="gold-accent"
        />
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="w-full flex flex-col items-center mt-8 md:mt-12 animate-fadeIn px-2"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center">
          Education
        </h2>
        <EducationCard
          degree="M.Sc."
          field="Finance"
          institution="Manchester Metropolitan, Manchester, UK"
          date="2024 – 2025 (Graduation: September 2025)"
          details={["Rank 51+ in World, QS Universities"]}
        />
        <EducationCard
          degree="B.Sc."
          field="Biomedical Engineering (Bioelectric)"
          institution="Amirkabir University of Technology, Tehran, Iran"
          date="2019 – 2023"
          gpa="3.45 (16.43 / 20)"
          details={[
            "Rank 1 BioElectrics Department in Iran, Ministry of Science",
            "GPA of last 60 units: 3.71 (17.138 / 20)",
          ]}
        />
        <EducationCard
          degree="Economy Minor Course"
          institution="Management Department, Amirkabir University of Technology, Tehran, Iran"
          date="2021-2022"
          gpa="3.8 (17.82 / 20)"
        />
        <EducationCard
          degree="High School Diploma"
          field="Mathematics"
          institution="Atomic Energy High School, Tehran, Iran"
          date="2016 – 2019"
          gpa="19.52 / 20"
          details={["Rank 1 High School in Iran, Ministry of Science"]}
        />
      </section>

      <div className="px-2 w-full flex justify-center">
        <SkillsSection />
      </div>

      {/* Teaching Experience Section */}
      <section
        id="teaching-experience"
        className="w-full flex flex-col items-center mt-8 md:mt-12 animate-fadeIn px-2"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center">
          Teaching Experience
        </h2>
        <TeachingExperienceCard
          role="Teaching Assistant"
          department="Department of Biomedical Engineering"
          institution="Amirkabir University of Technology, Tehran, Iran"
          course="Management and Entrepreneurship in Biomedical Engineering"
          professor="Dr. Hamed Azarnoush"
          duration="2 semesters"
          date="2022 – 2023"
        />
      </section>

      {/* Other Section */}
      <section
        id="other"
        className="w-full flex flex-col items-center mt-8 md:mt-12 mb-8 md:mb-12 animate-fadeIn px-2"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center">
          Other
        </h2>
        <OtherInfoCard
          piano={true}
          ielts={{
            overall: "7",
            listening: "7.5",
            reading: "7",
            speaking: "7",
            writing: "6.5",
          }}
        />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full flex flex-col items-center mt-8 md:mt-12 mb-8 md:mb-12 animate-fadeIn px-2"
      >
        <Card className="w-full max-w-2xl p-4 md:p-8 shadow-lg border border-primary/10 bg-card/95 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center gold-accent">
            Contact
          </h2>
          <p className="mb-4 md:mb-6 text-center text-muted-foreground text-base md:text-lg">
            Interested in working together or have a question? Feel free to
            reach out!
          </p>
          <Button
            asChild
            size="lg"
            variant="default"
            className="gap-2 w-full md:w-auto"
          >
            <a href="mailto:rzafh79@gmail.com">
              <Mail className="w-5 h-5" /> Email Me
            </a>
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border bg-background/80 py-6 flex flex-col items-center text-xs md:text-sm text-muted-foreground mt-8 px-2">
        <div className="max-w-2xl w-full flex flex-col md:flex-row justify-between items-center px-2 md:px-4 gap-2">
          <span>
            &copy; {new Date().getFullYear()} Reza Fakhr Hosseini. All rights
            reserved.
          </span>
          <div className="flex gap-2 md:gap-4 mt-2 md:mt-0">
            <a href="#hero" className="hover:text-primary transition-colors">
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
