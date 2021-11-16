const router = require("express").Router();
const ThreadController = require('../controllers/threadController');



router.post('/', ThreadController.createThread)
router.get('/', ThreadController.getThread)


module.exports = router

