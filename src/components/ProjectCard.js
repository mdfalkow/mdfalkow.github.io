import React, { useMemo, forwardRef } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'

export default ({ image, title, path }) => {
  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <Link to={path} ref={ref} {...itemProps} />
      )),
    [path]
  )

  return (
    <Card>
      <CardActionArea component={renderLink}>
        {!!image && <CardMedia image={image} />}
        <CardContent>
          <Typography variant={'h5'}>{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

// ListItemLink.propTypes = {
//   icon: PropTypes.element,
//   primary: PropTypes.string.isRequired,
//   to: PropTypes.string.isRequired,
//   primaryProps: PropTypes.object
// }
