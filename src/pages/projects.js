import React from 'react'
import Layout from '../components/Layout'

import {
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent
} from '@material-ui/core'
import CardActionLink from '../components/CardActionLink'

// TODO: query from src/pages/projects/ and paginate

const ProjectTile = ({ name, thumbnail, url }) => (
  <Card>
    <CardActionLink to={url}>
      {!!thumbnail && <CardMedia component={'img'} image={thumbnail} />}
      <CardContent>
        <Typography variant={'h5'}>{name}</Typography>
      </CardContent>
    </CardActionLink>
  </Card>
)

export default () => {
  const projects = [...'ABCDEFGH'.split('')].map(x => ({
    name: x,
    thumbnail: 'https://picsum.photos/200',
    url: '/'
  }))

  return (
    <Layout>
      <Grid container spacing={2}>
        {projects
          .map(project => (
            <Grid item xs={12} md={4}>
              <ProjectTile {...project} />
            </Grid>
          ))
          .slice(0, 6)}
      </Grid>
    </Layout>
  )
}
