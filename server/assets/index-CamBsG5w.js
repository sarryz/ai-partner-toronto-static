import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Search, Workflow, MessagesSquare, Linkedin } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-lg" : "bg-transparent"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-md bg-navy text-navy-foreground", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-semibold tracking-tight text-foreground", children: "Access AI Consulting" })
        ] }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "bg-navy text-navy-foreground hover:bg-navy/90", children: /* @__PURE__ */ jsx("a", { href: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wKustJ9EM-AV_6KJGiLf1XCjO8mgzDGK25FsrHtB8gpGSmmSuY8rRSWuS2taugH3Lnep1yPQ1?gv=true", children: "Book Free Consult" }) })
      ] })
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "top",
      className: "relative overflow-hidden",
      style: { background: "var(--gradient-hero)" },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 opacity-[0.08]",
            style: {
              backgroundImage: "linear-gradient(var(--navy-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--navy-foreground) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-3xl",
            style: { background: "var(--gradient-accent)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-6 py-24 text-center lg:py-36 lg:px-10", children: [
          /* @__PURE__ */ jsxs("h3", { className: "mx-auto mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.1] text-navy-foreground sm:text-5xl lg:text-6xl", children: [
            "50% of Canadian small businesses are already profiting from AI. ",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "font-semibold font-normal text-amber-200/90 tracking-wide block sm:inline mt-2 sm:mt-0", children: [
              /* @__PURE__ */ jsx("br", {}),
              "Is yours?"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 max-w-2xl text-2xl leading-relaxed text-navy-foreground/75", children: "Access AI Consulting helps your small business seamlessly integrate AI tools that cut costs, save time, and grow revenue." }),
          /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsx(
            Button,
            {
              asChild: true,
              size: "lg",
              className: "h-12 bg-navy-foreground px-7 text-base font-semibold text-navy shadow-elegant transition-transform hover:scale-[1.02] hover:bg-navy-foreground/95",
              style: { boxShadow: "var(--shadow-elegant)" },
              children: /* @__PURE__ */ jsxs("a", { href: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wKustJ9EM-AV_6KJGiLf1XCjO8mgzDGK25FsrHtB8gpGSmmSuY8rRSWuS2taugH3Lnep1yPQ1?gv=true", className: "inline-flex items-center gap-2", children: [
                "Book Free Consult",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ] })
            }
          ) })
        ] })
      ]
    }
  );
}
const services = [
  {
    icon: Search,
    title: "Assess",
    paragraphs: [
      "We work directly with you to understand the unique contours of your business and identify high-impact opportunities for AI integration.",
      "We then deliver a user-friendly AI roadmap complete with prioritized initiatives, integration strategies, ROI analysis, and vendor recommendations that favour Canadian-built solutions whenever possible."
    ]
  },
  {
    icon: Workflow,
    title: "Deploy",
    paragraphs: [
      "Turnkey deployment that seamlessly integrates AI tools into your existing operations.",
      "You get a custom high-performance tech stack, plus hands-on training and plain-language documentation to ensure smooth adoption.",
      "The result is a suite of easy-to-use AI tools that work exactly as intended, delivering measurable benefits to your business immediately."
    ]
  },
  {
    icon: MessagesSquare,
    title: "Support",
    paragraphs: [
      "Ongoing tech support with a human touch to ensure your AI solutions continue to deliver results.",
      "You'll have direct access to our experts for troubleshooting assistance, essential stack maintenance and routine token management.",
      "We also provide follow-up training sessions and curated educational resources, distilling the rapidly evolving AI landscape into actionable briefs so you can focus on your business."
    ]
  }
];
function Services() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "services",
      "aria-labelledby": "services-heading",
      className: "bg-background py-24 lg:py-32",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold uppercase tracking-[0.18em] text-primary", children: "What we do" }),
          /* @__PURE__ */ jsx(
            "h2",
            {
              id: "services-heading",
              className: "mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl",
              children: "Grow your small business with accessible, impactful AI solutions"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: services.map(({ icon: Icon, title, paragraphs }, i) => /* @__PURE__ */ jsxs(
          "article",
          {
            className: "group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30",
            style: { boxShadow: "var(--shadow-card)" },
            children: [
              /* @__PURE__ */ jsx("div", { className: "mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxs("div", { className: "mb-3 text-xs font-medium text-muted-foreground", children: [
                "0",
                i + 1
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-foreground", children: title }),
              /* @__PURE__ */ jsx("div", { className: "mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground", children: paragraphs.map((p, idx) => /* @__PURE__ */ jsx("p", { children: p }, idx)) })
            ]
          },
          title
        )) })
      ] })
    }
  );
}
const url$1 = "/__l5e/assets-v1/242015ff-b39c-4c6d-b2e4-a3b6480f02c7/founder-sarry.webp";
const sarryAsset = {
  url: url$1
};
const url = "/__l5e/assets-v1/3e531f20-6b38-43f1-b34e-a02ea6663f51/founder-david.webp";
const davidAsset = {
  url
};
const sarryPhoto = sarryAsset.url;
const davidPhoto = davidAsset.url;
const founders = [
  {
    name: "Sarry Zheng",
    title: "Co-Founder",
    photo: sarryPhoto,
    linkedin: "https://www.linkedin.com/in/sarryz/",
    bio: "Sarry Zheng advises businesses and government on digital transformation, AI adoption and innovation across North America. With an MBA and a background in science, she helps organizations de-risk technological change and navigate the complex digital landscape responsibly. Raised in an entrepreneurial family, she has a lifelong passion for helping small businesses succeed."
  },
  {
    name: "David Tobiasz",
    title: "Co-Founder",
    photo: davidPhoto,
    linkedin: "https://www.linkedin.com/in/david-tobiasz/",
    bio: "David Tobiasz is a senior business strategist with over 15 years of experience across market development, product design and operations management at SMEs and enterprise-level companies. A small business AI consultant since 2024, David is an early-adopter of AI technologies in his professional and personal life, and a first-hand advocate for AI's demonstrated capacity to empower small businesses of any size, in any sector."
  }
];
function About() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "about",
      "aria-labelledby": "about-heading",
      className: "bg-navy py-24 text-navy-foreground lg:py-32",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold uppercase tracking-[0.18em] text-navy-foreground/60", children: "Who we are" }),
          /* @__PURE__ */ jsx(
            "h2",
            {
              id: "about-heading",
              className: "mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]",
              children: "A boutique, human touch backed by proven business experience."
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-16 lg:gap-24", children: founders.map((f) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-12 lg:gap-16",
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-44 w-44 shrink-0 overflow-hidden rounded-full border border-navy-foreground/10 bg-navy-foreground/5", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: f.photo,
                  alt: `Portrait of ${f.name}`,
                  width: 176,
                  height: 176,
                  loading: "lazy",
                  className: "aspect-square h-full w-full rounded-full object-cover object-top"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 text-left", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold", children: f.name }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-medium uppercase tracking-[0.14em] text-navy-foreground/60", children: f.title }),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: f.linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `${f.name} on LinkedIn`,
                    className: "mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-navy-foreground/20 text-navy-foreground/80 transition-colors hover:bg-navy-foreground hover:text-navy",
                    children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-navy-foreground/80", children: f.bio })
              ] })
            ]
          },
          f.name
        )) }),
        /* @__PURE__ */ jsx("div", { id: "contact", className: "mt-16 flex justify-center", children: /* @__PURE__ */ jsx(
          Button,
          {
            asChild: true,
            size: "lg",
            className: "h-12 bg-navy-foreground px-7 text-base font-semibold text-navy hover:bg-navy-foreground/95",
            children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wKustJ9EM-AV_6KJGiLf1XCjO8mgzDGK25FsrHtB8gpGSmmSuY8rRSWuS2taugH3Lnep1yPQ1?gv=true",
                className: "inline-flex items-center gap-2",
                children: [
                  "Book Free Consult",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            )
          }
        ) })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-background py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-4 px-6 text-sm text-muted-foreground md:grid-cols-2 md:items-center lg:px-10", children: [
    /* @__PURE__ */ jsx("p", { className: "md:text-left", children: "© 2026 Access AI Consulting. All rights reserved." }),
    /* @__PURE__ */ jsx("p", { className: "md:text-right", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "mailto:accessaiconsulting@gmail.com",
        className: "text-foreground hover:text-primary",
        children: "Contact Us"
      }
    ) })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(About, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
