import { useState, useEffect, useCallback} from 'react';
import MovieInfo from './components/MovieInfo';
import Search from './components/Search';
import './App.css';


function App() {

  const [movie, setMovie] = useState("");
  const [query, setQuery] = useState("");

  const getMovie = useCallback(() =>{
    //fetch(`https://www.omdbapi.com/?s=${query}&apikey=c1babfe4`)
    fetch('https://www.omdbapi.com/?s=avengers&apikey=c1babfe4')
      .then(response => response.json())
      .then( data => {
        setMovie(data)
      });
  }, [query]);

  useEffect(() => {
    getMovie()
  }, [getMovie]);

  return (
    <div className="App">
      <Search query={query} onQueryChange={myQuery => setQuery(myQuery)}/>
      <ul>
        <MovieInfo movie={movie} />
      </ul>
    </div>
  );
}

export default App;
