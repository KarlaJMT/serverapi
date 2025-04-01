const bd = require('../../BD/mysql');
const TABLA = 'clientes';

function todos() {
    return bd.todos(TABLA)
}

function uno() {
    // return bd.uno(TABLA, id)
}

function agregar(data) {
    return bd.agregar(TABLA, data)
}

function eliminar () {
    // return bd.eliminar(TABLA, id)
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}