export default function InnovationInformation({ data, index }) {
  return (
    <div
      className={`w-full flex flex-col h-[220px] md:h-[248px] flex-shrink-0 rounded-[32px] sm:p-[40px] p-6 gap-[35px] border border-[#3C5186] ${
        index === 0 ? "bg-[#1A255780]" : "bg-[#1A2557]"
      }`}
    >
      <div className="flex gap-2 items-center">
        <div className="h-[1px] w-[40px] bg-white" />
        <p className="uppercase text-normal md:text-[18px] tracking-widest">
          {data?.sliderHeader}
        </p>
      </div>
      <p className="text-start text-normal md:text-[20px] !font-SpaceGrotesk tracking-[1px]">
        {data?.sliderSubtitle}
      </p>
    </div>
  );
}
