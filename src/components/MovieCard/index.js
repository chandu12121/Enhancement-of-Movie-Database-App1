import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <div className="label">
      <div>
        <li className="movie-card-container ">
          <img className="movie-card-image" alt={title} src={posterPath} />
          <div className="d-flex flex-column align-items-center mt-2">
            <h1 className="movie-title m-0">{title}</h1>
            <p className="movie-rating mb-0 ms-1">Rating: {voteAverage}</p>
          </div>
          <Link to={`/movie/${id}`} className="mt-auto align-self-center">
            <button className="btn btn-outline-success" type="button">
              View Details
            </button>
          </Link>
        </li>
      </div>
    </div>
  )
}

export default MovieCard