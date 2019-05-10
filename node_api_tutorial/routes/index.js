var express = require('express');
var router = express.Router();
const booksController = require('../controllers/books-controller');
const notFoundController = require('../controllers/not-found-controller');

/* GET home page. (THIS WAS IN THE ORIGINALLY GENERATED CODE*/
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/books', booksController.all);
router.post('/books', booksController.create);
router.get('/book/:id', booksController.get);
router.put('/book/:id', booksController.update);
router.delete('/book/:id', booksController.destroy);

router.get('*', notFoundController.show);

module.exports = router;
