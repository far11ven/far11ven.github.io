import React from "react";
import { Link } from "gatsby";
import BackArrow from "../../images/svg/backarrow.inline.svg";
import ForwardArrow from "../../images/svg/forwardarrow.inline.svg";

const PostPreview = ({prev, next,props}) => {

    if (!prev && !next) {
      return null
    }

    return (
      <div className="container dark-th">
      <section className="post-preview-navigation dark-th">
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="col-md-6 col-xs-6 dark-th">
        {prev && <Link to={prev.slug} rel="prev">
        <span aria-hidden="true">
        <BackArrow></BackArrow>
        {" "} Previous Post
        </span>
        
        <div className="row post-item no-gutters border rounded overflow-hidden flex-md-row mb-4 ml-1 mr-1 h-md-250 position-relative">
          <div className="col p-2 d-flex flex-column position-static">
          <h6 className="post-preview-title mb-1">{prev.title}</h6>
          <div className="post-card-footer-right">
            <div className="mb-2 text-muted"><p className="lead"><span className="badge badge-secondary">{prev.readingTime}</span></p>
            </div>
          </div>
          </div>
          <div className="col-auto d-none d-lg-block p-4">
            <img className="bd-placeholder-img" width="120" height="100" src= {prev.feature_image}  alt=""></img>
          </div>
         </div>
        </Link>
        }
        </div>
    
        <div className="col-md-6 col-xs-6 dark-th">
          {next && <Link to={next.slug} rel="next">
          <span aria-hidden="true"  > 
          Next Post {" "}<ForwardArrow ></ForwardArrow>
         </span>
          <div className="row post-item no-gutters border rounded overflow-hidden flex-md-row mb-4 ml-1 mr-1 h-md-250 position-relative">
            <div className="col p-2 d-flex flex-column position-static">
              <h6 className="post-preview-title mb-1">{next.title}</h6>
              <div className="post-card-footer-right">
                <div className="mb-2 text-muted"><p className="lead"><span className="badge badge-secondary">{next.readingTime}</span></p>
                </div>
              </div>
              </div>
              <div className="col-auto d-none d-lg-block p-4">
                <img className="bd-placeholder-img" width="120" height="100" src={next.feature_image} alt=""></img>
              </div>
           </div>
          
          </Link>}
        </div>
      </nav>
      </section>
      </div>
    )
  
   
}

export default PostPreview;
