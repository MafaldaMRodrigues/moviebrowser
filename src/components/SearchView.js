import Hero from './Hero';
import NoResults from '../images/no-results.png';
import MovieCard from './MovieCard';


const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`;

    const resultsHtml = searchResults.map((obj, i) => {
        return (
            <MovieCard movie={obj} key={i} />
        )
    })

    return (
        <>
            <Hero text={title} />
            {resultsHtml == false &&
                <div className="no-results-container container my-5 w-75">
                    <h1 >No Results Found for '{keyword}'!</h1>
                    <img src={NoResults} className="no-results-img mt-5" />
                </div>
            }
            <div className="container">
                <div className="row">
                    {resultsHtml}
                </div>
            </div>

        </>
    )
}

export default SearchView;