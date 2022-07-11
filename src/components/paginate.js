import React, { useState } from 'react';

const Paginate = ({dataLength, rowsPerPage, onPageChange, currentPage}) => {
  const numberOfPages = dataLength / rowsPerPage;
  const [currentActivePage, setCurrentActivePage] = useState(currentPage);

  const handlePageClick = (page) => {
    setCurrentActivePage(page);
    onPageChange(rowsPerPage * (page-1), rowsPerPage * page);
  }

  const handlePrevClick = () => {
    setCurrentActivePage((page) => page - 1);
    onPageChange(rowsPerPage * (currentActivePage-2), rowsPerPage * (currentActivePage-1));
  }

  const handleNextClick = () => {
    setCurrentActivePage((page) => page + 1);
    onPageChange(rowsPerPage * (currentActivePage), rowsPerPage * (currentActivePage + 1));
  }

  if(numberOfPages === 1) {
    return null;
  } else {
    return (
      <div className='dashboard-paginate'>
        <button
          className={
            `dashboard-paginate__button dashboard-paginate__button-nav
              ${currentActivePage === 1 ? 'dashboard-paginate__button--disabled' : ''}`
          }
          onClick={handlePrevClick}
        >
          &lt;
        </button>
        {Array(numberOfPages).fill(1).map((_, idx) => (
          <button
            key={`dashboard-paginate-btn-${idx}`}
            className={
              idx+1 === currentActivePage
              ? "dashboard-paginate__button dashboard-paginate__button--active"
              : "dashboard-paginate__button"
            }
            onClick={() => handlePageClick(idx+1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className={
            `dashboard-paginate__button dashboard-paginate__button-nav
              ${currentActivePage === numberOfPages ? 'dashboard-paginate__button--disabled' : ''}`
          }
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>
    )
  }
}
 
export default Paginate;