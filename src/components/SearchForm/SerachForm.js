import React from 'react';
import search_loop from '../../common/images/loop.png';
import classes from './SearchForm.module.css'

export default function SerachForm() {
  return (
    <div className={classes.wrapper}>
      <label>
        <input type="text" className={classes.search_bar} />
        <img src={search_loop} alt="search_loop" className={classes.search_loop} />
      </label>
    </div>
  )
}
