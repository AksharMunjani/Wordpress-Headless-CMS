export default function AvatarGroup({ apiData = {} }) {
  return (
    <div className="-space-x-2">
      <img
        className="inline-block sm:h-[48px] sm:w-[48px] h-8 w-8 rounded-full ring-1 ring-pink"
        src={apiData?.clientImage1?.node?.link}
        alt="Image"
        draggable="false"
      />
      <img
        className="inline-block sm:h-[48px] sm:w-[48px] h-8 w-8 rounded-full ring-1 ring-pink"
        src={apiData?.clientImage2?.node?.link}
        alt="Image"
        draggable="false"
      />
      <img
        className="inline-block sm:h-[48px] sm:w-[48px] h-8 w-8 rounded-full ring-1 ring-pink"
        src={apiData?.clientImage3?.node?.link}
        alt="Image"
        draggable="false"
      />
    </div>
  );
}
