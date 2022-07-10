import React, { useMemo} from 'react';

import Table from '../components/table';
import CaretUp from '../assets/images/caret-up.png';
import CaretDown from '../assets/images/caret-down.png';
import DownArrow from '../assets/images/down-arrow.png';
import Star from '../assets/images/star.png';
import VerticalDots from '../assets/images/vertical-dots.png';
import { inDollar, inPercentage } from '../utils/utility';

const TableUi = () => {
  const desktopTableColumn = useMemo(() => [
    {
      headerIcon: '',
      value: () => (
        <img src={Star} alt="star"/>
      )
    },
    {
      name: '#',
      headerIcon: '',
      value: (_, idx) => (
        <div className='dead-text'>{idx+1}</div>
      )
    },
    {
      name: 'NAME',
      headerIcon: '',
      value: (row) => (
        row && (
          <>
            <img className="dashboard-table__column-image" src={row.image} alt={row.symbol} />
            <div className="m-5">{row.name}</div>
            <div className="dead-text all-caps">{row.symbol}</div>
          </>
        )
      ),
    },
    {
      name: 'PRICE',
      headerIcon: '',
      value: (row) => (
        row && inDollar(row.current_price)
      )
    },
    {
      name: '24H',
      headerIcon: DownArrow,
      value: (row) => (
        row && (
          <>
            <img className="m-5" src={row.ath_change_percentage > 0 ? CaretUp : CaretDown} alt="icon"/>
            <div className={`bold ${row.ath_change_percentage > 0 ? 'success' : 'danger'}`}>
              {inPercentage(row.ath_change_percentage)}
            </div>
          </>
        )
      ),
    },
    {
      name: '7D',
      headerIcon: '',
      value: (row) => (
        row && (
          <>
            <img className="m-5" src={row.ath_change_percentage > 0 ? CaretUp : CaretDown} alt="icon"/>
            <div className={`bold ${row.ath_change_percentage > 0 ? 'success' : 'danger'}`}>
              {inPercentage(row.ath_change_percentage)}
            </div>
          </>
        )
      ),
    },
    {
      name: 'MARKET CAP',
      headerIcon: '',
      value: (row) => (
        row && inDollar(row.market_cap)
      ),
    },
    {
      name: 'VOLUME(24H)',
      headerIcon: '',
      value: (row) => (
        row && inDollar(row.total_volume)
      ),
    },
    {
      name: 'CIRCULATING SUPPLY',
      headerIcon: '',
      value: (row) => (
        row && row.circulating_supply
      ),
    },
    {
      name: '',
      value: (row) => (
        row && <img src={VerticalDots} alt="vertical-dots"/>
      ),
    },
  ], []);
  
  const mobileTableColumn = useMemo(() => [
    {
      name: 'NAME',
      headerIcon: '',
      value: (row) => (
        row && (
          <div>
            <img src={row.image} alt={row.symbol} />
            <strong>{row.name}</strong>
            <strong>{row.symbol}</strong>
          </div>
        )
      ),
    },
    {
      name: 'PRICE',
      headerIcon: '',
      value: (row) => (
        row && <strong>{row.current_price}</strong>
      )
    },
    {
      name: '24H',
      headerIcon: DownArrow,
      value: (row) => (
        row && <strong>{row.ath_change_percentage}</strong>
      ),
    },
  ], []);

  return (
    <Table
      desktopColumns={desktopTableColumn}
      mobileColumns={mobileTableColumn}
    />
  );
}
 
export default TableUi;