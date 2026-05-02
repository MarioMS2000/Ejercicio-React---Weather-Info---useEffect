import WeatherCard from "./WeatherCard";

const WeatherList = ({ weather }) => { // weather -> array de predicciones
    console.log(weather[0]);
    // item.dt -> identificador que ya trae la API
    return (
        <section>
            <h2>Pronóstico</h2>
            {weather.map((item) => (
                <WeatherCard key={item.dt} item={item} />
            ))
            }
        </section>
    );
}

export default WeatherList