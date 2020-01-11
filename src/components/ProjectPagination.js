import React from 'react'

import { Link } from 'gatsby'
import { Grid, Button, IconButton } from '@material-ui/core'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

export default function ProjectPagination({ pageContext }) {
  const { currentPage, numPages } = pageContext
  const [isFirst, isLast] = [currentPage === 1, currentPage === numPages]
  const prevPage =
    currentPage === 2 ? '/projects' : `/projects/${currentPage - 1}`
  const nextPage = `/projects/${currentPage + 1}`

  return (
    <Grid
      container
      wrap={'wrap'}
      justify={'space-between'}
      alignItems={'center'}
      style={{
        padding: 16
      }}
    >
      <IconButton component={Link} to={prevPage} disabled={!!isFirst}>
        <ArrowBack />
      </IconButton>
      {Array.from({ length: numPages }, (_, i) => (
        <Grid item key={`pagination-${i + 1}`} style={{ margin: 0 }}>
          <Button
            component={Link}
            to={`/projects/${i === 0 ? '' : i + 1}`}
            disabled={i + 1 === currentPage}
          >
            {i + 1}
          </Button>
        </Grid>
      ))}
      <IconButton component={Link} to={nextPage} disabled={!!isLast}>
        <ArrowForward />
      </IconButton>
    </Grid>
  )
}
