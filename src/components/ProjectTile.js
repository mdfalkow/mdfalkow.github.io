import React from 'react'
import {
  Card,
  CardMedia,
  CardActionArea,
  CardHeader
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { Link } from 'gatsby'

const ProjectTile = ({ title, thumbnail, url, ...props}) => (
  <Card {...props}>
    <CardActionArea component={Link} to={url}>
      {!thumbnail ? (
        <Skeleton animation={false} variant={'rect'} height={200} />
      ) : (
        <CardMedia component={'img'} src={!thumbnail ? '' : thumbnail} />
      )}
      <CardHeader title={title} />
    </CardActionArea>
  </Card>
)

export default ProjectTile
