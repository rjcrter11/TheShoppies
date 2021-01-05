import React from 'react'

const SearchBar = () => (
    <div className='form-container' >
        <form>
            <input
                type='search'
                className='search' />
            <small>Search for a movie you would like to nominate for the Shoppies!</small>
        </form>
    </div>
)

export default SearchBar
