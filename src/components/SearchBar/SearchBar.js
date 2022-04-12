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
    <div>
      <input
        type="text"
        placeholder="search"
        aria-label="search"
        onChange={handleInputChange}
        onKeyDown={handleEnterEvent}
      />
    </div>
  )
}

export default SearchBar
