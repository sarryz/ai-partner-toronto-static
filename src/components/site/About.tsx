import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sarryPhoto from "@/assets/founder-sarry.jpg";
import davidPhoto from "@/assets/founder-david.jpg";

type Founder = {
  name: string;
  title: string;
  photo: string;
  bio: string;
};

const founders: Founder[] = [
  {
    name: "Sarry Zheng",
    title: "Co-Founder",
    photo: sarryPhoto,
    bio: "Sarry Zheng advises businesses and government on digital transformation, AI adoption and innovation across North America. She helps organizations de-risk technological change and navigate the complex digital landscape responsibly. Raised in an entrepreneurial family, she has a lifelong passion for helping small businesses succeed.",
  },
  {
    name: "David Tobiasz",
    title: "Co-Founder",
    photo: davidPhoto,
    bio: "David Tobiasz is a senior business strategist with over 15 years of experience across market development, product design and operations management at SMEs and enterprise-level companies. A small business AI consultant since 2024, David is an early-adopter of AI technologies in his professional and personal life, and a first-hand advocate for AI's demonstrated capacity to empower small businesses of any size, in any sector.",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-navy py-24 text-navy-foreground lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/60">
            Who we are
          </span>
          <h2
            id="about-heading"
            className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]"
          >
            A boutique, human touch backed by proven business experience.
          </h2>
        </div>

        <div className="mt-16 grid gap-16 lg:gap-24">
          {founders.map((f) => (
            /* CHANGED: Added sm:even:flex-row-reverse to swap image/text placement on every second card */
            <div 
              key={f.name} 
              className="flex flex-col gap-6 sm:flex-row sm:even:flex-row-reverse sm:items-start sm:gap-12 lg:gap-16"
            >
              
              {/* Image Container */}
              <div className="h-44 w-44 shrink-0 overflow-hidden rounded-full border border-navy-foreground/10 bg-navy-foreground/5">
                <img
                  src={f.photo}
                  alt={`Portrait of ${f.name}`}
                  width={176}
                  height={176}
                  loading="lazy"
                  className="aspect-square h-full w-full rounded-full object-cover object-top"
                />
              </div>

              {/* Text Container - CHANGED: Added text alignment that shifts depending on layout direction */}
              <div className="flex-1 sm:even:text-right">
                <h3 className="font-display text-xl font-semibold">{f.name}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-navy-foreground/60">
                  {f.title}
                </p>
                <p className="mt-4 text-base leading-relaxed text-navy-foreground/80 sm:even:text-left">
                  {f.bio}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
  
        <div id="contact" className="mt-16 flex justify-center">
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
    </section>
  );
}
