import { css } from "@emotion/react"
import React from "react"

function SubCategoryItem({ item, subCate, setSubCate }) {
  const { fieldValue } = item
  const { totalCount } = item
  return (
    <button
      type="button"
      className={item.fieldValue === subCate ? "isSelect" : ""}
      onClick={() => {
        setSubCate(item.fieldValue)
      }}
      css={SubCategoryItemStyle}
    >
      {fieldValue.replace(/^./, fieldValue[0].toUpperCase())}
      <span className="totalNum"> {` (${totalCount})`}</span>
    </button>
  )
}
const SubCategoryItemStyle = css`
  cursor: pointer;
  font-weight: 700;
  color: var(--black);
  margin: 0;
  padding: 5px 16px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);

  background-color: var(--lightPink);
  &:hover {
    background-color: var(--lightPink2);
  }
  &.isSelect {
    background-color: var(--lightPink3);
    border: 2px solid var(--lighterGray);
  }
  .totalNum {
    opacity: 0.5;
  }
`
export default SubCategoryItem
