import React from "react"
import { Link } from "gatsby";

const PostPreview = ({prev, next,props}) => {

    if (!prev && !next) {
      return null
    }
  
    return (
      <div className="container"><section className="post-feed">
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}   {...props}>
      <div>
        {prev && <Link to={prev.slug} rel="prev"> ← Last Post  
        <br></br>
        <div className="row post-item no-gutters border rounded overflow-hidden flex-md-row mb-4 ml-1 mr-1 h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <h6 className="mb-1">{prev.title}</h6>
            <div className="post-card-footer-right">
              <div className="mb-2 text-muted"><p className="lead"><span className="badge badge-secondary">{prev.readingTime}</span></p>
              </div>
            </div>
            </div>
            <div className="col-auto d-none d-lg-block p-4">
              <img className="bd-placeholder-img" width="200" height="250" src= {prev.feature_image}  alt=""></img>
            </div>
         </div>
        </Link>
        }
      </div>
  
      <div style={{ justifySelf: 'flex-end' }}>
        {next && <Link to={next.slug} rel="next"> Next Post → 
        <br></br>
        <div className="row post-item no-gutters border rounded overflow-hidden flex-md-row mb-4 ml-1 mr-1 h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <h6 className="mb-1">{next.title}</h6>
            <div className="post-card-footer-right">
              <div className="mb-2 text-muted"><p className="lead"><span className="badge badge-secondary">{next.readingTime}</span></p>
              </div>
            </div>
            </div>
            <div className="col-auto d-none d-lg-block p-4">
              <img className="bd-placeholder-img" width="200" height="250" src={next.feature_image} alt=""></img>
            </div>
         </div>
        
        
        </Link>}
      </div>
    </nav>
    </section></div>
  )
}

export default PostPreview;
