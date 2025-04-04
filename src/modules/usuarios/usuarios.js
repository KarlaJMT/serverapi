const express = require('express');
const router = express.Router();

// Se encarga de crear la ruta raiz por así mencionarlo.
router.get('/', function (req, res){
    res.send('<div display: flex"><h1 style="color: black;">¡Hola, bienvenido! </h1><br> <h2 style="color: grey"> Esto es usuarios.</h2></div>');
})

router.get('/actualizado', function (req, res){
    res.send('<h1>Usuario actualizado</h1>')
})

module.exports = router;