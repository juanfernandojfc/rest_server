const {Schema , model}  = require('mongoose')

const usuarioSchema = new Schema({
    nombre : {
        type: String,
        required : [true, "El nombre es obligatorio"]
    },
    correo:{
        type : String,
        unique: true,
        required :[true, "el correo es obliatorio"]
    },
    clave :{
        type: String,
        required : [true, 'la contraseña e sboigatoria']
    },
    img : String,
    rol:{
        type : String,
        required : true,
        emun: ['ADMIN_ROLE','USER_ROLE']
    },
    estado : {
        type : Boolean,
        default: true
    },
    google : {
        type : Boolean,
        default: true
    }
});


module.exports = model('Usuarios', usuarioSchema);