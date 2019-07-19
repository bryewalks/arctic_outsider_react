import React from 'react'
import LoginForm from 'components/loginForm'

export default function ArticlesShow(props) {
    return (
      <div>
        <LoginForm router={props.history} />
      </div>
    )
}