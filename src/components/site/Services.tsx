import { Workflow, Search, LifeBuoy, type LucideIcon } from "lucide-react";


type Service = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const services: Service[] = [
  {
    icon: Search,
    title: "Access",
    copy: "We work directly with you to understand the unique contours of your operations and the specific challenges your business faces.\n\nFollowing the discovery phase, we deliver a user-friendly AI roadmap complete with prioritized initiatives, integration strategies, ROI analysis, and honest vendor recommendations that favour Canadian-built solutions whenever possible.",
  },
  {
    icon: Workflow,
    title: "Deploy",
    copy: "Turnkey deployment that seamlessly integrates new AI tools into your existing operations.\n\nYou receive a targeted, high-performing tech stack, plus hands-on training and plain-language documentation to ensure smooth adoption.\n\nThe result is a suite of easy-to-use AI tools that work exactly as intended, delivering tangible benefits to your business immediately.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    copy: "We provide ongoing, turnkey support to ensure your AI solutions continue to deliver results.\n\nYou’ll have direct access to our experts for troubleshooting, while we handle essential stack maintenance and token management.\n\nWe also provide regular training and curated educational resources, serving as your dedicated AI advisors who navigate the complex evolving landscape so you can focus entirely on your business.",
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
           Grow your small business with accessible, impactful AI solutions
          </h2>
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
