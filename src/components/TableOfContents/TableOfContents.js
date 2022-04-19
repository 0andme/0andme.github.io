import styled from "@emotion/styled"
import React, { useState } from "react"

function TableOfContents({ content }) {
  const [toggle, setToggle] = useState(false)
  return (
    <TableStyle>
      <ToggleBtn $toggle={toggle} onClick={() => setToggle(!toggle)}>
        {toggle ? "목차" : "목차 보기"}
      </ToggleBtn>
      <div
        className={"tocList " + (toggle ? "open" : "close")}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </TableStyle>
  )
}

export default TableOfContents
const ToggleBtn = styled.button`
  background-color: var(--deepPink);
  color: #fff;
  font-weight: 700;
  margin: 0;
  width: ${({ $toggle }) => {
    if ($toggle) return "100%"
  }};
  border: none;
  border-radius: 12px;
  padding: 10px;
`
const TableStyle = styled.div`
  position: fixed;
  top: 12vh;
  right: 0;
  bottom: 0;
  margin-top: var(--spacing-12);
  padding: var(--spacing-10) var(--spacing-5);
  .tocList {
    ul {
      list-style: none;
    }
    a {
      color: var(--black);
      text-decoration: none;
    }
  }
  .open {
    display: block;
  }
  .close {
    display: none;
  }
`
