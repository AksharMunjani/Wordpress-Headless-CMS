export default function PrimaryInput({
  className,
  labelTextColor,
  bgColor,
  placeholder,
  width,
  ...props
}) {
  return (
    <div
      className={`rounded-[30px] !w-full ${
        bgColor ? bgColor : "bg-white"
      } h-fit ${width ? width : ""}`}
    >
      <div className="relative bg-inherit">
        <input
          type="text"
          id="username"
          name="username"
          className={`peer bg-transparent py-[12px] w-full rounded-[30px] text-white placeholder-transparent ring-1 px-[24px] ring-white focus:ring-lightBlue focus:outline-none ${className}`}
          placeholder={placeholder}
        />
        <label
          htmlFor="username"
          className={`absolute cursor-text left-0 -top-4 text-sm text-white bg-inherit mx-1 px-[24px] peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-white peer-focus:text-sm transition-all ${
            labelTextColor && `text-[${labelTextColor}]`
          }`}
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
}
