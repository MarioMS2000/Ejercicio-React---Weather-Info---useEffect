import WeatherCard from "../WeatherCard/WeatherCard"; // Componente de cada tarjeta del pronostico
import styles from "./WeatherList.module.css"; // CSS Module: estilos propios de WeatherList

const WeatherList = ({ weather, currentCity }) => {
    // Filtra la respuesta de la API para quedarse con una prediccion por dia
    const dailyWeather = weather.filter((item) =>
        item.dt_txt.includes("12:00:00")
    );

    return (
        <section className={styles.weatherList}>
            <div className={styles.weatherListHeader}>
                <h2>Pronostico de {currentCity}</h2>
            </div>

            <div className={styles.weatherGrid}>
                {dailyWeather.map((item) => (
                    <WeatherCard key={item.dt} item={item} />
                ))}
            </div>
        </section>
    );
};

export default WeatherList;
