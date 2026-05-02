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
  const [error, setError] = useState(""); // Empieza vacío porque al principio no hay error

  useEffect(() => {
    setLoading(true); // empezar a cargar antes de llamar a la API
    const fetchWeather = async () => {
      try {
        const data = await getWeatherByCity(city); // Por ciudad
        //console.log(data);
        setError(""); // Limpias el error
        setWeather(data.list); // data.list -> están las predicciones
      } catch (error) {
        setError("No se pudo obtener el clima");
      } finally {
        setLoading(false); // desactivar loading al terminar ya que es lo que iria tanto en el try como en el cathc, es decir pones lo que es común
      }

    }
    fetchWeather();

  }, [city]); // [] -> se ejecuta al cargar y cada vez que cambia city

  //console.log(weather);

  return (
    <>
      <h1>Weather App</h1>
      <SearchForm onSearch={setCity} />
      {loading ? (<p>Cargando ...</p>) : error ? (<p>{error}</p>) : (<WeatherList weather={weather}/>)}
    </>
  );
}

export default App;