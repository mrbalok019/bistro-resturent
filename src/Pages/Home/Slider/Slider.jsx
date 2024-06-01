import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../assets/home/01.jpg'
import slider2 from '../../../assets/home/02.jpg'
import slider3 from '../../../assets/home/03.png'
import slider4 from '../../../assets/home/04.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './sliderStyle.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper lg:max-w-full md:max-w-screen-md sm:max-w-screen-sm 
                rounded-xl"
            >
                <SwiperSlide >

                    <img className='z-[1]' src={slider1} alt="" />
                        
                    
                   
                </SwiperSlide>
                <SwiperSlide ><img src={slider2} alt="" /> </SwiperSlide>
                <SwiperSlide ><img src={slider3} alt="" /> </SwiperSlide>
                <SwiperSlide ><img src={slider4} alt="" /> </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Slider;