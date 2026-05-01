import StatesSvg from "../../assets/icons/states.svg";

export default function States() {
  return (
    <section className="bg-cream">
      <div className="w-full text-center">
        <img
          src={StatesSvg}
          alt="Decorative states line"
          className="w-full h-auto min-h-[100px] md:min-h-[150px] object-contain"
          width="1440"
          height="150"
          fetchpriority="high"
        />
      </div>
    </section>
  );
}
