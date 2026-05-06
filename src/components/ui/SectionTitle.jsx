export default function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`font-display
        font-medium
        text-[40px]
        leading-[32px]
        text-center
        text-ink
        ${className}`}
    >
      {children}
    </h2>
  );
}
