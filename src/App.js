import { Component } from 'react';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      greenLight: false
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(obj => {
        this.setState({ filmList: obj });
        this.setState({ greenLight: true }); // Waits for the API to load to call greenLight --
      })
      .catch(err => {
        console.log(err);
      });
  }

  loadFilms = () => {

  }

  render() {
    if (this.state.greenLight === true) {
      const flick = this.state.filmList.map((flick) => flick);
      return (
        <>
          <div className="row">
            <Card filmList={flick} ></Card>
          </div>
        </>
      )
    } else { // Waiting for API to load --
      return (
        <h1>Loading...</h1>
      )
    }
  }
}

export default App;