import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './assets/theme';
import Dashboard from './pages/dashboard';
import Layout from './component/common/layout';
import './assets/global.css';
import Vehiculos from './pages/vehiculos';
import Revisiones from './pages/revisiones';
import VehiculoLocal from './component/vehiculos/vehiculoLocal';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/vehiculos" element={<Vehiculos />} />
              <Route path="/vehiculos/:mId/location" element={<VehiculoLocal />} />
              <Route path="/revisiones/:vehiculoId" element={<Revisiones />} />
              </Routes>

        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;