const {response} = require('express')

const Cliente = require('../models/cliente')

const getCliente = async(req, res) => {

    const clientes = await Cliente.find(); //Obtener todos los documentos de una colección
    res.json({
        msg: clientes
    })
}

const postCliente = async(req, res) => {
    const datos = req.body //Capturar datos de la url-postman
    let mensaje = 'Inserción exitosa'
    try {
        const cliente = new Cliente(datos)
        console.log(cliente) //Instanciar el objeto
        await cliente.save() //Guardar en la base de dato
        console.log(cliente)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const putCliente = async(req, res) => {
    const { id} = req.query //Desesctructurar
    const {nombre, apellido, email, telefono, password} = req.body //Desesctructurar
    console.log(req.body)
    let mensaje = ''
    try {
        const cliente = await Cliente.findOneAndUpdate({id: id},
        {nombre: nombre, apellido:apellido, email:email, telefono:telefono, password: password})
        mensaje = 'Actualización exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}
const deleteCliente = async(req, res) => {
    const { id} = req.query //Desesctructurar
    let mensaje = ''
    try {
        const cliente = await Cliente.findOneAndDelete({id: id})
        mensaje = 'Eliminación exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}


module.exports = {
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
}