import * as React from "react"
import { graphql } from "gatsby"

import ContentLayout from "../components/Layout/Layout"
import Seo from "../components/seo"
import Bio from "../components/Bio/Bio"
import Header from "../components/Header/Header"
import PostNav from "../components/PostNav/PostNav"
import PostCategoryList from "../components/PostCategoryList/PostCategoryList"
import TableOfContents from "../components/TableOfContents/TableOfContents"
import ScrollTopDown from "../components/ScrollTopDown/ScrollTopDown.js"
const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const cateList = data.markdownRemark.frontmatter.categories
  return (
    <>
      <Header isMain={false} />
      <ContentLayout location={location} title={siteTitle}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <h5 className="des">{post.frontmatter.description}</h5>
            <span className="date">{post.frontmatter.date}</span>
            {cateList && <PostCategoryList cateList={cateList} />}{" "}
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
          <footer>
            <Bio />
          </footer>
        </article>
        <PostNav prev={previous} next={next}></PostNav>
        <TableOfContents content={data.markdownRemark.tableOfContents} />
        <ScrollTopDown showBelow={230} />
      </ContentLayout>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
