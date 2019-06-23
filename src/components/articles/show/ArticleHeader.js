import React from 'react'
import styled from 'styled-components'

export default function ArticleHeader(props) {
  const Header = styled.div`
    margin-top: 20px;
  `
  const Author = styled.div`
    color: #888;
    display: inline-block;
    img {
      border-radius: 100%;
      width: 55px;
      margin-right: 17px;
      position: relative;
      top: -2px;
    }
    span {
      color: #333;
    }
  `
  const Posted = styled.div`
    display: inline-block;
    float: right;
    margin-left: 35px;
    color: #888;
    span {
      color: #333;
    }
  `

  return (
    <Header>
      <Author>
        <img src="/images/uifaces/9.jpg" />
        By <span>{props.article.user}</span>
      </Author>
      <Posted>
        Posted <span>{props.article.created_at}</span>
      </Posted>
    </Header>
  )
}