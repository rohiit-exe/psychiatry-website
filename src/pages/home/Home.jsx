import FAQ from "../../features/home/FAQ";
import Founder from "../../features/home/Founder";
import Hero from "../../features/home/Hero";
import QuoteBanner from "../../features/home/QuoteBanner";
import Services from "../../features/home/Services";
import States from "../../features/home/States";
import Steps from "../../features/home/Steps";
import Testimonials from "../../features/home/Testimonials";
import TreatmentFocus from "../../features/home/TreatmentFocus";
import WhyChooseUs from "../../features/home/WhyChooseUs";

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
