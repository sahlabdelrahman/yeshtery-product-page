import React, { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";
import { Skeleton } from "@mui/material";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import CarouselItem from "./CarouselItem";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./index.scss";

export default function ProductCarousel({ images, isLoading }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperRef, setSwiperRef] = useState();

  const Items = (bigCarousel) =>
    images?.map((item) => (
      <SwiperSlide key={item?.id}>
        <CarouselItem data={item} bigCarousel={bigCarousel} />
      </SwiperSlide>
    ));

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="productCarousel">
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
        style={{ marginBottom: "10px" }}
      >
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={400}
            height={500}
          />
        ) : (
          Items(true)
        )}
      </Swiper>
      <div className="smallCarousel">
        <ArrowBackIosOutlinedIcon onClick={handlePrevious} />
        <Swiper
          onSwiper={setThumbsSwiper}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 4,
            },
            550: {
              slidesPerView: 5,
            },
            667: {
              slidesPerView: 6,
            },
            900: {
              slidesPerView: 4,
            },
          }}
        >
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <SwiperSlide key={i}>
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={85}
                    height={85}
                    sx={{ marginRight: "5px" }}
                  />
                </SwiperSlide>
              ))
            : Items()}
        </Swiper>
        <ArrowForwardIosOutlinedIcon onClick={handleNext} />
      </div>
    </div>
  );
}
