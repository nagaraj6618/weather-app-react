import React, { useState } from 'react'
import Axios from 'axios'
import {WiSunrise, WiSunset} from 'react-icons/wi'
import "./WeatherComponent.css"
import CITIES from '../../data/cities-name-list'

function WeatherApiComponent() {
  const [data,setData] = useState([null])
  const [dataCheck,setDataCheck] = useState(null)
  const [searchQuery,setSearchQuery] = useState("")
  const [main,setMain] = useState([])
  const [wind,setWind] = useState([])
  const [time,setTime] = useState("")
  const [date,setDate] = useState("")
  const [dataTime,setDataTime] = useState([])
  const [sun,setSun] = useState("")
  const [riseSet,setRiseSet] = useState("")

  setInterval(() => {
    const now = new Date()
    const currentDate = now.toDateString();
    setTime( now.toLocaleTimeString());
       
    if(date !==currentDate){
      setDate(currentDate)
    }
    
  }, 1000);
  
  const searchHandler = async() => {
    try{
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&APPID=3cba5e74adf3dff51d692eac46d71e49`)
      setData(response.data);
      setMain(response.data.main);
      setWind(response.data.wind);
      setDataTime(response.data.sys)
      setDataCheck(true)
      
    }
    catch(err){
      alert('Please Enter valid City Name')
    }
  }

  const convertUnixTimestampToTime = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const sunRiseFunction = () =>{
    setSun("sunTime");
    setRiseSet("sunRise");
    
  }
  const sunSetFunction = () => {
    if(sun === "sunTime"){
      setSun("moonTime");
      setRiseSet("sunSet");
    }
    setTimeout(()=>{
      setSun("");
      setRiseSet("")
    },4500)
  }

 

  return (
    <div className={sun}>
      <div className={riseSet}></div>
      <div className='Timer-card'>
        <div className='Timer'>{time}</div>
        <div className='Date'>{date}</div>
      </div>
      <div className='header'>
      
        <div className='search-bar'>
          <input
          className='search' 
          type='text'
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          
          />
          
          <button type='submit' className='btn' onClick={searchHandler}>Search</button>
          <div className='search-container'>
        
          {CITIES.filter(item => {
            const searchItem = searchQuery.toLowerCase()
            const fullName = item.toLowerCase()
            return searchItem && fullName.startsWith(searchItem) && fullName !== searchItem
          })
          
          .map((data) => (
            <div onClick={()=>setSearchQuery(data)} >{data}</div>
          
          ))}
          
        </div>
        </div>

        </div>
      
      <div className='card-head'>
      {dataCheck && (
      
        <div className='container'>
          <div className="shape1"></div>
          {/* <div className="shape2"></div> */}
          <div className='container-card'>
            <h2 className='head-text'>{data.name}</h2>
            <div className='wrapper'>
              
              <p>Temperature : {main.temp}</p>
              <p>Humidity : {main.humidity}</p>
              <p>Wind Speed (kmph): {wind.speed} </p>
              <p className='sun' onClick={sunRiseFunction}><span ><WiSunrise/></span>Sunrise Time: {convertUnixTimestampToTime(dataTime.sunrise)}</p>
              <p className='sun' onClick={sunSetFunction}><span ><WiSunset/></span>Sunset Time: {convertUnixTimestampToTime(dataTime.sunset)}</p>
     
            </div>
            </div>
          </div>

      
      )}
      </div>
   
    </div>
  )
}

export default WeatherApiComponent