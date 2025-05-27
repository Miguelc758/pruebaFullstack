const { DataTypes } = require('sequelize');
const sequelize = require('../baseDatos/conexion');

const Vehiculo = sequelize.define('Vehiculo', {
    placa: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    marca: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    linea: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(100)
    },
    mId: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }
});

module.exports = Vehiculo;