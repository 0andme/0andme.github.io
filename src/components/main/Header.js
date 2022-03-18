import { css } from "@emotion/react"
import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"

function Header({ isMain }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          subTitle
        }
      }
    }
  `)
  return (
    <div css={HeaderStyle}>
      {!isMain && <Link to={"/"}>{data.site.siteMetadata.subTitle}</Link>}
    </div>
  )
}

const HeaderStyle = css`
  width: 100%;
  height: 12vh;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, var(--primary), var(--deepPink));
  font-size: 2rem;
  a {
    font-weight: 800;
    color: #fff;
    opacity: 0.6;
    text-decoration: none;
  }
`
export default Header
