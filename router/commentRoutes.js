const CommentController = require('../controllers/commentController');
const router = require("express").Router();

router.post('/', CommentController.createComment)
router.get('/', CommentController.getComment)

module.exports = router