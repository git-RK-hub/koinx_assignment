import React, {useCallback, useEffect, useState } from 'react';

import { useAPI } from '../context/hook';
import Paginate from './paginate';

const Table = ({desktopColumns, mobileColumns}) => {
  const { data } = useAPI();
  const [rowCount, setRowCount] = useState(10);
  const [rowsData, setRowsData] = useState([]);
  
  console.log(rowsData);
  const getRowsData = useCallback((startIdx, endIdx) => {
    setRowsData(data.slice(startIdx, endIdx));
  }, [data]);
  
  useEffect(() => {
    getRowsData(0, rowCount);
  },[data, getRowsData, rowCount]);
  
  const changeRowCount = (e) => {
    setRowCount(Number(e.target.value));
  }

  return (
    <div className='dashboard-table'>
      <div className='dashboard-table__row-count row align-c justify-end'>
        <span className="m-5 dead-text small-font-size">show rows</span>
        <select value={rowCount} onChange={changeRowCount}>
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div className='dashboard-table__header'>
        <div className='dashboard-table__row'>
          {desktopColumns.map((column, idx) => (
            <div className='dashboard-table__column' key={idx}>
              <div className="row align-c justify-end">
                {column.name}
                {column.headerIcon && <img className="m-5" src={column.headerIcon} alt="down-arrow" />}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='dashboard-table__body'>
        {rowsData.map((row, idx) => (
          <div key={row.id} className="dashboard-table__row">
            {desktopColumns.map((column) => (
                <div key={Math.random()} className='dashboard-table__column'>{column.value(row, idx)}</div>
              )
            )}
          </div>
        ))}
      </div>
      <Paginate
        currentPage={1}
        dataLength={data.length}
        rowsPerPage={rowCount}
        onPageChange={getRowsData}
      />
    </div>
  );
}

export default Table;