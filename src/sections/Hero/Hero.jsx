import { useState } from "react";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import heroSession from "../../assets/images/hero-session.webp";
import HexagonIcon from "../../assets/icons/hexagon-icon";
import HexagonFilled from "../../assets/icons/hexagon-filled.svg";

const heroSlides = [
  {
    title: "Need A Mental Health Provider?",
    eyebrow: "No look further",
    description:
      "Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.",
  },
  {
    title: "Care That Meets You Where You Are",
    eyebrow: "In-person and virtual support",
    description:
      "Connect with a provider in a setting that feels practical, private, and supportive for your daily life.",
  },
  {
    title: "Thoughtful Psychiatry For Difficult Times",
    eyebrow: "You are not alone",
    description:
      "We help patients navigate anxiety, stress, recovery, and medication needs with compassionate guidance.",
  },
  {
    title: "A Calmer Way To Get Started",
    eyebrow: "Simple next steps",
    description:
      "Schedule, complete your paperwork, and meet with a provider who listens before recommending care.",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[565px] overflow-hidden bg-black text-white">
      {/* Background Image */}
      <img
        src={heroSession}
        alt="Therapy session"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      {/* Dark Gradient */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background: "linear-gradient(90deg, #000000 0%, rgba(0,0,0,0) 56%)",
        }}
      />

      <Container className="relative flex items-end pb-6 h-full z-30">
        <div className="w-full max-w-[600px] overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {heroSlides.map((slide) => (
              <article key={slide.title} className="min-w-full pr-10">
                <h1
                  className="
                      font-display
                      text-[48px]
                      leading-[56.5px]
                      font-medium
                      uppercase
                      font-display
                      tracking-[0px]
                    "
                >
                  {slide.title}
                </h1>

                <p
                  className="
                      mt-5
                      font-display
                      text-[20px]
                      leading-[28px]
                      font-medium"
                >
                  {slide.eyebrow}
                </p>

                <p className=" mt-2 max-w-[420px] font-display font-normal text-[20px] leading-[28px] text-white/80">
                  {slide.description}
                </p>

                <Button iconRight className="mt-8">
                  Learn More
                </Button>
              </article>
            ))}
          </div>

          {/* Hexagon Indicators */}
          <div className="mt-12 flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="transition cursor-pointer"
              >
                {activeIndex === index ? (
                  <img src={HexagonFilled} />
                ) : (
                  <HexagonIcon
                    className="size-5"
                    fill={"transparent"}
                    stroke="#DAA520"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
