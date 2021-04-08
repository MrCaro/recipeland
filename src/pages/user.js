import React from 'react'
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"
import Profile from "../components/Profile"
import SignUp from "../components/SignUp"
import LogIn from "../components/Login"

const User = () => {
    return (
        <Router>
            <PrivateRoute path="/user/profile" component={Profile} />
            <LogIn path="/user/login" />
            <SignUp path="/user/sign-up" />
        </Router>
    )
}

export default User
