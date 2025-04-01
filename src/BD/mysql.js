const { set } = require('../app');
const config = require('../config');
const dbconfig = {
    host:config.mysql.host,
    user:config.mysql.user,
    password:config.mysql.password,
    database:config.mysql.database
}

function conMysql() {

}

function todos(tabla) {
    const mensaje = "Soy consulta todos y esta es la tabla a consultar: "+tabla;
    return mensaje;
}

function uno(tabla, id) {
    const conexion = mysql.createConnection(dbConfig);
    conexion.connect((err)=>{
        if(err){
            console.log('Error de conexión: ',err);
            setTimeout(conMysql, 200);
        } else {
            console.log('Conexión exitosa');
        }
    })
    conexion.on('error',err=>{
        console.log('[BD error]',err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conMysql();
        } else {
            throw err;
        }
    })
}
conMysql();


function agregar(tabla,data) {
    const datos = {
        tabla: tabla,
        data: data
    }
    return(datos)
}

function eliminar(tabla,id) {

}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}