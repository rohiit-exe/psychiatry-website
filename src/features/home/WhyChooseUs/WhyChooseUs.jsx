import { useState } from "react";
import Container from "../../../components/ui/Container";
import counselingPhoto from "../../../assets/images/counseling.webp";

const accordionData = [
  {
    title: "Convenient access",
    content:
      "We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
  },
  {
    title: "Concierge approach",
    content:
      "Personalized care tailored to your unique schedule and mental health needs.",
  },
  {
    title: "High quality service",
    content:
      "Evidence-based treatments delivered with clinical excellence and attention to detail.",
  },
  {
    title: "Trusted and empathic providers",
    content:
      "Our team consists of board-certified professionals dedicated to compassionate care.",
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open

  return (
    <section id="founder" className="bg-cream-strong py-20">
      <Container className="grid gap-20 md:grid-cols-[1.05fr_0.95fr] items-start">
        {/* Image Section */}
        <div className="relative mx-auto w-fit">
          <div
            className="absolute -bottom-4 -right-4 h-[90%] w-full border border-[#DAA520] z-0"
            aria-hidden="true"
          />
          <figure className="relative z-10 overflow-hidden bg-white shadow-md">
            <img
              src={counselingPhoto}
              alt="Therapy session"
              className="h-auto w-full max-w-[500px] object-cover block"
            />
          </figure>
        </div>

        {/* Content Section */}
        <article>
          <h2 className="font-display font-semibold text-[40px] leading-[47.5px] text-ink mb-8">
            Why Should You Choose <br />
            Ada Psychiatry?
          </h2>

          <div className="divide-y divide-line">
            {accordionData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <section key={index} className="py-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center gap-4 text-left transition-colors hover:text-gold"
                  >
                    <span className="text-[28px] leading-none text-gold w-[24px] flex items-center justify-center">
                      {isOpen ? "—" : "+"}
                    </span>
                    <h3 className="font-display font-medium text-[24px] leading-[24px] text-ink">
                      {item.title}
                    </h3>
                  </button>

                  {/* Collapsible Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans font-normal text-[20px] leading-[27px] text-ink/80 max-w-[520px] pl-12">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </article>
      </Container>
    </section>
  );
}
