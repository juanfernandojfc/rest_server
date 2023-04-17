const { response, request }  = require('express')
 

const usuariosGET = (req, res = response) => {
    res.json({
        mg: "get - controller "
    });

}

const usuariosPUT = (req, res = response ) => {
    res.json({
        mg: "put- controller"
    });
}

const usuariosPOST = (req = request, res = response) => {

    // console.log("peticion POST: ", req.body);
    res.json({
        mg: "post- controller"
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


