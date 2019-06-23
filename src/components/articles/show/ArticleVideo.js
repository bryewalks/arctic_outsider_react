import React from 'react'
import styled from 'styled-components'

export default function ArticleVideo(props) {

  const Video = styled.div`
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

  return (
    <Video>
      <iframe src={ props.videoUrl } height="440" frameBorder="0"></iframe>
    </Video>
    )
}
