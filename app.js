// app.js

//Importa el módulo express
const express = require('express');
//Importa el módulo body-parser
const bodyParser = require('body-parser'); 


 //Importa el repertorio de rutas
const product = require('./routes/product.route');
//Inicializa la aplicación express
var app = express(); 



//Configuración de mongoose a la BD remota mLab
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://estebanr14:locky1414@ds111113.mlab.com:11113/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



//Body-parser is used to parse the incoming request bodies in a middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Expone el repertorio de rutas en /products/...
app.use('/products', product); 



 //Crea el servidor por el puerto port
 var port = 1234;
app.listen(port, ()=>{
    console.log('Server is up and runnign on port number '+port);
});