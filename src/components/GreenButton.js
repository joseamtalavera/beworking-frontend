import React from 'react';
import { Button, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function GreenButton({ label = 'Registrate', sx = {} }) {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      startIcon={<SendIcon />}
      sx={{
        mt: 3,
        bgcolor: '#009624',
        '&:hover': { bgcolor: theme.palette.success.dark },
        maxWidth: 480,
        width: '100%',
        mx: 'auto',
        ...sx,
      }}
    >
      {label}
    </Button>
  );
}