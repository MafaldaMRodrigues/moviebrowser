import { Link } from 'react-router-dom';
import dummy from '../images/dummy_image.png';

const MovieCard = ({ movie }) => {

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`

    return (
        <div className="col-lg-3 col-md-3 col-2 my-4" id={movie.original_title}>
            <div className="card">
                {movie.poster_path === null &&
                    <img src={dummy} className="card-img-top" />
                }
                <Link to={detailUrl}>
                    <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;