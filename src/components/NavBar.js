import React from 'react'

export default function NavBar(props) {
  return (
          <nav className="navbar navbar-expand-lg navbar-light" role="navigation">
            <div className="container no-override">
              <a className="navbar-brand" href="index.html">
                <img src="/images/logo-alt-b.png" className="d-none d-lg-inline mr-2 w-25" />
                Spacial
              </a>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item active dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                      Blogs
                      <i className="ion-chevron-down"></i>
                    </a>
                    <div className="dropdown-menu" role="menu">
                      <a className="dropdown-item" href="blog.html">Blog list</a>
                      <a className="dropdown-item" href="blog-3-cols.html">Blog columns</a>
                      <a className="dropdown-item" href="blog-grid.html">Blog grid</a>
                      <a className="dropdown-item" href="blog-sidebar.html">Blog sidebar</a>
                      <a className="dropdown-item" href="blog-masonry.html">Blog masonry</a>
                      <a className="dropdown-item" href="blog-timeline.html">Blog timeline</a>
                      <a className="dropdown-item" href="blog-post.html">Single blog post</a>
                      <a className="dropdown-item" href="blog-post-alt.html">Single blog post 2</a>
                      <a className="dropdown-item" href="blog-post-3.html">Single blog post 3</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link--rounded" href="docs/intro.html">Theme Docs</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    )
}