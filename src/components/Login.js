import React from "react"
import { Link, navigate } from "gatsby"
import { handleLogin, isLoggedIn, MessageAuth } from "../services/auth"

import BannerImg from "../img/login-signup-banner.png"

class LogIn extends React.Component {
  state = {
    email: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  Message = {
    content: window.localStorage.getItem("formError")
  }

  render() {
    const { email, password } = this.state;
    const isInvalid = email === '' || password === '';

    return (
      <main className="container sm:mx-auto px-4 py-2">
          <div className="flex flex-col xl:absolute top-0 bottom-0 justify-center xl:w-2/5 w-full">
            <h1 className="text-base">Recipeland 🍴</h1>
            <h2 className="text-primary text-lg mb-12">Log In</h2>
            <form
              method="post"
              onSubmit={event => {
                this.handleSubmit(event)
                navigate(`/user/profile`)
              }}
            >
              <input 
                className="mb-6 py-4 px-5"
                placeholder="Email*"
                type="email" 
                name="email" 
                value={email}
                required
                onChange={this.handleUpdate} 
                aria-labelledby="email"
                style={{width: '100%', borderRadius: '10px'}}
              />
              <input
                className="mb-6 py-4 px-5"
                placeholder="Password*"
                type="password"
                minLength="6"
                name="password"
                value={password}
                required
                onChange={this.handleUpdate}
                aria-labelledby="password"
                style={{width: '100%', borderRadius: '10px'}}
              />
              <input 
                className={`bg-primary mb-6 py-4 px-5 text-white ${isInvalid ? 'cursor-not-allowed' : 'cursor-pointer'}`} 
                disabled={isInvalid} 
                type="submit" 
                value="Log In" 
                style={{width: '100%', borderRadius: '10px'}}
              />
              <p className="text-message-danger-dark">
                {`${this.Message.content == null ? '' : this.Message.content}`}
              </p>
              <p className="text-center text-gray-dark">
                Dont' have an account?
                <strong className="text-primary ml-2">
                  <Link to="/user/sign-up">
                    Sign up
                  </Link>
                </strong>
              </p>
            </form>
          </div>
          <div className="absolute right-0 top-0 xl:block hidden">
            <img 
              src={BannerImg} 
              alt="" 
              style={{height: '100vh'}}
            />
          </div>
       
      </main>
    )
  }
}

export default LogIn