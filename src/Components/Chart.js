import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export const Chart = (props) => {
  const [price, setPrice] = useState([]);
  const [times, setTimes] = useState([]);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const dates = props.data["Time Series (Daily)"];
    console.log(dates);
    const timeArray = Object.keys(dates);
    setTimes(timeArray);
    const priceArray = timeArray.map((element) => dates[element]["1. open"]);
    setPrice(priceArray);
    const length = timeArray.length - 1;
    let objArray = [];
    for (let i = length; i >= 0; i--) {
      const obj = { time: timeArray[i], price: priceArray[i] };
      objArray.push(obj);
    }
    setChartData(objArray);
  }, []);

  if (price.length === 0 || times.length === 0) return <p>Loading data..</p>;
  return (
    <LineChart width={1500} height={300} data={chartData}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis type="number" domain={["dataMin", "dataMax"]} />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
