import { useState, useEffect, useCallback} from 'react';
import MovieInfo from './components/MovieInfo';
import Search from './components/Search';
import './App.css';

function App() {

  const [movie, setMovie] = useState("");
  const [query, setQuery] = useState("");

  const getMovie = useCallback(() =>{
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=c1babfe4`)
    //fetch('https://www.omdbapi.com/?s=avengers&apikey=c1babfe4')
      .then(response => response.json())
      .then( data => {
        setMovie(data)
      });
  }, [query]);

  useEffect(() => {
    getMovie()
  }, [getMovie]);

  return (
    <div className="App flex flex-col space-y-10">
      <h1 className="text-5xl font-bold mt-0 mb-6">Movie Search</h1>
      <div>
        <Search query={query} onQueryChange={myQuery => setQuery(myQuery)}/>
      </div>
      <div>
        <ul >
          <MovieInfo movie={movie} />
        </ul>
      </div>
      <footer>Created By Adrian Garcia Rios 2022</footer>
    </div>
  );
}

export default App;
