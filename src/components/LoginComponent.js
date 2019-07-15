import React, { useState } from 'react'
import axios from 'axios'

export default function LoginComponent(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    var params = {
      email: email,
      password: password
    };
    axios
      .post("/api/sessions", params)
      .then(response => {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
      })
      .catch(error => {
        setErrors(["Invalid email or password."]);
        email = "";
        password = "";
      });

  }
  return (
    <form onSubmit={handleSubmit}>
    <input placeholder="Email"
           type="email" 
           onChange={e => {setEmail(e.target.value)}} />
    <br />
    <input placeholder="password" 
           type="password"
           onChange={e => {setPassword(e.target.value)}} />
    <br />
    <button> Submit </button>
  </form>
  )
}