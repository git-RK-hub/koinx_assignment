import React from 'react';

import { useAPI } from '../context/hook';

const Table = ({desktopColumns, mobileColumns}) => {
  const { data } = useAPI();

  return (
    <div className='dashboard-table'>
      <div className='dashboard-table__header'>
        <div className='dashboard-table__row'>
          {desktopColumns.map((column, idx) => {
            return (
              <div className='dashboard-table__column' key={idx}>
                <div className="row align-c justify-end">
                  {column.name}
                  {column.headerIcon && <img className="m-5" src={column.headerIcon} alt="down-arrow" />}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='dashboard-table__body'>
        {data.map((row, idx) => {
          return (
            <div key={row.id} className="dashboard-table__row">
              {desktopColumns.map((column) => {      
                return (
                  <div key={Math.random()} className='dashboard-table__column'>{column.value(row, idx)}</div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Table;