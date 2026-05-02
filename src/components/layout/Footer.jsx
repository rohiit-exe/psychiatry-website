import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "../../assets/icons/logo.svg";

const TikTok = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const footerLinks = {
  "Quick Links": [
    { label: "Who We Are", href: "/about" },
    { label: "What We Treat", href: "/treatments" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ],
  Resources: [
    { label: "FAQs", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Fees and Insurance", href: "/insurance" },
  ],
  Legal: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Return Policy", href: "/return-policy" },
    { label: "Cookie Settings", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-black pt-12 pb-0 text-white">
      <div className="px-6 md:pl-26 md:pr-6 mx-auto max-w-8xl">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1.2fr_1.8fr]">
          {/* Mapping Links Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <section key={heading} className="text-center md:text-left">
              <h2 className="font-display font-medium text-[18px] leading-[30px] tracking-[0.2px] text-gold mb-6">
                {heading}
              </h2>
              <ul className="space-y-3 font-sans font-normal text-[14px] leading-[20px] text-white/80">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-gold transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Business Hours & Careers Column */}
          <section className="flex flex-col gap-10 text-center md:text-left">
            <div>
              <h2 className="font-display text-xl text-gold mb-6">
                Business Hours
              </h2>
              <div className="text-sm space-y-2 text-white/80">
                <p>Monday - Thursday</p>
                <p>09:00 am - 4:00 pm</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl text-gold mb-4">
                For Careers
              </h2>
              <div className="text-sm space-y-2 text-white/80">
                <p>Interested in joining the ADA Team?</p>
                <a
                  href="mailto:Career@adapsychiatry.com"
                  className="text-white hover:text-gold"
                >
                  Career@adapsychiatry.com
                </a>
              </div>
            </div>
          </section>

          {/* Brand & Locate Column */}
          <section className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 mb-10">
              <img
                src={Logo}
                alt="Ada Psychiatry Logo"
                className="h-8 w-auto"
              />
              <span className="font-display font-medium text-[18px] tracking-[3px]">
                ADA PSYCHIATRY
              </span>
            </div>

            <div className="space-y-6 w-full text-center md:text-left md:pl-[12px]">
              <div>
                <h3 className="text-gold font-display text-lg mb-3">
                  Locate us
                </h3>
                <address className="not-italic text-[16px] leading-[24px] text-white/80">
                  1820 E Ray Road, STE A107, Chandler, Arizona 85225 Phone:
                  480-526-9292
                </address>
              </div>

              <div>
                <h3 className="text-gold text-lg mb-4 font-display">
                  Follow us
                </h3>
                <div className="flex gap-5 justify-center md:justify-start">
                  <a href="https://instagram.com" className="hover:text-gold">
                    <Instagram size={20} />
                  </a>
                  <a href="https://facebook.com" className="hover:text-gold">
                    <Facebook size={20} />
                  </a>
                  <a href="https://twitter.com" className="hover:text-gold">
                    <Twitter size={20} />
                  </a>
                  <a href="https://tiktok.com" className="hover:text-gold">
                    <TikTok size={20} />
                  </a>
                  <a href="https://linkedin.com" className="hover:text-gold">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <p className="mt-14 py-4 border-t border-white/30 text-center font-sans font-normal text-[12px] leading-[30px] tracking-[0.2px] text-white/80">
        © ADA PSYCHIATRY. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
