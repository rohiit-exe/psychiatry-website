import { ChevronDown, Menu } from "lucide-react";
import Button from "../ui/Button";
import Logo from "../../assets/icons/logo.svg";

const navItems = ["Who we are", "Who we treat", "Services", "Resources"];

export default function Navbar() {
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

              {/* Wrapped in div so hidden/lg:block works reliably */}
              <div className="hidden lg:block">
                <Button href="#appointment" variant="navbar">
                  Book An Appointment
                </Button>
              </div>

              {/* Hamburger: visible below lg */}
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full border border-white/20 lg:hidden"
                aria-label="Open navigation"
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

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
