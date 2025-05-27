const express = require('express');
const cors = require('cors');
const sequelize = require('./baseDatos/conexion');
const vehiculo = require('./modelos/vehiculo');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/vehiculo', vehiculo);

sequelize.sync({ alter: true })
    .then(() => console.log('base de datos conectada'))
    .catch(err => console.error('error conexion:', err));

module.exports = app;





