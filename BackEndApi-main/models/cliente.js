const {Schema, model } = require('mongoose')


const ClienteSchema = ({

    id:{
        // type: Number,
        // unique:true,
        // AutoIncrement:true
        type: String,
        required: true,
        default: () => nanoid(7),
        index: { unique: true },
        
    },

    nombre:{
        type: String,
        required:[true, 'El nombre de usuario es requirido']
    },

    apellido:{
        type: String,
        required:[true, 'El apellido es requirido']
    },

    email:{
        type: String,
        required:[true, 'El correo es requirido']
    },

    telefono:{
        type: Number,
        required:[true, 'El telefono es requirido']
    },

    password:{
        type: String,
        required:[true, 'La contraseña es requirido']
    },
})


module.exports = model('Cliente', ClienteSchema)