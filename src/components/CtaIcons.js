import React from 'react'
import { Link } from 'gatsby'

const CtaIcons = (props) => {
    return (
        <div className={`cta ${props.class}`} >
            <Link 
                to={props.destination}
                rel="noopener noreferrer"
                target={props.target ? props.target : ''}
            >
                <img 
                    src={props.src} 
                    alt={props.alt}
                />
            </Link>
        </div>
    )
}

export default CtaIcons
