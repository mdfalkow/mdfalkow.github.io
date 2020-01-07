import React from 'react'
import Layout from '../components/Layout'
import ListItemLink from '../components/ListItemLink'
import { Grid, Paper, List } from '@material-ui/core'

const Content = () => {
  const sections = [
    { title: 'About me', path: 'about' },
    { title: 'Projects', path: 'projects' },
    { title: 'Blog', path: 'blog' },
    { title: 'Resume', path: 'resume' },
    { title: 'Contact', path: 'contact' }
  ]

  return (
    <List>
      {sections.map(({ title, path }) => (
        <ListItemLink
          to={`/${path}`}
          icon={null}
          primary={title}
          primaryProps={{ primaryTypographyProps: { variant: 'h4' } }}
        />
      ))}
    </List>
  )
}

export default () => (
  <Layout>
    <Content />
  </Layout>
)
