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
      const listItems = this.state.filmList.map((flick) =>
        <>
          <div className="col-4">
            <div className="card p-1 m-1">
              <h3>{flick.title}</h3>
              <p>{flick.description}</p>
            </div>
          </div>
        </>
      );
      return (
        <>
          <Card title={listItems}></Card>
        </>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}

export default App;