// MUI custom theme configuration
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff9800', // orange
    },
    secondary: {
      main: '#009624', // green
    },
    success: {
      main: '#009624',
      dark: '#006014',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
