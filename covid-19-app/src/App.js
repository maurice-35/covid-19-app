import React from 'react';

import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';
import { fetchData } from './api';



class App extends React.Component {
  constructor() {
    super(...arguments);
  this.state = {
    data: [],
    
  };
}

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ fetchedData });
    console.log(fetchedData);
  }

  render() {
    const data  = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountrySelector />
        <Chart />
      </div>
    );
  }
}

export default App;