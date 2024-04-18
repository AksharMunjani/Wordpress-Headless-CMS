import Image from "next/image";

export default function ShadesLayout({ position, img, children }) {
  return (
    <>
      <div className={`w-full relative h-fit flex flex-col items-center`}>
        {children}
        {img ? (
          <Image
            src={img}
            className={`absolute ${
              position == "top-left"
                ? "sm:top-0 top-36 left-0"
                : position == "top-right"
                ? "sm:top-0 top-[-130px] right-0"
                : position == "bottom-left"
                ? "bottom-0 left-0"
                : position == "bottom-right"
                ? "bottom-0 right-0"
                : position == "center-left"
                ? "top-1/2 left-0 transform -translate-y-1/2"
                : position == "center-right"
                ? "top-1/2  right-0 transform -translate-y-1/2"
                : position == "center-top"
                ? "top-0 left-1/2 transform -translate-x-1/2"
                : position == "center-bottom"
                ? "bottom-0 left-1/2 transform -translate-x-1/2"
                : ""
            }
          }
           ${
             img ? "block" : ""
           } sm:h-[71%] w-[350px] md:w-[500px] -z-10 sm:opacity-100 opacity-75`}
            alt="Shadow Image"
            quality={100}
            width={1920}
            height={1080}
          />
        ) : null}
      </div>
    </>
  );
}
