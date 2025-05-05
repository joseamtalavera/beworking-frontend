import SignUp from '../../src/components/register/SignUp';
import Layout from '../../src/components/Layout';
import { Box } from '@mui/material';

export default function RegisterPage() {
  return (
    <Layout>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'transparent' }}>
        <SignUp />
      </Box>
    </Layout>
  );
}