import styled from 'styled-components'

export const CommentCard = styled.div`
  margin: 2px;
  padding: 2px 24px;
  background-color: white;
  height: auto;
  box-shadow: 0 1px 4px rgba(0,0,0,.03);
  border-radius: 2px;
  color: #6b6b6b;
  line-height: 29px;
  
`
//
export const CommentAuthor = styled.p`
  margin-bottom: 0px;
  padding-top : 1.5em;
  font-weight: bold;
`

export const CommentImage = styled.img`
  border-radius: 100%;
  width: 8%;
  margin-top: 1.5em;
  margin-right: 1em;
  margin-left: 0em;
  float: left;
`

export const CommentBody = styled.p`
  margin-bottom: 0px;
  font-style: italic;
`

export const CommentCreated = styled.p`
  font-size: .8em;
`