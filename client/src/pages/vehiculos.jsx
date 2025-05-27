import React from 'react';
import VehicleList from '../component/vehiculos/vehiculoList';
import Layout from '../component/common/loading';

const vehiculos = () => {
  return (
    <Layout>
      <VehicleList />
    </Layout>
  );
};

export default vehiculos;