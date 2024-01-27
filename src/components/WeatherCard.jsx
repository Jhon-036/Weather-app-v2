import { useState } from "react"
import './WeatherCard.css'

const WeatherCard = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => {
        setIsCelsius(state => !state)
    }

    return (
        <div className="weather">
            <h1 className="weather--title">Weather App</h1>
            <h2 className="weather--subtitle">{weather?.name}, {weather?.sys.country}</h2>
            <section className="weather--body">
                <header className="weather--img">
                    <img className="weather--icon" src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                </header>
                <article className="weather--info">
                    <h3 className="weather--info--title">{weather?.weather[0].description}</h3>
                    <ul className="weather--list">
                        <li className="weather--item"><span className="weather--label">Wind Speed </span><span className="weather--value">{weather?.wind.speed} m/s</span></li>
                        <li className="weather--item"><span className="weather--label">Clouds </span><span className="weather--value">{weather?.clouds.all} %</span></li>
                        <li className="weather--item"><span className="weather--label">Pressure </span><span className="weather--value">{weather?.main.pressure} hPa</span></li>
                    </ul>
                </article>
            </section>
            <footer className="weather--footer">
                <h2 className="weather--temp">{isCelsius ? `${temp?.celsius} °C` : `${temp?.fahrenheit} °F`}</h2>
                <button className="weather--btn" onClick={handleChangeTemp}>Change Temperture</button>
            </footer>
        </div>
    )
}
export default WeatherCard