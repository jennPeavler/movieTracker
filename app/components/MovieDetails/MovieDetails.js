import React from 'react'

const MovieDetails = ({title, overview, vote_average, poster_path, popularity, release_date, vote_count, id}) => {

  const handleToggleFavorite = () => {
    isFavorite === "favorite" ? handleAddFavorite(id) : handleRemoveFavorite(id)
  }

  return (
    <div className="movie-details">
      <h3 className="movie-details-title">{title}</h3>
        <img
          className="movie-details-img"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
        />
      <p id="movie-details-overview">{overview}</p>
      <div className="movie-details-info-container">
        <p className="movie-details-release"><span className="movie-details-category">release date: </span> {release_date}</p>
        <p className="movie-details-popularity"><span className="movie-details-category">popularity: </span>{popularity}</p>
        <p className="movie-details-vote-average"><span className="movie-details-category">vote average: </span>{vote_average}</p>
        <p className="movie-details-vote-average bottom"><span className="movie-details-category">vote count: </span>{vote_count}</p>
      </div>
    </div>
  )
}

export default MovieDetails
