import ArrowRight from "../../assets/icons/ui/arrow-right.svg";

/**
 * Button Component
 *
 * Primary CTA button used across the app.
 * Matches Figma gold gradient style.
 */

export default function Button({
  children,
  onClick,
  className = "",
  iconRight,
  variant = "default",
}) {
  /**
   * Button Size Variants
   */

  const sizeStyles =
    variant === "navbar"
      ? `
        w-[209px]
        h-[46px]
        text-[14px]
        leading-[18.5px]
      `
      : `
        w-[163px]
        h-[50px]
        text-[14px]
        leading-[18.5px]
      `;

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        font-medium
        font-sans
        text-black
        rounded-[50px]
        transition
        hover:brightness-110
        cursor-pointer
        font-[16px]
        ${sizeStyles}
        ${className}
      `}
      style={{
        background:
          "linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)",
      }}
    >
      {children}

      {/* Right Icon */}
      {iconRight && <img src={ArrowRight} alt="" className="w-5 h-5" />}
    </button>
  );
}
