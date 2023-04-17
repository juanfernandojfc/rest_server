const { Router } = require('express');

const { usuariosGET,
    usuariosPUT,
    usuariosPOST,
    usuariosDELETE } = require('../controller/usuarios.controller');

const router = Router();

router.get('/', usuariosGET);

router.put('/:id', usuariosPUT);

router.post('/', usuariosPOST);

router.delete('/', usuariosDELETE);

module.exports = router;