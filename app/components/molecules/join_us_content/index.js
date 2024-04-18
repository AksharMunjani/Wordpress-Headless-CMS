export default function JoinUsContent({ apiData = {} }) {
  return (
    <div className="xlg:max-w-[566px] sm:max-w-[500px] max-w-[400px] lg:w-full">
      <h2 className="xlg:text-5xl text-[40px] sm:pb-8 pb-6 sm:pr-6 font-SpaceGrotesk lg:!leading-[57.6px] !leading-[48px] capitalize">
        <span className="sm:block">{apiData?.joinTitle}</span>{" "}
        {apiData?.joinMaintitle}
      </h2>
      <p className="lg:text-xl text-base text-textColor lg:!leading-6 !leading-[19.2px] sm:pr-6">
        {apiData?.joinDescription}
      </p>
    </div>
  );
}
