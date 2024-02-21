const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/userController')

router.get('/', userCtrl.indexUsers)
router.post('/', userCtrl.createUser)
router.post('/login', userCtrl.loginUser, userCtrl.auth) //auth
router.get('/:id', userCtrl.indexUserById)
router.put('/:id', userCtrl.updateUser, userCtrl.auth) //auth
router.delete('/:id', userCtrl.deleteUser, userCtrl.auth) //auth

module.exports = router
