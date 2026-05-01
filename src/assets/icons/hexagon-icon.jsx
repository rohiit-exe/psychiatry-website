// commons/HexagonIcon.jsx
export default function HexagonIcon({
  fill = "currentColor",
  stroke = "currentColor",
  className = "",
  ...props
}) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M10.2656 2.21387L10.2695 2.21582L13.6543 4.11621L13.6074 7.99805V8.00195L13.6543 11.8828L10.2695 13.7842L10.2656 13.7861L6.92773 15.7666L3.58984 13.7861L3.58594 13.7842L0.200195 11.8828L0.248047 8.00195V7.99805L0.200195 4.11621L3.58594 2.21582L3.58984 2.21387L6.92773 0.232422L10.2656 2.21387Z"
        stroke={stroke}
        fill={fill}
        stroke-width="0.4"
      />
    </svg>
  );
}
