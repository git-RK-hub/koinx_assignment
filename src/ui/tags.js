import React from 'react';

import Tag from '../components/tag';
import Star from '../assets/images/star.png';
import useWindowSize from '../utils/useWindowSize';

const TagsUi = () => {
  const { isMobile, isTablet } = useWindowSize();

  if (isMobile || isTablet) {
    return null;
  } else {
    return (
      <div className='dashboard-tags'>
        <Tag name="Favourites" icon={Star} />
        <Tag name="CryptoCurrencies" />
        <Tag name="DeFi" />
        <Tag name="NFTs & Collectibles" />
      </div>
    );
  }
}

export default TagsUi;
