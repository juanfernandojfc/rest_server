const Roles = require('../models/rol.model')
const Usuario = require('../models/user.model')

validarRol = async (rol) => {
    //validar el rol de un usuario nuevo contra la base de datos 
    // console.log("chekeando el rol..")
    const existeRol = await Roles.findOne({rol});
    if(!existeRol){
        // console.log("no existe ese rol")
        throw new Error(`El rol -${rol}- no esta registrado en la base de datos`)
    }
}



validarCorreoExistente = async (correo)=>{
    let existeUsuario = await Usuario.findOne({ correo })
    if (existeUsuario) {
       throw new Error(`el correo -${correo}- ya se encuentra registrado por otro usuario`)
    }
}

module.exports={
    validarRol,
    validarCorreoExistente
}