import React from 'react';

import CarouselUi from './carousel';
import TableUi from './table';
import TagsUi from './tags';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <CarouselUi />
        <div className='dashboard-heading'>Top 100 Cryptocurrencies by Market Cap</div>
        <TagsUi />
        <TableUi />
    </div>
  )
}

export default Dashboard;
