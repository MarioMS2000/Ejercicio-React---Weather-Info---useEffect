import axios from "axios";// Importar axios

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // Leer la API key del .env
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast"; // Guardar la URL base

// Por ciudad
export const getWeatherByCity = async (city) => { // Es async porque va a esperar una respuesta de internet
    // axios.get(url, config) -> así es la estructura
    const response = await axios.get(BASE_URL, {
        // q → ciudad // appid → tu API key // units → unidad de temperatura // lang → idioma
        params: {
            q: city,
            appid: API_KEY,
            units: "metric",
            lang: "es",
        },
    })

    //console.log("RESPONSE COMPLETA:", response);
    //console.log("SOLO DATA:", response.data);
    return response.data;
}

// Por geolocalización
export const getWeatherByCoords = async (lat, lon) => {
    const response = await axios.get(BASE_URL, {
        params: {
            lat: lat,
            lon: lon,
            appid: API_KEY,
            units: "metric",
            lang: "es",
        },
    });

    return response.data;
};