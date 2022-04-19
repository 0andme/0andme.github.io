import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"

function ScrollTopDown({ showBelow }) {
  const [show, setShow] = useState(showBelow ? false : true)
  function handleScroll() {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }
  function handleUp() {
    window.scrollTo({ top: 0, behavior: `smooth` })
  }
  function handleDown() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: `smooth` })
  }
  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })
  return (
    <>
      {show && (
        <Btn onClick={handleUp}>
          <img
            src={require("../../images/scroll_up.svg").default}
            alt="스크롤 업"
          />
        </Btn>
      )}
      {!show && (
        <Btn onClick={handleDown}>
          <img
            src={require("../../images/scroll_down.svg").default}
            alt="스크롤 다운"
          />
        </Btn>
      )}
    </>
  )
}

const Btn = styled.button`
  position: fixed;
  right: 2vw;
  bottom: 2vh;
  z-index: 20;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
  }
`
export default ScrollTopDown
