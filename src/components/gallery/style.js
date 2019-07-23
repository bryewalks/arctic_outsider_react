import styled from 'styled-components'

export const Divider = styled.div`
  margin: 45px -20px;
  @media (max-width: 991px) {
    margin: 45px 0;
  }
  @media (max-width: 767px) {
    margin-top: 20px !important;
  }
`
export const Image = styled.img`
  display: block;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  ${({ zoom }) => zoom && `
    position: fixed;
    right: 0px;
    left: 0px;
    top: 50px;
    z-index: 999;
  `}
`
