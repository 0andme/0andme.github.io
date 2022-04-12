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
  return (
    <SearchBarStyle>
      <img src={require("../../images/search.svg").default} alt="검색" />
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
    padding: 10px;
    padding-left: 40px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
`
