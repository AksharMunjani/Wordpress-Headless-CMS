import IndividualTeamBox from "@/app/components/molecules/individual_team_box";
import TeamContent from "@/app/components/molecules/team_content";
import { OUR_TEAM_QUERY } from "@/app/utils/constants-query";
import { getClient } from "@faustwp/experimental-app-router";

async function getData() {
  try {
    const client = await getClient();

    const { data } = await client.query({
      query: OUR_TEAM_QUERY,
    });

    return data?.pageBy?.home?.ourTeam;
  } catch (error) {
    console.log("error while getting data of Team Section", error);
    return null;
  }
}
export default async function Team() {
  const apiData = await getData();
  return (
    <>
      <div className="max-w-screen-xl xlg:mt-[177px] sm:mt-20 mt-[60px] lg:w-full w-fit 1xl:px-0 sm:px-8 px-4">
        <div className="bg-green2 sm:p-[30px] p-6 md:p-[60px] h-fit rounded-[30px] flex xlg:flex-row flex-col sm:gap-20 gap-10 flex-wrap lg:flex-nowrap justify-between">
          <TeamContent apiData={apiData} />
          <IndividualTeamBox apiData={apiData?.ourTeamAvatar} />
        </div>
      </div>
    </>
  );
}
