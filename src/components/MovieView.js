import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieView = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=14c629d9732142aeff7c0bb2d5bbcdcb&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setMovieDetails(data)
                    setIsLoading(false)
                }, 500)
            })
    }, [id])

    function renderMovieDetails() {
        if (isLoading) {
            return <Hero text="Loading..." />
        }
        if (movieDetails) {
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return (
                <div>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                    <div>
                        <div className="container my-5">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
                                </div>
                                <div className="col-md-9">
                                    <h2>{movieDetails.original_title}</h2>
                                    <p className="lead">{movieDetails.overview}</p>
                                    <p className="fw-bold">Release Date:</p>
                                    <p>{movieDetails.release_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return renderMovieDetails()
}

export default MovieView; 