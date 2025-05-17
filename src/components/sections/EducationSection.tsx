import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-16 sm:py-24 animate-fadeInUp animate-duration-1000 animate-delay-200"
    >
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
        Education & Certifications
      </h2>

      {/* Degrees */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold text-primary mb-6 text-center sm:text-left">
          Degrees
        </h3>
        <div className="space-y-6">
          <Card className="shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle className="text-xl text-primary">
                  M.Sc. in Finance
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
                  2024 – 2025
                </p>
              </div>
              <CardDescription>
                Manchester Metropolitan, Manchester, UK
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80">
                Graduation expected September 2025. QS World University Rank
                51+.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle className="text-xl text-primary">
                  B.Sc. in Biomedical Engineering (Bioelectric)
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
                  2019 – 2023
                </p>
              </div>
              <CardDescription>
                Amirkabir University of Technology, Tehran, Iran
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80">
                GPA: 3.45/4.0 (16.43/20) | GPA of last 60 units: 3.71/4.0
                (17.138/20). Ranked #1 BioElectrics Dept. in Iran.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle className="text-xl text-primary">
                  Economy Minor Course
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
                  2021 – 2022
                </p>
              </div>
              <CardDescription>
                Management Department, Amirkabir University of Technology,
                Tehran, Iran
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80">
                GPA: 3.8/4.0 (17.82/20)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-primary mb-6 text-center sm:text-left">
          Certifications
        </h3>
        <div className="space-y-6">
          <Card className="shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle className="text-xl text-primary">
                  Bloomberg Market Concepts
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
                  Issued: May 2025
                </p>
              </div>
              <CardDescription>Bloomberg</CardDescription>
            </CardHeader>
          </Card>
          <Card className="shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle className="text-xl text-primary">
                  Bloomberg Spreadsheet Analysis
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
                  Issued: May 2025
                </p>
              </div>
              <CardDescription>Bloomberg</CardDescription>
            </CardHeader>
          </Card>
          <Card className="shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle className="text-xl text-primary">
                  Environmental Social Governance
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
                  Issued: May 2025
                </p>
              </div>
              <CardDescription>Bloomberg</CardDescription>
            </CardHeader>
          </Card>
          <Card className="shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle className="text-xl text-primary">
                  Finance Accelerator
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
                  Issued: Oct 2024
                </p>
              </div>
              <CardDescription>Morgan Stanley and UBS</CardDescription>
            </CardHeader>
          </Card>
          <Card className="shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle className="text-xl text-primary">
                  CFA Level 1 Candidate
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
                  Scheduled: Aug 2025
                </p>
              </div>
              <CardDescription>CFA Institute</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
