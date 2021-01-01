import React from 'react'

const WeatherDesciption = ({ weather }) => {

  function minutes_with_leading_zeros() { 
    return (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes();
  }
  return (
    <div className='weather-name'>
      <div className="city-name">
      <p className='weather-city-name'>
        {weather.name}, {weather.sys.country}
      </p>
      </div>
      <div className='weather-currtime'> {new Date().getHours()}:{minutes_with_leading_zeros()}</div>
    </div>
  )
}

export default WeatherDesciption
