import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import ProjectCard from './ProjectCard'

export default ({ cols, projects }) => {
  const [ grid, setGrid ] = useState([])
  useEffect(() => {
    setGrid(
      projects.reduce(
        (rows, key, index) =>
          (index % cols == 0
            ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows,
        []
      )
    )
  }, [projects])

  return (
    <>
      <Grid container >
        {grid.map(row => (
          <Grid container justify={'space-between'} alignContent={'stretch'}>
            {row.map(item => (
              <Grid item xs={cols} style={{padding: 4}}>
                <ProjectCard
                  image={item.image}
                  title={item.title}
                  url={item.to}
                />
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </>
  )
}
