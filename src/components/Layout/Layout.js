import * as React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

function ContentLayout({ location, title, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 css={TextStyle} className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = ""
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}
const TextStyle = css`
  color: var(--textColor);
  a {
    font-size: 2.5rem;
    letter-spacing: -2px;
  }
`
export default ContentLayout
