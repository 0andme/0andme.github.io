import * as React from "react"
import { graphql } from "gatsby"

import ContentLayout from "../components/Layout/Layout"
import Seo from "../components/seo"
import Bio from "../components/Bio/Bio"
import Header from "../components/Header/Header"
import CategoryList from "../components/CategoryListNav/CategoryList"
import PostList from "../components/PostList/PostList"
import ScrollTopDown from "../components/ScrollTopDown/ScrollTopDown"
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || ""
  const posts = data.allMarkdownRemark.nodes
  const [selectCate, setSelectCate] = React.useState("All")
  const [subCate, setSubCate] = React.useState("")
  if (posts.length === 0) {
    return (
      <>
        <Header isMain={true} />
        <ContentLayout location={location} title={siteTitle}>
          <Seo title="All posts" />
          <Bio />
          <p>
            No blog posts found. Add markdown posts to "content/blog" (or the
            directory you specified for the "gatsby-source-filesystem" plugin in
            gatsby-config.js).
          </p>
        </ContentLayout>
        <ScrollTopDown showBelow={230} />
      </>
    )
  }

  return (
    <div>
      <Header isMain={true} title={siteTitle} />
      <ContentLayout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <CategoryList
          selectCate={selectCate}
          setSelectCate={setSelectCate}
          subCate={subCate}
          setSubCate={setSubCate}
        />
        <PostList subCate={subCate} selectCate={selectCate} posts={posts} />
      </ContentLayout>
      <ScrollTopDown showBelow={230} />
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          categories
          subCategories
        }
      }
    }
  }
`
