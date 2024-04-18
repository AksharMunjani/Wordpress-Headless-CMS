import Image from "next/image";
import PrimaryButton from "../../atmos/PrimaryButton";

export default function CaseStudy({ bgColor, data, textColor, lineColor }) {
  return (
    <div
      className={`max-w-full sm:h-[466px] flex-shrink-0 flex overflow-hidden flex-col sm:justify-between rounded-[32px] sm:px-[40px] px-0 sm:pt-[40px] pt-6 ${bgColor} ${textColor}`}
    >
      <div className="max-w-[545px] overflow-visible sm:px-0 px-6">
        <div className="flex gap-2 items-center mb-6">
          <div className={`h-[1px] w-[40px] ${lineColor}`} />
          <p
            className={`uppercase text-normal text-[18px] tracking-widest ${textColor}`}
          >
            {data?.caseStudyHeader}
          </p>
        </div>
        <h4
          className={`lg:mb-[52px] mb-[20px] text-[32px] text-start tracking-[1px] leading-[32px] !capitalize`}
        >
          {data?.title ? data?.title?.toLowerCase() : null}
        </h4>
        <p className="lg:mb-0 mb-[20px] sm:pr-10 text-[16px] md:text-[20px] text-start leading-6">
          {data?.caseStudyDescription}
        </p>
      </div>
      <div className="w-full sm:flex-row flex-col flex flex-1 items-end max-h-[209px] sm:pb-[30px] relative sm:px-0 px-6">
        <PrimaryButton
          text={data?.caseStudyButton?.title}
          link={data?.caseStudyButton?.url}
          className={
            "bg-white border-none !rounded-[100px] !text-textBlack font-bold text-[16px] !py-4 px-[40px] relative z-10 sm:!w-fit w-full"
          }
        />
        <Image
          src={data?.caseStudyImage?.node?.link}
          alt="CaseStudy"
          width={1000}
          height={1000}
          sizes={20}
          className="sm:absolute bottom-0 right-0 sm:mt-0 mt-auto z-10 sm:max-w-[400px] h-full rounded-2xl"
          unoptimized
        />
      </div>
    </div>
  );
}
