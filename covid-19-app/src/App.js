import React, { useState, useEffect } from 'react';
import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';
import { fetchData } from './api';


const App = () => {
  const [url, setUrl] = useState()

  useEffect(() => {
    console.log('USE')
    const getData = async () => {
      console.log('Try')
      try {
        const data = await fetchData()
        setUrl(data)
        console.log('DATA', data)
      } catch (error) {
        console.log('Error', error)
      }
    }
    getData()
  }, []);

    return (
      <div className={styles.container}>
        <Cards data={url} />
        <CountrySelector />
        <Chart />
      </div>
    );
}

export default App;

