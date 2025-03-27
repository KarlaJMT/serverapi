const express = require('express');
const router = express.Router();
const respuesta = require('../../red/respuestas');
// const controlador = require('./controlador');

router.get('/', async function(req,res){
    res.send('Cliente API todo OK.')
    try {
        const items = await controlador.todos();
        respuesta.success(req, res, 200, items);
    } catch (error) {
        respuesta.error(req, res, 500, 'Error al obtener datos.', error);
    }
})

router.get('/update', function(req,res){
    respuesta.success(req, res, 200, 'Hola, todo OK.', 500)
})


module.exports = router