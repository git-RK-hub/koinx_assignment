import React, { useCallback, useEffect, useState } from 'react';
import useWindowSize from '../utils/useWindowSize';

const Carousel = ({ children }) => {
  const childrenCount = React.Children.count(children);
  const { isMobile } = useWindowSize();
  const [childrenOnDisplay, setChildrenOnDisplay] = useState(3);
  const [hiddenChildren, setHiddenChildren] = useState(childrenCount - childrenOnDisplay);
  const [transformX, setTransformX] = useState(0);
  const [transformXMobile, setTransformXMobile] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrevClick = () => {
    const perChildrenWidth = Math.round(100 / childrenOnDisplay);
    const minTransformX = 0;
    const nextTransformX = isMobile ? transformXMobile - perChildrenWidth : transformX - perChildrenWidth;

    if(nextTransformX < minTransformX) {
      if(isMobile) setTransformXMobile(0);
      else setTransformX(0);
      return;
    };
  
    if(isMobile) setTransformXMobile(nextTransformX);
    else setTransformX(nextTransformX);
  };

  const handleNextClick = useCallback(() => {
    const perChildrenWidth = Math.round(100 / childrenOnDisplay);
    const maxTransformX = hiddenChildren * perChildrenWidth;
    const nextTransformX = isMobile ? transformXMobile + perChildrenWidth : transformX + perChildrenWidth;

    if(nextTransformX > maxTransformX) {
      if(isMobile) setTransformXMobile(0);
      else setTransformX(0);
      return;
    }

    if(isMobile) setTransformXMobile(nextTransformX);
    else setTransformX(nextTransformX);
  }, [childrenOnDisplay, hiddenChildren, isMobile, transformX, transformXMobile]);

  useEffect(() => {
    let interval;
    if (isMobile) {
      setTransformX(0);
      setChildrenOnDisplay(1);
      setHiddenChildren(childrenCount - 1);

      interval = setInterval(() => {
        handleNextClick();
        setActiveIndex((idx) => (idx + 1) % childrenCount);
      }, 3000);
    } else {
      setTransformXMobile(0);
      setActiveIndex(0);
      setChildrenOnDisplay(3);
      setHiddenChildren(childrenCount - 3);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [childrenCount, handleNextClick, isMobile, transformXMobile]);

  return (
    <div className="dashboard-carousel">
      <div className='dashboard-carousel__slider'>
        <div
          className="dashboard-carousel__inner"
          style={{transform: isMobile ? `translate(-${transformXMobile}%)` : `translate(-${transformX}%)`}}
        >
          {children}
        </div>
      </div>
      {isMobile && (
        <div className="row justify-c align-c">
          {Array(childrenCount).fill(0).map((_, idx) => (
            <div key={`carousel-${idx}`} className={`dashboard-carousel__dots ${idx === activeIndex ? 'dashboard-carousel__dots--active' : ''}`} />
          ))}
        </div>
      )}
      {!isMobile && (
        <button
          className="dashboard-carousel__button dashboard-carousel__button--left"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
      )}
      {!isMobile && (
        <button
          className="dashboard-carousel__button dashboard-carousel__button--right"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      )}
    </div>
  );
}
 
export default Carousel;