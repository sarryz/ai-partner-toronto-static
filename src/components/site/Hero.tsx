import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Subtle grid + glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--navy-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--navy-foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-accent)" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:py-36 lg:px-10">

      <h3 className="mx-auto mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.1] text-navy-foreground sm:text-5xl lg:text-6xl">
  Over 50% of Canadian small businesses are already profiting from AI.{" "}
  <span className="relative inline-block text-teal-300 white-space-nowrap drop-shadow-sm">
    Is yours?
    <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 opacity-80" />
  </span>
</h3>


        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-navy-foreground/75">
          Access AI Consulting helps your small business seamlessly integrate AI tools that cut costs, save time, and grow revenue.
        </p>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 bg-navy-foreground px-7 text-base font-semibold text-navy shadow-elegant transition-transform hover:scale-[1.02] hover:bg-navy-foreground/95"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wKustJ9EM-AV_6KJGiLf1XCjO8mgzDGK25FsrHtB8gpGSmmSuY8rRSWuS2taugH3Lnep1yPQ1?gv=true" className="inline-flex items-center gap-2">
              Book Free Consult
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
