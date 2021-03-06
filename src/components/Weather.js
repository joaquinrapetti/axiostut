import React, { useState, useEffect } from "react";
import axios from "axios";

import {WeatherContainer, Temp, City} from './WeatherStyles'

const url =
  `https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=${process.env.API_KEY}`;

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   console.log(data);

  return (
    <WeatherContainer>
        {data && <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>}
        {data && <City>Dallas, TX</City>}
    </WeatherContainer>
  );
};

export default Weather;
