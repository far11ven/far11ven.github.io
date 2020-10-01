import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react"
import { graphql } from "gatsby";

const PostPreview = ({title, data, prev = null, next = null, ...props }) => {

    if (!prev && !next) {
      return null
    }
  
    return (
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}   {...props}>
      <div>
        {prev && <Link to={prev.slug} rel="prev"> ← Last Post   {console.log("props",props)}</Link>}
      </div>
  
      <div style={{ justifySelf: 'flex-end' }}>
        {next && <Link to={next.slug} rel="next"> Next Post → </Link>}
      </div>
    </nav>
  )
}

PostPreview.propTypes = {
  data: PropTypes.shape({
      ghostPost: PropTypes.shape({
          title: PropTypes.string.isRequired,
          excerpt:PropTypes.string,
          feature_image: PropTypes.string,
      }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default PostPreview;

export const postQuery = graphql`
    query($prevpostslug: String!,$nextpostslug: String! ) {
        ghostPost(slug: { eq: $prevpostslug }) {
            ...GhostPostFields
        }
        ghostPost(slug: { eq: $nextpostslug }) {
          ...GhostPostFields
      }
    }
`;