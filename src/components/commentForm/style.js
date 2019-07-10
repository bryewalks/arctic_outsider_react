import styled from 'styled-components'

export const CommentFormStyle = styled.form`
  margin-bottom: 1.5em;
  padding: 0 1em;
  background-color: white;
  height: auto;
  box-shadow: 0 1px 4px rgba(0,0,0,.03);
  border-radius: 2px;
  color: #6b6b6b;
  line-height: 29px;
  overflow: auto;
`

export const CommentTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  resize: none;
  border: none;
`

export const CommentButton = styled.button`
  -moz-box-shadow: inset 0px 1px 0px 0px #3985B1;
  -webkit-box-shadow: inset 0px 1px 0px 0px #3985B1;
  box-shadow: inset 0px 1px 0px 0px #3985B1;
  background-color: #216288;
  border: 1px solid #17445E;
  color: #FFFFFF;
  padding: 8px 18px;
  margin: 1em 0;
  text-decoration: none;
  float: right;
`