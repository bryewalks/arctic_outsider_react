import React, { useState } from 'react'
import { Divider, Image } from './style'

export default function Gallery(props) {
  const [imageZoom, setImageZoom] = useState(false);

  const toggleZoom = () => {
    setImageZoom(!imageZoom);
  }

  return (
    <Divider>
      <Image src={props.imageUrl} onClick={() => toggleZoom()} zoom={imageZoom} />
    </Divider>
  )
}