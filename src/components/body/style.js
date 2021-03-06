import styled from 'styled-components'

export const Content = styled.div`
  margin-top: 50px;
  @media (max-width: 767px) {
    margin-top: 30px;
  }
  h1, h2, h3, h4, h5 {
    margin: 45px 0 20px;
    font-size: 23px;
  }
  p {
    font-size: 16px;
    color: #6b6b6b;
    line-height: 29px;
    margin-bottom: 20px;
    @media (max-width: 991px) {
        font-size: 14px;
    }
  }
`