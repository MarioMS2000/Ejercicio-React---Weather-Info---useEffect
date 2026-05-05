import styles from "./WeatherCard.module.css"; // CSS Module: estilos propios de WeatherCard

const WeatherCard = ({ item }) => {
    const [date, time] = item.dt_txt.split(" ");

    // Convierte la fecha de la API a un formato mas facil de leer
    const formattedDate = new Date(date).toLocaleDateString("es-ES", {
        weekday: "short",
        day: "2-digit",
        month: "short",
    });

    const roundedTemp = Math.round(item.main.temp);
    const description = item.weather[0].description;
    const iconCode = item.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    return (
        <article className={styles.weatherCard}>
            <p className={styles.weatherDate}>{formattedDate}</p>
            <p className={styles.weatherTime}>{time}</p>
            <img className={styles.weatherIcon} src={iconUrl} alt={description} />
            <p className={styles.weatherTemp}>{roundedTemp} &deg;C</p>
            <p className={styles.weatherDescription}>{description}</p>
        </article>
    );
};

export default WeatherCard;
