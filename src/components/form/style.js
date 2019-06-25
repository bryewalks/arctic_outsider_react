import styled from 'styled-components'

export const StyledForm = styled.form`
	max-width: 450px;
	background: #FAFAFA;
	padding: 30px;
	margin: 50px auto;
	box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
	border-radius: 10px;
	border: 6px solid #305A72;
  p {
    margin-top: 10px;
    margin-bottom: 0px;
  }
  img {
    width: 200px;
    height: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  input[type="file"] {
    display: none;
  }
  input[name="body"] {
    width: 100%;
    height: 500px;
  }
  button, label {
    -moz-box-shadow: inset 0px 1px 0px 0px #3985B1;
    -webkit-box-shadow: inset 0px 1px 0px 0px #3985B1;
    box-shadow: inset 0px 1px 0px 0px #3985B1;
    background-color: #216288;
    border: 1px solid #17445E;
    display: inline-block;
    cursor: pointer;
    color: #FFFFFF;
    padding: 8px 18px;
    text-decoration: none;
    font: 12px Arial, Helvetica, sans-serif;
  }
  span {
    margin: 10px;
  }
`