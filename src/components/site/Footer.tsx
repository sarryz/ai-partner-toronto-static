export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 text-sm text-muted-foreground md:grid-cols-3 md:items-center lg:px-10">
        <p className="md:text-left">
          © 2026 [Your Business Name]. All rights reserved.
        </p>
        <p className="md:text-center">
          Proudly supporting small businesses in Toronto and the GTA.
        </p>
        <p className="md:text-right">
          Contact:{" "}
          <a
            href="mailto:hello@example.com"
            className="text-foreground hover:text-primary"
          >
            [Email Address]
          </a>{" "}
          |{" "}
          <a href="tel:+10000000000" className="text-foreground hover:text-primary">
            [Phone Number]
          </a>
        </p>
      </div>
    </footer>
  );
}
