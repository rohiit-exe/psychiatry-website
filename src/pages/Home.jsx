import FAQ from "../sections/FAQ/FAQ";
import Founder from "../sections/Founder/Founder";
import Hero from "../sections/Hero/Hero";
import QuoteBanner from "../sections/QuoteBanner/QuoteBanner";
import Services from "../sections/Services/Services";
import States from "../sections/States/States";
import Steps from "../sections/Steps/Steps";
import Testimonials from "../sections/Testimonials/Testimonials";
import TreatmentFocus from "../sections/TreatmentFocus/TreatmentFocus";
import WhyChooseUs from "../sections/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Founder />
      <TreatmentFocus />
      <QuoteBanner />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Steps />
      <States />
      <FAQ />
    </>
  );
}
