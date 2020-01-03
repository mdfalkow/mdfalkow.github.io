import React from 'react'
import { Box, makeStyles, MuiThemeProvider } from '@material-ui/core'
import theme from '../styles/theme'
import { Helmet } from 'react-helmet/es/Helmet'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})

export default ({ children }) => {
  const classes = useStyles()
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </Helmet>
      <MuiThemeProvider theme={theme}>
        <Box className={classes.root}>
          {children}
        </Box>
      </MuiThemeProvider>
    </div>
  )
}