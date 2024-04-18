import Image from "next/image";
import PrimaryButton from "../../atmos/PrimaryButton";

export default function BlogBox({
  bgColor,
  data,
  textColor,
  lineColor,
  index = 1,
}) {
  return (
    <div
      className={`h-full relative flex-shrink-0 flex justify-between md:flex-row flex-col rounded-[30px] border border-lightBlue p-[24px] ${bgColor} ${textColor} ${
        data?.featuredImage?.node?.link && "h-fit"
      }`}
    >
      <Image
        src={data?.featuredImage?.node?.link}
        alt="Blog"
        width={1000}
        height={1000}
        className={`w-full sm:max-w-[100%] h-[240px] sm:my-0 my-auto rounded-[30px] lg:mb-0 mb-4 md:min-w-[400px]`}
        unoptimized
      />
      <div className={`relative z-10 xlg:max-w-[263px]`}>
        <h4
          className={`text-left text-[28px] tracking-[1px] leading-[28px] sm:pb-4 pb-[20px]`}
        >
          {data?.title}
        </h4>
        <p className="text-left leading-[120%] sm:pb-4 pb-6">
          {data?.blog?.shortDescription}
        </p>
        <PrimaryButton
          text={data?.blog?.blogButton?.title}
          link={`/article-detail/${data?.blog?.blogButton?.url}`}
          className={
            "bg-white border-none !rounded-[100px] !text-textBlack font-semibold !py-4 px-[30px] text-nowrap h-fit mb-2 lg:w-fit w-full"
          }
        />
      </div>
    </div>
  );
}
