const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.send('Cliente API todo OK.')
})

router.get('/update', function(req,res){
    res.send('Cliente actulizado.')
})

module.exports = router