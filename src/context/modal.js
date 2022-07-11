import React, {
  useState, createContext
} from 'react';

export const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const [modalData, setModalData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalData, setModalData, isModalOpen, setIsModalOpen}}>
      {children}
    </ModalContext.Provider>
  );
}
