import aphostrophe from "../../../assets/icons/decorative/aphostrophe.svg";
import quoteBg from "../../../assets/icons/decorative/quote-bg.svg";

export default function QuoteBanner() {
  return (
    <aside className="relative w-full h-[241px] bg-cream overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={quoteBg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <blockquote
        className="
            relative
            z-10
            mx-auto
            max-w-[1100px]
            px-5
            h-full
            flex
            flex-col
            justify-center
            items-center
            text-center
            text-white"
      >
        {/* Apostrophe */}
        <img src={aphostrophe} alt="Quote" className="w-[36px] h-auto mb-6" />

        {/* Quote Text */}
        <p
          className="
            font-display
            font-medium
            text-[32px]
            leading-[29px]
            text-center
            max-w-[920px]
          "
        >
          “We help people living with and experiencing difficult times”
        </p>
      </blockquote>
    </aside>
  );
}
