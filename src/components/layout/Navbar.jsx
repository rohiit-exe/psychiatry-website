import { ChevronDown, Menu } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Logo from "../../assets/icons/logo.svg";

const navItems = ["Who we are", "Who we treat", "Services", "Resources"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-black text-white">
      <div
        className={`mx-auto
        max-w-8xl
        px-6
        lg:px-8`}
      >
        <nav
          className="
          flex
          items-center
          justify-between
          h-[83px]"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="Ada Psychiatry home"
          >
            <span>
              <img
                src={Logo}
                alt="Ada Psychiatry Logo"
                className="h-8 w-auto"
              />
            </span>
            <span
              className="
                text-[18px]
                font-medium
                leading-[52px]
                tracking-[3px]
              "
            >
              Ada Psychiatry
            </span>
          </a>

          <div className="flex items-center gap-8">
            <ul
              className="
                  hidden
                  items-center
                  gap-8
                  text-[14px]
                  font-medium
                  leading-[52px]
                  lg:flex
                "
            >
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="
                      inline-flex
                      items-center
                      gap-1
                      text-white
                      hover:text-gold
                      transition
                    "
                  >
                    {item}
                    <ChevronDown size={14} strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>

            <Button
              href="#appointment"
              variant="navbar"
              className="hidden sm:inline-flex"
            >
              Book An Appointment
            </Button>

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
  );
}
