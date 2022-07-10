import React, { useState } from 'react';

const Carousel = ({ children }) => {
  const childrenCount = React.Children.count(children);
  const [childrenOnDisplay, setChildrenOnDisplay] = useState(3);
  const [hiddenChildren, setHiddenChildren] = useState(childrenCount - childrenOnDisplay);
  const [transformX, setTransformX] = useState(0);

  const handlePrevClick = () => {
    const perChildrenWidth = Math.round(100 / 3);
    const minTransformX = 0;
    const nextTransformX = transformX - perChildrenWidth;

    if(nextTransformX < minTransformX) {
      setTransformX(0);
      return;
    };

    setTransformX(nextTransformX);
  };

  const handleNextClick = () => {
    const perChildrenWidth = Math.round(100 / 3);
    const maxTransformX = hiddenChildren * perChildrenWidth;
    const nextTransformX = transformX + perChildrenWidth;

    if(nextTransformX > maxTransformX) {
      setTransformX(0);
      return;
    }

    setTransformX(nextTransformX);
  };

  return (
    <div className="dashboard-carousel">
      <div className="dashboard-carousel-inner" style={{transform: `translate(-${transformX}%)`}}>
        {children}
      </div>
      <button
        className="dashboard-carousel__button dashboard-carousel__button--left"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <button
        className="dashboard-carousel__button dashboard-carousel__button--right"
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  );
}
 
export default Carousel;