import { css } from "@emotion/react"
import React from "react"
import PostItem from "./PostItem"

function PostList({ selectCate, posts }) {
  // all일 때 모든 카테고리 리스트 출력
  if ("All" === selectCate) {
    return (
      <ol css={PostListStyle}>
        {posts.map(post => {
          return <PostItem key={post.fields.slug} post={post} />
        })}
      </ol>
    )
  }
  // 카테고리를 눌렀을 때
  // 해당 카테고리를 갖는 포스트 출력
  else {
    const filterPosts = posts.filter(post => {
      return post.frontmatter.categories.find(cate => cate === selectCate)
    })
    return (
      <ol css={PostListStyle}>
        {filterPosts.map(post => {
          return <PostItem key={post.fields.slug} post={post} />
        })}
      </ol>
    )
  }
}
const PostListStyle = css`
  list-style: none;
`
export default PostList
