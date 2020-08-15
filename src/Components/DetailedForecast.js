import React from 'react';
import useFetch from 'react-fetch-hook';
//import styles from '../Styles/OneWeather.module.css'
import styles from '../Styles/App.module.css'
import { DetailedTwo } from './DetailedTwo';

export function DetailedWeather(props) {
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&lang=ru&appid=`;
  const API_KEY = `351df42bd0c357994a143097e4ebcd70`;
  const { isLoading, data } = useFetch(`${API_URL}${API_KEY}`);
  const hours_list = [];

  for (const i in Array.from({length: 10})) {
    hours_list.push(<div className={styles.item}><DetailedTwo {...data} num={parseInt(i)+1}/></div>)
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>{hours_list}</div>
  )
}
