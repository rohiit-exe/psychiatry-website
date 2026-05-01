import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import founderPhoto from "../../assets/images/founder.png";
import WaveDivider from "../../assets/images/wave-divider.png";

export default function Founder() {
  return (
    <section
      className="relative py-28 bg-bottom pb-40"
      style={{
        backgroundImage: `url("${WaveDivider}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "bottom",
      }}
    >
      <Container>
        <div className="relative h-[300px]">
          {/* Image */}
          <div className="relative z-10 w-[420px]">
            <img
              src={founderPhoto}
              alt="Lakisha Appleton"
              className="
                h-[260px]
                w-full
                rounded-xl
                object-cover
                shadow-soft
              "
            />
          </div>

          {/* Card */}
          <article
            className="
              absolute
              top-1/2
              left-[260px]
              -translate-y-1/2
              w-[820px]
              rounded-2xl
              border-2
              
              border-[#DAA520]
              py-10
              pr-12
              pl-[220px]

              shadow-soft
            "
          >
            {/* Meet The Founder */}
            <p
              className="
                font-display
                font-semibold
                text-[36px]
                leading-[32px]
              "
            >
              Meet The Founder
            </p>

            {/* Name */}
            <h2
              className="
                mt-4
                font-display
                font-medium
                text-[24px]
                leading-[28px]
              "
            >
              Lakeisha Appleton
            </h2>

            {/* Credentials */}
            <p
              className="
                font-sans
                font-medium
                text-[20px]
                pt-[12px]
                leading-[18.5px]"
            >
              FNP-C, PMHNP- BC
            </p>

            {/* Quote */}
            <p
              className="
                mt-5
                font-sans
                font-normal
                text-[20px]
                leading-[26px]
                text-black/80
                max-w-[520px]
              "
            >
              “Mental health problems don’t define who you are. They are
              something you experience. You walk in the rain and you feel the
              rain, but importantly, YOU ARE NOT THE RAIN.” — Matt Haig
            </p>

            {/* Button */}
            <Button iconRight href="#founder" className="mt-6 px-6 py-2.5">
              Learn More
            </Button>
          </article>
        </div>
      </Container>
    </section>
  );
}
