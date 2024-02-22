const express = require('express')
const router = express.Router()
const blogCtrl = require('../../controllers/api/blogController')
// const checkToken = require('../../config/checkToken')
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

// Delete blog
// router.delete('/:id', checkToken, ensureLoggedIn, blogCtrl.destroyBlog, blogCtrl.respondWithBlog)

// // Update blog
// router.put('/:id', checkToken, ensureLoggedIn, blogCtrl.updateBlog, blogCtrl.respondWithBlog)

// // Create blog
// router.post('/', checkToken, ensureLoggedIn, blogCtrl.createBlog, blogCtrl.respondWithBlog)

module.exports = router