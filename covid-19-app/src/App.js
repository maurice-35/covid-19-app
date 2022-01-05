import React from 'react';
import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
// import { render } from 'react-dom';


class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await fetchData();
    console.log(data)

    // this.setState({ data: fetchedData });
  }
  // const [url, setUrl] = useState()

  // useEffect(() => {
  //   console.log('USE')
  //   const getData = async () => {
  //     console.log('Try')
  //     try {
  //       const data = await fetchData()
  //       setUrl(data)
  //       console.log('DATA', data)
  //     } catch (error) {
  //       console.log('Error', error)
  //     }
  //   }
  //   getData()
  // }, []);

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

