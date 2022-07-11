import React from 'react';

const Modal = ({isOpen, setIsOpen, children}) => {
  if(isOpen) {
    return (
      <div className="dashboard-modal" >
        <div className="dashboard-modal__content">
          <span className="dashboard-modal__close" onClick={() => setIsOpen(false)}>&times;</span>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;