import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";
import StepsSvg from "../../../assets/icons/services/steps.svg";

export default function Steps() {
  return (
    <section
      id="appointment"
      className="bg-black py-20 md:py-12 text-white border-y-[6px]"
      style={{
        borderImageSource:
          "linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)",
        borderImageSlice: 1,
      }}
    >
      <Container className="text-center">
        {/* Title */}
        <h2 className="font-display font-black text-[40px] leading-[60px] text-center gradient-text">
          Four Simple Steps To
          <br />
          Get Started
        </h2>

        {/* Steps SVG */}
        <div className="mt-16 flex justify-center">
          <img
            src={StepsSvg}
            alt="Four steps process"
            loading="lazy"
            className="
              w-[1239px]
              h-[147px]
              max-w-full
              h-auto
              pointer-events-none
              select-none
            "
          />
        </div>

        {/* CTA */}
        <Button
          iconRight
          href="#faq"
          className="mt-14 px-10 w-[300px] h-[26px]"
        >
          Schedule a Call
        </Button>
      </Container>
    </section>
  );
}
