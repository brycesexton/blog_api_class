const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// SignUp
router.post('/', userCtrl.signUp, userCtrl.respondWithToken)

// Login
router.post('/login', userCtrl.login, userCtrl.respondWithToken)

// Get Blogs by User
router.get('/blogs', checkToken, ensureLoggedIn, userCtrl.getBlogsByUser, userCtrl.respondWithBlogs)

module.exports = router