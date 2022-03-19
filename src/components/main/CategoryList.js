import { css } from "@emotion/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import CategoryItem from "./CategoryItem"

function CategoryList({ selectCate, setSelectCate, allPostNum }) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        group(field: frontmatter___categories) {
          edges {
            node {
              id
            }
          }
          fieldValue
          totalCount
        }
      }
    }
  `)
  const { group: cateList } = data.allMarkdownRemark
  return (
    <ul css={CategoryListStyle}>
      <CategoryItem
        selectCate={selectCate}
        setSelectCate={setSelectCate}
        item={{ fieldValue: "All", totalCount: allPostNum }}
      />
      {cateList.map(cateItem => {
        const { fieldValue } = cateItem
        return (
          <CategoryItem
            selectCate={selectCate}
            setSelectCate={setSelectCate}
            key={fieldValue}
            item={cateItem}
          />
        )
      })}
    </ul>
  )
}

const CategoryListStyle = css`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  list-style-type: none;
`
export default CategoryList
