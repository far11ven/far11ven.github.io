import React, { useState, useEffect } from 'react'

const spanStyles = {
  color: "black",
  bottom: "4vh",
  right: "1%",
  zIndex: "2",
  position: "fixed"
};

const Scroll = ({
  showBelow,
}) => {

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
      if (window.pageYOffset > showBelow) {
          if (!show) setShow(true)
      } else {
          if (show) setShow(false)
      }
  }

  const scrollToTop = () => {
      window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  const scrollToBottom = () => {
    window[`scrollTo`]({ top: document.body.scrollHeight, behavior: `smooth` })
}

  useEffect(() => {
      if (showBelow) {
          window.addEventListener(`scroll`, handleScroll)
          return () => window.removeEventListener(`scroll`, handleScroll)
      }
  })

  return (  
      <div className="dark-th">
          {show &&
          <span style={spanStyles}>
             <div aria-label="to top" component="span" title="Scroll to top">
                {/*adding font-awesome icon */}
                <i onClick={scrollToTop} id="scroll-btn" className="fas fa-arrow-alt-circle-up"></i>
              </div>
              <div  aria-label="to bottom" component="span" title="Scroll to bottom">
                   {/*adding font-awesome icon */}
                <i onClick={scrollToBottom} id="scroll-btn" className="fas fa-arrow-alt-circle-down"></i>
              </div>  
            </span>
          }
      </div>
  )
}
export default Scroll;