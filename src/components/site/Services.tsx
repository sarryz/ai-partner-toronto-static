import { Workflow, Puzzle, GraduationCap, type LucideIcon } from "lucide-react";


type Service = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const services: Service[] = [
  {
    icon: Workflow,
    title: "Workflow & Productivity Automation",
    copy: "We implement custom AI systems to handle your repetitive daily tasks—from automated client follow-ups to data management—giving your team hours back every day to focus on high-value work.",
  },
  {
    icon: Puzzle,
    title: "Tailored Tool Selection & Integration",
    copy: "We source, configure, and connect the exact AI applications that align with your specific business model, ensuring your new technology directly drives revenue and operational growth.",
  },
  {
    icon: GraduationCap,
    title: "Practical Staff Upskilling",
    copy: "We provide hands-on, accessible training to ensure your team confidently adopts your new AI tools, maximizing your return on investment from day one.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            What we do
          </span>
          <h2
            id="services-heading"
            className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl"
          >
            Easy, Custom AI Tools to Grow Your Business.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We design and deliver tailored, user-friendly AI solutions that
            integrate seamlessly into your daily operations to maximize growth
            and efficiency.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, copy }, i) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mb-3 text-xs font-medium text-muted-foreground">
                0{i + 1}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {copy}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
