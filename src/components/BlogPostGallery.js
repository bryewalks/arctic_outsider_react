import React from 'react'


export default function BlogPostGallery(props) {
        return (
          <div className="blog-post-gallery">
            <div className="row">
              <div className="col-sm-6">
                <img src="/images/unsplash/photo-1470274038469-958113db2384.jpg" className="zoomerang" style={{width: '100%'}} data-trigger="zoomerang" />
              </div>
              <div className="col-sm-6">
                <img src="/images/unsplash/photo-1466854076813-4aa9ac0fc347.jpg" className="zoomerang" style={{width: '100%'}} data-trigger="zoomerang" />
                <img src="/images/unsplash/photo-1467659226669-a1360d97be2d.jpg" className="zoomerang" style={{width: '100%', marginTop:'45px'}} data-trigger="zoomerang" />
              </div>
            </div>
          </div>
          )
}
