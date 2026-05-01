import Button from "../../components/ui/Button";
import SectionTitle from "../../components/ui/SectionTitle";
import PsychatricEvaluation from "../../assets/icons/psychiatric-evaluation.svg";
import MedicalManagement from "../../assets/icons/medical-management.svg";
import SupportivePsychotherapy from "../../assets/icons/supportive-psychotherapy.svg";
import AdhdScreening from "../../assets/icons/adhd-screening.svg";

const services = [
  { icon: PsychatricEvaluation, title: "Psychiatric Evaluation" },
  { icon: MedicalManagement, title: "Medication Management" },
  { icon: SupportivePsychotherapy, title: "Supportive Psychotherapy" },
  { icon: AdhdScreening, title: "ADHD Screening" },
  { icon: PsychatricEvaluation, title: "MAT Treatments" },
  { icon: MedicalManagement, title: "Gene Sight Testing" },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <SectionTitle>Our Services</SectionTitle>
        <ul className="mt-15 grid grid-cols-2 gap-20 sm:grid-cols-3 lg:grid-cols-6">
          {services.map(({ icon: Icon, title }) => (
            <li key={title} className="flex flex-col items-center">
              <img src={Icon} alt="" className="size-[100px] object-contain" />
              <span className="mt-5 max-w-[150px] font-display font-semibold text-[20px] leading-[28px] text-center text-ink">
                {title}
              </span>
            </li>
          ))}
        </ul>
        <Button
          iconRight
          href="#appointment"
          className="mt-12 px-8 w-[300px] h-[62px] text-[16px]"
        >
          View our services
        </Button>
      </div>
    </section>
  );
}
