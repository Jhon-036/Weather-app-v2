import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const succes = pos => {
    const obj = {
      lat : pos.coords.latitude,
      lon : pos.coords.longitude
    }
    setCoords(obj)
  }
  
  useEffect(() => {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(succes)
  }, [])
  
  useEffect(() => {
    if (coords) {
      const API_KEY = '84b495680fccf3448b2b02b414cfa9b7'
      const {lat, lon} = coords 
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      axios.get(URL)
           .then(res => {
            setWeather(res.data)
            const obj = {
              celsius : (res.data.main.temp - 273.15).toFixed(2),
              fahrenheit : ((res.data.main.temp - 273.15) * 9/5 +32).toFixed(2)
            }
            setTemp(obj)
           })
           .catch(err => console.log(err))
           .finally(() => setIsLoading(false))
    }
  }, [coords])
  
  console.log(weather);

  return (
    <div className='app'>
      {
        isLoading ? <h2>Loading...</h2> : <WeatherCard weather={weather} temp={temp}/>
      }
    </div>
  )
}

export default App
