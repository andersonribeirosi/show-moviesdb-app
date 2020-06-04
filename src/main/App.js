import React, { Component } from 'react';
import '../assets/css/Style.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Routes from './Routes'
import Search from '../views/MovieSearch'
import MovieSearchList from '../views/MovieList'
import MovieInfo from '../views/MovieInfo'

import 'bootswatch/dist/flatly/bootstrap.css'
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchMovie: '',
      totalResults: 0,
      currentMovie: null
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
        console.log(data.total_results);

      })
  }

  handleChange = (e) => {
    this.setState({ searchMovie: e.target.value })
  }

  viewMovieInfo = (id) => {
    const filterMovie = this.state.movies.filter(movie => movie.id === id);

    const newCurrentMovie = filterMovie.length > 0 ? filterMovie[0] : null;

    this.setState({ currentMovie: newCurrentMovie })
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  render() {
    return (
      <>
        <div className="App">
          <Routes />
          <Navbar />

          {this.state.currentMovie == null ? <div>
            <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            <MovieSearchList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} />

          </div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />}

          <div>
          </div>

        </div>
        <div className="content">
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
