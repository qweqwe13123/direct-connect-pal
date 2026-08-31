import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const links = [
  { label: "Главная", href: "/", isRoute: true },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "/about", isRoute: true },
  { label: "Контакты", href: "/contacts", isRoute: true },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tone = scrolled ? "text-foreground" : "text-primary-foreground";

  const handleClick = (l: (typeof links)[number]) => (e: React.MouseEvent) => {
    setOpen(false);
    if (l.isRoute) {
      e.preventDefault();
      navigate(l.href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8">
        <div className="h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={handleClick(links[0])}
            className={`font-body text-[11px] sm:text-xs tracking-[0.3em] uppercase ${tone}`}
          >
            Zarifa Collection
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.slice(1).map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={handleClick(l)}
                className={`link-underline font-body text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-opacity duration-300 hover:opacity-70 ${tone}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="/contacts"
            onClick={handleClick(links[3])}
            className={`hidden md:inline-block link-underline font-body text-[11px] tracking-[0.18em] uppercase ${tone}`}
          >
            Связаться
          </a>

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 ${tone}`}
            aria-label="Меню"
          >
            <div className="relative w-5 h-4">
              <span
                className={`absolute left-0 w-5 h-px bg-current transition-all duration-300 ${
                  open ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 w-5 h-px bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-5 h-px bg-current transition-all duration-300 ${
                  open ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-background transition-[max-height] duration-500 ${
          open ? "max-h-80 border-b border-border" : "max-h-0"
        }`}
      >
        <div className="px-5 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={handleClick(l)}
              className="font-body text-xs tracking-[0.2em] uppercase text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
