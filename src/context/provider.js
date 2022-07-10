import React, {
  useState, useEffect, createContext
} from 'react';
import axios from 'axios';

export const ApiContext = createContext();

export function APIContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap`
      );
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ data }}>
      {children}
    </ApiContext.Provider>
  );
}
