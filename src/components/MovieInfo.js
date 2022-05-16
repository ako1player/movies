
const MovieInfo = ({movie}) =>{

    
    movie.Search?.map(movies => {
            return (
                <li>
                    {movies.Title}
                </li>
            )
})

}

export default MovieInfo;