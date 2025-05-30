import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton, Box, Typography, Paper } from '@mui/material';
import { Add, Edit, LocationOn } from '@mui/icons-material';
import api from '../../services/api';


const VehiculoList = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVehiculos = async () => {
    setLoading(true);
    try {
      const response = await api.get('/vehiculos');
      setVehiculos(response.data);
    } catch (error) {
      console.error('Error al obtener vehículos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehiculos();
  }, []);

  const columns = [
    { field: 'placa', headerName: 'Placa', flex: 1 },
    { field: 'marca', headerName: 'Marca', flex: 1 },
    { field: 'linea', headerName: 'Línea', flex: 1 },
    { field: 'modelo', headerName: 'Modelo', flex: 1 },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleViewLocation(params.row.mId)}>
            <LocationOn color="primary" />
          </IconButton>
          <IconButton onClick={() => handleEdit(params.row.id)}>
            <Edit color="secondary" />
          </IconButton>
        </>
      ),
    },
  ];

  const handleViewLocation = (mId) => {
    window.location.href = `/vehiculos/${mId}/location`;
  };

  const handleEdit = (id) => {
    console.log('Editar vehículo:', id);
  };

  const handleAddNew = () => {
    console.log('Nuevo vehículo');
  };

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Gestión de Vehículos
        </Typography>
        <Button variant="contained" startIcon={<Add />} onClick={handleAddNew}>
          Agregar Vehículo
        </Button>
      </Box>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={vehiculos}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          loading={loading}
          disableSelectionOnClick
        />
      </div>
    </Paper>
  );
};

export default VehiculoList;