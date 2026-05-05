import { useEffect, useState, useCallback } from "react";
import "./App.css";

// IMPORTS COMPONENTS
import SearchForm from "./components/SearchForm/SearchForm"; // Componente del formulario de busqueda
import WeatherList from "./components/WeatherList/WeatherList"; // Componente que pinta el pronostico

// IMPORTS SERVICES
import { getWeatherByCity, getWeatherByCoords } from "./services/weatherApi";


function App() {

  // ESTADOS
  const [weather, setWeather] = useState([]); // Guardar la respuesta de la API | weather → lo que React guarda, setWeather → función para actualizarlo, [] → valor inicial vacío. Empiezas vacío porque al principio aún no llegaron datos.
  const [loading, setLoading] = useState(false); // false porque al principio no está cargando todavía
  const [error, setError] = useState(""); // Empieza vacío porque al principio no hay error
  const [currentCity, setCurrentCity] = useState(""); // Para cambiar el nombre de la city de al lado de Pronostico


  // Para que te de por ciudad
  const fetchWeatherByCity = useCallback(async (city) => { // useCallback -> React reutiliza la misma función mientras no cambien sus dependencias
    setLoading(true); // empezar a cargar antes de llamar a la API
    try {
      const data = await getWeatherByCity(city); // Por ciudad
      //console.log(data);
      setError(""); // Limpias el error
      setWeather(data.list); // data.list -> están las predicciones
      setCurrentCity(data.city.name);
    } catch (error) {
      setError("No se pudo obtener el clima");
    } finally {
      setLoading(false); // desactivar loading al terminar ya que es lo que iria tanto en el try como en el cathc, es decir pones lo que es común
    }

  }, []); // [dependencias] -> useCallback → cuándo se recrea y en el caso de useEffect → cuándo se ejecuta

  // Para que te de por geolocalicación
  const fetchWeatherByCoords = useCallback(async (lat, lon) => {
    setLoading(true); // empezar a cargar antes de llamar a la API
    try {
      const data = await getWeatherByCoords(lat, lon); // Por ubicación
      setError(""); // Limpias el error
      setWeather(data.list);
      setCurrentCity(data.city.name);
    } catch (error) {
      setError("No se pudo obtener el clima");
    } finally {
      setLoading(false); // desactivar loading al terminar ya que es lo que iria tanto en el try como en el cathc, es decir pones lo que es común
    }
  }, []);


  useEffect(() => {
    //pide permiso si aceptas → te da lat/lon | si rechazas → entra en error
    // navigator → el navegador | geolocation → su API de geolocalización | getCurrentPosition() → dame la posición actual
    navigator.geolocation.getCurrentPosition(
      // cuando el navegador tenga la ubicación, me pasará un objeto… y yo a ese objeto lo voy a llamar position
      (position) => {
        fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
      },
      // si ususario rechaza permisos / falla geolocalización getCurrentPosition te da por defecto el tiempo de Madrid
      () => {
        fetchWeatherByCity("Madrid");
      }
    );
  }, [fetchWeatherByCoords, fetchWeatherByCity]); // [] -> se ejecuta al cargar el componente y usa estas funciones estables gracias a useCallback

  return (
    <main className="app">
      <h1>Weather App</h1>
      <SearchForm onSearch={fetchWeatherByCity} />
      {loading ? (<div className="spinner"></div>) : error ? (<p>{error}</p>) : (<WeatherList weather={weather} currentCity={currentCity}/>)}
    </main>
  );
}

export default App;
