import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { blueGrey, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blueGrey
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'sans-serif'].join(',')
  }
})

export default responsiveFontSizes(theme)
