import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import styled from "@emotion/styled"

function ThemeSwitch() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <StyledSwitch>
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <span>
            {theme === "dark" && (
              <img
                className="moon"
                src={require(`../../images/moon.svg`).default}
                alt="다크모드"
              />
            )}
            {theme === "light" && (
              <img
                className="sun"
                src={require(`../../images/sun.svg`).default}
                alt="라이트모드"
              />
            )}
          </span>
        </StyledSwitch>
      )}
    </ThemeToggler>
  )
}
const StyledSwitch = styled.label`
  & {
    position: relative;
    display: inline-block;
    width: 55px;
    height: 30px;
    img {
      position: absolute;
      width: 20px;
      bottom: 4px;

      &.sun {
        right: 5px;
      }
      &.moon {
        left: 5px;
      }
    }

    & > input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    & > span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 20px;
      background-color: #fff;
      box-shadow: inset 1px 5px 1px #999;
      border-radius: 20px;
      transition: 0.4s;
    }

    & > span:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      background-color: var(--deepPink);
      transition: 0.4s;
      border-radius: 20px;
    }

    & > input:checked + span {
      background-color: var(--midiGray);
      box-shadow: inset 1px 5px 1px var(--bg);
    }

    & > input:checked + span:before {
      transform: translateX(26px);
      background-color: #fff;
    }
  }
`

export default ThemeSwitch
