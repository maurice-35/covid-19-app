import React from 'react';
import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
// import { render } from 'react-dom';


class App extends React.Component {
  state = {
    data: {}
  }


  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(data)

    this.setState({ data: fetchedData });
  }


  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountrySelector />
        <Chart />
      </div>
    );
  }
}

export default App;

