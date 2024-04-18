import PrimaryButton from "../../atmos/PrimaryButton";

export default function AboutSolveOnlineContent({ apiData = {} }) {
  return (
    <>
      <div className="lg:max-w-[565px] max-w-[386px] sm:pr-3">
        <div className="flex gap-2 items-center pb-6">
          <div className="h-[1px] w-[40px] bg-textBlack" />
          <p className="uppercase text-textBlack text-normal md:text-[18px] tracking-widest">
            {apiData?.aboutHeader}
          </p>
        </div>
        <h2 className="xlg:text-5xl text-[37px] tracking-wider xlg:!leading-[57.6px] leading-[44px] font-SpaceGrotesk text-textBlack sm:pb-4 pb-6 capitalize">
          {apiData?.aboutTitle}
        </h2>
        <p className="sm:text-[20px] text-[16px] text-textBlack sm:leading-6 leading-[19.2px] pb-8">
          {apiData?.aboutDescription}
        </p>
        <PrimaryButton
          text={apiData?.aboutButton?.title}
          link={apiData?.aboutButton?.url}
          className={
            "bg-white border-none !rounded-[100px] !text-primary font-semibold px-[36px] !py-4 lg:!w-fit w-full"
          }
        />
      </div>
    </>
  );
}
