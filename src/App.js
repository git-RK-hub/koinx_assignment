import React from 'react';

import { APIContextProvider } from './context/provider';
import Dashboard from './ui/dashboard';
import Layout from './Layout';

const App = () => {
  return (
    <APIContextProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </APIContextProvider>
  )
}

export default App;