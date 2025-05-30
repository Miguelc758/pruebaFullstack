import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, DirectionsCar, ListAlt } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Toolbar } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem component={Link} to="/">  {/* ← Quitado `button` */}
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={Link} to="/vehiculos">
          <ListItemIcon><DirectionsCar /></ListItemIcon>
          <ListItemText primary="Vehículos" />
        </ListItem>
        <ListItem component={Link} to="/revisiones">
          <ListItemIcon><ListAlt /></ListItemIcon>
          <ListItemText primary="Revisiones" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;