import styled from "@emotion/styled"
import React, { useState } from "react"

function TableOfContents({ content }) {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      {!toggle && (
        <ToggleBtn $toggle={toggle} onClick={() => setToggle(!toggle)}>
          {"목차 보기"}
        </ToggleBtn>
      )}
      <TableStyle $toggle={toggle}>
        <button onClick={() => setToggle(!toggle)}>
          <img src={require("../../images/exit.svg").default} alt="나가기" />
        </button>
        <div
          className={"tocList scroll "}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </TableStyle>
    </>
  )
}

export default TableOfContents
const ToggleBtn = styled.button`
  position: fixed;
  top: 38vh;
  right: 0;
  background-color: var(--deepPink);
  color: #fff;
  font-weight: 700;
  margin: 0;
  width: ${({ $toggle }) => {
    if ($toggle) return "100%"
  }};
  border: none;
  border: 6px 0 6px 6px solid var(--primary);
  border-radius: 12px 0 0 12px;
  padding: 10px;
`
const TableStyle = styled.div`
  position: fixed;
  top: 10px;
  right: 0;
  bottom: 10px;
  background-color: #fff;
  border-radius: 12px 0 0 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: ${({ $toggle }) => {
    if ($toggle) return "block"
    else return "none"
  }};
  button {
    position: absolute;
    right: 0;
    padding: 10px;
    margin: 0;
    border: none;
    border-radius: 0 0 0 12px;
    background-color: var(--deepPink);

    img {
      width: 30px;
      height: 30px;
    }
  }
  header {
    position: absolute;
    top: 0;
    font-size: 2rem;
    color: var(--midiGray);
    background-color: yellow;
  }
  .tocList {
    margin: 16px;
    z-index: 10;
    height: calc(100vh - 32px - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;

    & > ul {
      max-height: calc(100vh - 32px - 20px);
      height: fit-content;
      margin: 0;

      & > li {
        border-bottom: 1px dashed var(--deepPink);
        &:last-child {
          border-bottom: none;
        }
      }
    }

    ul {
      list-style: none;
      max-width: 30vw;

      li {
        margin: 0;
        padding: 4px 0;
      }
    }

    a {
      color: var(--black);
      text-decoration: none;
    }
  }
`
