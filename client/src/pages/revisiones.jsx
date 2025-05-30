import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import RevisionSteps from '../components/revisiones/RevisionSteps';
import RevisionForm from '../components/revisiones/RevisionForm';
import Layout from '../components/common/Layout';

const Revisiones = () => {
  const { vehiculoId } = useParams();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Programar Revisión
        </Typography>
        <RevisionSteps activeStep={activeStep} />
        <RevisionForm vehiculoId={vehiculoId} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mr: 1 }}>
              Atrás
            </Button>
          )}
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={activeStep === 2}
          >
            {activeStep === 2 ? 'Finalizar' : 'Siguiente'}
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Revisiones;