import React from 'react';
import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData)

    this.setState({ data: fetchedData });
    // return fetchedData.json()
  }

  handleChange(event) {
    this.setState({ data: event.target.value })
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

