import {useState} from 'react'
import firebase from "gatsby-plugin-firebase"
import { navigate } from "gatsby"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user => {
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
}

export const MessageAuth = (error) => {
  window.localStorage.setItem("formError", error)
  return window.localStorage.getItem("formError");
}

export const handleLogin = ({ email, password }) => {
  firebase
  .auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    return setUser(user);
  })
  .then(() => {
    if(isLoggedIn()) {
      navigate(`/user/login`);
    }
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    MessageAuth(errorMessage);
    return console.error(`${errorMessage}`);
  });
}

export const handleSignUp = ({email, password }) => {
  firebase
    .auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in 
      var user = userCredential.user;
      return setUser(user);
    })
    .then(() => {
      if(isLoggedIn()) {
        navigate(`/user/profile`);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return console.error(`${errorMessage}`);
    })
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.email
}

export const logout = callback => {
  setUser({})
  callback()
}