import TeamAvatar from "../../atmos/TeamAvatar";

export default function IndividualTeamBox({ apiData = {} }) {
  return (
    <div className="xlg:max-w-[312px] grid grid-cols-2 lg:grid-cols-4 xlg:grid-cols-2 lg:gap-x-[60px] gap-x-6 gap-y-[40px] flex-wrap">
      {apiData.map((item, ind) => {
        return (
          <TeamAvatar
            key={ind}
            img={item?.images?.node?.link}
            name={item?.name}
            position={item?.designation}
          />
        );
      })}
    </div>
  );
}
