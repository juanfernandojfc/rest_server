const {Schema , model}  = require('mongoose')

const rolSchema = new Schema({
    rol : {
        type: String,
        required: [true, "el rol debe ser obligatorio"]
    }
});


module.exports = model('Roles', rolSchema);