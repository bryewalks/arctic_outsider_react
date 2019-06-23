import React from 'react'
import styled from 'styled-components'


export default function BlogPostGallery(props) {

  const Gallery = styled.div`
    margin: 45px -20px;
    @media (max-width: 991px) {
      margin: 45px 0;
    }
    @media (max-width: 767px) {
      margin-top: 20px !important;
    }
  `
  const Image = styled.img`
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  `

  return (
    <Gallery>
      <Image src={props.imageUrl} />
    </Gallery>
  )
}
