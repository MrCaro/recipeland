import React from "react"
import { getUser } from '../services/auth'
import { Link } from 'gatsby'

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Username: {`${getUser().email}`}</li>
      <li>E-mail: {`${getUser().email}`}</li>
    </ul>
    <Link to="/recipes">
      go to your dashboard
    </Link>
  </>
)

export default Profile