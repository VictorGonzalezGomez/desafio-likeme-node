const express = require('express')
const router = express.Router()

const { gettingALLPosts, createNewPost, addNewLike } = require('../controllers/postControllers')

router.get('/posts', gettingALLPosts);
router.post('/posts', createNewPost);
router.put('/posts/like/:id', addNewLike);
// router.delete('/posts/:id', )falta funcion eliminar por id


module.exports = router