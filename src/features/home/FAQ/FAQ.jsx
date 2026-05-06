import { useState } from "react";
import Button from "../../../components/ui/Button";
import SectionTitle from "../../../components/ui/SectionTitle";

const faqs = [
  {
    question: "Is Ada psychiatry confidential?",
    answer:
      "We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
  },
  {
    question: "What is the best way to schedule an appointment?",
    answer:
      "You can schedule an appointment directly through our online portal or by calling our office during business hours.",
  },
  {
    question: "Do you prescribe controlled substance medication?",
    answer:
      "Medication management is handled on a case-by-case basis following a comprehensive evaluation by our providers.",
  },
  {
    question: "How long does the initial appointment take?",
    answer:
      "Initial psychiatric evaluations typically last 60 minutes to ensure a thorough assessment.",
  },
];

export default function FAQ() {
  // Initialize with the first FAQ open (index 0)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    // If the clicked index is already open, close it (set to null), otherwise open it
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-cream py-24 md:pt-34 md:pb-24">
      <div className="mx-auto w-[1089px] max-w-full px-5">
        <SectionTitle>Frequently asked questions</SectionTitle>
        <div className="mt-12 w-full max-w-[1089px] divide-y divide-[#DAA520]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={index} className="py-7">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center gap-5 text-left focus:outline-none"
                >
                  <span className="font-sans text-[32px] font-light leading-none text-[#DAA520] transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                  <h3 className="font-display text-[24px] font-semibold leading-[24px] text-ink">
                    {faq.question}
                  </h3>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer && (
                    <p className="mt-5 pl-[48px] font-sans text-[24px] font-normal leading-[32px] text-ink ">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Button iconRight href="#footer" className="px-10 w-[335px] h-[56px]">
            See all FAQ
          </Button>
        </div>
      </div>
    </section>
  );
}
