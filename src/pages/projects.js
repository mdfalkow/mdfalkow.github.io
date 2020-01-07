import React from 'react'
import Layout from '../components/Layout'
import ProjectGrid from '../components/ProjectGrid'

const projects = [...'ABCDEFGHI'.split('')].map(x => ({ title: x, path: '/' }))

export default () => (
  <Layout>
    <ProjectGrid cols={3} projects={projects} />
  </Layout>
)
