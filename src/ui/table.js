import React, { useEffect, useMemo, useState} from 'react';

import Table from '../components/table';
import CaretUp from '../assets/images/caret-up.png';
import CaretDown from '../assets/images/caret-down.png';
import DownArrow from '../assets/images/down-arrow.png';
import Star from '../assets/images/star.png';
import VerticalDots from '../assets/images/vertical-dots.png';
import useWindowSize from '../utils/useWindowSize';
import { inDollar, inPercentage } from '../utils/utility';

const TableUi = () => {
  const { isMobile, isTablet } = useWindowSize();

  const desktopTableColumn = useMemo(() => [
    {
      headerIcon: '',
      classes: 'justify-start dashboard-table__column--xsmall',
      value: () => (
        <img src={Star} alt="star"/>
      )
    },
    {
      name: '#',
      headerIcon: '',
      classes: 'justify-start dashboard-table__column--xsmall',
      value: (_, idx) => (
        <div className='dead-text'>{idx+1}</div>
      )
    },
    {
      name: 'NAME',
      headerIcon: '',
      classes: 'justify-start dashboard-table__column--large',
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
      classes: 'dashboard-table__column--medium',
      value: (row) => (
        row && inDollar(row.current_price)
      )
    },
    {
      name: '24H',
      headerIcon: DownArrow,
      classes: 'dashboard-table__column--small',
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
      classes: 'dashboard-table__column--small',
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
        row && row.circulating_supply.toFixed(2)
      ),
    },
    {
      name: '',
      classes: 'dashboard-table__column--xsmall',
      value: (row) => (
        row && <img src={VerticalDots} alt="vertical-dots"/>
      ),
    },
  ], []);
  
  // columns to display on tablet view
  const tabletTableColumn = useMemo(() => [
    {
      headerIcon: '',
      classes: 'justify-start dashboard-table__column--xsmall',
      value: () => (
        <img src={Star} alt="star"/>
      )
    },
    {
      name: '#',
      headerIcon: '',
      classes: 'justify-start dashboard-table__column--xsmall',
      value: (_, idx) => (
        <div className='dead-text'>{idx+1}</div>
      )
    },
    {
      name: 'NAME',
      headerIcon: '',
      classes: 'justify-start dashboard-table__column--large',
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
      classes: 'dashboard-table__column--medium',
      value: (row) => (
        row && inDollar(row.current_price)
      )
    },
    {
      name: '24H',
      headerIcon: DownArrow,
      classes: 'dashboard-table__column--small',
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
      classes: 'dashboard-table__column--small',
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
  ], [])
  // columns to display on mobile view
  const mobileTableColumn = useMemo(() => [
    {
      headerIcon: '',
      classes: 'justify-start dashboard-table__column--xsmall',
      value: () => (
        <img src={Star} alt="star"/>
      )
    },
    {
      name: 'NAME',
      headerIcon: '',
      classes: 'justify-start dashboard-table__column--medium',
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
      classes: 'justify-start dashboard-table__column--small',
      value: (row) => (
        row && inDollar(row.current_price)
      )
    },
    {
      name: '24H',
      headerIcon: DownArrow,
      classes: 'justify-start dashboard-table__column--small',
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
  ], []);
  const [columns, setColumns] = useState(desktopTableColumn);

  useEffect(() => {
    if(isMobile) {
      setColumns(mobileTableColumn);
    } else if(isTablet) {
      setColumns(tabletTableColumn);
    } else {
      setColumns(desktopTableColumn);
    }
  }, [desktopTableColumn, isMobile, isTablet, mobileTableColumn, tabletTableColumn])
 
  return (
    <Table columns={columns} />
  );
}
 
export default TableUi;