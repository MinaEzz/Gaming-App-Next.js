"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PaginationSection from "./pagination-section/PaginationSection.component";
import { sliderCards } from "./Slider.data";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import type swiperType from "swiper";

const Slider = () => {
  const [swiper, setSwiper] = useState<swiperType | null>(null);
  return (
    <section className="w-full flex flex-col gap-3">
      <Swiper
        className="w-full h-96"
        spaceBetween={100}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {sliderCards.map((card, index) => {
          return (
            <SwiperSlide
              className="w-full h-full rounded-2xl overflow-hidden"
              key={index}
            >
              {card.jsx}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <PaginationSection />
    </section>
  );
};

export default Slider;
