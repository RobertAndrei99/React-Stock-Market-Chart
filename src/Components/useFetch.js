import { useState, useEffect } from "react";
import axios from "axios";
//api: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${market}&apikey=%27DSHWMDWY55ABHXIL%27`
export const useFetch = (defaultResponseData, defaultResponseLoading) => {
  const [url, setUrl] = useState(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO&apikey=%27DSHWMDWY55ABHXIL%27`
  );
  const [data, setData] = useState(defaultResponseData);
  const [isLoading, setIsLoading] = useState(defaultResponseLoading);
  const getDataFromApi = async () => {
    console.log(url);
    setIsLoading(true);
    try {
      const res = await axios(url);
      const data = await res.data;
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getDataFromApi(url);
    setIsLoading(false);
  }, []);
  return { data, isLoading, getDataFromApi, setUrl, url };
};
