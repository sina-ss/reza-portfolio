import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 animate-fadeInUp animate-duration-1000 animate-delay-200"
    >
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="text-xl text-primary">
              Automated Excel Dashboard
            </CardTitle>
            <CardDescription>
              For Communications&apos; Operators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">
              Developed an automated Excel dashboard to streamline data analysis
              and reporting for communications operators.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="text-xl text-primary">
              Portfolio Management Dashboard
            </CardTitle>
            <CardDescription>
              Excel and Power BI for &quot;Moshtarak Tadbir&quot; Fund
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">
              Created an automated dashboard using Excel and Power BI for
              effective portfolio management of the &quot;Moshtarak Tadbir&quot;
              Fund.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="text-xl text-primary">
              Portfolio Management Application
            </CardTitle>
            <CardDescription>Database and Backend for Setad</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">
              Designed the database architecture and backend systems for a
              portfolio management application for Setad, a major Iranian
              organization.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="text-xl text-primary">
              Specific Financial Evaluation
            </CardTitle>
            <CardDescription>
              &quot;Barekat Financial Group&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">
              Conducted a specific financial evaluation for &quot;Barekat
              Financial Group,&quot; the largest financial group in Iran&apos;s
              pharmaceutical sector.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
