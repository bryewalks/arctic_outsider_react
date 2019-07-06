import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 70px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 767px) {
    margin-top: 40px;
  }
  @media (min-width: 1200px) {
    width: 880px;

  }
`

export const Container = styled.div`
  width: 100%;
  background-color: ${props => (props.color ? props.color : 'white')};
`