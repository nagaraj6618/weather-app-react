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
      
    </div>
  )
}

export default WeatherApiComponent