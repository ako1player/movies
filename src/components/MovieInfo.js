
const MovieInfo = ({movie}) =>{

    return(
        <div className="grid grid-cols-1 divide-y-4 divide-slate-400">
            {movie.Search?.map((list, index) => (
                <li className="" key={index}>
                    
                    {list.Title} <br />
                    Release Year: {list.Year} <br />
                    <img className="w-16 md:w-32 lg:w-48" src={list.Poster} alt={list.Title}/>
                    <a href={`https://www.imdb.com/title/${list.imdbID}`} target="_blank" className="text-blue-600 hover:text-red-700 transtion duration-200 ease-in-out mb-4">Click here for more info</a>
                </li>
            ))}
        </div>
    )

}

export default MovieInfo;