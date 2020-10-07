import React, { useState, useEffect } from 'react'
const spanStyles = {
  color: "black",
  bottom: "4vh",
  right: "10%",
  zIndex: "2",
  position: "fixed"
};

const buttonStyle={
  margin:"4px"
}

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
      <div>
          {show &&
          <span style={spanStyles}>
             <h2 onClick={scrollToTop} style={buttonStyle}  className="scroll-btn" aria-label="to top" component="span">
                <i class="fas fa-arrow-alt-circle-up"></i>
              </h2>
              <h2 onClick={scrollToBottom} style={buttonStyle} className="scroll-btn" aria-label="to bottom" component="span">
                <i class="fas fa-arrow-alt-circle-down"></i>
              </h2>  
            </span>
          }
      </div>
  )
}
export default Scroll;