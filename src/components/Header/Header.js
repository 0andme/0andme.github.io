import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import styled from "@emotion/styled"

function Header({ isMain }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          social {
            github
          }
        }
      }
    }
  `)
  return (
    <HeaderStyle className="scroll" $isMain={isMain}>
      {!isMain && <Link to={"/"}>{data.site.siteMetadata.title}</Link>}
      <div className="right">
        <SearchBar />
        <Link to="/about">About</Link>
        <a href={data.site.siteMetadata.social.github}>
          <img
            className="github"
            src={require("../../images/github_logo.png").default}
            alt="0andme gitHub"
          />
        </a>
      </div>
    </HeaderStyle>
  )
}

// props type
Header.propTypes = {
  isMain: PropTypes.bool,
}
// defatul props
Header.defaultProps = {
  isMain: false,
}
const HeaderStyle = styled.div`
  width: 100%;
  height: 12vh;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: ${({ $isMain }) => ($isMain ? "flex-end" : "space-between")};
  background: linear-gradient(to right, var(--primary), var(--deepPink));
  font-size: 2rem;
  gap: 10px;
  overflow-x: scroll;
  a {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 800;
    color: #fff;
    opacity: 0.6;
    text-decoration: none;
    height: 50px;
  }
  .right {
    max-width: 600px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
  }
  .github {
    width: 50px;
    height: 50px;
  }
`
export default Header
