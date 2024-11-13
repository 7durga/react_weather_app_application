import React, { useState, useEffect } from "react";
import { FaWind, FaTint, FaClock, FaEye } from "react-icons/fa";
import './WeatherCard.css';
import Clock from './Clock.jsx';

const Index = () => {
  const [city, setCity] = useState("hyderabad");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "d7317220751fbe3704344cfd8887655a";

  const fetchWeather = (city) => {
    setLoading(true);
    setError(null);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Weather App</h1>
        <p>{city}</p>
      </header>

      <div className="relative">
        <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <img className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
        </div>

        <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
              <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                  <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Get meaningful Weather Data from our side</h1>

                  <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                    <div className="search-bar">
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                        className="search-input"
                      />
                      <button onClick={() => fetchWeather(city)} className="search-button">Search</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:col-span-3">
                <img className="w-full mx-auto scale-10" src="https://static.vecteezy.com/system/resources/previews/035/751/263/original/ai-generated-blue-soft-cloud-cute-png.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="weather-details">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">Error: {error}</div>
        ) : weatherData ? (
          <div className="card-container">
            <div className="grid grid-rows-2 grid-flow-col gap-4 w-full">
              <div className="col-span-2 flex gap-[20px]">
                <div className="card w-1/2">
                  <h2>Temperature</h2>
                  <p>{weatherData.main?.temp ?? "N/A"}°C</p>
                </div>
                <div className="card w-1/2">
                  <h2>Humidity</h2>
                  <p><FaTint /> {weatherData.main?.humidity ?? "N/A"}%</p>
                </div>
              </div>
              <div className="col-span-2 flex gap-[20px]">
                <div className="card w-1/2">
                  <h2>Wind Speed</h2>
                  <p><FaWind /> {weatherData.wind?.speed ?? "N/A"} m/s</p>
                </div>
                <div className="card w-1/2">
                  <h2>Visibility</h2>
                  <p><FaEye /> {weatherData.visibility ?? "N/A"} m</p>
                </div>
              </div>
              <div className="row-span-2" style={{ display: "inline-grid" }}>
                <div className="app-header">
                  <div className="weather-mascot">
                    <img src="https://static.vecteezy.com/system/resources/previews/035/751/263/original/ai-generated-blue-soft-cloud-cute-png.png" alt="Weather Mascot" />
                  </div>
                  <span>
                    <small>Weather App</small>
                    <p>{city}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="fixed right-10 top-20">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default Index;
