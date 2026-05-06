import Logo from "../../../assets/icons/brand/logo.svg";
import {
  footerLinks,
  businessHours,
  socialLinks,
  address,
  careersEmail,
} from "./footer.data.js";

export default function Footer() {
  return (
    <footer id="footer" className="bg-black pt-12 pb-0 text-white">
      <div className="px-6 md:px-10 lg:pl-26 lg:pr-6 mx-auto max-w-8xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1.2fr_1.8fr]">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <section key={heading} className="text-left">
              <h2 className="font-display font-medium text-[16px] sm:text-[18px] leading-[30px] tracking-[0.2px] text-gold mb-4 sm:mb-6">
                {heading}
              </h2>
              <ul className="space-y-3 font-sans font-normal text-[13px] sm:text-[14px] leading-[20px] text-white/80">
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

          <section className="col-span-2 sm:col-span-1 lg:col-auto flex flex-col gap-8 text-left">
            <div>
              <h2 className="font-display text-[16px] sm:text-xl text-gold mb-4 sm:mb-6">
                Business Hours
              </h2>
              <div className="text-sm space-y-2 text-white/80">
                {businessHours.map(({ days, hours }) => (
                  <div key={days}>
                    <p>{days}</p>
                    <p>{hours}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-[16px] sm:text-xl text-gold mb-3 sm:mb-4">
                For Careers
              </h2>
              <div className="text-sm space-y-2 text-white/80">
                <p>Interested in joining the ADA Team?</p>
                <a
                  href={`mailto:${careersEmail}`}
                  className="text-white hover:text-gold break-all"
                >
                  {careersEmail}
                </a>
              </div>
            </div>
          </section>

          <section className="col-span-2 sm:col-span-3 lg:col-auto flex flex-col items-start">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src={Logo}
                alt="Ada Psychiatry Logo"
                className="h-8 w-auto"
              />
              <span className="font-display font-medium text-[16px] sm:text-[18px] tracking-[3px]">
                ADA PSYCHIATRY
              </span>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:pl-[12px]">
              <div>
                <h3 className="text-gold font-display text-[16px] sm:text-lg mb-3">
                  Locate us
                </h3>
                <address className="not-italic text-[14px] sm:text-[16px] leading-[24px] text-white/80">
                  {address}
                </address>
              </div>

              <div>
                <h3 className="text-gold text-[16px] sm:text-lg mb-4 font-display">
                  Follow us
                </h3>
                <div className="flex gap-5">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="hover:text-gold transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-14 py-4 border-t border-white/30 text-center font-sans font-normal text-[12px] leading-[30px] tracking-[0.2px] text-white/80">
        © ADA PSYCHIATRY. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
