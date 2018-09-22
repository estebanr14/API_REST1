// Este archivo contendrá las rutas de los productos

const express = require('express');
const router = express.Router(); //router invocará los métodos según la ruta


//Importar los controladores
const product_controller = require('../controllers/product.controller'); 

//Test para verificar la conexión de archivos
router.get('/test', product_controller.test);

//CRUD
//CREAT - Ruta para crear nuevo producto
router.post('/create', product_controller.product_create);

//READ - Ruta para obtener un producto por id 
router.get('/:id',product_controller.product_details);

//UPDATE - Ruta para actualizar un producto
router.put('/:id/update', product_controller.product_update);

//DELETE - Ruta para eliminar un producto
router.delete('/:id/delete', product_controller.product_delete);



//Exportar router para utilizar las funciones según la ruta
module.exports = router; 