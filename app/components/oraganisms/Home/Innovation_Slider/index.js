"use client";

import InnovationInformation from "@/app/components/molecules/innovation_information";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { INNOVATION_SLIDER_QUERY } from "@/app/utils/constants-query";
// import Carousel from 'react-multi-carousel';

export default function InnovationSlider() {
  const [apiData, setApiData] = useState([]);
  const { data } = useQuery(INNOVATION_SLIDER_QUERY);

  useEffect(() => {
    if (data) {
      setApiData(data?.pageBy?.home?.innovationSlider);
    }
  }, [data]);

  return (
    <div className="browser_slider xlg:pt-[122px] pt-[104px] xl:pl-20 sm:pl-8 pl-4 w-full">
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          450: {
            slidesPerView: 1.4,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 1.9,
            spaceBetween: 27,
          },
          1024: {
            slidesPerView: 2.8,
          },
          1250: {
            slidesPerView: 3.8,
          },
          1450: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={1}
        spaceBetween={27}
        modules={[Pagination]}
        className="mySwiper sm:!pr-8 !pr-4"
      >
        {apiData?.map((item, i) => {
          return (
            <>
              <SwiperSlide key={i}>
                <InnovationInformation data={item} index={i} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
}
