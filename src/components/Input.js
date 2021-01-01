import React from 'react'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as HumidityIcon } from '../images/humidity-svgrepo-com.svg'
import { ReactComponent as PressureIcon } from '../images/pressure-svgrepo-com.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WeatherProps = ({ weather }) => {
  return (
    <div className='weather-props'>
      <div className='weather-props-item'>
        <HumidityIcon className='svg-icon' />
        <p> {weather.main.humidity}%</p>
      </div>
      <div className='weather-props-item'>
        <PressureIcon className='svg-icon' />
        <p>{weather.main.pressure} hpa</p>
      </div>
      <div className='weather-props-item'>
        <FontAwesomeIcon icon={faWind} size='2x' className='svg-icon' />
        <p> {weather.wind.speed} mph </p>
      </div>
    </div>
  )
}

export default WeatherProps
