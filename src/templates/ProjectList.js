import React from 'react'
import { graphql } from 'gatsby'
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent
} from '@material-ui/core'
import CardActionLink from '../components/CardActionLink'
import Layout from '../components/Layout'

const ProjectTile = ({ title, thumbnail, url }) => (
  <Card>
    <CardActionLink to={url}>
      {!!thumbnail && <CardMedia component={'img'} image={thumbnail} />}
      <CardContent>
        <Typography variant={'h5'}>{title}</Typography>
      </CardContent>
    </CardActionLink>
  </Card>
)

export default function ProjectList({ data }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Grid container spacing={2}>
        {posts.map(({ node }) => {
          const { title } = node.frontmatter
          return (
            <Grid item xs={12} md={4}>
              ProjectTile(title, thumbnail, node.fields.slug)
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export const projectListQuery = graphql`
  query projectListQuery($skip: Int!, $limit: Int!) {
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
            title
          }
        }
      }
    }
  }
`
