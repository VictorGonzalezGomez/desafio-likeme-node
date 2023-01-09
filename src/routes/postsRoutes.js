const express = require('express')
const router = express.Router()

const { gettingALLPosts, createNewPost, addNewLike, deletePostById } = require('../controllers/postControllers')

router.get('/posts', gettingALLPosts);
router.post('/posts', createNewPost);
router.put('/posts/like/:id', addNewLike);
router.delete('/posts/:id', deletePostById);


module.exports = router