"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { FOOTER_QUERY } from "@/app/utils/constants-query";

export default function Footer() {
  const [apiData, setApiData] = useState({});
  const { data } = useQuery(FOOTER_QUERY);

  useEffect(() => {
    if (data) {
      setApiData(data?.themeOptionBy?.footer);
    }
  }, [data]);

  return (
    <div className="max-w-screen-xl xlg:mt-[140px] sm:mt-20 mt-[60px] mx-auto 1xl:px-0 sm:px-8 px-4">
      <Link href={`/`} className="cursor-pointer">
        {apiData?.logo?.node?.link ? (
          <Image
            src={apiData?.logo?.node?.link}
            alt="LOGO"
            width={240}
            height={50}
            className="sm:max-w-[240px] max-w-[150px]"
            unoptimized
            draggable="false"
            lazyRoot="true"
          />
        ) : null}
      </Link>
      <div className="w-full pt-6 sm:pb-8 pb-3 flex justify-between md:flex-row flex-col-reverse">
        <p className="text-[16px] font-medium md:max-w-full max-w-[255px]">
          {apiData?.copyRight}
        </p>
        <div className="flex md:flex-row flex-col md:gap-5 lg:mb-0 mb-3">
          {apiData?.pages?.map(
            (option, i) =>
              option?.page && (
                <Link key={i} href={option?.page?.url || ""}>
                  <p className="text-[16px] hover:text-[#11CAD1] font-medium lg:mb-0 mb-2">
                    {option?.page?.title}
                  </p>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
}
