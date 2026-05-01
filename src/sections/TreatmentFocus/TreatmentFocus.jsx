import founder from "../../assets/images/founder.png";

import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

const treatments = [
  {
    image: founder,
    title: "Mental Health",
    description:
      "Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.",
  },
  {
    image: founder,
    title: "Addiction And Recovery",
    description:
      "Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.",
    reverse: true,
  },
  {
    image: founder,
    title: "Supervised Medical Weight Loss",
    description:
      "The primary indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own. Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client's needs.",
  },
];

export default function TreatmentFocus() {
  return (
    <section
      id="treatments"
      className="
        bg-cream
        pb-24
        md:py-32
        md:pt-26
      "
    >
      <div className="mx-auto max-w-4xl px-5">
        {/* Section Title */}
        <SectionTitle>Our Treatment Focus</SectionTitle>

        {/* Treatment Items */}
        <div className="mt-20 grid gap-20">
          {treatments.map((item) => (
            <TreatmentFocusItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentFocusItem({ image, title, description, reverse = false }) {
  return (
    <article
      className={`
        grid
        items-center
        gap-10
        md:grid-cols-2
        md:gap-20
        ${reverse ? "md:[&>figure]:order-2" : ""}
      `}
    >
      {/* Circular Image */}
      <figure className="relative mx-auto size-64 md:size-80">
        {/* The Gold Ring (Positioned behind) */}
        <div
          className={`absolute inset-[-4px] rounded-full border-[1px] border-[#DAA520] translate-y-4 z-0 transition-transform duration-300 ${
            reverse ? "-translate-x-3" : "translate-x-3"
          }`}
          aria-hidden="true"
        />

        {/* The Image Container (Positioned in front) */}
        <div className="relative h-full w-full rounded-full overflow-hidden border border-[#DAA520]/20 bg-white z-10">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </figure>

      {/* Text Content */}
      <div className="mx-auto max-w-[360px] text-center md:text-left">
        {/* Treatment Title */}
        <h3
          className="
            font-display
            font-semibold
            text-[24px]
            leading-[28px]
            text-ink
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-5
            font-sans
            text-[17px]
            leading-[26px]
            text-ink/80
          "
        >
          {description}
        </p>

        {/* CTA Button */}
        <Button iconRight className="mt-8">
          Learn More
        </Button>
      </div>
    </article>
  );
}
