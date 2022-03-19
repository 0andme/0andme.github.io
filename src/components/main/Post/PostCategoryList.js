import { css } from "@emotion/react"
import React from "react"
import PostCategoryItem from "./PostCategoryItem"
import { v1 as uuid } from "uuid"
function PostCategoryList({ cateList }) {
  return (
    <ol css={PostCategoryListStyle}>
      {cateList.map(cate => {
        return <PostCategoryItem key={uuid()} cate={cate} />
      })}
    </ol>
  )
}
const PostCategoryListStyle = css`
  padding: 10px 0;
  display: flex;
  gap: 10px;
  margin: 0;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
`
export default PostCategoryList
