import React from 'react';

import Layout from './Layout';
import Table from './components/table';
import { APIContextProvider } from './context/provider';
import Tags from './components/tags';

const App = () => {
  return (
    <APIContextProvider>
      <Layout>
        {/* Carousel */}
        {/*  */}
        <h2>Top 100 Cryptocurrencies by Market Cap</h2>
        <Tags />
        <Table />
      </Layout>
    </APIContextProvider>
  )
}

export default App;