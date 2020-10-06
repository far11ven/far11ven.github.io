import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
import { DiscussionEmbed } from "disqus-react";
import { Layout } from "../components/common";
import { MetaData } from "../components/common/meta";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";
import PostPreview from "../components/common/PostPreview"

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

    return (
        <>
            {/* <div>{console.log(data)}</div> */}
            <MetaData data={data} location={location} type="article" />
            <Helmet>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={Favicon}
                ></link>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
{/* Prism.js - Code Syntax Highlighter*/}
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/command-line/prism-command-line.min.css" integrity="sha512-4Y1uID1tEWeqDdbb7452znwjRVwseCy9kK9BNA7Sv4PlMroQzYRznkoWTfRURSADM/SbfZSbv/iW5sNpzSbsYg==" crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/prism.min.js" integrity="sha512-WkVkkoB31AoI9DAk6SEEEyacH9etQXKUov4JRRuM1Y681VsTq7jYgrRw06cbP6Io7kPsKx+tLFpH/HXZSZ2YEQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-gherkin.min.js" integrity="sha512-3ULk9Uw/3pVWV2LDqnuQmohR4/SG/aYjcox+XqGQzjde592yy2DPV71Jm/Jc8KgLhvz1Pj4ZH+q4Ma+jq6yFrA==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-javascript.min.js" integrity="sha512-bcEaqkUmZaRn/mfetUNsz6y4SxOcc+eEqXOzWYWeXfSUS9mt1C/12fBAxT99mKcA1U1tIw6O9o17+AGqQ3Wmtg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-markdown.min.js" integrity="sha512-UPGBJs0Zr3QOC9uQ15oeJKLu+nQfZDWOPK66Rq8MpULdg8cY1BfIL3/yayoKeHbjRlGf0Iienqp+85a6Hp7biQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-markup.min.js" integrity="sha512-n7jTZRfbcHJ8Nwq9QmPPuEdScPL4Uti1yfvA/iA237hYf/XIOntX2JSiOjOpuPX/lOanojimXQZKu3L3MM763w==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-css.min.js" integrity="sha512-zDjwO/e5eVa5WfYra8CE827RFyA/nqhp8y4da+geEpAqpCnmfAHopCNobQ9sJeLBMQY0OLB+hT+k6bbb0FhdYQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-ejs.min.js" integrity="sha512-IA57v+DQ5IWTc56D8uEeGBmDAejfgNkSQ8CL9vO9TkQxR2aQvc9MZmeZbW+EBNxv/7ELGcotXyWCUdam/V/N8g==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-handlebars.min.js" integrity="sha512-jQqwOKyYe5DO/3dY8vTp9QCp/6v8kNi+hRsymV46LsQM3TGH6dgAOJGn3f2vz/rnisJtzIOCZ8eHVlK5xoYJjg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-bash.min.js" integrity="sha512-undB7JF5cHZkHEnrvpIR6vpLG/3YR5LeDjvGKMDvr5WD7U6Xrkhymp8asv7ausEICQorcKjq3BIjz0vI5yJCnA==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/command-line/prism-command-line.min.js" integrity="sha512-a58hJgsPeGLYUdOI9kcWlg/W4Zvv75x3YGimp5kTChivqrvRkniF8U2M30VmWttYaI9vcZ3xS2b2wLypQs3afg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-json.min.js" integrity="sha512-IC7rV8RslChgByOdUFC6ePqOGn+OwJhnKC3S5AezM8DAiOdGhJMwgsIvBChsa2yuxxoPbH2+W/kjNUM1cc+jUQ==" crossorigin="anonymous"></script>  
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-xml-doc.min.js" integrity="sha512-7UKWE2rgzbPpx1Yu/BPH7bHTHiIjheYAtyVQUxAjyBjet5956cCO8cFZbMpMkwHt6U7Eg1PciDXNTsGt4Dz33g==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-typescript.min.js" integrity="sha512-5KnWNKu6jz8OE4nIBndz3PZ4O3RGqcPNcsyEFZkx3F5N8liSwc3bCe4qPOa/a3+e4CxVl0izHMXeZ0Z4yk7LTA==" crossorigin="anonymous"></script>   
 */}      
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
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
                                <a href={"/tag/" + item.name.toLowerCase()}>
                                    {"#"}
                                    {item.name.toLowerCase()}
                                    {"  "}
                                </a>
                              </span>
                            ))}
                        </div>
                       </strong>
                       <br></br>
                        <section className="post-full-content">
                            <h1 className="content-title">{post.title}</h1>
                            <p className="text-muted">
                                {post.created_at_pretty}
                            </p>
                            <p className="lead">
                                <span className="badge badge-secondary">
                                    {readingTime}
                                </span>
                            </p>
                            {/* Google in Articale ads */}
                            <ins
                                className="adsbygoogle"
                                // style={{
                                //     display: "block",
                                //     textAlign: "center",
                                // }}
                                data-ad-layout="in-article"
                                data-ad-format="fluid"
                                data-ad-client="ca-pub-1533259080190708"
                                data-ad-slot="8244664482"
                            ></ins>
                            <script>
                                (adsbygoogle = window.adsbygoogle || []).push({}
                                );
                            </script>
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                    </article>
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
