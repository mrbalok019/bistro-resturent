import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./OrderOnline.css";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const OrderOnline = () => {
  return (
    <div>

        <div >
            <SectionTitle
              subHeader='---From 11:00am to 10:00pm---' 
              header = 'ORDER ONLINE'
            ></SectionTitle>
        </div>

      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="w-[312px] h-[450px] flex flex-col ">
            <img src={slide1} alt="" className="" /> 
            <h1 className="text-3xl font-semibold -mt-16 z-10 text-white">Salad</h1>
          </SwiperSlide>
          <SwiperSlide className="w-[312px] h-[450px] flex flex-col ">
            <img src={slide2} alt="" className="" /> 
            <h1 className="text-3xl font-semibold -mt-16 z-10 text-white">Soup</h1>
          </SwiperSlide>
          <SwiperSlide className="w-[312px] h-[450px] flex flex-col ">
            <img src={slide3} alt="" className="" /> 
            <h1 className="text-3xl font-semibold -mt-16 z-10 text-white">Pizzas</h1>
          </SwiperSlide>
          <SwiperSlide className="w-[312px] h-[450px] flex flex-col ">
            <img src={slide4} alt="" className="" /> 
            <h1 className="text-3xl font-semibold -mt-16 z-10 text-white">Deserts</h1>
          </SwiperSlide>
          <SwiperSlide className="w-[312px] h-[450px] flex flex-col ">
            <img src={slide1} alt="" className="" /> 
            <h1 className="text-3xl font-semibold -mt-16 z-10 text-white">Salad</h1>
          </SwiperSlide>
          <SwiperSlide className="w-[312px] h-[450px] flex flex-col ">
            <img src={slide2} alt="" className="" /> 
            <h1 className="text-3xl font-semibold -mt-16 z-10 text-white">Soup</h1>
          </SwiperSlide>
          <SwiperSlide className="w-[312px] h-[450px] flex flex-col ">
            <img src={slide3} alt="" className="" /> 
            <h1 className="text-3xl font-semibold -mt-16 z-10 text-white">Pizzas</h1>
          </SwiperSlide>
          <SwiperSlide className="w-[312px] h-[450px] flex flex-col ">
            <img src={slide4} alt="" className="" /> 
            <h1 className="text-3xl font-semibold -mt-16 z-10 text-white">Deserts</h1>
          </SwiperSlide>
          
   
        </Swiper>
      </>
    </div>
  );
};

export default OrderOnline;
