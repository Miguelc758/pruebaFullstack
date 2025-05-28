import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Stepper, Step, StepLabel } from '@mui/material';
import RevisionForm from '../component/revision/revisionForm';
import Layout from '../component/common/layout';

const steps = ['Datos Básicos', 'Items de Revisión', 'Confirmación'];

const Revisiones = () => {
  const { vehiculoId } = useParams();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Layout>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Programar Revisión
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
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
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Revisiones;