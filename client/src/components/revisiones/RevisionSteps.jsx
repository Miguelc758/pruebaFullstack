import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';

const steps = ['Datos Básicos', 'Items de Revisión', 'Confirmación'];

const RevisionSteps = ({ activeStep }) => {
  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default RevisionSteps;