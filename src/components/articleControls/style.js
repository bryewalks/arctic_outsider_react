import styled from 'styled-components'

export const StyledButton = styled.button`
    float: right;
    -moz-box-shadow: inset 0px 1px 0px 0px #3985B1;
    -webkit-box-shadow: inset 0px 1px 0px 0px #3985B1;
    box-shadow: inset 0px 1px 0px 0px #3985B1;
    background-color: ${props => (props.delete ? '#ED5E68' : '#216288')};
    border: 1px solid #17445E;
    cursor: pointer;
    color: #FFFFFF;
    padding: 8px 18px;
    margin: .5em;
    text-decoration: none;
    font: 12px Arial, Helvetica, sans-serif;
`