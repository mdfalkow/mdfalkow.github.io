import React from 'react'
import Layout from '../components/Layout'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Link } from 'gatsby'

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
          <ListItem button component={Link} to={`/${path}`}>
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            <ListItemText
              primary={title}
              primaryTypographyProps={{ variant: 'h4' }}
            />
          </ListItem>
        ))}
      </List>
    </Layout>
  )
}
