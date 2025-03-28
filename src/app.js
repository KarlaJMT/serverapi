const express = require('express');
const config = require('./config');
const clientes = require('./modules/clientes/rutas');
const usuarios = require('./modules/usuarios/usuarios');
const app = express();


// configuración
app.set('port', config.app.port);

// rutas
app.use('/api/clientes', clientes);
app.use('/api/usuarios', usuarios);


app.use('/api/clientes', function(req, res) {
    res.send('Hola desde clientes')
});

const configmysql = {
    host: process.env.MYSQL_BD,
    user: process.env.MYSQL_BD,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_BD
}

// exportar el app
module.exports = app;