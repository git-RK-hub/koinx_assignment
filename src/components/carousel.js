import React, { useCallback, useEffect, useState } from 'react';
import useWindowSize from '../utils/useWindowSize';

const Carousel = ({ children }) => {
  const childrenCount = React.Children.count(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobile, isTablet } = useWindowSize();
  const [childrenOnDisplay, setChildrenOnDisplay] = useState(3);
  
  const updateIndex = useCallback((newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    } else if(newIndex >= (childrenCount / childrenOnDisplay)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  }, [children, childrenCount, childrenOnDisplay]);

  console.log(activeIndex);
  useEffect(() => {
    if(isMobile) {
      setChildrenOnDisplay(1);
    } else if (isTablet){
      setChildrenOnDisplay(2);
    } else {
      setChildrenOnDisplay(3);
      if (activeIndex > childrenOnDisplay) {
        updateIndex(0)
      }
    }
  }, [activeIndex, childrenOnDisplay, isMobile, isTablet, updateIndex]);

  return (
    <div className="dashboard-carousel" >
      <div
        className="dashboard-carousel__inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: `${100 / childrenOnDisplay}%` });
        })}
      </div>
      <div className="row justify-c m-5">
        {isMobile && React.Children.map(children, (child, index) => {
          if(index >= (childrenCount / childrenOnDisplay)) return;
          return (
            <div
              key={`carousel-${index}`}
              className={`dashboard-carousel__dots ${index === activeIndex ? 'dashboard-carousel__dots--active' : ''}`}
              onClick={() => {
                updateIndex(index);
              }}
            />
          );
        })}
      </div>
      {!isMobile && (
          <button
            className="dashboard-carousel__button dashboard-carousel__button--left"
            onClick={() => updateIndex(activeIndex - 1)}
          >
            &lt;
          </button>
        )}
        {!isMobile && (
          <button
            className="dashboard-carousel__button dashboard-carousel__button--right"
            onClick={() => updateIndex(activeIndex + 1)}
          >
            &gt;
          </button>
        )}
    </div>
  );
};

export default Carousel;
