const express = require('express')
const router = express.Router()

const { gettingALLPosts, createNewPost } = require('../controllers/postControllers')

router.get('/posts', gettingALLPosts);
router.post('/posts', createNewPost);
// router.put('/posts/:id', )falta funcion actualizar por id
// router.delete('/posts/:id', )falta funcion eliminar por id


module.exports = router