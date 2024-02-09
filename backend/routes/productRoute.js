const express = require('express')
const router = express.Router()

const {getProducts , postProduct, updateProduct, deleteProduct} = require('../controllers/productController')
const createMaintenance = require('../controllers/maintenanceController')

router.get('/', getProducts)
router.post('/', postProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

router.put('/:id/maintenance' , createMaintenance)

module.exports = router
