const express = require('express')
const router = express.Router()

const {getProducts , postProduct, updateProduct, deleteProduct ,getSingleProduct} = require('../controllers/productController')
const createMaintenance = require('../controllers/maintenanceController')

router.get('/', getProducts)
router.get('/:id',getSingleProduct)
router.post('/', postProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

router.put('/:id/maintenance' , createMaintenance)

module.exports = router
