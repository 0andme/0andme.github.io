import { css } from "@emotion/react"
import { Link } from "gatsby"
import React from "react"
import PostCategoryList from "./PostCategoryList"

function PostItem({ post }) {
  const title = post.frontmatter.title || post.fields.slug
  return (
    <li css={PostItemStyle}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <Link className="title" to={post.fields.slug} itemProp="url">
            {title}
          </Link>
        </header>
        <small>{post.frontmatter.date}</small>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
        <PostCategoryList cateList={post.frontmatter.categories} />
      </article>
    </li>
  )
}
const PostItemStyle = css`
  margin: 0;
  border-bottom: 2px solid var(--lightGray);
  &:last-child {
    border: none;
  }
  .post-list-item {
    margin: 20px 0 16px;
  }
  header {
    margin: 0;
    .title {
      color: rgba(33, 37, 41, 0.8);
      display: inline-block;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none;
      font-size: 2em;
      font-weight: 700;
      &:hover {
        color: var(--primary);
      }
    }
  }
`
export default PostItem
