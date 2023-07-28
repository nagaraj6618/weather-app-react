import React, { useState } from 'react'
import Axios from 'axios'
import "./WeatherApiComponent.css"
// import CountryCode from '../../data/countryCode'
function WeatherApiComponent() {
  const [searchQuery,setSearchQuery] = useState("")
  // const [option,setOption] = useState("")
  const [data,setData] = useState([null])
  const [main,setMain] = useState([])
  const [wind,setWind] = useState([])

  // const optionHandler = (event) =>{
  //   setOption(event.target.value)
  //   console.log(option);
  // }

  const searchHandler = async() => {
    try{
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&APPID=3cba5e74adf3dff51d692eac46d71e49`)
      setData(response.data);
      setMain(response.data.main);
      setWind(response.data.wind)
      
    }
    catch(err){
      alert('Please Enter valid City Name')
    }
  }
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
        {/* <select onChange={optionHandler}
        className='Select'>

          {CountryCode.map((option) => 
            (<option key={option.code}>{option.name}</option>))
          }
          
        </select> */}
        <button type='submit' className='btn' onClick={searchHandler}>Search</button>
      </div>
      <div className='search-container'>
        <div>hey</div>
        <div>good morning</div>
        <div>hloooo</div>
        <div>welcome</div>
        <div>hey</div>
        <div>good morning</div>
        <div>hloooo</div>
        <div>welcome</div>
        <div>hey</div>
        <div>good morning</div>
        <div>hloooo</div>
        <div>welcome</div>
        <div>hey</div>
        <div>good morning</div>
        <div>hloooo</div>
        <div>welcome</div>
      </div>
      {data && (
      
        <div className='container'>
          <div className="shape1"></div>
          <div className="shape2"></div>
          <div className='container-card'>
            <h2 className='head-text'>{data.name}</h2>
            <div className='wrapper'>
              
              <p>Temperature : {main.temp}</p>
              <p>Humidity : {main.humidity}</p>
              <p>Wind Speed (kmph): {wind.speed} </p>
            </div>
          </div>
        </div>
      
      )}
    </div>
  )
}

export default WeatherApiComponent