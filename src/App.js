import './App.css';
import React, {useState, useEffect} from 'react';
import * as axios from 'axios';
import Loader from './common/loader/Loader';
import WeatherCardByCity from './components/WeatherCardByCity';
import SerachForm from './components/SearchForm/SerachForm';

function App() {
  const [weatherByCity, setWeatherByCity] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [city, setCity] = useState('kharkiv')

  useEffect(()=> {
    const apiKey = 'c16c58ce0fda4a95a5232a8a64ee6e42';
    const url = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=${apiKey}&include=minutely`;
    //const url = `https://api.weatherbit.io/v2.0/current?lat=35.7796&city=${city}&key=${apiKey}&include=minutely`;
    axios.get(url)
      .then(response => response)
      .then(data => {
        console.log(data.data.data);
        setWeatherByCity(data.data.data);
        setLoading(false);
      }).catch(error => console.error(error))
  },[])
  return (
    <div className="wrapper">
      {loading
        ? <Loader />
        : <div className="container">
            <SerachForm />
            <WeatherCardByCity weatherByCity={weatherByCity} />
          </div>
      }
     
    </div>
  );
}

export default App;
