import { css } from "@emotion/react"
import { Link } from "gatsby"
import React from "react"

function PostNav({ prev, next }) {
  return (
    <nav css={PostNavStyle}>
      <ul>
        <li className="prev">
          {prev && (
            <Link to={prev.fields.slug} rel="prev">
              <span>⬅️ 이전 글</span>
              <span>{prev.frontmatter.title}</span>
            </Link>
          )}
        </li>
        <li className="next">
          {next && (
            <Link to={next.fields.slug} rel="next">
              <span>다음 글 ➡️</span>
              <span> {next.frontmatter.title}</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

const PostNavStyle = css`
  font-family: "Nanum Gothic", sans-serif;
  ul {
    margin: var(--spacing-0);
    display: flex;
    justify-content: space-between;
    gap: 30px;
    list-style: none;
    padding: 0;
    li {
      width: calc(50% - 30px);
      &.prev {
        text-align: start;
      }
      &.next {
        text-align: end;
      }

      a {
        display: flex;
        flex-direction: column;
        color: var(--black);
        width: 100%;
        text-decoration: none;
        span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &:hover {
          color: var(--primary);
        }
      }
    }
  }
`

export default PostNav
