import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';
import Slider4 from './Slider4';

const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slider1></Slider1>
                </SwiperSlide>

                <SwiperSlide>
                    <Slider2></Slider2>
                </SwiperSlide>

                <SwiperSlide>
                    <Slider3></Slider3>
                </SwiperSlide>

                <SwiperSlide>
                    <Slider4></Slider4>
                </SwiperSlide>

                
            </Swiper>
        </>
    );
};

export default Slider;