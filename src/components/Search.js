

const Search = ({query, onQueryChange}) =>{
    return (
        <div>
            <input className="rounded-full border border-indigo-600 md:min-w-full shadow-lg shadow-cyan-500/50 pl-2" type="text" name="query" id="query" value={query} onChange={(event => {onQueryChange(event.target.value)})}
                placeholder="Search For Movie"/>
        </div>
    )
}

export default Search;