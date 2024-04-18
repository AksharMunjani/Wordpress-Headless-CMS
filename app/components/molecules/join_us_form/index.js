import PrimaryButton from "../../atmos/PrimaryButton";
import PrimaryInput from "../../atmos/PrimaryInput";

export default function JoinUsForm({ apiData }) {
  return (
    <div className="lg:max-w-[384px] sm:max-w-[500px] max-w-[400px] w-full flex flex-col justify-center items-center lg:mt-0 mt-10 pb-1">
      <p className="text-[32px] font-normal lg:mb-[40px] mb-6 tracking-[1px] leading-[32px] capitalize">
        {apiData?.joinFormtitle}
      </p>
      <div className="flex flex-col items-center w-full">
        <PrimaryInput
          bgColor={"sm:bg-primary"}
          placeholder={"Name"}
          width={"!w-full lg:mb-[26px] mb-4"}
        />
        <PrimaryInput
          bgColor={"sm:bg-primary"}
          placeholder={"Email"}
          width={"!w-full lg:mb-[26px] mb-8"}
        />
        <PrimaryButton
          text={apiData?.joinusButton?.title}
          className={
            "bg-white border-none !rounded-[100px] !text-primary font-semibold !py-[18px] !w-full !block"
          }
          parentClass="!w-full"
        />
        <p className="text-textColor text-center leading-[19.2px] lg:pt-[18px] pt-3">
          {apiData?.joinFormdescription}
        </p>
      </div>
    </div>
  );
}
