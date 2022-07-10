import React from 'react';

// import Carousel from './carousel';
import TableUi from './table';
import TagsUi from './tags';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        {/* <Carousel /> */}
        {/*  */}
        <h2>Top 100 Cryptocurrencies by Market Cap</h2>
        <TagsUi />
        <TableUi />
    </div>
  )
}

export default Dashboard;