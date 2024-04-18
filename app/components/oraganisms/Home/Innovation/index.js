import { getClient } from "@faustwp/experimental-app-router";
import Link from "next/link";
import Image from "next/image";
import { INNOVATION_QUERY } from "@/app/utils/constants-query";
import PrimaryButton from "@/app/components/atmos/PrimaryButton";

async function getData() {
  try {
    const client = await getClient();

    const { data } = await client.query({
      query: INNOVATION_QUERY,
    });

    return data?.pageBy?.home;
  } catch (error) {
    console.log("error while getting data of Home Query", error);
    return null;
  }
}

export default async function Innovation() {
  const apiData = await getData();
  return (
    <>
      <div className="w-full mix-blend-screen sm:after:content-[url('/images/about-gradiant.png')] after:absolute after:right-0 after:top-[100px]">
        <div className="max-w-screen-xl w-full mx-auto relative 1xl:px-0 sm:px-8 px-4 z-20">
          <div className="grid sm:grid-cols-3 grid-cols-1 lg:pt-[122px] sm:pt-20 pt-14 overflow-visible items-end">
            <div className="sm:col-span-2 flex flex-col w-full h-fit xlg:max-w-[715px] sm:max-w-[509px] max-w-[393px]">
              <div className="flex gap-2 items-center lg:pb-8 pb-6 ">
                <div className="h-[1px] w-[40px] bg-white" />
                <p className="uppercase text-normal text-[18px] tracking-widest">
                  {apiData?.banner?.bannerHeader}
                </p>
              </div>
              <h1 className="xlg:text-[70px] lg:text-[50px] text-[40px] lg:leading-[120%] leading-[48px] font-SpaceGrotesk lg:pb-[70px] pb-8 capitalize">
                {apiData?.banner?.bannerText}
              </h1>
              <PrimaryButton
                link={apiData?.banner?.bannerButton?.url}
                text={apiData?.banner?.bannerButton?.title}
                className={
                  "bg-green border-none font-bold !py-4 !px-9 lg:mb-0 mb-12 sm:w-fit w-full"
                }
                parentClass="sm:!w-fit !w-full"
              />
            </div>
            <div className="w-full h-full flex justify-center items-center relative md:static sm:mix-blend-screen overflow-visible ">
              <Image
                src={apiData?.banner?.bannerImage?.node?.link}
                alt="Banner Image"
                width={1000}
                height={1000}
                sizes={20}
                className="lg:max-w-[452px] sm:max-w-[250px] w-full flex-1"
                unoptimized
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
