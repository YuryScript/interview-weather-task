import { useState, useEffect } from "react";
import { getCitiesTemperatureData } from "../../api/weatherApi";
import WeatherTable from "./WeatherTable";
import RefreshButton from "./RefreshButton";

function WeatherForecast() {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(11);

  useEffect(updateWeatherData, []);

  function updateWeatherData() {
    (async () => {
      setLoading(true)
      setWeatherData(await getCitiesTemperatureData())
      setLoading(false)
    })()
  }

  return (
    <>
      <RefreshButton className="refresh" click={updateWeatherData} />
      <WeatherTable data={weatherData} loading={loading} />
    </>
  );
}

export default WeatherForecast;
