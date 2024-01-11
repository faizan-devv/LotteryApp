'use client';
import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { useClassicData } from '../hooks/lottery';
import LotteryCard from './LotteryCard';

const LandingPage = () => {
  const { data } = useClassicData()

  return (
    <Box>
      <Box py={1.5}>
        <Typography variant='h1' component='h1'>Latest Results</Typography>
      </Box>
      <Stack py={2} spacing={2}>
        <LotteryCard id={1} backgroundColor='#EEE1F0' color='#961A88' />
        <LotteryCard id={2} backgroundColor='#E9EEF6' color='#191978' />
        <LotteryCard id={3} backgroundColor='#EAF9F7' color='#00AEB1' />
      </Stack>
    </Box>
  );
};

export default LandingPage;
