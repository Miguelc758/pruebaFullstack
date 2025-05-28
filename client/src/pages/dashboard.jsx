import React, { useState, useEffect } from 'react';
import { Layout, Card, Button, Space, Row, Col, Statistic } from 'antd';
import { SyncOutlined, CarOutlined, ScheduleOutlined, WarningOutlined } from '@ant-design/icons';
//import VehicleTable from '../components/vehiculos/VehicleTable';
import InspectionStatus from '../component/revision/revisionForm';
import api from '../servicio/api';
import './Dashboard.less';

const { Content } = Layout;

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    vehiculos: 0,
    pendingInspections: 0,
    alerts: 0
  });

  const fetchStats = async () => {
    setLoading(true);
    try {
      const [vehiculosRes, inspectionsRes] = await Promise.all([
        api.get('/vehiculos'),
        api.get('/inspections?status=pending')
      ]);
      setStats({
        vehiculos: vehiculosRes.data.length,
        pendingInspections: inspectionsRes.data.length,
        alerts: inspectionsRes.data.filter(i => i.severity === 'high').length
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <Layout className="dashboard-layout">
      <Content className="dashboard-content">
        <Row gutter={[16, 16]} className="stats-row">
          <Col span={8}>
            <Card>
              <Statistic 
                title="Vehículos" 
                value={stats.vehiculos} 
                prefix={<CarOutlined />}
                loading={loading}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic 
                title="Revisiones Pendientes" 
                value={stats.pendingInspections} 
                prefix={<ScheduleOutlined />}
                loading={loading}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic 
                title="Alertas" 
                value={stats.alerts} 
                prefix={<WarningOutlined />}
                loading={loading}
              />
            </Card>
          </Col>
        </Row>

       

        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col span={24}>
            <Card title="Estado de Revisiones">
              <InspectionStatus />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;