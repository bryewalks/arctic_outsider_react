import React from 'react'

class LoginComponent extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  handleSubmit = (event) => {

  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <input placeholder="Email" type="email" />
        <br />
        <input placeholder="password" type="password" />
        <br />
        <button> Submit </button>
      </form>

    )
  }
}


export default LoginComponent