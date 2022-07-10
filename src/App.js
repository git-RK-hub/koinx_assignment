import React from 'react';

import Layout from './Layout';
import Table from './components/table';
import { APIContextProvider } from './context/provider';

const App = () => {
  return (
    <APIContextProvider>
      <Layout>
        {/* Carousel */}
        {/*  */}
        Top 100 Cryptocurrencies by Market Cap
        {/* Tags */}
        <Table />
      </Layout>
    </APIContextProvider>
  )
}

export default App;