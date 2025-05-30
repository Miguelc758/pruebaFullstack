import React from 'react';
import { Typography, Box } from '@mui/material';
import Layout from '../components/common/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Panel Principal
        </Typography>
        <Typography>
          Bienvenido al sistema de gestión de revisiones vehiculares
        </Typography>
      </Box>
    </Layout>
  );
};

export default Dashboard;