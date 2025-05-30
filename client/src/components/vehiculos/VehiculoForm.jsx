import React from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const VehiculoForm = ({ vehiculo, onSave }) => {
  const [formData, setFormData] = React.useState(vehiculo || {
    placa: '',
    marca: '',
    linea: '',
    modelo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {vehiculo ? 'Editar Vehículo' : 'Nuevo Vehículo'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Placa"
          name="placa"
          value={formData.placa}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Marca"
          name="marca"
          value={formData.marca}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Línea"
          name="linea"
          value={formData.linea}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Modelo"
          name="modelo"
          value={formData.modelo}
          onChange={handleChange}
          required
        />
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained">
            Guardar
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default VehiculoForm;