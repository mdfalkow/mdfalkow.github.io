import React from 'react'
import {
  CssBaseline,
  Grid,
  makeStyles,
  MuiThemeProvider,
  Typography
} from '@material-ui/core'
import theme from '../styles/theme'
import { Helmet } from 'react-helmet/es/Helmet'
import { Link } from 'gatsby'

const useStyles = makeStyles({
  root: {
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 10,
      paddingBottom: 10
    }
  },
  titleText: {
    color: theme.palette.text.primary,
    textDecoration: 'none'
  }
})

export default function Layout({
  children,
  alignItems = 'center',
  justify = 'center',
  ...layoutProps
}) {
  const classes = useStyles()
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Grid container className={classes.root}>
          <Grid container item xs={12} md={6} className={classes.title}>
            <Grid container alignItems={'center'} justify={'center'}>
              <Grid
                item
                xs={10}
                component={Link}
                to={'/'}
                className={classes.titleText}
              >
                <Typography variant={'h1'}>Mitchell Falkow</Typography>
                <Typography variant={'h3'}>Full-Stack Developer</Typography>
                <Typography variant={'h3'}>
                  Machine Learning Enthusiast
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12} md={6}>
            <Grid
              container
              justify={justify}
              alignItems={alignItems}
              {...layoutProps}
            >
              <Grid item xs={10} style={{ padding: 16 }}>
                {children}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  )
}
