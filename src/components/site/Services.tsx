import { Workflow, Search, MessagesSquare, type LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  paragraphs: string[];
};

const services: Service[] = [
  {
    icon: Search,
    title: "Assess",
    paragraphs: [
      "We work directly with you to understand the unique contours of your business and identify high-impact opportunities for AI integration.",
      "We then deliver a user-friendly AI roadmap complete with prioritized initiatives, integration strategies, ROI analysis, and vendor recommendations that favour Canadian-built solutions whenever possible.",
    ],
  },
  {
    icon: Workflow,
    title: "Deploy",
    paragraphs: [
      "Turnkey deployment that seamlessly integrates AI tools into your existing operations.",
      "You get a custom high-performance tech stack, plus hands-on training and plain-language documentation to ensure smooth adoption.",
      "The result is a suite of easy-to-use AI tools that work exactly as intended, delivering measurable benefits to your business immediately.",
    ],
  },
  {
    icon: MessagesSquare,
    title: "Support",
    paragraphs: [
      "Ongoing tech support with a human touch to ensure your AI solutions continue to deliver results.",
      "You'll have direct access to our experts for troubleshooting assistance, essential stack maintenance and routine token management.",
      "We also provide follow-up training sessions and curated educational resources, distilling the rapidly evolving AI landscape into actionable briefs so you can focus on your business.",
    ],
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
          <span className="text-3xl font-bold uppercase tracking-[0.18em] text-primary">
            What we do
          </span>
          <h2
            id="services-heading"
            className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl"
          >
            Grow your small business with accessible, impactful AI solutions
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, paragraphs }, i) => (
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
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
