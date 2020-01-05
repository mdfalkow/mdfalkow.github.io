import React from 'react'
import {
  Grid,
  makeStyles,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from '@material-ui/core'
import ListItemLink from '../components/ListItemLink'
import theme from '../styles/theme'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      height: '100%'
    }
  }
}))

const baseContainerProps = {
  alignItems: 'center',
  justify: 'center',
  style: {
    padding: 16
  }
}

const Title = ({ className }) => (
  <Grid container item xs={12} md={6} {...baseContainerProps} className={className}>
    <Grid container item xs={11}>
      <Grid item xs={12}>
        <Typography variant={'h1'}>Mitchell Falkow</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={'h3'}>Full-Stack Developer</Typography>
        <Typography variant={'h3'}>Machine Learning Enthusiast</Typography>
      </Grid>
    </Grid>
  </Grid>
)

const Content = ({ className }) => {

  const sections = ['About', 'Projects', 'Blog', 'Resume', 'Contact']

  return (
    <Grid container item xs={12} md={6} {...baseContainerProps}>
      <Grid item xs={10}>
        <Paper>
          <List>
            {sections.map(section =>
              <ListItemLink
                to={`/${section}`}
                icon={null}
                primary={section}
                primaryProps={{ primaryTypographyProps: { variant: 'h4' } }}/>
            )}
          </List>
        </Paper>
      </Grid>
    </Grid>
  )
}


export default () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <>
      <Grid container className={classes.root}>
        <Title/>
        <Content/>
      </Grid>
    </>
  )
}