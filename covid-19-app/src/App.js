import React from 'react';
import axios from 'axios';
import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';



class App extends React.Component {
  constructor() {
    super(...arguments);
  this.state = {
    covidData: [],
    
  };
}

  async componentDidMount() {
    const covidData = await axios.get(`https://covid2019-api.herokuapp.com/v2/current`);
    this.setState({ covidData });
    console.log(covidData.data.data[0]);
  }

  render() {
    const { covidData }  = this.state;


    return (
      <div className={styles.container}>
        <Cards data={covidData}/>
        <CountrySelector />
        <Chart />
      </div>
    );
  }
}

export default App;