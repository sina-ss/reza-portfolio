import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";
import React from "react";

const skills = {
  "Programming Skills": [
    "VBA (Advanced)",
    "MATLAB (Advanced)",
    "Python (Advanced)",
    "JavaScript (Intermediate)",
    "TypeScript (Intermediate)",
    "C++ (Intermediate)",
    "LaTeX (Familiar)",
    "Assembly (Familiar)",
    "Figma (Familiar)",
    "HTML (Familiar)",
  ],
  "Software Skills": [
    "Microsoft Office Suite (Word, PowerPoint, Excel) (Advanced)",
    "Windows OS (Advanced)",
    "Bloomberg Terminal (Intermediate)",
  ],
  "Investment Analysis": [
    "Financial and Investment Spreadsheet Modeling (Advanced)",
    "Merge/Acquisition Modeling (Advanced)",
    "Asset Management (Advanced)",
    "Discounted Cash Flow (DCF) Modeling (Advanced)",
    "Comparable Company Analysis (CCA) and Precedent Transactions (Advanced)",
    "LBO and Leveraged Buyout Modeling (Advanced)",
    "Financial Statement Analysis and Forecasting (Advanced)",
    "Equity Valuation Metrics (P/E, EV/EBITDA, PEG, ROE) (Advanced)",
    "Sensitivity and Scenario Analysis (Advanced)",
    "Financial Ratio Analysis and Interpretation (Advanced)",
    "Industry-Specific Valuation Models (SaaS, Financial, Metal Manufacturer [copper, steel, gold, ferro silicon]) (Advanced)",
    "Merger Consequence Analysis and Accretion/Dilution Modeling (Advanced)",
    "Pro Forma Financial Statement Projections (Advanced)",
    "Working Capital and Cash Flow Optimization Models (Advanced)",
    "Monte Carlo Simulation for Risk Assessment (Advanced)",
    "Multifactor Models and CAPM Analysis (Advanced)",
    "Bloomberg Terminal and Capital IQ Data Analysis (Advanced)",
  ],
  "Soft Skills": [
    "No Ego",
    "Openness to Feedback",
    "Adaptability",
    "Emotional Intelligence",
    "Team Player",
    "Positive Attitude",
  ],
  Other: ["Piano"],
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full flex flex-col items-center mt-12">
      <Card className="w-full max-w-2xl p-4 md:p-8 shadow-lg border border-primary/10 bg-card/95">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-lg md:text-2xl font-semibold text-center">
            Skills
          </h2>
        </div>
        <Separator className="mb-6" />
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-base md:text-lg font-bold mb-2 text-primary/90 break-words">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1 md:gap-2 overflow-x-auto pb-1">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    className="text-xs md:text-sm px-2 md:px-3 py-1 bg-muted text-primary/90 font-medium whitespace-nowrap max-w-[90vw] md:max-w-xs truncate"
                    title={skill}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
