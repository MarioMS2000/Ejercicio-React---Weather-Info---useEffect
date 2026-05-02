import "./WeatherCard.css";
const WeatherCard = ({ item }) => {
    const [date, time] = item.dt_txt.split(" ");
    const roundedTemp = Math.round(item.main.temp);
    const description = item.weather[0].description;

    const iconCode = item.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;


    return (
        <article  className="weather-card">
            <p className="weather-date">{date}</p>
            <p className="weather-time">{time}</p>
            <img className="weather-icon" src={iconUrl} alt={description} />
            <p className="weather-temp">{roundedTemp} ºC</p>
            <p className="weather-description">{description}</p>
        </article>
    )
}

export default WeatherCard