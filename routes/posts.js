const express = require('express');
const router = express.Router();
const PostsControllers = require('../controllers/postsControllers');
const handleErrorAsync = require('../service/handleErrorAsync');

/* GET users listing. */
router.get('/', handleErrorAsync(PostsControllers.getPosts));
router.post('/', handleErrorAsync(PostsControllers.createPost));


module.exports = router;
