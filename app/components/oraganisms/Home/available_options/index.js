import BusinessOption from "@/app/components/molecules/business_option";
import { IMPACT_OPTIONS_QUERY } from "@/app/utils/constants-query";
import { getClient } from "@faustwp/experimental-app-router";

async function getData() {
  try {
    const client = await getClient();

    const { data } = await client.query({
      query: IMPACT_OPTIONS_QUERY,
    });

    return data?.pageBy?.home?.impactOption;
  } catch (error) {
    console.log("error while getting data of Available Options Section", error);
    return null;
  }
}
export default async function AvailableOptions() {
  const apiData = await getData();
  return (
    <div className="max-w-screen-xl xlg:mt-[140px] sm:mt-20 mt-[60px] 1xl:px-0 sm:px-8 px-4">
      <h2 className="lg:text-[48px] text-[40px] font-SpaceGrotesk lg:leading-[57.6px] leading-[48px] text-center xlg:pb-[60px] sm:pb-10 pb-6 capitalize">
        {apiData?.impactOptionHeader}
      </h2>
      <div className="w-full grid lg:grid-cols-2 xlg:gap-x-[100px] gap-x-10 lg:gap-y-0 gap-y-6">
        {apiData?.options?.map((item, i) => (
          <BusinessOption
            key={i}
            title={item?.header}
            titleDescription={item?.description}
            subtitle={`${item?.subtitle}*`}
            note={`*${item?.subtitleDescription}`}
            list={item?.benifits?.map((item) => item?.list1)}
            btn={item?.button}
          />
        ))}
      </div>
    </div>
  );
}
