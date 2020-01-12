import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TopLevelNavigation from '../components/TopLevelNavigation'
import { Typography } from '@material-ui/core'

export default function ProjectTemplate({ data, path }) {
  const { ...post } = data.markdownRemark
  return (
    <Layout>
      <TopLevelNavigation path={path} />
      <Typography variant={'h4'}>{post.frontmatter.title}</Typography>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
