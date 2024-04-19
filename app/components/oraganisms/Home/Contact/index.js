import { CONTACT_INFO_QUERY } from "@/app/utils/constants-query";
import { getClient } from "@faustwp/experimental-app-router";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  try {
    const client = await getClient();

    const { data } = await client.query({
      query: CONTACT_INFO_QUERY,
    });

    return data?.pageBy?.home?.contact;
  } catch (error) {
    console.log("error while getting data of Contact Section", error);
    return null;
  }
}
export default async function Contact() {
  const apiData = await getData();
  return (
    <div className="max-w-screen-xl xlg:mt-[140px] sm:mt-20 mt-[60px] w-full 1xl:px-0 sm:px-8 px-4">
      <div className="w-full overflow-hidden bg-lightBlue2 bg-opacity-90 p-[30px] md:p-[60px] h-fit relative rounded-[30px] flex flex-col lg:gap-[110px]">
        <h2 className="md:text-[48px] text-[40px] lg:mb-0 mb-6 font-SpaceGrotesk md:leading-[57.6px] leading-[48px] tracking-[1px]">
          {apiData?.contactHeader}
        </h2>
        <div className="w-full flex xl:justify-between xl:flex-row flex-col lg:mb-0 mb-6">
          <Link
            href={`mailto:contact@solveonline.com`}
            className="md:text-[38px] text-lg font-SpaceGrotesk xl:mb-0 mb-4"
          >
            {apiData?.contactEmail}
          </Link>
          <div className="flex flex-row gap-5">
            <Link
              href={apiData?.telegramLink?.url}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={"/icons/telegram.svg"}
                alt="Icon 1 Image"
                width={32}
                height={32}
                sizes={20}
                draggable="false"
              />
            </Link>
            <Link
              href={apiData?.whatsappLink?.url}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={"/icons/whatsapp.svg"}
                alt="Icon 2 Image"
                width={32}
                height={32}
                sizes={20}
                draggable="false"
              />
            </Link>
            <Link
              href={apiData?.linkedinLink?.url}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={"/icons/linkedin.svg"}
                alt="Icon 3 Image"
                width={32}
                height={32}
                sizes={20}
                draggable="false"
              />
            </Link>
            <Link
              href={apiData?.facebookLink?.url}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={"/icons/facebook.svg"}
                alt="Icon 4 Image"
                width={32}
                height={32}
                sizes={20}
                draggable="false"
              />
            </Link>
          </div>
        </div>
        <div className="max-w-[431px] lg:max-h-full max-h-[270px] w-full -z-1 lg:absolute bottom-0 md:left-[45%] sm:left-[30%] !mx-auto">
          <Image
            src={apiData?.contactImage?.node?.link}
            alt="Icon 5 Image"
            width={250}
            height={180}
            sizes={20}
            className="max-w-[431px] w-full h-full lg:object-cover object-fill object-top lg:mb-0 -mb-[180px] mx-auto"
            unoptimized
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
