"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import BlogBox from "../blog_box";
import { BLOGS_QUERY } from "@/app/utils/constants-query";

const bgColors = ["purple", "creamy", "green2"];
const textColors = ["text-white", "text-black", "text-black"];
const lineColors = ["bg-white", "bg-black", "bg-black"];
export default function BlogSlider() {
  const [apiData, setApiData] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const { data } = useQuery(BLOGS_QUERY(10));

  useEffect(() => {
    if (data) {
      setApiData(data?.posts?.nodes);
    }
  }, [data]);

  return (
    <Swiper
      className="mySwiper blog-Swiper sm:!pr-8 pr-4 cursor-grab"
      slidesPerView={"auto"}
      initialSlide={1} // set initial slide to  2
      loop
      onSlideChange={(val) => setActiveSlide(val?.realIndex || 0)}
      breakpoints={{
        350: {
          width: 320,
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        640: {
          width: 640,
          slidesPerView: 1.9,
          spaceBetween: 32,
        },
        900: {
          width: 768,
          slidesPerView: 2.3,
        },
        1100: {
          width: 1024,
          slidesPerView: 3,
        },
        1450: {
          width: 1450,
          slidesPerView: 4.3,
        },
      }}
      spaceBetween={32}
      modules={[Pagination]}
    >
      {apiData?.map((item, i) => {
        const bgColor = bgColors[i % bgColors.length];
        const textColor = textColors[i % textColors.length];
        const lineColor = lineColors[i % lineColors.length];
        return (
          <SwiperSlide
            key={i}
            className={`pb-1 ${activeSlide === i ? "slide-active" : ""}`}
          >
            <BlogBox
              data={item}
              index={i}
              bgColor={`bg-${bgColor}`}
              textColor={textColor}
              lineColor={lineColor}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
