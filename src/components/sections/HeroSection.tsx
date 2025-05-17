import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center py-16 text-center animate-fadeInUp animate-duration-1000"
    >
      <div className="mb-8">
        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
          Reza Fakhr Hosseini
        </h1>
        <p className="mt-6 text-xl text-foreground/80 max-w-2xl mx-auto">
          Dedicated Financial Analyst with expertise in financial modeling,
          market analysis, and investment strategy. Seeking to leverage
          analytical rigor in the global finance market.
        </p>
      </div>
      <Button asChild variant="outline" size="lg">
        <Link href="#about" className="flex items-center gap-2">
          Learn More About Me
          <ArrowDownCircle className="h-5 w-5" />
        </Link>
      </Button>
    </section>
  );
}
