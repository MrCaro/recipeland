import React from 'react'
import { Link, navigate } from 'gatsby'
import Search from './Search'
import { getUser, isLoggedIn, logout } from "../services/auth"

const Header = () => {
    let greetingMessage = ""
    if (isLoggedIn()) {
      greetingMessage = `${getUser().email}`
    } else {
      greetingMessage = ""
    }

    return (
        <>
        <div className="bg-primary py-6">
            <nav className="container sm:mx-auto px-4 flex lg:justify-between justify-end items-center">
                <h1>
                    welcome to recipeland {greetingMessage} 🍴
                </h1>
                <Search 
                    className="" 
                    alt="search in the site..." 
                />
            </nav>
        </div>
        <div className="container sm:mx-auto px-4">
            {isLoggedIn() ? (
            <Link
                to="/user/login"
                onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/user/login`))
                }}
            >
                logout
            </Link>
            ) : (
            <Link
            href="/user/login"
            onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/user/login`))
            }}
            >
                login
            </Link>
            )
            }
        </div>
        </>
    )
}

export default Header
