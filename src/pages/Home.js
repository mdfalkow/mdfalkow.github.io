import React from 'react'
import {
  Grid,
  makeStyles,
  Paper,
  List,
  Typography,
  useTheme, Box, Container
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

const Title = ({ className }) => (
  <Grid container item alignItems={'center'} justify={'center'}>
    <Grid item xs={10}>
      <Typography variant={'h1'}>Mitchell Falkow</Typography>
      <Typography variant={'h3'}>Full-Stack Developer</Typography>
      <Typography variant={'h3'}>Machine Learning Enthusiast</Typography>
    </Grid>
  </Grid>
)

const Content = ({ className }) => {

  const sections = ['About', 'Projects', 'Blog', 'Resume', 'Contact']

  return (
    <Grid container item alignItems={'center'} justify={'center'}>
      <Grid item xs={10}>
        <Paper component={List}>
          {sections.map(section =>
            <ListItemLink
              to={`/${section}`}
              icon={null}
              primary={section}
              primaryProps={{ primaryTypographyProps: { variant: 'h4' } }}/>
          )}
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
        <Grid container item xs={12} md={6}>
          <Title/>
        </Grid>
        <Grid container item xs={12} md={6}>
          <Content/>
        </Grid>
      </Grid>
    </>
  )
}