import Image from "next/image";

export default async function TeamContent({ apiData = {} }) {
  return (
    <>
      <div className="xlg:max-w-[670px] max-w-[517px] xlg:mx-0 mx-auto flex flex-col justify-between">
        <div className="flex gap-x-2 items-center pb-3">
          <div className="h-[1px] w-[40px] bg-textBlack" />
          <h5 className="uppercase text-textBlack text-normal text-[18px] tracking-widest">
            {apiData?.ourTeamHeader}
          </h5>
        </div>
        <h2 className="xlg:text-[70px] text-[40px] text-textBlack leading-[120%] font-SpaceGrotesk sm:pb-7 pb-6 capitalize">
          {apiData?.ourTeamDescription}
        </h2>
        <Image
          src={apiData?.ourTeamImage?.node?.link}
          alt="team"
          width={1000}
          height={1000}
          sizes={20}
          className="w-full rounded-[30px] xlg:h-auto h-[248px] object-cover max-w-full"
          unoptimized
        />
      </div>
    </>
  );
}
