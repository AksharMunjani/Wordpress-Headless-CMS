import Image from "next/image";
import { getClient } from "@faustwp/experimental-app-router";
import { ABOUT_SOLVE_ONLINE_QUERY } from "@/app/utils/constants-query";
import AboutSolveOnlineContent from "@/app/components/molecules/about_solve_online_content";

async function getData() {
  try {
    const client = await getClient();

    const { data } = await client.query({
      query: ABOUT_SOLVE_ONLINE_QUERY,
    });

    return data?.pageBy?.home?.about;
  } catch (error) {
    console.log("error while getting data of About Section", error);
    return null;
  }
}

export default async function About() {
  const apiData = await getData();
  return (
    <>
      <div className="max-w-screen-xl xlg:mt-[140px] sm:mt-20 mt-[60px] lg:w-full w-fit 1xl:px-0 sm:px-8 px-4">
        <div className="bg-creamy md:p-[60px] sm:p-[30px] p-6 h-fit rounded-[30px] flex lg:justify-between lg:items-start items-center lg:flex-row flex-col">
          <AboutSolveOnlineContent apiData={apiData} />
          <Image
            src={apiData?.aboutImage?.node?.link}
            alt="About Image"
            width={1000}
            height={1000}
            sizes={20}
            className="w-full lg:max-w-[505px] max-w-[386px] lg:mt-0 mt-10"
            unoptimized
          />
        </div>
      </div>
    </>
  );
}
