import styled from "@emotion/styled"
import { navigate } from "gatsby"
import React, { useState } from "react"

function SearchBar() {
  const [searchWord, setSearchWord] = useState("")
  function handleInputChange(event) {
    setSearchWord(event.target.value)
  }
  function handleEnterEvent(event) {
    if (event.key === "Enter") {
      navigate("/search", { state: { searchWord } })
    }
  }
  const bgImg = require("../../images/search.svg").default
  return (
    <SearchBarStyle $bgImg={bgImg}>
      <input
        type="text"
        placeholder="search"
        aria-label="search"
        onChange={handleInputChange}
        onKeyDown={handleEnterEvent}
      />
    </SearchBarStyle>
  )
}

export default SearchBar

const SearchBarStyle = styled.div`
  font-size: 25px;
  position: relative;
  flex: 1;
  img {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
  }

  input {
    flex: 1;
    width: 100%;
    border-radius: 10px;
    border: none;
    height: 40px;
    padding: 10px 0 10px 40px;
    box-sizing: border-box;
    &:focus {
      min-width: 150px;
      outline: none;
      background-image: none;
      padding-left: 10px;
    }
    background-image: ${({ $bgImg }) => `url(${$bgImg})`};
    background-position: 5px center;
    background-size: 30px;
    background-repeat: no-repeat;
  }
`
