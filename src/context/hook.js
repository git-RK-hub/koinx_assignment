import { useContext } from 'react';

import { ApiContext } from './provider';

export function useAPI() {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
