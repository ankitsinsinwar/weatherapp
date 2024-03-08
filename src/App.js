import React, {useState} from "react";
import axios from "axios";
import {GoSearch} from "react-icons/go"


function App() {
  const [data,setdata] = useState({})
  const [location,setlocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d4279a0f7a6b8fa80e11691881c094db`

  const searchLocation = (e)=>{
      axios.get(url).then((Res)=>{
        setdata(Res.data)
        //console.log(Res.data);
      }) 
    }
    

  return (
    <div className="app">
      <div className="search">
       <input value={location} onChange={(e)=> setlocation(e.target.value)}  placeholder="enter location" type="text"/>
       <button onClick={searchLocation}><GoSearch/></button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
          {data.main ?   <p>{data.name},<span>{data.sys.country}</span></p> : null}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            
          </div>
          <div className="discription">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> :null}
            
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed.toFixed()} KMPH</p> : null}
            
            <p>Wind</p>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
