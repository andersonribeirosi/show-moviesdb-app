import React from 'react'

const MovieInfo = (props) => {
  return (

    // Montando o container de exibição da imagem de detalhes do filme
    <div className="container">
      <div className="row" onClick={props.closeMovieInfo}
        style={{ cursor: "pointer", paddingTop: 50 }}>
        <button className="btn btn-sucess btn-back"> Voltar</button>
      </div>
      <div className="row">
        {props.currentMovie.poster_path == null ?
          <img src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
            id="imageSizeDetails" /> : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
              id="imageSizeDetails" />}
      </div>

      {/* Retornando detalhes do filme */}
      <div className="col s12 m8">
        <div className="info-container">
          <div>
            <p>{props.currentMovie.title}</p>
          </div>
          <p>{props.currentMovie.release_date}</p>
          <div id="overview">
            <p>{props.currentMovie.overview}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MovieInfo