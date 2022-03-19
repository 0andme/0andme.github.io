import { css } from "@emotion/react"
import React from "react"

function CategoryItem({ item, selectCate, setSelectCate }) {
  const { fieldValue } = item
  const { totalCount } = item
  return (
    <button
      type="button"
      className={item.fieldValue === selectCate ? "isSelect" : ""}
      onClick={() => {
        setSelectCate(item.fieldValue)
      }}
      css={CategoryItemStyle}
    >
      {fieldValue.replace(/^./, fieldValue[0].toUpperCase())}
      {` (${totalCount})`}
    </button>
  )
}
const CategoryItemStyle = css`
  cursor: pointer;
  font-weight: 700;
  color: var(--black);
  margin: 0;
  padding: 5px 16px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  background-color: #e9ecef;
  &:hover {
    background-color: #ced4da;
  }
  &.isSelect {
    background-color: #fff;
    border: 2px solid var(--primary);
  }
`
export default CategoryItem
