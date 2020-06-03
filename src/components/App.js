import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Routes from '../main/Routes'
import Search from './Search'
import MovieSearchList from '../components/MovieSearchList'

import 'bootswatch/dist/flatly/bootstrap.css'
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchMovie: '',
      currentPage: 1,
      totalResults: 0
    }
    this.apyKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apyKey}&query=${this.state.searchMovie}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);

        this.setState({ movies: [...data.results], totalResults: data.total_Results })
        // console.log(data.total_results);

      })
  }


  handleChange = (e) => {
    this.setState({ searchMovie: e.target.value })
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <>
        <div className="App">
          <Routes />
          <Navbar />
          <div>
            <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
          </div>
          <div>
            <MovieSearchList movies={this.state.movies} />
          </div>

        </div>
        <div className="content">
          <Footer className="globalConfig" />
        </div>
      </>
    );
  }
}

export default App;
