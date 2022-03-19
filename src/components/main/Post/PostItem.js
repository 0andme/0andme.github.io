import { css } from "@emotion/react"
import { Link } from "gatsby"
import React from "react"

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
          <h2>
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <small>{post.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  )
}
const PostItemStyle = css``
export default PostItem
