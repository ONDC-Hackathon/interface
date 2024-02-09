import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  common: {
    greybg: '#aaaaaa',
    green: '#4bb543',
  },
  palette: {
    primary: {
      main: '#1746A2',
      main2: '#FF731D', // Pumpkin
      light: '#F16813', // Metallic Orange
      dark: '#FF731D', // Orange-Red
    },
    secondary: {
      main: '#1746A2', // Dark blue
      light: '#F7FBFF', // Cloud Blue
      dark: '#FFF7E9', // Cosmic Latte
    },
    common: {
      greybg: '#aaaaaa',
    },
    error: {
      main: '#d0342c',
    },
    grey: {
      50: '#F6F6F6', // Shaded white
      100: '#DDDDDD', // Light gray
      200: '#AAAAAA', // Pale gray
      300: '#888888', // Tinted gray
      400: '#777777', // Medium gray
      500: '#555555', // Dark gray
      600: '#222222', // Tinted black
      700: '#000000', // Black
      800: '#000000', // Black (duplicated for consistency)
      900: '#000000', // Black (duplicated for consistency)
    },
    blue: {
      light: '#3F81E0', // Tufts Blue
      main: '#2A6CCB', // Celtic Blue
      dark: '#1A5BB9', // Denim
    },
  },
  typography: {
    fontFamily: [
      '"Open Sans"',
      '"Merriweather"',
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
    h1: {
      fontFamily: '"Merriweather", sans-serif',
      fontSize: '40px',
      fontWeight: 'bold',
      lineHeight: 1.25, // Equivalent to 50px
      letterSpacing: '0.02em', // 2%
    },
    h2: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: 1.375, // Equivalent to 44px
      letterSpacing: '0.01em', // 1%
    },
    h3: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: 1.375, // Equivalent to 33px
      letterSpacing: '0.01em', // 1%
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '20px',
      fontWeight: 'regular',
      lineHeight: 1.35, // Equivalent to 27px
      letterSpacing: '0.01em', // 1%
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '18px',
      fontWeight: 'regular',
      lineHeight: 1.39, // Equivalent to 25px
      letterSpacing: '0.01em', // 1%
    },
    subtitle1: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '16px',
      fontWeight: 'regular',
      lineHeight: 1.375, // Equivalent to 22px
      letterSpacing: '0.01em', // 1%
    },
    subtitle2: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '14px',
      fontWeight: 'regular',
      lineHeight: 1.357, // Equivalent to 19px
      letterSpacing: '0.01em', // 1%
    },
    caption: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '12px',
      fontWeight: 'regular',
      lineHeight: 1.333, // Equivalent to 16px
      letterSpacing: '0.01em', // 1%
    },
  },
  components: {
    // Style the stepper component
    MuiStepper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent', // Adjust as per the image
          padding: '24px 0',
        },
      },
    },
    // Style the step icon
    MuiStepIcon: {
      styleOverrides: {
        root: {
          // Define colors and sizes as per the image
          '&.Mui-completed': {
            color: '#4caf50', // Example color
          },
          '&.Mui-active': {
            color: '#ff9800', // Example color
          },
        },
      },
    },
    // Style the text fields
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px', // Adjust as per the image
            '&.Mui-focused fieldset': {
              borderColor: 'green', // Example color
            },
          },
        },
      },
    },
    // Style the buttons
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Adjust as per the image
          padding: '8px 24px',
          margin: '8px',
          // Define the primary color for the 'Save & Next' button
          '&.MuiButton-containedPrimary': {
            backgroundColor: '#2196f3', // Example color
          },
        },
      },
    },
  },
  // You can also add other theme customizations here
})

export default theme
