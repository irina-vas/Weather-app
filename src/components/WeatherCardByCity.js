import React, {useState, useEffect} from 'react';
import classes from './WeatherCardByCity.module.css';



export default function WeatherCardByCity({weatherByCity}) {
  const dateFormater = (data) => {
    const monthNum = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    } 
    let day = data.slice(8,10);
    let month = data.slice(5,7);
    let year = data.slice(0,4);

    return `${day} ${monthNum[month]}, ${year}`;
  }
  const iconUrl = `https://www.weatherbit.io/static/img/icons/${weatherByCity[0].weather.icon}.png`;
  return (
    <div className={classes.wrapper}>
      {weatherByCity.map((item, index) => {
        return (
          <div className={classes.container}>
            <div key={index} className={classes.city_name}>
              {item.city_name}, {item.country_code}
            </div>
            <div className={classes.date_now}>
              {dateFormater(item.datetime)}
            </div>
            <div className={classes.weather_icon}>
              <img src={iconUrl} alt=""  />
            </div>
            <div className={classes.temperature}>
              {Math.round(item.temp) + '°c'}
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
