import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../../../assets/icons/brand/logo.svg";
import Button from "../../ui/Button";

const navItems = ["Who we are", "Who we treat", "Services", "Resources"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-black text-white">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between h-[83px]"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 shrink-0"
              aria-label="Ada Psychiatry home"
            >
              <img
                src={Logo}
                alt="Ada Psychiatry Logo"
                className="h-8 w-auto shrink-0"
              />
              <span className="text-[18px] font-medium tracking-[3px] whitespace-nowrap">
                Ada Psychiatry
              </span>
            </a>

            {/* Right side */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Desktop nav links */}
              <ul className="hidden items-center gap-8 text-[14px] font-medium lg:flex">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="inline-flex items-center gap-1 text-white hover:text-gold transition"
                    >
                      {item}
                      <ChevronDown size={14} strokeWidth={1.5} />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Button href="#appointment" variant="navbar">
                  Book An Appointment
                </Button>
              </div>

              {/* Hamburger button — visible below lg */}
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full border border-white/20 lg:hidden"
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`fixed top-[83px] left-0 right-0 z-40 bg-black text-white lg:hidden
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-4 sm:px-6 py-4 gap-1 text-[15px] font-medium border-t border-white/10">
          {navItems.map((item, index) => (
            <li
              key={item}
              className={`py-4 ${
                index !== navItems.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <a
                href="#services"
                className="flex items-center justify-between text-white hover:text-gold transition"
              >
                {item}
                <ChevronDown size={16} strokeWidth={1.5} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating bottom button — mobile/tablet only */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 lg:hidden">
        <Button
          href="#appointment"
          variant="navbar"
          className="w-full max-w-sm shadow-lg shadow-black/40"
        >
          Book An Appointment
        </Button>
      </div>
    </>
  );
}
