import React from 'react';
import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';
import { fetchData } from './api';



export class App extends React.Component {
  constructor() {
    super(...arguments);
  this.state = {
    modifiedData: [],
    
  };
}

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ modifiedData: fetchedData });
    // console.log(fetchedData)
    this.setState({ fetchedData });
  }
  
		
  render() {
    const { modifiedData }  = this.state;


    return (
      <div className={styles.container}>
        <Cards data={modifiedData}/>
        <CountrySelector />
        <Chart />
      </div>
    );
  }
}

export default App;