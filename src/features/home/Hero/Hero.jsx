import { useRef, useState } from "react";
import "swiper/css";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import HexagonIcon from "../../../assets/icons/brand/hexagon-icon";
import HexagonFilled from "../../../assets/icons/brand/hexagon-filled.svg";
import heroSession from "../../../assets/images/hero-session.webp";
import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";
import { HERO_SLIDES } from "./hero.data";

export default function Hero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[565px] overflow-hidden bg-black text-white">
      {/* Background image */}
      <img
        src={heroSession}
        alt="Therapy session"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #000000 0%, rgba(0,0,0,0) 56%)",
        }}
      />

      {/* Swiper — full section, captures all swipe gestures */}
      <Swiper
        modules={[A11y, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
          zIndex: 20,
        }}
      >
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide
            key={slide.title + Math.random()} // Titles can repeat, so add randomness to ensure unique keys
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* pb-20 leaves room for the fixed hexagon row (mt-12 + icon height ≈ ~80px) */}
            <Container className="pb-12 w-full">
              <div className="w-full max-w-[600px]">
                <article className="pr-10">
                  <h1 className="font-display text-[48px] leading-[56.5px] font-medium uppercase tracking-[0px]">
                    {slide.title}
                  </h1>

                  <p className="mt-5 font-display text-[20px] leading-[28px] font-medium">
                    {slide.eyebrow}
                  </p>

                  <p className="mt-2 max-w-[420px] font-display font-normal text-[20px] leading-[28px] text-white/80">
                    {slide.description}
                  </p>

                  <Button iconRight className="mt-8">
                    Learn More
                  </Button>
                </article>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hexagon dots — fixed inside section, above Swiper, never slide with content */}
      <div className="absolute bottom-6 left-0 right-0 z-30 pointer-events-none">
        <Container className="w-full">
          <div className="flex gap-3 pointer-events-auto">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  swiperRef.current?.slideTo(i);
                  swiperRef.current?.autoplay.stop();
                  swiperRef.current?.autoplay.start();
                }}
                className="transition cursor-pointer"
                aria-label={`Go to slide ${i + 1}`}
              >
                {i === activeIndex ? (
                  <img src={HexagonFilled} alt="" />
                ) : (
                  <HexagonIcon
                    className="size-5"
                    fill="transparent"
                    stroke="#DAA520"
                  />
                )}
              </button>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
