import React from 'react'

const Movie = (props) => {
  return (
    <>
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image waves-effect waves-light">
            <div id="titleMovie">
              <span id="titleMovie">{props.title}</span>
            </div>
            {
              props.image === null ? <img src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
                alt="" style={{ width: "100%", height: 350 }} /> :
                <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="" style={{ width: "100%", height: 350 }} />
            }
          </div>
          <div className="card-content">
            <p id="details"><a onClick={() => props.viewMovieInfo(props.movieId)} href="#">Detalhes</a> </p>
            <p id="average_vote">Nota IMDB: {props.averageVote} </p>
            <p id="voteCount">Votos: {props.voteCount}</p>
          </div>

        </div>
      </div>
    </>
  )


}
export default Movie