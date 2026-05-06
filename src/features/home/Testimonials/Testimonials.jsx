import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../../../components/ui/SectionTitle";
import AphostropheIcon from "../../../assets/icons/decorative/aphostrophe.svg";
import HexagonIcon from "../../../assets/icons/brand/hexagon-icon";
import { TESTIMONIAL_SLIDES } from "./testimonials.data";

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="overflow-hidden bg-cream pt-26 pb-20 w-full">
      <div className="mx-auto max-w-6xl px-5 text-center mb-15">
        <SectionTitle>What Our Patients Are Saying</SectionTitle>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Swiper
          modules={[A11y, Autoplay]}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={40}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="!overflow-visible"
          style={{ width: "100%" }}
        >
          {TESTIMONIAL_SLIDES.map((t, index) => (
            <SwiperSlide
              key={index}
              // Hardcoded style to override any global CSS fighting the width
              style={{ width: "min(730px, 85vw)" }}
              className="transition-all duration-500 ease-in-out"
            >
              <article
                className={`flex flex-col h-full rounded-[24px] overflow-hidden bg-[#F9F3E5] transition-opacity duration-500`}
              >
                <div className="px-6 sm:px-15 py-8 sm:pt-12 sm:pb-10 bg-[#F7EED9] rounded-t-[24px]">
                  <img
                    src={AphostropheIcon}
                    alt=""
                    className="w-8 sm:w-12 h-auto mb-4 sm:mb-10 brightness-0"
                  />
                  <p className="font-sans font-normal text-[16px] sm:text-[24px] leading-[28px] sm:leading-[38.5px] text-ink/80">
                    "{t.text}"
                  </p>
                </div>

                <footer className="bg-gold h-[100px] sm:h-[115px] px-6 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <div className="size-10 sm:size-14 rounded-full border-2 border-white overflow-hidden bg-cream shrink-0">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="text-left text-white">
                      <p className="font-sans font-medium text-[16px] sm:text-[20px] leading-tight">
                        {t.author}
                      </p>
                      <p className="font-sans font-normal text-[14px] sm:text-[16px] opacity-80 pt-1">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </footer>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-10 flex justify-center gap-1">
        {TESTIMONIAL_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`cursor-pointer ${
              activeIndex === index ? "scale-110" : "scale-100"
            }`}
          >
            <HexagonIcon
              className="size-5"
              fill={activeIndex === index ? "#C18C2C" : "transparent"}
              stroke="#C18C2C"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
