import React, { useMemo, forwardRef } from 'react'
import { Link } from 'gatsby'
import { ListItem } from '@material-ui/core'

export default ({ to, children }) => {
  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
    [to]
  )

  return (
    <ListItem button component={renderLink}>
      {children}
    </ListItem>
  )
}
