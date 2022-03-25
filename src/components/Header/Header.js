import { css } from "@emotion/react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Header({ isMain }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          subTitle
          social {
            github
          }
        }
      }
    }
  `)
  return (
    <div css={HeaderStyle}>
      {!isMain && <Link to={"/"}>{data.site.siteMetadata.subTitle}</Link>}
      <div className="right">
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
    </div>
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
const HeaderStyle = css`
  width: 100%;
  height: 12vh;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
