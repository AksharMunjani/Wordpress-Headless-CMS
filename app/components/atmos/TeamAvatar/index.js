import Image from "next/image";

export default function TeamAvatar({ img, name, position, nameColor }) {
  return (
    <div className="max-w-[174px] h-fit flex flex-col items-center mx-auto overflow-hidden">
      <div className="flex flex-col relative justify-center items-center flex-1 w-full">
        <Image
          src={img}
          alt="Avatar"
          width={1000}
          height={1000}
          className="rounded-full h-[110px] w-[110px] border-borderColor border-2 object-cover"
          unoptimized
          draggable="false"
        />
        <div className="-mt-[24px] bg-team-gradient py-[8px] px-[16px] font-bold rotate-[-2.986deg] max-w-[174px] rounded-full text-ellipsis overflow-hidden">
          {position}
        </div>
      </div>
      <p
        className={`text-black w-full text-center text-[24px] font-SpaceGrotesk text-nowrap mt-3 max-w-[174px] text-ellipsis overflow-hidden  ${nameColor}`}
      >
        {name}
      </p>
    </div>
  );
}
