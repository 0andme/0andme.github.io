import { css } from "@emotion/react"
import React from "react"
import PostItem from "./PostItem"

function PostList({ subCate, selectCate, posts }) {
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
    let filterPosts = []
    // 선택된 하위 카테고리가 있다면
    if (subCate) {
      filterPosts = posts.filter(post => {
        return (
          post.frontmatter.categories?.find(cate => cate === selectCate) &&
          post.frontmatter.subCategories?.find(cate => cate === subCate)
        )
      })
    } else {
      filterPosts = posts.filter(post => {
        return post.frontmatter.categories?.find(cate => cate === selectCate)
      })
    }

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
