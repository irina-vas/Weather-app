import React, {useState, useEffect} from 'react';
import classes from './WeatherCardByCity.module.css';



export default function WeatherCardByCity({weatherByCity}) {
  console.log(weatherByCity[0].weather.icon);
  const iconUrl = `https://www.weatherbit.io/static/img/icons/${weatherByCity[0].weather.icon}.png`;
  return (
    <div className={classes.wrapper}>
      {weatherByCity.map((item, index) => {
        return (
          <div className={classes.container}>
            <div key={index} className={classes.city_name}>
              {item.city_name}, {item.country_code}
            </div>
            <div className={classes.weather_icon}>
              <img src={iconUrl} alt=""  />
            </div>
            <div className={classes.temperature}>
              {item.temp > 0 ? `${'+' + Math.round(item.temp)}` : `${'-' + Math.round(item.temp)}`}
            </div>
            <div>
              {
                item.pod === 'd'
                ? document.body.classList.add('red') 
                : document.body.classList.add('blue')
              }
              <div className={classes.windSpeed}>{item.wind_spd}</div>
              <div className={classes.windDirection}>{item.wind_cdir_full}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
