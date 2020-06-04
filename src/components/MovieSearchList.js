import React from 'react'
import Movie from '../components/Movie'

const MovieSearchList = (props) => {
  return (
    <div className="container">

      <div className="row">
        <div className="col-12">
          {
            props.movies.map((movie, i) => {
              return <Movie key={i}
                viewMovieInfo={props.viewMovieInfo}
                movieId={movie.id}
                image={movie.poster_path}
                title={movie.original_title}
                averageVote={movie.vote_average}
                voteCount={movie.vote_count} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MovieSearchList