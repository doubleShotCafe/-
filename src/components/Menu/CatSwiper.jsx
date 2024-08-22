import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Pagination, Navigation } from 'swiper/modules';
import { categories } from './cat';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CatSwiper = ({ handleCategoryChange, selectedCategory }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className='CatSwiper'>
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          365: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 80,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 120,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide
            key={category.id}
            onClick={() => handleCategoryChange(category.name)}>
            <div className={`SingleCatContainer ${category.name === selectedCategory ? "selectionActive" : ""}`}>
              {category.icon}
              <h4>{category.name}</h4>
            </div>
          </SwiperSlide>

        ))}
        <div ref={prevRef} className="custom-prev-button"><IoIosArrowBack />
        </div>
        <div ref={nextRef} className="custom-next-button"><IoIosArrowForward />
        </div>
      </Swiper>
    </div>
  )
}

export default CatSwiper