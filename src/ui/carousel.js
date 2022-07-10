import React from 'react';

import Carousel from '../components/carousel';
import CarouselItem from '../components/carouselItem';
import CarouselImg1 from '../assets/images/carousel-1.svg';
import CarouselImg2 from '../assets/images/carousel-2.svg';
import CarouselImg3 from '../assets/images/carousel-3.svg';

const CarouselUi = () => {
  return (
    <Carousel>
      <CarouselItem
        heading="Take a quiz!"
        subheading="Learn and earn $CKB"
        image={CarouselImg1}
      />
      <CarouselItem
        heading="Portfolio 🔥"
        subheading="Track your trades in one place,
        not all over the place"
        image={CarouselImg2}
      />
      <CarouselItem
        heading="Portfolio"
        subheading="Track your trades in one place,
        not all over the place"
        image={CarouselImg3}
      />
      <CarouselItem
        heading="Take a quiz!"
        subheading="Learn and earn $CKB"
        image={CarouselImg1}
      />
      <CarouselItem
        heading="Portfolio 🔥"
        subheading="Track your trades in one place,
        not all over the place"
        image={CarouselImg2}
      />
      <CarouselItem
        heading="Portfolio"
        subheading="Track your trades in one place,
        not all over the place"
        image={CarouselImg3}
      />
      <CarouselItem
        heading="Take a quiz!"
        subheading="Learn and earn $CKB"
        image={CarouselImg1}
      />
    </Carousel>
  );
}
 
export default CarouselUi;