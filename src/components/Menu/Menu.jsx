import React, { useEffect, useRef, useState } from 'react';
import { menuItems as items } from '../../data';
import Social from './Social';
import CatSwiper from './CatSwiper';
import SingleItem from './SingleItem';
import HeadSwiper from './HeadSwiper';
import './menu.css';

function CafeMenu() {

  const [selectedCategory, setSelectedCategory] = useState('Hot Beverages');
  const cardRefs = useRef([]);
  const [animationKey, setAnimationKey] = useState(0);


  const handleCategoryChange = (name) => {
    setSelectedCategory(name);
    setAnimationKey(prevKey => prevKey + 1);
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
  }, [animationKey]);

  return (
    <>
      <HeadSwiper />
      <div className="container">
        {/* <Social /> */}
        <h2 className='text-center mt-4 color2 font1 display-4 mb-1'>Our Menu</h2>

        <div className="text-center mt-3 mb-4 categoriesSelection">
          <CatSwiper
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="row">
          {filteredItems.map((item, index) => {
            return (
              <SingleItem
                item={item}
                index={index}
                cardRefs={cardRefs}
              />
            )
          })}
        </div>
      </div>
    </>

  );
}

export default CafeMenu;
