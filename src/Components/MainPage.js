import React, {useState, useEffect} from "react";
import App from "./App";

export function MainPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();

  const TOKEN = '24bd64522a714a';

  let metaData = {};
  useEffect(() => {
    fetch(`https://ipinfo.io/json?token=${TOKEN}`)
      .then(res => res.json())
      .then(someData => {
        metaData = someData;
        return metaData
      })
      .then(
        (result) => {
          setData(result.city);
          setIsLoaded(true);
        }
      )
  }, [])
  if (!isLoaded) {
    return <div>Сбор информации о местоположении устройства...</div>
  }
  else {
    return <div><App city={data} loaded={isLoaded}/></div>
  }
}
