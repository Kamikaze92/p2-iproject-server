const router = require("express").Router();
const ThreadController = require('../controllers/threadController');


// ? create Thread
router.post('/', ThreadController.createThread)

// ? get all Thread
router.get('/', ThreadController.getThread)


module.exports = router

