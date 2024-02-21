const express = require('express')
const router = express.Router()
const commentCtrl = require('../../controllers/api/comments')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// Delete comment
router.delete('/:id', checkToken, ensureLoggedIn, commentCtrl.destroyComment, commentCtrl.respondWithComment)

// Update comment
router.put('/:id', checkToken, ensureLoggedIn, commentCtrl.updateComment, commentCtrl.respondWithComment)

// Create comment
router.post('/:blogId', checkToken, ensureLoggedIn, commentCtrl.createComment, commentCtrl.respondWithComment)

module.exports = router