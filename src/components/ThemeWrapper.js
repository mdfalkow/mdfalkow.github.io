import React from 'react'
import { Helmet } from 'react-helmet/es/Helmet'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../styles/theme'

export default ({ element }) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Helmet>
    <CssBaseline />
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
)
