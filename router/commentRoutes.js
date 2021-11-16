const CommentController = require('../controllers/commentController');
const router = require("express").Router();

// ? create comment
router.post('/', CommentController.createComment)

// ? get all comment
router.get('/', CommentController.getComment)

module.exports = router