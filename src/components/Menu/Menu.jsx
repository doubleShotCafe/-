import React, { useEffect, useRef, useState } from 'react';
import './menu.css'; // Custom CSS for additional styling
import { FaHandPointDown } from "react-icons/fa";
import { menuItems as items } from '../../data';


function CafeMenu() {
  const categories = ['Hot Drinks', 'Hot caffeine', 'Iced caffeine', 'Cold Drinks', 'smoothie', 'milkshake', 'Waffle', 'Desserts', 'special coffee', 'Soda', 'Soft drinks' , 'Extra'];
  const [selectedCategory, setSelectedCategory] = useState('Hot caffeine');
  const cardRefs = useRef([]);
  const [animationKey, setAnimationKey] = useState(0);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setAnimationKey(prevKey => prevKey + 1); // Increment key to trigger re-render

  };

  const filteredItems = selectedCategory === 'Hot caffeine'
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
      <h2 className='text-center mt-4 color2 font1 display-4 mb-1'>Our Menu</h2>
      <div className="text-center mt-3 mb-4">
        <div className='headingContainer'>
          <p className='mb-0 color1 font2 display-6'>please select category </p>
          <p className='mb-0 color1 font2 display-6'>من فضلك اختر القسم</p>
          <FaHandPointDown className='mt-2 mb-3' size={30} color='432813' />
        </div>
        <select className='custom-select' onChange={handleCategoryChange} value={selectedCategory} >
          {categories.map((category, index) => (
            <option key={index} value={category} >{category}</option>
          ))}
        </select>
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
                        <h6 className="card-subtitle mb-2 mt-0 btn btn-danger text-white" style={{color:"white !important"}}>{result1}</h6>
                      </div>
                      <div className='d-flex align-items-center justify-content-around'>
                        <p className='color1 mb-0' style={{ fontSize: "16px" }}>Large</p>
                        <h6 className="card-subtitle mb-2 mt-0 btn btn-danger text-white" style={{color:"white !important"}}>{result2 === ' none' ? "-" : result2}</h6>
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
