export function TreatmentFocus({ image, title, description, reverse = false }) {
  return (
    <article
      className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
        reverse ? "md:[&>figure]:order-2" : ""
      }`}
    >
      <figure className="mx-auto size-44 overflow-hidden rounded-full border border-gold bg-cream shadow-orbit outline outline-[9px] outline-white md:size-48">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </figure>
      <div className="mx-auto max-w-[330px] text-center md:text-left">
        <h3 className="font-display text-2xl font-semibold leading-tight text-ink">
          {title}
        </h3>
        <p className="mt-4 text-[0.95rem] leading-7 text-ink/80">
          {description}
        </p>
        <a
          href="#services"
          className="mt-5 inline-flex items-center rounded-full bg-gold px-5 py-2 text-xs font-semibold text-black transition hover:bg-gold-dark"
        >
          Learn More
        </a>
      </div>
    </article>
  );
}
