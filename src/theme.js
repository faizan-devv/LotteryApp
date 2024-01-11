import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#961A88',
    },
    secondary: {
      main: '#961A88',
      text: '#3F3F3F',
    },

  },
  typography: {
    fontFamily: 'Inter',
    primary: '#000',
    fontStyle: 'normal',
    h1: {
      fontWeight: '700',
      fontSize: '21px',
      lineHeight: 'normal',
    },
    h2: {
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: 'normal',
    },
    h3: {
      fontWeight: 'normal',
      fontSize: '32px',
      lineHeight: '48px',
    },
    h4: {
      fontWeight: 'normal',
      fontSize: '28px',
      lineHeight: '48px',
    },
    h5: {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: 'normal',
    },
    h6: {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: 'normal',
    },
    body1: {
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: 'normal',
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '13px',
      lineHeight: 'normal',
    },
    subtitle1: {
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '22px',
    },
    subtitle2: {
      fontWeight: 'medium',
      fontSize: '14px',
      lineHeight: '24px',
    },
    caption: {
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
