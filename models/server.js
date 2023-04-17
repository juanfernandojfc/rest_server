const express = require("express");
const cors = require('cors');
const { main } = require("../database/config.js");

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosApi = '/api/usuarios';
        this.conectarDB();
        //middlewares
        this.middlewares();

        //rutas de la aplicacion
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());

        // parseo y lectura del body

        this.app.use( express.json());
        //directorio publico
        this.app.use(express.static('public'))
    }

    //base datos
    async conectarDB() {
        await main();
    }

    //manejo y referencia de rutas
    routes() {
        this.app.use(this.usuariosApi, require('../routes/user-routes'))
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('servidor escuchando en el puerto', this.port)
        })
    }
}

module.exports = Server;