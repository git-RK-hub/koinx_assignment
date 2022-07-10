import React from 'react';

import Tag from './tag';
import Star from '../assets/images/star.png';

const Tags = () => {
  return (
    <div className='dashboard-tags'>
      <Tag name="Favourites" icon={Star} />
      <Tag name="CryptoCurrencies" />
      <Tag name="DeFi" />
      <Tag name="NFTs & Collectibles" />
    </div>
  );
}

export default Tags;
