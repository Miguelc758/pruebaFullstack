import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import api from '../../servicio/api';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
const VehiculoLocal = () => {
  const { mId } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await api.get(`/vehiculos/${mId}/location`);
        setLocation(response.data);
      } catch (err) {
        setError('Error al obtener la ubicación del vehículo');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [mId]);

  if (loading) return <div>Cargando ubicación...</div>;
  if (error) return <div>{error}</div>;
  if (!location) return <div>No se encontró ubicación para este vehículo</div>;

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => window.history.back()}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1">
          Ubicación del Vehículo
        </Typography>
      </Box>
      <div style={{ height: '70vh', width: '100%' }}>
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={15}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>
              Vehículo ID: {mId}<br />
              Última actualización: {new Date(location.timestamp).toLocaleString()}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Paper>
  );
};

export default VehiculoLocal;