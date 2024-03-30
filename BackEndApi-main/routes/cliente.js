const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getCliente, postCliente, putCliente, deleteCliente} = require('../controllers/cliente') //Importando el controlador

route.get('/', getCliente)

route.post('/', postCliente)

route.put('/', putCliente)

route.delete('/', deleteCliente)

module.exports = route