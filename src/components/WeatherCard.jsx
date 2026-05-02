const WeatherCard = ({ item }) => {
    return (
        <article>
                <p>{item.dt_txt}</p>
                <p>{item.main.temp} ºC</p>
                <p>{item.weather[0].description}</p>
        </article>
    )
}

export default WeatherCard