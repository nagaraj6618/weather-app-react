import React, { useState } from 'react'
import "./WeatherApiComponent.css"
function WeatherApiComponent() {
  const [searchQuery,setSearchQuery] = useState([])
  return (
    <div className='header'>
      <div className='search-bar'>
        <input
        className='search' 
        type='text'
        placeholder='Search'
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        />
        
        <button type='submit' className='btn'>Search</button>
      </div>
      <div className='container'>
        <div class="shape1"></div>
        <div class="shape2"></div>
        <div className='container-card'>
          <h2 className='head-text'>Chennai</h2>
          <div className='wrapper'>
            <p>Temperature : 20 c</p>
            <p>Humidity : 33.5</p>
            <p>Wind Speed : 12 km/hr</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApiComponent