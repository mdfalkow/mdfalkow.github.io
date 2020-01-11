import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea
} from '@material-ui/core'
import { Link } from 'gatsby'

const ProjectTile = ({ title, thumbnail, url }) => (
  <Card>
    <CardActionArea component={Link} to={url}>
      <CardMedia
        component={'img'}
        src={!thumbnail ? 'https://use.placeimage.app/200x200' : thumbnail}
      />
      <CardContent>
        <Typography variant={'h5'}>{title}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)

export default ProjectTile
