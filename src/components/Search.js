

const Search = ({query, onQueryChange}) =>{
    return (
        <div>
            <input type="text" name="query" id="query" value={query} onChange={(event => {onQueryChange(event.target.value)})}
                placeholder="Search For Movie"/>
        </div>
    )
}

export default Search;