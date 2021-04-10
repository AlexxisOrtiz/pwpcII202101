var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', author: 'Alexis Gayosso', appName: 'WebApp', company:'Awsome Software' });
});


/*Agregando nueva ruta*/
router.get('/greeting', function (req, res, next) {
  res.status(200).json({ message: 'Hola Alcones Peregrinos de ITGAM' })
})

module.exports = router;
