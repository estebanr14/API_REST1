//  Controlador MVC

const Product = require('../models/product.model');

//Exporta la función para hacer el test
exports.test = function  (req, res) {
    res.send('Greetings from the Test controller!');
};

//CRUD
//CREATE - Exportar la función crear productos
exports.product_create = function(req,res,next){
    //Recupera los datos de la request para crear el producto
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        
        }
    );

    product.save(function(err){
        if(err){
            return next(err);
        }
        res.send('Product created successfully')
    })
};

//READ - Exportar función buscar producto
exports.product_details = function(req,res){
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

//UPDATE - Exportar función actualizar producto
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

//DELETE - Exportar la función para eliminar producto
exports.product_delete = function(req,res){
    Product.findByIdAndRemove(req.params.id, function(err){
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};