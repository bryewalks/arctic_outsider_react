import React from 'react'


export default function BlogVideo(props) {
        return (
          <div className="blog-post-video">
            <iframe src={ props.videoUrl } height="440" frameBorder="0"></iframe>
          </div>
          )
}
