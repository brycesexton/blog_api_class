const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/userController')

router.get('/', userController.indexUsers)
router.post('/', userController.createUser)
router.post('/login', userController.loginUser, userController.auth) //auth
router.get('/:id', userController.indexUserById)
router.put('/:id', userController.updateUser, userController.auth) //auth
router.delete('/:id', userController.deleteUser, userController.auth) //auth

module.exports = router
