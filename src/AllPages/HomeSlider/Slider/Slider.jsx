import React, { useRef } from 'react';
import { EffectFlip,Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fade } from 'react-awesome-reveal';
const Slider = () => {
 
  
    return (
        <div> <Fade delay={1e3}  damping={1e-1}>
           <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/8617769/pexels-photo-8617769.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/8617981/pexels-photo-8617981.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/14759603/pexels-photo-14759603.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/2002217/pexels-photo-2002217.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </SwiperSlide>
       
      </Swiper></Fade>
        </div>
    );
};

export default Slider;