import { Award, Building2, MapPin, ArrowRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const marks: { icon: LucideIcon; label: string }[] = [
  { icon: Award, label: "MBA" },
  { icon: Building2, label: "Digital Transformation" },
  { icon: MapPin, label: "Toronto, Canada" },
];


export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-navy py-24 text-navy-foreground lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/60">
              Who we are
            </span>
            <h2
              id="about-heading"
              className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]"
            >
              A Boutique, Human Touch Backed by Proven Business Experience.
            </h2>

            <ul className="mt-10 space-y-3">
              {marks.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-sm text-navy-foreground/80"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-foreground/15 bg-navy-foreground/5">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-navy-foreground/80 lg:col-span-7 lg:text-lg">
            <p>
             Sarry Zheng advises businesses and government on digital transformation, 
              AI adoption and innovation across North America. She helps organizations 
              de-risk technological change and navigate complex digital landscape responsibly. 
              Raised in an entrepreneurial family, she has a lifelong passion for helping small businesses succeed. 
            </p>
            <p>
             David Tobiasz is a senior business strategist with over 15 years of experience 
              across market development, product design and operations management at SMEs and 
              enterprise-level companies. A small business AI consultant since 2024, David is an 
              early-adopter of AI technologies in his professional and personal life, and a first-hand 
              advocate for AI's demonstrated capacity to empower small businesses of any size, in any sector. 
            </p>

            <div id="contact" className="pt-4">
              <Button
                asChild
                size="lg"
                className="h-12 bg-navy-foreground px-7 text-base font-semibold text-navy hover:bg-navy-foreground/95"
              >
                <a
                  href="https://calendar.app.google/WAq7LFjga1ttG34CA"
                  className="inline-flex items-center gap-2"
                >
                  Book Your Free Assessment Today
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
