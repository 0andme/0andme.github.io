import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Header from "../components/Header/Header"
import ContentLayout from "../components/Layout/Layout"
import PostList from "../components/PostList/PostList"
import Seo from "../components/seo"
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
function Search({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || ""
  const searchWord = location.state?.searchWord || ""
  const posts = data.allMarkdownRemark.nodes || []
  const filteredPosts = posts.filter(post => {
    const { description, title, categories } = post.frontmatter
    return (
      (description &&
        description.toLowerCase().includes(searchWord.toLowerCase())) ||
      (title && title.toLowerCase().includes(searchWord.toLowerCase())) ||
      (categories && categories.join("").toLowerCase().includes(searchWord))
    )
  })
  return (
    <div>
      <Header isMain={false} title={siteTitle} />
      <ContentLayout location={location} title={siteTitle}>
        <Seo title={`${searchWord} 검색 결과`} />
        <PostList selectCate={"All"} posts={filteredPosts} />
      </ContentLayout>
    </div>
  )
}

export default Search
