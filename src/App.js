import { MarketSearch } from "./Components/MarketSearch";
import { useState, useEffect } from "react";
import { useFetch } from "./Components/useFetch";
import { Chart } from "./Components/Chart";

function App() {
  const [symbolInput, setSymbolInput] = useState("");
  const [market, setMarket] = useState("TSCO");
  const { data, isLoading, getDataFromApi, setUrl, url } = useFetch(null, true);

  const handleChange = (e) => {
    setSymbolInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setMarket(symbolInput);
  };
  useEffect(() => {
    setUrl(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${market}&apikey=%27DSHWMDWY55ABHXIL%27`
    );
    getDataFromApi();
  }, [market, url]);

  return (
    <div className="App">
      {
        <MarketSearch
          market={market}
          search={handleSearch}
          change={handleChange}
        />
      }
      {isLoading || !data ? <p>Loading data...</p> : <Chart data={data} />}
    </div>
  );
}

export default App;
