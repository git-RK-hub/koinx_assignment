import React from 'react';

import Navbar from '../components/nav';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
 
export default Layout;