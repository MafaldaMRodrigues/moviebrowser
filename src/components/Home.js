import Hero from './Hero';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';

//TMDB API key - 14c629d9732142aeff7c0bb2d5bbcdcb
// Example link for movie search - https://api.themoviedb.org/3/search/movie?api_key=14c629d9732142aeff7c0bb2d5bbcdcb&language=en-US&query=molin%20rouge&page=1&include_adult=false

const Home = () => {

  const [mostPopular, setMostPopular] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=14c629d9732142aeff7c0bb2d5bbcdcb&language=en-US&page=1')
      .then(response => response.json())
      .then(data => {

        const movieCards = data.results.map((obj, i) => {
          return (
            <MovieCard movie={obj} key={i} />
          )
        })

        setMostPopular(movieCards)
      })
  }, [])

  const [upcomingMovies, setUpcomingMovies] = useState([])
  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=14c629d9732142aeff7c0bb2d5bbcdcb&language=en-US&page=1')
      .then(response => response.json())
      .then(data => {

        const movieCards = data.results.map((obj, i) => {
          return (
            <MovieCard movie={obj} key={i} />
          )
        })
        setUpcomingMovies(movieCards)
      })
    
    }, [])


  return (
    <>
      <Hero text="Welcome to Movie Browser" />
      <div className="container">
        <h1 className='my-3 fw-5 text-center'>Upcoming Films</h1>
        <div className="row">
          {upcomingMovies}
        </div>
        <h1 className='my-3 fw-5 text-center'>Most Popular Films</h1>
        <div className="row">
          {mostPopular}
        </div>
      </div>
    </>
  )
}

export default Home;