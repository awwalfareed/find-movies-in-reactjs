import { useState, useEffect } from "react";
import MovieCard from './MovieCard'
import './App.css';
import image from './search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=31e153de';

const App = () => {
    const [movies, setMovies] = useState([]); // declare variable in useState
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies =  async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data =  await response.json();
        setMovies(data.Search)
    }

    useEffect(()=>{ // hit initially when page is load
        searchMovies();
    },[])

    return (
       <div className="app">
        <h1>Movies World</h1>

        <div className="search">
            <input placeholder=" search for movies" 
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img src={image}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}
            />
        </div>
        {
            movies?.length > 0
            ? (
                <div className="container">
                    { movies.map((movieData) => (
                        <MovieCard  movieData={movieData}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )
        }
        
       </div>
    );
};

export default App;