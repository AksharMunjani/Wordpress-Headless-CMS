import Image from "next/image";
import ImpactContent from "@/app/components/molecules/impact_content";
import { getClient } from "@faustwp/experimental-app-router";
import { IMPACT_QUERY } from "@/app/utils/constants-query";

async function getData() {
  try {
    const client = await getClient();

    const { data } = await client.query({
      query: IMPACT_QUERY,
    });

    return data?.pageBy?.home?.impact;
  } catch (error) {
    console.log("error while getting data of Impact Section", error);
    return null;
  }
}

export default async function Impact() {
  const apiData = await getData();
  return (
    <div className="max-w-screen-xl xlg:mt-[140px] sm:mt-20 mt-[60px] lg:w-full w-fit 1xl:px-0 sm:px-8 px-4 mx-auto">
      <div className="bg-lightBlue2 xlg:pt-[120px] sm:pt-20 pt-6 sm:pb-[70px] pb-6 sm:px-[60px] px-6 h-fit rounded-[30px] flex lg:flex-row flex-col  lg:items-start items-center justify-between">
        <ImpactContent apiData={apiData} />
        <div className="!relative lg:max-w-[460px] max-w-[250px] w-full md:mt-0 sm:mt-20 mt-10">
          <Image
            src={"/images/impact-blur.png"}
            alt="Impact Icon 1 Image"
            width={1000}
            height={1000}
            className="w-full max-w-[460px] mix-blend-plus-lighter"
          />
          <Image
            src={apiData?.image?.node?.link}
            alt="Impact Icon Image"
            width={1000}
            height={1000}
            className="w-full sm:max-w-[460px] absolute z-0 top-10"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
