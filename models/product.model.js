//Modelo MVC

const mongoose = require('mongoose'); // Importa el módulo mongoose
const Schema = mongoose.Schema; //Constructor de Schemas

//Schema de la Base de Datos
let ProductSchema = new Schema({
    name: {type: String, required: true, max:100},
    price: {type: Number, required: true},
});

//Exportar el modelo con el nombre 'Product' siguiendo el esquema ProductSchema
module.exports = mongoose.model('Product',ProductSchema);


