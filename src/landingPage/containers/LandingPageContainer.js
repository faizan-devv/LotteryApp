'use client';
import React from 'react';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from '../components/Header';
import theme from '@/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LandingPage from '../components/LandingPage';

const LandingPageContainer = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Box >
          <Container maxWidth="xs" fixed>
            <Box p={2}>
              <Header />
              <LandingPage />
            </Box>
          </Container>
        </Box>

      </ThemeProvider>
      {process.env.NODE_ENV === 'development' ? (
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      ) : null}
    </QueryClientProvider>
  );
};

export default LandingPageContainer;
