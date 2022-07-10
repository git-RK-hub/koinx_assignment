import React from 'react';

const Tag = ({icon, name}) => {
  return (
    <div className="dashboard-tag row align-c m-5">
      {icon && <img src={icon} alt="icon"/>}
      <div>{name}</div>
    </div>
  );
}
 
export default Tag;