import styled from 'styled-components'

export const CommentCard = styled.div`
  margin: 2px;
  padding: 2px 24px;
  font-style: italic;
  background-color: white;
  height: auto;
  box-shadow: 0 1px 4px rgba(0,0,0,.03);
  border-radius: 2px;
  color: #6b6b6b;
  line-height: 29px;
  
`
//
export const CommentAuthor = styled.p`
  text-align: right;
  padding-right: 10em;
`

export const CommentImage = styled.img`
  border-radius: 100%;
  width: 10%;
  margin-top: 1.5em;
`

export const CommentBody = styled.p`
  position: relative;
  top: 0;
  text-align: center;
`

export const CommentCreated = styled.p`

`