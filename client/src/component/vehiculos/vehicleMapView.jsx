import React, { useState, useEffect } from 'react';
import { Card, Select, Spin } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import api from '../../servicio/api';
import 'leaflet/dist/leaflet.css';
import './vehicleMapView.less';

const { Option } = Select;

// Fix para los iconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const VehicleMapView = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const response = await api.get('/vehicles');
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <Card>
      <div className="map-controls">
        <Select
          showSearch
          style={{ width: 300 }}
          placeholder="Buscar vehículo..."
          optionFilterProp="children"
          onChange={(value) => setSelectedVehicle(vehicles.find(v => v.id === value))}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {vehicles.map(vehicle => (
            <Option key={vehicle.id} value={vehicle.id}>
              {vehicle.placa} - {vehicle.marca} {vehicle.modelo}
            </Option>
          ))}
        </Select>
      </div>

      <div className="map-container">
        {loading ? (
          <Spin tip="Cargando mapa..." />
        ) : (
          <MapContainer
            center={[4.6097, -74.0817]} 
            zoom={12}
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {vehicles.map(vehicle => (
              <Marker
                key={vehicle.id}
                position={[vehicle.latitud || 4.6097, vehicle.longitud || -74.0817]}
                eventHandlers={{
                  click: () => setSelectedVehicle(vehicle)
                }}
              />
            ))}

            {selectedVehicle && (
              <Popup
                position={[
                  selectedVehicle.latitud || 4.6097,
                  selectedVehicle.longitud || -74.0817
                ]}
                onClose={() => setSelectedVehicle(null)}
              >
                <div>
                  <h3>{selectedVehicle.placa}</h3>
                  <p>{selectedVehicle.marca} {selectedVehicle.modelo}</p>
                  <p>Última actualización: {new Date().toLocaleString()}</p>
                </div>
              </Popup>
            )}
          </MapContainer>
        )}
      </div>
    </Card>
  );
};

export default VehicleMapView;