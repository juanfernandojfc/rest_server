const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar_campos');
const { usuariosGET,
    usuariosPUT,
    usuariosPOST,
    usuariosDELETE } = require('../controller/usuarios.controller');
const { validarRol, validarCorreoExistente } = require('../helpers/db_validators');

const router = Router();

router.get('/', usuariosGET);

router.put('/:id', usuariosPUT);

router.post('/', [
    check('correo', 'correo no valido').isEmail().custom( correo => validarCorreoExistente(correo)), //validar que tenga estructura de correo
    check('nombre', 'nombre de usuario vacio').notEmpty(), // validar que el nombre no este vacio
    check('clave', 'la clave debe tener mas de 6 digitos').isLength({ min: 6 }), //validar que la clave sea > 6 caracteres
    // check('rol', 'rol no admitido ').isIn(["ADMIN_ROLE","USER_ROLE"]),//validar el rol contra un arreglo de string
    check('rol').custom((rol)=>validarRol(rol)),
    validarCampos //middleware que chekea que no hay errores en la peticion
], usuariosPOST);

router.delete('/', usuariosDELETE);

module.exports = router;