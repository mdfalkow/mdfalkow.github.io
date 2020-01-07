import React, { useMemo, forwardRef } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

export default ({ icon, primary, primaryProps, to }) => {
  const renderLink = useMemo(
    () => forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
    [to]
  )

  return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} {...primaryProps}/>
    </ListItem>
  )
}

// ListItemLink.propTypes = {
//   icon: PropTypes.element,
//   primary: PropTypes.string.isRequired,
//   to: PropTypes.string.isRequired,
//   primaryProps: PropTypes.object
// }