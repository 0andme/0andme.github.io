import { css } from "@emotion/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import CategoryItem from "./CategoryItem"
import SubCategoryItem from "./SubCategoryItem"

function CategoryList({ selectCate, setSelectCate, subCate, setSubCate }) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
          group(field: frontmatter___subCategories) {
            fieldValue
            totalCount
          }
        }
        totalCount
      }
    }
  `)

  const { group: cateList } = data.allMarkdownRemark
  const subList = cateList.find(val => val.fieldValue === selectCate)?.group
  return (
    <>
      <ul css={CategoryListStyle}>
        <CategoryItem
          setSubCate={setSubCate}
          selectCate={selectCate}
          setSelectCate={setSelectCate}
          item={{
            fieldValue: "All",
            totalCount: data.allMarkdownRemark.totalCount,
          }}
        />
        {cateList.map(cateItem => {
          const { fieldValue } = cateItem
          return (
            <CategoryItem
              setSubCate={setSubCate}
              selectCate={selectCate}
              setSelectCate={setSelectCate}
              key={fieldValue}
              item={cateItem}
            />
          )
        })}
      </ul>
      <ul css={CategoryListStyle}>
        {subList?.map(cateItem => {
          const { fieldValue } = cateItem
          return (
            <SubCategoryItem
              selectCate={selectCate}
              subCate={subCate}
              setSubCate={setSubCate}
              key={fieldValue}
              item={cateItem}
            />
          )
        })}
      </ul>
    </>
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
  margin: 0;
`
export default CategoryList
