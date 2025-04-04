const express = require('express');
const config = require('./config');
const clientes = require('./modules/clientes/rutas');
const usuarios = require('./modules/usuarios/usuarios'); // Se agregó el módulo de usuarios

const app = express();
app.use(express.json());

// Configuración del puerto
app.set('port', config.app.port);

// Rutas
app.use('/api/clientes', clientes);
app.use('/api/usuarios', usuarios);

module.exports = app;
