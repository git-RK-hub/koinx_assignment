import React, {useCallback, useContext, useEffect, useState } from 'react';

import { useAPI } from '../context/hook';
import { ModalContext } from '../context/modal';
import ErrorLayout from '../Layout/error';
import LoadingLayout from '../Layout/loader';
import useWindowSize from '../utils/useWindowSize';
import Paginate from './paginate';

const Table = ({columns}) => {
  const { data, isLoading, loadError } = useAPI();
  const { isMobile } = useWindowSize();
  const { setIsModalOpen, setModalData } = useContext(ModalContext);

  const [rowCount, setRowCount] = useState(10);
  const [rowsData, setRowsData] = useState([]);

  const getRowsData = useCallback((startIdx, endIdx) => {
    setRowsData(data.slice(startIdx, endIdx));
  }, [data]);
  
  const changeRowCount = (e) => {
    setRowCount(Number(e.target.value));
  }
  
  const handleRowClick = (row) => {
    if(isMobile) {
      setIsModalOpen(true);
      setModalData(row);
    }
  }

  useEffect(() => {
    getRowsData(0, rowCount);
  },[data, getRowsData, rowCount]);
  
  if(isLoading) {
    return <LoadingLayout />;
  } else if(loadError) {
    return <ErrorLayout />;
  } else {
    return (
      <div className='dashboard-table'>
        {!isMobile && <div className='dashboard-table__row-count row align-c justify-end'>
          <span className="m-5 dead-text small-font-size">show rows</span>
          <select value={rowCount} onChange={changeRowCount}>
            <option value={10}>10</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>}
        <div className='dashboard-table__header'>
          <div className='dashboard-table__row'>
            {columns.map((column, idx) => (
              <div
                key={idx}
                className={`dashboard-table__column ${column.classes}`}
              >
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
            <div key={row.id} className="dashboard-table__row" onClick={() => handleRowClick(row)}>
              {columns.map((column) => (
                  <div
                    key={Math.random()}
                    className={`dashboard-table__column ${column.classes}`}
                    >
                      {column.value(row, idx)}
                    </div>
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
}

export default Table;