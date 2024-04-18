import Link from "next/link";

export default function PrimaryButton({
  text,
  className,
  link,
  icon,
  parentClass = "",
  ...props
}) {
  return link ? (
    <Link href={link ? link : "#"} className={`w-full md:w-fit ${parentClass}`}>
      <button
        className={`text-white capitalize py-[9px] px-[24px] shadow-2xl shadow-transparent hover:shadow-blue-500/50 flex ${
          icon ? "justify-between" : "justify-center"
        } gap-5 rounded-[100px] border ${className}`}
        {...props}
      >
        {text}
        {icon && icon}
      </button>
    </Link>
  ) : (
    <div className={`w-full md:w-fit ${parentClass}`}>
      <button
        className={`text-white capitalize py-[9px] px-[24px] shadow-2xl shadow-transparent hover:shadow-blue-500/50 flex ${
          icon ? "justify-between" : "justify-center"
        } gap-5 rounded-[100px] border ${className}`}
        {...props}
      >
        {text}
        {icon && icon}
      </button>
    </div>
  );
}
