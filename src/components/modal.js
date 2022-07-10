import React from 'react';

const Modal = ({data}) => {
  console.log(data)
  return (
    <div className="dashboard-modal">
      <div className="row justify-sb">
        <div>
          <div>PRICE</div>
          <div>{data.price}</div>
        </div>
        <div>
          <div>24H</div>
          <div></div>
        </div>
        <div>
          <div>7D</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>MARKET CAP</div>
        <div></div>
      </div>
      <div>
        <div>VOLUME (24H)</div>
        <div></div>
      </div>
      <div>
        <div>CIRCULATING SUPPLY</div>
        <div></div>
      </div>
    </div>
  );
}
 
export default Modal;