const express = require('express')
const router = express.Router()
const commentCtrl = require('../controllers/commentController')
const userCtrl = require ('../controllers/userController')

router.post('/', commentCtrl.create, userCtrl.auth)
router.get('/', commentCtrl.index) 
router.put('/:id',  commentCtrl.update)
router.get('/:id', commentCtrl.show)
router.delete('/:id',commentCtrl.destroy, userCtrl.auth)

module.exports = router