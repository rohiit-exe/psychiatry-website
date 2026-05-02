import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import founderPhoto from "../../assets/images/founder.png";
import WaveDivider from "../../assets/images/wave-divider.png";

export default function Founder() {
  return (
    <section
      className="relative py-20 lg:pt-22 pb-28 bg-bottom"
      style={{
        backgroundImage: `url("${WaveDivider}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "bottom",
      }}
    >
      <Container>
        {/* Main Wrapper: Flexbox with items-center for vertical alignment */}
        <div className="flex flex-col items-center xl:flex-row xl:justify-center">
          {/* Image Container */}
          <div
            className="
              relative z-20 
              w-full max-w-[480px] 
              /* Desktop: pull the image right by 180px to overlap the card */
              xl:-mr-[180px] 
              xl:shrink-0
            "
          >
            <img
              src={founderPhoto}
              alt="Lakeisha Appleton"
              className="
                h-[280px] sm:h-[350px] xl:h-[380px]
                w-full
                rounded-2xl
                object-cover
                shadow-2xl
              "
            />
          </div>

          {/* Golden Card */}
          <article
            className="
              relative
              z-10
              w-full
              -mt-12 xl:mt-0 
              xl:w-[850px]
              xl:pl-[220px] 
              xl:pr-12
              xl:py-12
              rounded-3xl
              border-2
              border-[#DAA520]
              py-16 px-8
              shadow-soft
            "
          >
            <p className="font-display font-semibold text-[32px] lg:text-[42px] leading-tight text-[#1A1A1A]">
              Meet The Founder
            </p>

            <h2 className="mt-2 font-display font-medium text-[22px] lg:text-[26px] text-[#1A1A1A]">
              Lakeisha Appleton
            </h2>

            <p className="font-sans font-bold text-lg lg:text-[20px] pt-1 text-[#DAA520] tracking-wide">
              FNP-C, PMHNP-BC
            </p>

            <p className="mt-6 font-sans font-normal text-base lg:text-[19px] lg:leading-[28px] text-black/80 max-w-[500px]">
              “Mental health problems don’t define who you are. They are
              something you experience. You walk in the rain and you feel the
              rain, but importantly, YOU ARE NOT THE RAIN.” — Matt Haig
            </p>

            <div className="mt-8">
              <Button
                iconRight
                href="#founder"
                className="px-5 py-3 !w-[10rem] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black font-semibold"
              >
                Learn More
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
