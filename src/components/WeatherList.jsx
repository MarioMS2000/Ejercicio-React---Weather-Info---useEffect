import WeatherCard from "./WeatherCard";
import "./WeatherList.css";

const WeatherList = ({ weather }) => { // weather -> array de predicciones

    // Pasas de pintar las 40 predicciones a pintar una por día, normalmente la del mediodía
    const dailyWeather = weather.filter((item) =>
        item.dt_txt.includes("12:00:00")
    );
    //console.log(weather[0]);
    // item.dt -> identificador que ya trae la API
    return (
        <section className="weather-list">
            <h2>Pronóstico</h2>
            {dailyWeather.map((item) => (
                <WeatherCard key={item.dt} item={item} />
            ))
            }
        </section>
    );
}

export default WeatherList