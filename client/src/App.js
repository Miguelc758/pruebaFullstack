import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './assets/styles/theme';
import Dashboard from './pages/dashboard';
import Vehicles from './pages/vehiculos';
import Revisions from './pages/revisiones';
import VehicleLocation from './component/vehiculos/vehiculoLocal';
import Layout from './component/common/loading';
import './assets/styles/global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<dashboard />} />
            <Route path="/vehiculos" element={<vehiculos />} />
            <Route path="/vehiculos/:mId/location" element={<vehiculoLocal />} />
            <Route path="/revisiones/:vehiculoId" element={<revisiones />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;