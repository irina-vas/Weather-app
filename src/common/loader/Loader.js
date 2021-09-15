import React from 'react';
import classes from './Loader.module.css';
import loader from '../images/spinner.gif';


export default function Loader() {
  return (
    <div className={classes.wrapper}>
      <img src={loader} alt="loader" />
    </div>
  )
}
