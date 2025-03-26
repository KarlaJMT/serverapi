const express = require('express');
const config = require('./config');
const clientes = require('./modules/clientes/rutas');
const usuarios = require('./modules/usuarios/usuarios');
const app = express();
// const alumno = {nombre: 'Karla', cal: '10', nacionalidad: 'MX'};

// configuración
app.set('port', config.app.port);

// rutas
app.use('/api/clientes', clientes);
app.use('/api/usuarios', usuarios);

// app.get('/api/alumno', function(req, res) {
//     res.json(alumno);
// });

// app.get('/api/alumno/eliminar', function(req, res) {
//     res.send('Hola eliminaste un alumno');
// });

app.use('/api/clientes', function(req, res) {
    res.send('Hola desde clientes')
});

// exportar el app
module.exports = app;