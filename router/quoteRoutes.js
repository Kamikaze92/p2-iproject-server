const router = require("express").Router();
const QuoteController = require('../controllers/quoteController.js');


router.get('/', QuoteController.getQuote)


module.exports = router