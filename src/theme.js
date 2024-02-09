import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  palette: {
    primary: {
      main: '#1746A2',
    },
    common: {
      greybg: '#aaaaaa',
    },
  },
  common: {
    greybg: '#aaaaaa',
    green: '#4bb543',
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})
export default theme
