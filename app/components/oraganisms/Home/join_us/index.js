import JoinUsForm from "@/app/components/molecules/join_us_form";
import JoinUsContent from "@/app/components/molecules/join_us_content";
import { getClient } from "@faustwp/experimental-app-router";
import { JOIN_US_QUERY } from "@/app/utils/constants-query";

async function getData() {
  try {
    const client = await getClient();

    const { data } = await client.query({
      query: JOIN_US_QUERY,
    });

    return data?.pageBy?.home?.joinUs;
  } catch (error) {
    console.log("error while getting data of Join Us Section", error);
    return null;
  }
}
export default async function JoinUs() {
  const apiData = await getData();
  return (
    <div className="max-w-screen-xl xlg:mt-[140px] sm:mt-20 mt-[60px] lg:w-full w-fit 1xl:px-0 sm:px-8 px-4">
      <div className="xlg:pl-[60px] xlg:pr-[80px] sm:pl-[40px] pl-6 sm:pr-[40px] pr-6 xlg:pt-[120px] sm:pt-[60px] pt-6 xlg:pb-[107px] sm:pb-[60px] pb-6 rounded-[30px] border flex lg:justify-between justify-center items-center lg:flex-row flex-col flex-wrap lg:flex-nowrap">
        <JoinUsContent apiData={apiData} />
        <JoinUsForm apiData={apiData} />
      </div>
    </div>
  );
}
