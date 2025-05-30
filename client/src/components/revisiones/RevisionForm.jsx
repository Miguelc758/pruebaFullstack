import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';

const RevisionForm = ({ vehiculoId }) => {
  const [formData, setFormData] = useState({
    fecha: null,
    hora: null,
    items: [],
    tecnico: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de revisión:', { ...formData, vehiculoId });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Datos de la Revisión
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <DatePicker
          label="Fecha"
          value={formData.fecha}
          onChange={(newValue) => setFormData({ ...formData, fecha: newValue })}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
        <TimePicker
          label="Hora"
          value={formData.hora}
          onChange={(newValue) => setFormData({ ...formData, hora: newValue })}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </Box>

      <TextField
        fullWidth
        margin="normal"
        label="Técnico responsable"
        name="tecnico"
        value={formData.tecnico}
        onChange={handleChange}
        required
      />

      <Box sx={{ mt: 2 }}>
        <Button type="submit" variant="contained">
          Programar Revisión
        </Button>
      </Box>
    </Box>
  );
};

export default RevisionForm;