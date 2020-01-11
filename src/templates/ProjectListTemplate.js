import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Grid } from '@material-ui/core'
import ProjectTile from '../components/ProjectTile'
import ProjectPagination from '../components/ProjectPagination'

export default function ProjectListTemplate({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Grid container spacing={2}>
        {posts.map(({ node }) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProjectTile
              title={node.frontmatter.title}
              thumbnail={node.frontmatter.thumbnail}
              url={node.fields.slug}
            />
          </Grid>
        ))}
        {Array(Math.max(0, 6 - posts.length))
          .fill(0)
          .map(() => (
            <Grid item md={4}>
              <ProjectTile style={{ visibility: 'hidden' }} />
            </Grid>
          ))}
      </Grid>
      <ProjectPagination pageContext={pageContext} />
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            thumbnail
            title
          }
        }
      }
    }
  }
`
