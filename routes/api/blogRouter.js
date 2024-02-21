const express = require('express')
const router = express.Router()
const blogCtrl = require('../../controllers/api/blogController')
const userCtrl = require('../../controllers/api/userController')

router.get('/', blogCtrl.index)
router.post('/:id', blogCtrl.create, userCtrl.auth)
router.put('/:id', blogCtrl.update)
router.get('/:id', blogCtrl.show)
router.delete('/:id',blogCtrl.destroy, userCtrl.auth )

module.exports = router