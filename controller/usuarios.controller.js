const { response, request } = require('express')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/user.model');

const usuariosGET = (req, res = response) => {
    res.json({
        mg: "get - controller "
    });

}

const usuariosPUT = (req = request, res = response) => {

    res.json({
        mg: "put- controller"
    });
}

const usuariosPOST = async (req = request, res = response) => {

    

    

    let { nombre, correo, clave, rol } = req.body;


     //encriptar contraseña
     let hash = bcrypt.hashSync(clave, 8)
     
    const usuario = new Usuario({ nombre, correo, clave: hash, rol });

    //verificar formato correo electronico
    // se utiliza express-validator middelwares en las rutas , y aqui se comprueba si estos middlewares arrojaron algun error segun las validaciones especificadas


    //verificar correo unico
    
    
   

    //guardar en base de datos

    await usuario.save();


    // console.log("peticion POST: ", req.body);
    res.json({
        mg: "post- controller: usuario creado",
        usuario
    });
}

const usuariosDELETE = (req, res) => {
    res.json({
        mg: "delete- controller"
    });
}

module.exports = {
    usuariosGET,
    usuariosPUT,
    usuariosPOST,
    usuariosDELETE
}


