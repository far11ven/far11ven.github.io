import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {StaticQuery, graphql } from "gatsby";

import Favicon from "../../../static/favicon.ico";

import Navbar from "../common/Navbar";

import { Navigation } from ".";
import config from "../../utils/siteConfig";

// Styles
import "../../styles/app.css";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node;

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={Favicon}
                ></link>
                <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet"/>
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                {/* <body className={bodyClass} /> //interfers with DarkModeSwitch*/}
                <script src="https://kit.fontawesome.com/02130b3d51.js" crossorigin="anonymous"></script>
                {/* Prism.js - Code Syntax Highlighter*/}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/command-line/prism-command-line.min.css" integrity="sha512-4Y1uID1tEWeqDdbb7452znwjRVwseCy9kK9BNA7Sv4PlMroQzYRznkoWTfRURSADM/SbfZSbv/iW5sNpzSbsYg==" crossorigin="anonymous" />
<link rel="stylesheet preload" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-okaidia.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/plugins/line-numbers/prism-line-numbers.min.css" integrity="sha512-cbQXwDFK7lj2Fqfkuxbo5iD1dSbLlJGXGpfTDqbggqjHJeyzx88I3rfwjS38WJag/ihH7lzuGlGHpDBymLirZQ==" crossorigin="anonymous" />
<noscript>{`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-okaidia.min.css">`}</noscript>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/line-numbers/prism-line-numbers.min.css" integrity="sha512-cbQXwDFK7lj2Fqfkuxbo5iD1dSbLlJGXGpfTDqbggqjHJeyzx88I3rfwjS38WJag/ihH7lzuGlGHpDBymLirZQ==" crossorigin="anonymous" />
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/plugins/line-numbers/prism-line-numbers.min.js" integrity="sha512-1oLZvExT5RaW4q2GgvRPf+XzVVGmsKirfZBRN7aifdOpvZ1L9idEncfMFlfHiQNGBA+Sev+alscSAT/xQ0rwXA==" crossorigin="anonymous"></script>
{/* amp-ads*/}
<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
            </Helmet>

            <div className="viewport dark-th">
                <div className="viewport-top dark-th">
                    <Navbar></Navbar>
                    <main className="site-main">
                        <br></br>
                    <div>
                                {/* Google in-feed ads (Text-Only) */}
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins className="adsbygoogle"
    style={{display:"block", textAlign:"center"}}
     data-ad-format="fluid"
     data-ad-layout-key="-gw-3+1f-3d+2z"
     data-ad-client="ca-pub-1533259080190708"
     data-ad-slot="7571223905"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>         </div>
   
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>
                </div>

                <div className="viewport-bottom dark-th">
                    {/* The footer at the very bottom of the screen */}
                    {/* <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © 2019 &mdash;
                                Published with{" "}
                                <a
                                    className="site-foot-nav-item"
                                    href="https://ghost.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ghost
                                </a>
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation
                                    data={site.navigation}
                                    navclassName="site-foot-nav-item"
                                />
                            </div>
                        </div>
                    </footer> */}
                    <footer className="footer mt-auto p-3 dark-th">
                        <span className="text-muted">
                            © 2019-20 Kushal Bhalaik
                        </span>
                    </footer>
                </div>
            </div>
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: { eq: "logo.png" }) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;
