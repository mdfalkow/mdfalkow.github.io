import React from 'react'
import Layout from '../components/Layout'
import ListItemLink from '../components/ListItemLink'
import { List, ListItemIcon, ListItemText } from '@material-ui/core'

export default () => {
  const sections = [
    { title: 'About me', path: 'about' },
    { title: 'Projects', path: 'projects' },
    { title: 'Blog', path: '#' },
    { title: 'Resume', path: '#' },
    { title: 'Contact', path: '#' }
  ]

  return (
    <Layout>
      <List>
        {sections.map(({ title, icon, path }) => (
          <ListItemLink to={`/${path}`}>
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            <ListItemText
              primary={title}
              primaryTypographyProps={{ variant: 'h4' }}
            />
          </ListItemLink>
        ))}
      </List>
    </Layout>
  )
}
