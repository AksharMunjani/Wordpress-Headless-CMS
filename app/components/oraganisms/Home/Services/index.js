import Image from "next/image";
import { SERVICES_PROVIDED_QUERY } from "@/app/utils/constants-query";
import { getClient } from "@faustwp/experimental-app-router";

async function getData() {
  try {
    const client = await getClient();

    const { data } = await client.query({
      query: SERVICES_PROVIDED_QUERY,
    });

    return data?.pageBy?.home?.servicesProvided;
  } catch (error) {
    console.log("error while getting data of Services Section", error);
    return null;
  }
}

export default async function Services() {
  const apiData = await getData();
  return (
    <div className="xlg:max-w-[992px] max-w-[750px] xlg:mt-[140px] sm:mt-20 mt-[60px] w-full 1xl:px-0 sm:px-8 px-4">
      <h2 className="lg:text-[48px] text-[40px] leading-[120%] text-center xlg:pb-[60px] lg:pb-10 pb-8 font-['Space_Grotesk'] capitalize">
        {apiData?.servicesProvidedHeader}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 content-center w-full sm:gap-x-[100px] gap-x-[32px] sm:gap-y-[60px] gap-y-[32px]">
        {apiData?.services?.map((item, index) => (
          <div
            key={index}
            className="sm:gap-[32px] gap-[12px] flex flex-col justify-center items-center max-w-[244px] mx-auto"
          >
            <Image
              src={item?.servicesProvidedImage?.node?.link}
              alt="Service Image"
              width={1000}
              height={1000}
              className="sm:w-[60px] sm:h-auto h-[47.7px] w-auto"
              unoptimized
            />
            <p className="sm:text-center lg:text-[20px] text-textColor leading-6 line-clamp-3 overflow-hidden">
              {item?.servicesProvidedDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
