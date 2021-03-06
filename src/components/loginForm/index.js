import React, { useState } from 'react'
import axios from 'axios'
import { Wrapper } from 'components/globals'
import { StyledForm, StyledButton, StyledInput } from './style.js'

export default function LoginForm(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    let params = {
      email: email,
      password: password
    };
    axios
      .post("/api/sessions", params)
      .then(response => {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        props.router.push('/articles');
      })
      .catch(error => {
        setErrors(["Invalid email or password."]);
        setEmail('');
        setPassword('');
      });
  }
  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput placeholder="Email"
              type="email" 
              onChange={e => {setEmail(e.target.value)}} />
        <br />
        <StyledInput placeholder="Password" 
              type="password"
              onChange={e => {setPassword(e.target.value)}} />
        <br />
        <StyledButton>Login</StyledButton>
      </StyledForm>
    </Wrapper>
  )
}