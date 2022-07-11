import React from 'react';

import CarouselUi from './carousel';
import TableUi from './table';
import TagsUi from './tags';
import ModalUi from './modal';
import useWindowSize from '../utils/useWindowSize';

const Dashboard = () => {
  const {isMobile} = useWindowSize();

  return (
    <div className='dashboard'>
        <CarouselUi />
        <div className='dashboard-heading'>Top 100 Cryptocurrencies by Market Cap</div>
        <TagsUi />
        <TableUi />
        {isMobile && <ModalUi />}
    </div>
  )
}

export default Dashboard;
