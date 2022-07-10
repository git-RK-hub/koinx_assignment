import React from 'react';

import CarouselUi from './carousel';
import TableUi from './table';
import TagsUi from './tags';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <CarouselUi />
        {/*  */}
        <h2>Top 100 Cryptocurrencies by Market Cap</h2>
        <TagsUi />
        <TableUi />
    </div>
  )
}

export default Dashboard;
