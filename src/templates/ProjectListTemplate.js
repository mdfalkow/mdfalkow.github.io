import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Card, Grid } from '@material-ui/core'
import ProjectTile from '../components/ProjectTile'
import ProjectPagination from '../components/ProjectPagination'

export default function ProjectListTemplate({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Grid container spacing={2} style={{ height: '100%' }}>
        {posts.map(({ node }) => {
          const { title } = node.frontmatter
          return (
            <Grid item xs={12} md={4}>
              <ProjectTile
                title={title}
                thumbnail={null}
                url={node.fields.slug}
              />
            </Grid>
          )
        })}
        {Array(Math.max(0, 6 - posts.length))
          .fill(0)
          .map(() => (
            <Grid item md={4}>
              <Card style={{ height: '100%' }} />
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
            title
          }
        }
      }
    }
  }
`
