"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import CaseStudy from "@/app/components/molecules/case_study";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { CASE_STUDY_QUERY } from "@/app/utils/constants-query";

const bgColors = ["purple", "creamy", "green2"];
const textColors = ["text-white", "text-black", "text-black"];
const lineColors = ["bg-white", "bg-black", "bg-black"];
export default function CaseStudySlider() {
  const [apiData, setApiData] = useState([]);
  const { data, loading } = useQuery(CASE_STUDY_QUERY);

  useEffect(() => {
    if (data) {
      setApiData(data?.pageBy?.home?.caseStudySlider);
    }
  }, [data]);

  return (
    <div className="xlg:pt-[108px] sm:pt-20 pt-[60px] xlg:pl-20 xlg:pr-0 sm:pl-8 pl-4 pr-0 w-full">
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1.5,
          },
          1350: {
            slidesPerView: 2.1,
          },
        }}
        slidesPerView={"auto"}
        spaceBetween={32}
        modules={[Pagination]}
        className="mySwiper sm:!pr-8 !pr-4"
      >
        {apiData?.map((item, i) => {
          const bgColor = bgColors[i % bgColors.length];
          const textColor = textColors[i % textColors.length];
          const lineColor = lineColors[i % lineColors.length];
          return (
            <SwiperSlide key={i}>
              <CaseStudy
                data={item}
                bgColor={`bg-${bgColor}`}
                textColor={textColor}
                lineColor={lineColor}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
