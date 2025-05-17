"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <Separator className="my-4 w-16 mx-auto" />
        </div>

        <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-card/50 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              As a Financial Analyst, I have completed financial modeling for
              over 50 companies across three major sectors in my country,
              including refineries. Over the past four years, I dedicated myself
              to this role, often working extra unpaid hours, progressing from
              an untrained beginner to leading the financial team at one of my
              country's most established and reputable brokerage and fund
              institution.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Originally a Biomedical Engineering major, my curiosity led me to
              add an Economics minor and make a career pivot into finance. This
              path has inspired me to pursue advanced studies in the UK, where I
              look forward to entering the global finance job market with a
              strong work ethic, curiosity, and analytical rigour—especially in
              technical sectors that demand precision and insight.
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-6 rounded-lg bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-3">Financial Modeling</h3>
            <p className="text-center text-muted-foreground">
              Completed financial modeling for over 50 companies across multiple
              sectors
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-lg bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-3">Team Leadership</h3>
            <p className="text-center text-muted-foreground">
              Led the financial team at an established brokerage and fund
              institution
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-lg bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-3">Technical Analysis</h3>
            <p className="text-center text-muted-foreground">
              Specialized in financial analysis for technical sectors requiring
              precision
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
