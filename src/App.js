import React from 'react';

import Context from './context';
import Dashboard from './ui/dashboard';
import Layout from './Layout';


const App = () => {
  return (
    <Context.APIContextProvider>
      <Context.ModalContextProvider>
        <Layout>
          <Dashboard />
        </Layout>
      </Context.ModalContextProvider>
    </Context.APIContextProvider>
  )
}

export default App;