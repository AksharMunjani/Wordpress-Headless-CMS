export default function MenuIcon({ size, color, width, height, className }) {
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
        d="M2.809 5.59h16.382M2.809 11.185h16.382M2.809 16.78h16.382"
      ></path>
    </svg>
  );
}
