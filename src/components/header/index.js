import React from 'react'
import { Wrapper, Author, Posted } from "./style"

export default function Header(props) {

  return (
    <Wrapper>
      <Author>
        <img src={props.avatarUrl ? props.avatarUrl : '/images/gray-user.png'} />
        By <span>{props.user}</span>
      </Author>
      <Posted>
        Posted <span>{props.createdAt}</span>
      </Posted>
    </Wrapper>
  )
}