import './App.css'
import React, { useEffect, useState } from 'react'
import { Message, Divider } from 'semantic-ui-react'
import TypeCity from './components/City'
import Widget from './components/Card'
import util from './Util'

const API_KEY = 'f7133fcc2b09568683f93e2b07166255'

function App() {
  const [city, setCity] = useState(null)
  const [weather, setWeather] = useState(null)
  const [loader, setLoader] = useState(false)
  const [err, setError] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoader(true)
        setError(null)
        const response = await util.get(`weather?q=${city}&appid=${API_KEY}&units=metric`)
        setWeather(response.data)
      } catch (err) {
        setError(err.response)
      } finally {
        setLoader(false)
      }
    }
    city && fetchWeather()
  }, [city])
  return (
    <div className='App'>
     <div className="container">
        <div className="input">
          <h1>Daily Weather by Location</h1>
          <Divider />
          <TypeCity setCity={setCity} loader={loader} />
        </div>
        {err && <Message error header={`Error ${err.status}`} content={err.data.message} />}
        {weather && <Widget weather={weather} />}
      </div>
    </div>
  )
}

export default App
