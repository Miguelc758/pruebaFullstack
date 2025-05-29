import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { 
  DashboardOutlined,
  CarOutlined,
  ToolOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import './layout.less';

const { Header, Sider, Content } = Layout;

const layout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>
    },
    {
      key: '/vehicles',
      icon: <CarOutlined />,
      label: <Link to="/vehicles">Vehículos</Link>
    },
    {
      key: '/inspections',
      icon: <ToolOutlined />,
      label: <Link to="/inspections">Revisiones</Link>
    },
    {
      key: '/users',
      icon: <UserOutlined />,
      label: <Link to="/users">Usuarios</Link>
    }
  ];

  return (
    <Layout className="main-layout">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={250}
      >
        <div className="logo">
          <h2>CheckMyVehicle</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: 24
          }}
        >
          <Button 
            type="text"
            icon={<LogoutOutlined />}
            danger
          >
            Cerrar Sesión
          </Button>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default layout;