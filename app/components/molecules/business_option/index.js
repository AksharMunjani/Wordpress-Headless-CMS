import PrimaryButton from "../../atmos/PrimaryButton";

export default function BusinessOption({
  title,
  titleDescription,
  subtitle,
  note,
  list,
  btn,
}) {
  return (
    <div className="max-w-[483px] w-full mx-auto rounded-[30px] lg:p-[40px] p-6 flex flex-col items-center sm:bg-[#1A255780] bg-[#1A255780] border sm:border-transparent border-[#3B78FF] hover:border-[#3B78FF] cursor-pointer justify-between">
      <div className="max-w-[357px] lg:pb-[60px] pb-10">
        <h3 className="lg:text-[48px] text-[40px] sm:leading-[57.6px] leading-[48px] font-SpaceGrotesk text-center lg:pb-[20px] pb-6">
          {title}
        </h3>
        <p className="text-center text-textColor text-[16px] lg:text-[20px] leading-[24px]">
          {titleDescription}
        </p>
      </div>
      <div className="lg:pb-[60px] pb-10">
        <h4 className="text-[32px] lg:leading-[3rem] leading-[38.4px] lg:pb-[20px] pb-8 text-center">
          {subtitle}
        </h4>
        <p className="text-center text-textColor text-[16px] lg:text-[20px] lg:leading-[24px] leading-[19.2px]">
          {note}
        </p>
      </div>
      <ul className="list-disc list-inside w-full flex flex-col sm:gap-3 gap-[12px] pb-[32px]">
        {list?.map((item, i) => (
          <li
            key={i}
            className="leading-[25.52px] lg:text-[19px] font-SpaceGrotesk"
          >
            {item}
          </li>
        ))}
      </ul>
      <PrimaryButton
        text={btn?.title}
        url={btn?.url}
        className={
          "bg-green border-none !rounded-[100px] !py-4 px-[36px] font-bold lg:w-fit w-full"
        }
      />
    </div>
  );
}
