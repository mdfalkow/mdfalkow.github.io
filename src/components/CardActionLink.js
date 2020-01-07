import React, { useMemo, forwardRef } from 'react'
import { Link } from 'gatsby'
import { Card, CardActionArea } from '@material-ui/core'

export default ({ to, children }) => {
  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
    [to]
  )

  return <CardActionArea component={renderLink}>{children}</CardActionArea>
}
