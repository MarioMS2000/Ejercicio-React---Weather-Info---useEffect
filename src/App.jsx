import { useEffect, useState } from "react";


// IMPORTS COMPONENTS
import SearchForm from "./components/SearchForm";
import WeatherList from "./components/WeatherList";

// IMPORTS SERVICES
import { getWeatherByCity } from "./services/weatherApi";

function App() {

  // ESTADOS
  const [weather, setWeather] = useState([]); // Guardar la respuesta de la API | weather → lo que React guarda, setWeather → función para actualizarlo, [] → valor inicial vacío. Empiezas vacío porque al principio aún no llegaron datos.
  const [city, setCity] = useState("Madrid"); // Comienza como Madrid
  const [loading, setLoading] = useState(false); // false porque al principio no está cargando todavía

  useEffect(() => {
    setLoading(true); // empezar a cargar antes de llamar a la API
    const fetchWeather = async () => {
      const data = await getWeatherByCity(city);
      //console.log(data);
      setWeather(data.list); // data.list -> están las predicciones
      setLoading(false); // desactivar loading al terminar
    }
    fetchWeather();
    
  }, [city]); // [] -> que se ejecute solo una vez al cargar

  //console.log(weather);

  return (
    <>
      <h1>Weather App</h1>
      <SearchForm onSearch={setCity} />
      {loading ? <p>Cargando ...</p> : <WeatherList weather={weather} />}
    </>
  );
}

export default App;