export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 text-sm text-muted-foreground md:grid-cols-3 md:items-center lg:px-10">
        <p className="md:text-left">
          © 2026 Access AI Consulting. All rights reserved.
        </p>
        <p className="md:text-right">
          <a
            href="mailto:accessaiconsulting@gmail.com"
            className="text-foreground hover:text-primary"
          >
            Contact Us
          </a>
        </p>
      </div>
    </footer>
  );
}
