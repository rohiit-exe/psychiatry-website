const testimonials = [
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    author: "Carl Rowan",
    company: "Aglets Inc",
    initials: "CR",
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    author: "Carl Rowan",
    company: "Aglets Inc",
    initials: "CR",
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    author: "Carl Rowan",
    company: "Aglets Inc",
    initials: "CR",
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    author: "Carl Rowan",
    company: "Aglets Inc",
    initials: "CR",
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    author: "Carl Rowan",
    company: "Aglets Inc",
    initials: "CR",
  },
];

import { useState, useRef, useEffect } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import AphostropheIcon from "../../assets/icons/aphostrophe.svg";
import HexagonIcon from "../../assets/icons/hexagon-icon";

export default function Testimonials() {
  // 1. Initialize activeIndex to 1 (the 2nd card)
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollRef = useRef(null);
  const isInitialMount = useRef(true);

  // 2. Automatically scroll to the 2nd card on load
  useEffect(() => {
    if (isInitialMount.current && scrollRef.current) {
      const cardWidth = 718;
      const gap = 24;
      // Scroll to the second card (index 1)
      scrollRef.current.scrollLeft = 1 * (cardWidth + gap);
      isInitialMount.current = false;
    }
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const cardWidth = 718;
      const gap = 24;

      const centerPoint = scrollLeft + offsetWidth / 2;
      const index = Math.round(
        (centerPoint - offsetWidth / 2) / (cardWidth + gap)
      );

      if (index !== activeIndex && index >= 0 && index < testimonials.length) {
        setActiveIndex(index);
      }
    }
  };

  const scrollToActive = (index) => {
    if (scrollRef.current) {
      const cardWidth = 718;
      const gap = 24;
      const scrollAmount = index * (cardWidth + gap);
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="overflow-hidden bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5 text-center mb-12">
        <SectionTitle>What Our Patients Are Saying</SectionTitle>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {/* Leading Spacer */}
        <div className="min-w-[calc(50vw-359px)] shrink-0" />

        {testimonials.map((t, index) => (
          <article
            key={index}
            className="snap-center w-[718px] h-[427px] rounded-b-[24px] overflow-hidden bg-[#F9F3E5] shrink-0"
          >
            <div className="px-15 py-12 bg-[#F7EED9] h-[300px] rounded-t-[24px]">
              <img
                src={AphostropheIcon}
                alt=""
                className="w-10 h-auto mb-6 brightness-0"
              />
              <p className="font-sans font-normal text-[24px] leading-[38.5px] text-ink/80">
                “{t.text}”
              </p>
            </div>

            <footer className="bg-gold h-[127px] px-6 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full border-2 border-white overflow-hidden bg-cream shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-left text-white">
                  <p className="font-sans font-medium text-[20px] leading-tight">
                    {t.author}
                  </p>
                  <p className="font-sans font-normal text-[16px] opacity-80 pt-1">
                    {t.company}
                  </p>
                </div>
              </div>
            </footer>
          </article>
        ))}

        {/* Trailing Spacer */}
        <div className="min-w-[calc(50vw-359px)] shrink-0" />
      </div>

      {/* Pagination dots */}
      <div className="mt-8 flex justify-center gap-3">
        {testimonials.map((_, index) => (
          // <button
          //   key={index}
          //   onClick={() => scrollToActive(index)}
          //   className={`size-2.5 rotate-45 border border-gold transition-all duration-300 ${
          //     activeIndex === index ? "bg-gold scale-110" : "bg-transparent"
          //   }`}
          // />

          <button
            key={index}
            onClick={() => scrollToActive(index)}
            className={`transition-all duration-300 ${
              activeIndex === index ? "scale-110" : "scale-100"
            }`}
          >
            <HexagonIcon
              className="size-5"
              // Active: Solid Gold | Inactive: Transparent fill with Gold outline
              fill={activeIndex === index ? "#C18C2C" : "transparent"}
              stroke="#C18C2C"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
