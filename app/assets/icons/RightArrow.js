export default function RightArrow({ size, color, width, height, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ? size : width ? width : "22"}
      height={size ? size : height ? height : "22"}
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        stroke={color ? color : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.401"
        d="M4.223 11.185h13.995M12.629 5.59l5.636 5.614-5.636 5.613"
      ></path>
    </svg>
  );
}
