import React from 'react'
import Layout from '../components/Layout'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Link } from 'gatsby'
import { NavigateNext } from '@material-ui/icons'

export default () => {
  const sections = [
    { title: 'About Me', path: 'about' },
    { title: 'Projects', path: 'projects' },
    { title: 'Résumé', path: '#' },
    { title: 'Contact', path: '#' }
  ]

  return (
    <Layout>
      <List>
        {sections.map(({ title, path }) => (
          <ListItem button component={Link} to={`/${path}`}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
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
