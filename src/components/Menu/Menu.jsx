import React, { useEffect, useRef, useState } from 'react';
import './menu.css'; // Custom CSS for additional styling
import { FaFacebook, FaHandPointDown, FaInstagram } from "react-icons/fa";
import { menuItems as items } from '../../data';
import { RiTiktokLine } from 'react-icons/ri';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { CiCoffeeCup } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function CafeMenu() {
  const categories = [
    {
      id: 1,
      name: 'Hot Beverages',
      icon: <CiCoffeeCup />
    },
    {
      id: 2,
      name: 'Cold Beverages',
      icon: <CiCoffeeCup />
    },
    {
      id: 3,
      name: 'Fresh Juice',
      icon: <CiCoffeeCup />
    },
    // {
    //   id: 4,
    //   name: 'smoothie',
    //   icon: <CiCoffeeCup />
    // },
    {
      id: 5,
      name: 'milkshake',
      icon: <CiCoffeeCup />
    },
    {
      id: 6,
      name: 'Waffle',
      icon: <CiCoffeeCup />
    },
    {
      id: 7,
      name: 'Desserts',
      icon: <CiCoffeeCup />
    },
    {
      id: 8,
      name: 'special coffee',
      icon: <CiCoffeeCup />
    },
    {
      id: 9,
      name: 'Soda',
      icon: <CiCoffeeCup />
    },
    {
      id: 10,
      name: 'Soft drinks',
      icon: <CiCoffeeCup />
    },
    {
      id: 11,
      name: 'Extra',
      icon: <CiCoffeeCup />
    },]
  const [selectedCategory, setSelectedCategory] = useState('Hot Beverages');
  const cardRefs = useRef([]);
  const [animationKey, setAnimationKey] = useState(0);

  const handleCategoryChange = (name) => {
    setSelectedCategory(name);
    setAnimationKey(prevKey => prevKey + 1); // Increment key to trigger re-render

  };

  const filteredItems = selectedCategory === 'Hot Beverages'
    ? items.filter(item => item.category === selectedCategory)
    : items.filter(item => item.category === selectedCategory);

  useEffect(() => {
    // Initialize Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target); // Stop observing after adding class
        }
      });
    }, { threshold: 0.1 });

    // Apply observer to new cards
    cardRefs.current.forEach(card => {
      if (card) {
        card.classList.remove('fade-in'); // Remove fade-in class before observing
        observer.observe(card);
      }
    });

    // Cleanup on component unmount or when items change
    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, [animationKey]); // Dependency on animationKey to reapply observer

  return (
    <div className="container">

      <div class="social-menu">
        <h2 className='font1 mb-3 mt-4'>Follow Us</h2>
        <ul>
          <li>
            <a title='Facebook' className='d-flex' style={{ justifyContent: "center", alignItems: "center" }} href="https://www.facebook.com/DoubleShot9" target="blank">
              <FaFacebook className='fab' /> </a>
          </li>
          <li>
            <a title='instagram' className='d-flex' style={{ justifyContent: "center", alignItems: "center" }} href="https://www.instagram.com/double.shot.cafe/" target="blank">
              <FaInstagram className='fab' /> </a>
          </li>
          <li>
            <a title='Tiktok' className='d-flex' style={{ justifyContent: "center", alignItems: "center" }} href="https://www.tiktok.com/@doubleshotcafe0" target="blank">
              <RiTiktokLine className='fab' />
            </a>
          </li>
          <li>
            <a title='community' className='d-flex' style={{ justifyContent: "center", alignItems: "center" }} href="https://www.facebook.com/groups/doubleshotcafe" target="blank">
              <FaPeopleGroup className='fab' />
            </a>
          </li>
          <li>
            <a title='location' className='d-flex' style={{ justifyContent: "center", alignItems: "center" }} href="https://maps.app.goo.gl/VCy4QQ89V6WtLiY66" target="blank">
              <IoLocationOutline className='fab' />

            </a>
          </li>
        </ul>
      </div>
      <h2 className='text-center mt-4 color2 font1 display-4 mb-1'>Our Menu</h2>

      <div className="text-center mt-3 mb-4 categoriesSelection">
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 80,
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
          modules={[Pagination]}
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide
              key={category.id}
              onClick={() => handleCategoryChange(category.name)}>
              <div className={`SingleCatContainer ${category.name === selectedCategory ? "selectionActive" :""}`}>
                {category.icon}
                <h4>{category.name}</h4>
              </div>
            </SwiperSlide>



          ))}
        </Swiper>

        {/* <select className='custom-select' onChange={handleCategoryChange} value={selectedCategory} >
          {categories.map((category, index) => (
            <option style={{fontWeight:"bolder"}} key={index} value={category} >{category}</option>
          ))}
        </select> */}
        {/* {categories.map((category, index) => (
          <button
            key={index}
            className={`btn btn-category mx-2 ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))} */}
      </div>
      <div className="row">
        {filteredItems.map((item, index) => {
          let price = item.price.toString();
          let parts = price.split('-');
          let result1 = parts[0];
          let result2 = parts[1];
          return (
            <div key={item.id} className="col-6 col-md-4 mb-4">
              <div className="card menu-card " ref={el => cardRefs.current[index] = el}>
                <img src={`${item.image}`} className="card-img-top1" alt={item.name} />
                <div className="card-body text-center">
                  <h5 style={item.name.length > 8 ? { fontSize: "1.2rem" } : { fontSize: "1.3rem" }} className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className=''>

                    <div className='' style={{ gap: "33px" }}>
                      <div className='d-flex align-items-center justify-content-around'>
                        <p className='color1 mb-0' style={{ fontSize: "16px" }}>Medium</p>
                        <h6 className="card-subtitle mb-2 mt-0 btn btn-danger text-white" style={{ color: "white !important" }}>{result1}</h6>
                      </div>
                      <div className='d-flex align-items-center justify-content-around'>
                        <p className='color1 mb-0' style={{ fontSize: "16px" }}>Large</p>
                        <h6 className="card-subtitle mb-2 mt-0 btn btn-danger text-white" style={{ color: "white !important" }}>{result2 === ' none' ? "-" : result2}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default CafeMenu;
