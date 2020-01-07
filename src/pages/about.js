import React from 'react'
import Layout from '../components/Layout'
import { Grid, Paper, Typography, Divider } from '@material-ui/core'

const Content = () => (
  <>
    <Typography variant={'h4'}>About me</Typography>
    <Divider style={{ margin: 10 }} />
    <Typography variant={'body1'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Typography>
  </>
)

export default () => (
  <Layout>
    <Content />
  </Layout>
)
