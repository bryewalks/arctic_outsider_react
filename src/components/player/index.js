import React from 'react'
import { Video } from './style'

export default function Player(props) {

  return (
    <Video>
      <iframe title='video player' src={props.videoUrl} height="440" frameBorder="0"></iframe>
    </Video>
  )
}