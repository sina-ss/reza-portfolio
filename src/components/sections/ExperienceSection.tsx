import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 bg-secondary/50 animate-fadeInUp animate-duration-1000 animate-delay-200"
    >
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
        Work Experience
      </h2>
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl text-primary">
                  Financial Analyst
                </CardTitle>
                <CardDescription className="text-lg">
                  Tadbirgaran Farda – Tehran, Iran
                </CardDescription>
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap">
                April 2020 - Sept 2024
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-md text-foreground/90 mb-1">
                Responsibilities:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                <li>
                  Financial Analysis and Research about Companies and Industries
                </li>
                <li>Investment fund portfolio management</li>
                <li>Market Trend Analysis</li>
                <li>Financial Modelling and Forecasting</li>
                <li>Taught financial subjects to colleagues and clients</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-md text-foreground/90 mb-1">
                Achievements:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                <li>Financial Modelling of +50 firms</li>
                <li>
                  Developed independent valuation projects of +10 firms
                  (Relative and Absolute)
                </li>
                <li>Supervising and leading the analysis team</li>
                <li>
                  Financial Modelling and Forecasting of 3 main sectors&apos;
                  firms of Iran (Refinery, Power Plant, Cement)
                </li>
                <li>
                  Represented the organization in analytical meetings and annual
                  general meetings
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
