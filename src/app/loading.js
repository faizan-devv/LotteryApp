'use client';
import { Stack } from '@mui/material';
import { LoadingSpinner } from '@/components/common';

export default function Loading() {
  return (
    <Stack
      sx={{ width: '100%', height: '100%' }}
      justifyContent="center"
      alignItems="center"
    >
      <LoadingSpinner />
    </Stack>
  );
}
