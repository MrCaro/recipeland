import React from 'react'
import { Link } from 'gatsby'

const Cta = (props) => {
    return (
        <div>
            <Link 
                className={`test`} 
                to="/"
                rel="noopener noreferrer"
                target=''
            >
                {props.children}
            </Link>
        </div>
    )
}

export default Cta
