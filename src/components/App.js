import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Routes from '../main/Routes'
import Search from './Search'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchMovie: ''
    }
    this.apyKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apyKey}&query=${this.state.searchMovie}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);

        this.setState({ movies: [...data.results] })
      })
  }

  handleChange = (e) => {
    this.setState({ searchMovie: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <Routes />
        <Navbar />
        <Footer />
        <div>
          <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default App;
