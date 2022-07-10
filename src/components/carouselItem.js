import React from "react";

const CarouselItem = ({heading, subheading, image}) => {
  return ( 
    <div className="dashboard-carousel__item p-10">
      <div className="dashboard-carousel__item-heading">{heading}</div>
      <div className="dashboard-carousel__item-subheading">{subheading}</div>
      <img className="dashboard-carousel__item-img" src={image} alt="item"/>
    </div>
  );
}

export default CarouselItem;
