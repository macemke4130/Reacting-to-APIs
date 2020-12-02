import { Component } from 'react';
import Card from './components/Card';
import PersonCard from './components/PersonCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hasLoaded: false,
      showFilms: false
    };
  }

  componentDidMount() {
    this.setState({ hasLoaded: true }); // Waits for the API to load to call hasLoaded --
  }

  showFilms = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(obj => {
        this.setState({
          filmList: obj,
          showFilms: true,
          hasLoaded: false
        });
      }).catch(err => {
        console.log(err);
      });
    this.setState({
    });
  }

  showPersons = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(obj => {
        this.setState({
          personsList: obj,
          showPersons: true,
          hasLoaded: false
        });
      }).catch(err => {
        console.log(err);
      });
  }

  clearAll = () => {
    this.setState({
      showFilms: false,
      showPersons: false,
      hasLoaded: true
    });
  }

  render() {
    if (this.state.hasLoaded === true) {
      return (
        <>
          <div>
            <img src="https://ghibliapi.herokuapp.com/images/logo.svg" width="100%" alt="Studio Ghibli Logo" />
          </div>
          <div className="d-flex justify-content-center">
            <button onClick={this.showPersons} className="btn btn-secondary mr-1">Show Me Persons!</button>
            <button onClick={this.showFilms} className="btn btn-secondary ml-1">Show Me Films!</button>
          </div>

        </>
      )
    } else if (this.state.showFilms === true) {
      const flick = this.state.filmList.map((flick) => flick);
      return (
        <>
          <div className="d-flex justify-content-center mb-2">
            <button onClick={this.clearAll} className="btn btn-secondary">Go Back</button>
          </div>
          <div className="row">
            <Card filmList={flick} ></Card>
          </div>
        </>
      )
    } else if (this.state.showPersons === true) {
      const dude = this.state.personsList.map((dude) => dude);
      return (
        <><div className="d-flex justify-content-center mb-2">
          <button onClick={this.clearAll} className="btn btn-secondary">Go Back</button>
        </div>
          <div className="row">
            <PersonCard personsList={dude} ></PersonCard>
          </div>
        </>
      )
    } else { // Waiting for API to load --
      return (
        <h1>Loading API...</h1>
      )
    }
  }
}

export default App;