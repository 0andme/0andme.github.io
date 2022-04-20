import { css } from "@emotion/react"
import React from "react"

function PostCategoryItem({ cate }) {
  return <li css={PostCategoryItemStyle}>{cate}</li>
}
const PostCategoryItemStyle = css`
  color: var(--black);
  margin: 0;
  padding: 2px 12px;
  border-radius: 10px;
  border: none;
  background-color: #f8f9fa;
`
export default PostCategoryItem
