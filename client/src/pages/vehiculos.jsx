import React from 'react';
import { Layout, Card, Button, Tabs } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import VehicleList from '../component/vehiculos/vehiculoList';
import VehicleMapView from '../component/vehiculos/vehicleMapView';
//import VehicleFormModal from '../component/vehiculos/VehicleFormModal';

const { Content } = Layout;
const { TabPane } = Tabs;

const VehiclesPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Layout className="vehicles-layout">
      <Content className="vehicles-content">
        <Card 
          title="Gestión de Vehículos"
          extra={
            <Button 
              type="primary" 
              icon={<PlusOutlined />}
              onClick={() => setIsModalVisible(true)}
            >
              Nuevo Vehículo
            </Button>
          }
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Listado" key="1">
              <VehicleList />
            </TabPane>
            <TabPane tab="Mapa" key="2">
              <VehicleMapView />
            </TabPane>
          </Tabs>
        </Card>

       
      </Content>
    </Layout>
  );
};

export default VehiclesPage;