import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/shared";

export function Navbar() {
  const [location, setLocation] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setLocation(window.location.pathname);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How we help", path: "/services" },
    { name: "How it works", path: "/how-it-works" },
    { name: "About", path: "/about" },
    { name: "For Referrers", path: "/for-referrers" },
  ];

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo-mark.png"
            alt="InKindRa"
            className="w-10 h-10 object-contain group-hover:opacity-90 transition-opacity"
          />
          <span className="font-serif text-[26px] font-medium text-teal-deep tracking-tight">
            InKindRa
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className={`text-[15px] font-medium transition-colors hover:text-teal-deep ${
                    location === link.path ? "text-teal-deep" : "text-text-muted"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button href="https://calendly.com/kate-phillips-inkindra/30min" external>
            Book a free call
          </Button>
        </nav>
        <button
          className="lg:hidden p-2 text-teal-deep"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div
        className={`lg:hidden absolute top-[72px] left-0 right-0 bg-cream/98 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className={`block text-lg font-medium transition-colors ${
                    location === link.path ? "text-teal-deep" : "text-text-muted"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-border">
            <Button href="https://calendly.com/kate-phillips-inkindra/30min" external className="w-full">
              Book a free call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}