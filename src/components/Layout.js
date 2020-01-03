import React from 'react'
import { Box, makeStyles, MuiThemeProvider } from '@material-ui/core'
import theme from '../styles/theme'

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
    <MuiThemeProvider theme={theme}>
      <Box className={classes.root}>
        {children}
      </Box>
    </MuiThemeProvider>
  )
}