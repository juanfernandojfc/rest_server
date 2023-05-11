const mongoose = require('mongoose');



async function main() {

    try {
        console.log("conectando a base de datos....")
        await mongoose.connect('mongodb+srv://juanfernandojfc:cardonas97@cluster-node.mjcmukf.mongodb.net/?retryWrites=true&w=majority');
        // await mongoose.createConnection('mongodb+srv://juanfernandojfc:cardonas97@cluster-node.mjcmukf.mongodb.net/?retryWrites=true&w=majority');
        console.log("base de datos ok");
    } catch (error) {
        console.log("ERROR EN CONEXION BASE DE DATOS: ", error)
    }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = {
    main
}