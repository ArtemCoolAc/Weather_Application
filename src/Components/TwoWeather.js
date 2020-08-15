import React from 'react';
import styles from '../Styles/OneWeather.module.css'

export function TwoWeather(props) {
  let time = (props.num === 0) ? '' : props.list[props.num].dt_txt;

  const wind = function getCardinalDirection(angle) {
    const directions = ['↑ С', '↗ С-В', '→ В', '↘ Ю-В', '↓ Ю', '↙ Ю-З', '← З', '↖ С-З'];
    return directions[Math.round(angle / 45) % 8];
  };

  const celcius = temperature => {return Math.round(temperature) - 273};

  const weatherIconStyle = {
    margin: 'auto',
    width: '70px',
    height: '70px'
  }

  const weatherIconStyleURL = `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`;

  return (
    <div>
      <div className={styles.info}>
        <div className={styles.text}>{props.name} {time}</div>
        <img style={weatherIconStyle} src={weatherIconStyleURL}/>
        <div className={styles.temperature}>{celcius(props.main.temp)}℃</div>
      </div>
      <div className={styles.advanced}>
        <div className={styles.humidity}>Влажность: {props.main.humidity}%</div>
        <div className={styles.direction}>Ветер: {wind(props.wind.deg)}</div>
        <div className={styles.speed}>{props.wind.speed} м/с</div>
        <div className={styles.temp}>{celcius(props.main.temp_max)}/{celcius(props.main.temp_min)} ℃</div>
      </div>
      <div className={styles.description}>{props.weather[0].description}, давление {Math.round(props.main.pressure/1.33)} мм рт. ст.</div>
    </div>
  )
}
