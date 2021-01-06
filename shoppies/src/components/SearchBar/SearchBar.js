import React from 'react'

const SearchBar = ({ handleSearchChange, searchInput, deleteSearchText }) => (
    <div className='form-container' >
        <form>
            <input
                type='text'
                className='search'
                value={searchInput}
                onChange={handleSearchChange}
            />
            {searchInput && (
                <button onClick={deleteSearchText}><i className="fas fa-times"></i></button>
            )}

            <small>Search for a movie you would like to nominate for the Shoppies!</small>
        </form>
    </div>
)

export default SearchBar
