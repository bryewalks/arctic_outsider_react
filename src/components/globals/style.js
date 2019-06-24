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
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`