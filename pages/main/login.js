import SigninCard from '../../src/components/login/SigninCard';
import { StartContent } from '../../src/styles/indexStyles';
import React from 'react';
import { Box } from '@mui/material';
import Layout from '../../src/components/Layout';

export default function LoginPage() {
  return (
    <Layout>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'transparent' }}>
        <StartContent maxWidth="sm">
          <SigninCard />
        </StartContent>
      </Box>
    </Layout>
  );
}