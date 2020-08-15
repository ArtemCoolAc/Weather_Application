import React, { useState, useEffect } from 'react';
import useFetch from 'react-fetch-hook';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import styles from '../Styles/App.module.css'
import {OneWeather} from './OneWeather';
import {NewCity} from './NewCity';
import {DetailedWeather} from './DetailedForecast';
import {YandexMap} from "./YandexMap";

function App(props) {
  const [extraList, setList] = useState([]);
  const [extraRoutes, setRoutes] = useState([]);
  let list = [];

  function onClick(event) {
    const city = prompt('Введите название города');
    const path=`/${city}`;
    setList([...extraList, <Link to={path}><div className={styles.item}><OneWeather city={city}/></div></Link>]);
    setRoutes([...extraRoutes, <Route path={path}><DetailedWeather city={city}/></Route>])
  }

  const cities =
    ['Берлин', 'Амстердам', 'Монреаль', 'Париж', 'Сидней', 'Токио', 'Лондон', 'Мадрид', 'Женева', 'Нью-Йорк'];

  const routes_list = [];
  for (const city of cities) {
    const path = `/${city}`;
    list.push(<Link to={path}><div className={styles.item}><OneWeather city={city}/></div></Link>);
    routes_list.push(<Route path={path}><DetailedWeather city={city}/></Route>)
  }

  const {isLoading, data} = useFetch(`https://ipinfo.io/json`);

  const current = console.log(props.city) && !props.loaded ? (
    <div>Загрузка...</div>) : (
    <Link to={'/current'}><div className={styles.item}><OneWeather city={props.city}/></div></Link>
  );
  const currentRoute = <Route path={'/current'}><DetailedWeather city={props.city}/></Route>;

  return console.log(`It's my life! ${data}`) && isLoading ? (
    <div>Loading...</div>) : (
    <div className={styles.sheet}>
      <Router basename={'/'}>
        <Switch>
          <Route path="/" exact>
            <div className={styles.header}>
              <div className={styles.text}>Погода</div>
            </div>
            <YandexMap />
            <div>{current}</div>
            <div>{list}</div>
            <div>{extraList}</div>
            <button onClick={onClick}><NewCity/></button>
          </Route>
          {currentRoute}
          {routes_list}
          {extraRoutes}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
