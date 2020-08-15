import React from "react";
import styles from '../Styles/YandexMap.module.css'
import {Map, YMaps} from "react-yandex-maps";
import ScriptTag from 'react-script-tag';

export function YandexMap(props) {
  const yandexMapAPIKey = 'd0794455-9195-4958-b6fb-75eb95bb4dfd';
  return (
    <div className={styles.wrapper}>
      <div className={styles.gridContainer}>
        <div className={styles.central}>
          <YMaps>
            <ScriptTag src={`https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${yandexMapAPIKey}`} type={'text/javascript'}/>
            <div>
              <Map style={{height: '50vh', maxWidth: '80vw'}} defaultState={{ center: [55.75, 37.57], zoom: 12 }} />
            </div>
          </YMaps>
        </div>
      </div>

    </div>
  )
}
