import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from '../../../src/images/offers/1.jpg'
import img2 from '../../../src/images/offers/2.jpg'
import img3 from '../../../src/images/offers/3.jpg'
import img4 from '../../../src/images/offers/4.jpg'
import img5 from '../../../src/images/offers/5.jpg'
import img6 from '../../../src/images/offers/6.jpg'
import img7 from '../../../src/images/offers/7.jpg'
import img8 from '../../../src/images/offers/8.jpg'
import img9 from '../../../src/images/offers/9.jpg'
import img10 from '../../../src/images/offers/10.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import Social from './Social';

const HeadSwiper = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div className='HeadSwiper'>
            <div className='SocialContainer h-100'>
                <Social />
            </div>
            <Swiper
                pagination={pagination}
                modules={[Autoplay, Pagination]}
                className="mySwiper2"
            autoplay={{
                delay: 2000,  
                disableOnInteraction: false,  // Autoplay won't stop after user interactions
            }}

            >
                <SwiperSlide><img src={img1} alt="offer" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="offer" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="offer" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="offer" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="offer" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="offer" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="offer" /></SwiperSlide>
                <SwiperSlide><img src={img8} alt="offer" /></SwiperSlide>
                <SwiperSlide><img src={img9} alt="offer" /></SwiperSlide>
                <SwiperSlide><img src={img10} alt="offer" /></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default HeadSwiper