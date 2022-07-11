import React, { useContext } from "react";

import Modal from '../components/modal';
import { ModalContext } from "../context/modal";
import { inDollar, inPercentage } from "../utils/utility";
import CaretUp from '../assets/images/caret-up.png';
import CaretDown from '../assets/images/caret-down.png';

const ModalUi = () => {
  const {isModalOpen, setIsModalOpen , modalData} = useContext(ModalContext);

  return (
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <div className="row align-c">
        <img className="dashboard-modal__image" src={modalData.image} alt={modalData.symbol}/>
        <div className="m-5">{modalData.name}</div>
      </div>
      <div className="row justify-sb">
        <div className="m-v-10">
          <p className="m-v-5">PRICE</p>
          <span>{inDollar(modalData.current_price)}</span>
        </div>
        <div className="m-v-10 col align-c">
          <p className="m-v-5">24H</p>
          <div className="row align-c">
            <img className="m-5" src={modalData.ath_change_percentage > 0 ? CaretUp : CaretDown} alt="icon"/>
            <span className={`bold ${modalData.ath_change_percentage > 0 ? 'success' : 'danger'}`}>
              {inPercentage(modalData.ath_change_percentage)}
            </span> 
          </div>
        </div>
        <div className="m-v-10 col align-c">
          <p className="m-v-5">7D</p>
          <div className="row align-c">
            <img className="m-5" src={modalData.ath_change_percentage > 0 ? CaretUp : CaretDown} alt="icon"/>
            <span className={`bold ${modalData.ath_change_percentage > 0 ? 'success' : 'danger'}`}>
              {inPercentage(modalData.ath_change_percentage)}
            </span> 
          </div>
        </div>
      </div>
      <div className="m-v-10">
        <p className="m-v-5">MARKET CAP</p>
        <span>{inDollar(modalData.market_cap)}</span>
      </div>
      <div className="m-v-10">
        <p className="m-v-5">VOLUME (24H)</p>
        <span>{inDollar(modalData.total_volume)}</span>
      </div>
      <div className="m-v-10">
        <p className="m-v-5">CIRCULATING SUPPLY</p>
        <span>{modalData.circulating_supply.toFixed(2)}</span>
      </div>
    </Modal>
  );
}

export default ModalUi;