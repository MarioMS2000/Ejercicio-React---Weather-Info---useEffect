import { useEffect } from "react";

// IMPORTS COMPONENTS
import SerchForm from "./components/SearchForm";
import WeatherList from "./components/WeatherList";

function App() {
  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherByCity("Madrid");
      console.log(data);
    }
    fetchWeather();
  }, []); // [] -> que se ejecute solo una vez al cargar

  return (
    <>
      <h1>Weather App</h1>;
      <SerchForm />
      <WeatherList />
    </>
  );
}

export default App;