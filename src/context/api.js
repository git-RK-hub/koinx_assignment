import React, {
  useState, useEffect, createContext
} from 'react';
import axios from 'axios';

export const ApiContext = createContext();

export function APIContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap%20_desc&sparkline=false&price_change_percentage=24h%2C%207d`
        );
        setIsLoading(false);
        setData(data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setLoadError(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ data, isLoading, loadError }}>
      {children}
    </ApiContext.Provider>
  );
}
