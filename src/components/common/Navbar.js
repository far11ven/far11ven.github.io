import React from 'react'
import DarkModeSwitch from "../common/DarkModeSwitch";

class Navbar extends React.Component {

  render() {
   
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top dark-th">
        <a className="navbar-brand" href="/">
          <span className="navbar-title">{">"}kushalbhalaik.xyz</span>
        </a>
      <button
          className="navbar-toggler collapsed position-relative"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation" >
            
          <span> </span>
          <span> </span>
          <span> </span>
      </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item header active-nav-item">
                  <a className="nav-link" href="/">
                      {" "}
                      blog{" "}
                  </a>
              </li>
              <li className="nav-item header" >
                  <a
                      className="nav-link"
                      href="https://apps.kushalbhalaik.xyz/"
                  >
                      {" "}
                      my work{" "} 
                  </a>
              </li>
              <li className="nav-item header">
                  <a
                      className="nav-link"
                      href="https://kushalbhalaik.xyz/contact.html"
                  >
                      {" "}
                                        contact me{" "}
                                    </a>
                                </li>
                                <li className="nav-item header">
                                    <a
                                        className="nav-link"
                                        href="https://kushalbhalaik.xyz/"
                                    >
                                        {" "}
                                        about me{" "}
                                    </a>
                                </li>
                            </ul>
            <span className="navbar-text">
                 <DarkModeSwitch/>
            </span>
        </div>
    </nav>
    )
  }
}

export default Navbar