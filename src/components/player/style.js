import styled from 'styled-components'

export const Video = styled.div`
  margin: 40px 0;
  iframe {
    width: 92%;
    display: block;
    margin: 0 auto;
    @media (max-width: 991px) {
        height: 350px;
    }
    @media (max-width: 767px) {
        width: 100%;
        height: 270px;
    }
  }
`