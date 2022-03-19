import * as React from "react"
import { graphql } from "gatsby"

import ContentLayout from "../components/common/Layout"
import Seo from "../components/seo"
import Bio from "../components/main/Bio"
import Header from "../components/main/Header"
import CategoryList from "../components/main/Category/CategoryList"
import PostList from "../components/main/Post/PostList"
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const [selectCate, setSelectCate] = React.useState("All")
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
          allPostNum={posts.length}
        />
        <PostList selectCate={selectCate} posts={posts} />
      </ContentLayout>
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
        }
      }
    }
  }
`
