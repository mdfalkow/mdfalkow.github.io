import React from 'react'
import {
  Breadcrumbs,
  Divider,
  Icon,
  useTheme,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core'
import { Link } from 'gatsby'
import { Home, NavigateNext } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  divider: {
    margin: theme.spacing(2)
  }
}))

export default function TopLevelNavigation({ path, title }) {
  const theme = useTheme()
  const classes = useStyles(theme)
  const dirs = path.split('/').filter(p => p !== '')
  return (
    <>
      <Breadcrumbs separator={<NavigateNext fontSize={'small'} />}>
        <Button component={Link} to={'/'}>
          Home
        </Button>
        {dirs.map((p, i) => (
          <Button
            component={Link}
            to={dirs
              .slice(0, i + 1)
              .map(d => `${d.toLowerCase()}`)
              .reduce((prev, d) => `${prev}/${d}`, '')}
          >
            {p}
          </Button>
        ))}
      </Breadcrumbs>
      <Divider className={classes.divider} />
    </>
  )
}
