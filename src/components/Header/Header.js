import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Search from "../Search/Search"
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
    <HeaderStyle $isMain={isMain}>
      {!isMain && <Link to={"/"}>{data.site.siteMetadata.title}</Link>}
      <div className="right">
        <Search />
        <Link to="/about">About</Link>
        <a href={data.site.siteMetadata.social.github}>
          <StaticImage
            width={50}
            height={50}
            formats={["auto", "webp", "avif"]}
            src={"../../images/github_logo.png"}
            quality={95}
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
  a {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 800;
    color: #fff;
    opacity: 0.6;
    text-decoration: none;
  }
  .right {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`
export default Header
