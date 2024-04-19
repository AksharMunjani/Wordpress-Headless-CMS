import AvatarGroup from "../../atmos/AvatarGroup";
import PrimaryButton from "../../atmos/PrimaryButton";

export default function ImpactContent({ apiData = {} }) {
  return (
    <div className="w-full lg:max-w-[565px] max-w-[353px] !font-SpaceGrotesk">
      <h2 className="xlg:text-[70px] text-[40px]  leading-[120%] 1xl:mb-[120px] lg:mb-20 mb-8 capitalize">
        {apiData?.impactHeader}
      </h2>
      <PrimaryButton
        text={apiData?.impactButton?.title}
        url={apiData?.impactButton?.url}
        className={
          "bg-white border-none !rounded-[100px] !text-primary font-semibold px-[40px] !py-4 sm:mb-[60px] mb-[40px] hover:shadow-yellow-600	lg:w-fit w-full"
        }
      />
      <div className=" flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <AvatarGroup apiData={apiData?.clientsInfo} />
          <p className="md:text-[32px] text-[20px]">{`(${apiData?.clientsInfo?.clientNumber})`}</p>
        </div>
        <ul className="list-disc list-inside">
          <li className="leading-[120%] sm:text-[20px]">
            {apiData?.clientsInfo?.clientDescription}
          </li>
        </ul>
      </div>
    </div>
  );
}
