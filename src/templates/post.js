import React , { useEffect }from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DiscussionEmbed } from "disqus-react";
import { Layout } from "../components/common";
import { MetaData } from "../components/common/meta";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";
import PostPreview from "../components/common/PostPreview";
import Scroll from '../components/common/Scroll';

import Favicon from "../../static/favicon.ico";

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */

const Post = ({title, tags, data, location, pageContext }) => {
    const post = data.ghostPost;
    const readingTime = readingTimeHelper(post);
    const { prev, next } = pageContext;
    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME || "www-kushalbhalaik-xyz",
        config: { identifier: post.slug, title },
    };

    useEffect(() => {
        //append .line-numbers to <pre>
        Array.prototype.slice.call(document.getElementsByTagName("pre")).forEach((elem) => {
                elem.classList.add("line-numbers");
        })
                       
    });

    return (
        <>
            <MetaData data={data} location={location} type="article" />
            <Helmet>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={Favicon}
                ></link>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="container dark-th">
                    <article className="content" >
                        {post.feature_image ? (
                            <figure className="post-feature-image">
                                <img
                                    src={post.feature_image}
                                    alt={post.title}
                                />
                            </figure>
                        ) : null}
                        <strong className="d-inline-block mb-2 text-primary">
                          <div className="post-card-tags">
                            {post.tags.map((item, i) => (
                              <span key={i}>
                                <a href={"/tag/" + item.slug.toLowerCase()}>
                                    {"#"}
                                    {item.slug.toLowerCase()}
                                    {"  "}
                                </a>
                              </span>
                            ))}
                        </div>
                       </strong>
                       <br></br>
                        <section className="post-full-content dark-th">
                            <h1 className="content-title">{post.title}</h1>
                            <p className="text-muted">
                                {post.published_at_pretty}
                            </p>
                            <p className="lead">
                                <span className="badge badge-secondary">
                                    {readingTime}
                                </span>
                            </p>
                            <div>
{/* Google in-feed ads (Text-Only) */}
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-format="fluid"
     data-ad-layout-key="-gw-3+1f-3d+2z"
     data-ad-client="ca-pub-1533259080190708"
     data-ad-slot="7571223905"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> 
                            </div>
                    <section>
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            >
                                </section>
                             <div>
{/* Google in Article ads */}
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins className="adsbygoogle"
     style={{display:"block", textAlign:"center"}}
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-1533259080190708"
     data-ad-slot="8244664482"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
                            </div>
                           </section>
                        </section>
                    </article>
             
                    <Scroll showBelow={250} />
                    <div>
                         <PostPreview prev={prev} next={next} />
                    </div>
                    {/* //for disqus_thread */}
                    <div id="disqus_thread">
                        <DiscussionEmbed {...disqusConfig} />
                    </div>
                </div>
            </Layout>
        </>
    );
};

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
            tags:PropTypes.arrayOf(PropTypes.object)
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
    pageContext:PropTypes.object.isRequired
};

export default Post;

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`;
