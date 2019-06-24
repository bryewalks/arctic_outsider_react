import React from 'react'
import { Divider, Image } from './style'

export default function Gallery(props) {

  return (
    <Divider>
      <Image src={props.imageUrl} />
    </Divider>
  )
}