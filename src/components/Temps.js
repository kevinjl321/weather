import React from 'react'

const WeatherTemp = ({ weather, tempMode }) => {
  function changeTempMode(temp) {
    return tempMode === 'Celsius' ? `${temp.toFixed(1)}°C` : `${((temp * 9) / 5 + 32).toFixed(1)}°F`
  }
  return (
    <div className='weather-temp-and-feels'>
      <div>
        <p className='weather-curr-temp'>{changeTempMode(weather.main.temp)}</p>
        <div className='temp-min-max-wrap'>
          <div className='temp-min-max-wrap-item'>
            High:{' '} <span className='weather-temp-max'>{changeTempMode(weather.main.temp_max)}</span>{' '}
          </div>
          <div className='temp-min-max-wrap-item'>
            Low:{' '}
            <span className='weather-temp-min'>{changeTempMode(weather.main.temp_min)}</span>{' '}
          </div>
        </div>
      </div>

      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt=''
        className='src'
      />
      <div className='weather-fact-feelings'>
        <p className='weather-description-icon'> {weather.weather[0].description} </p>

        <p>Feels like: {changeTempMode(weather.main.feels_like)}</p>
      </div>
    </div>
  )
}

export default WeatherTemp
