import React from 'react'


export default function BlogPostGallery(props) {
        return (
          <div className="blog-post-gallery">
                <img src={ props.imageUrl } className="zoomerang" style={{display: 'block', width: '50%', marginLeft: 'auto', marginRight: 'auto'}} data-trigger="zoomerang" />
          </div>
          )
}