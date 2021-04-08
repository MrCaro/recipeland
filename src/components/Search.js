import React from 'react'

import SearchIcon from '../img/search.svg'

const Search = (props) => {
    return (
        <div className={`cta ${props.class}`}>
            <img 
                src={SearchIcon} 
                alt={props.alt ? props.alt : ''}
            />
        </div>
    )
}

export default Search
