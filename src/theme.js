import { createTheme } from '@mui/material/styles';
const theme = createTheme({
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
  });
  export default theme;