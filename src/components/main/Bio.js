/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          description
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const description = data.site.siteMetadata?.description
  return (
    <BioBox>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../../images/profile.jpeg"
        width={100}
        height={100}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <BioTextBox>
          <div className="name">
            {author?.summary || null}{" "}
            <Link className="aboutTag" to={"/about"}>
              @{author.name}
            </Link>
          </div>
          <div>{description}</div>
          <Link className="link" to={`${social?.github || ``}`}>
            <StaticImage
              className="logo"
              formats={["auto", "webp", "avif"]}
              src={"../../images/github_logo.png"}
              quality={95}
              alt="Profile picture"
            />
            <span>Github</span>
          </Link>
        </BioTextBox>
      )}
    </BioBox>
  )
}
const BioBox = styled.div`
  display: flex;
  height: fit-content;
`
const BioTextBox = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  .name {
    font-weight: 700;
    font-size: 1.1em;
  }
  .aboutTag {
    padding: 8px 10px;
    border-radius: 10px;
    color: #fff;
    background-color: rgba(240, 62, 62, 0.8);
    font-weight: 900;
    &:hover {
      border-color: var(--deepPink);
      background-color: rgba(240, 62, 62, 0.6);
    }
  }
  .link {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--black);
    padding: 4px 0;
    border-radius: 10px;
    .logo {
      width: 20px;
    }
    &:hover {
      background-color: #ced4da;
      padding: 4px;
    }
  }
`
export default Bio
