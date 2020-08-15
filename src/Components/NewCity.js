import React from 'react';
import styles from '../Styles/NewCity.module.css'

export function NewCity(props) {

  function onClick(event) {
    console.log('smth');
  }
  return (
    <div className={styles.buttonNew} onClick={onClick}>
      <div className={styles.pen}/>
    </div>
  )
}
