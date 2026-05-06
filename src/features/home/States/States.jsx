import SectionTitle from "../../../components/ui/SectionTitle";
import { LOCATIONS } from "./states.data";

export default function States() {
  return (
    <section className="bg-cream pt-16 sm:pt-24 lg:pt-23 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-6xl px-5 text-center mb-15">
          <SectionTitle className="leading-tight text-[32px] sm:text-[36px]">
            Now Accepting Patients In The <br /> Following States
          </SectionTitle>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 xl:gap-12 px-4 sm:px-0">
          {LOCATIONS.map((state, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-full aspect-[2/1] overflow-hidden rounded-t-full relative mb-4 shadow-sm">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="font-display text-[24px] sm:text-[28px] text-[#1A1A1A] font-bold mb-1 opacity-85">
                  {state.name}
                </h3>
                <p className="font-sans text-[15px] sm:text-[16px] text-[#4A4A4A] tracking-wide leading-relaxed">
                  {state.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
