const Product = require('../models/productModel')
const mongoose = require('mongoose')


const getProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(201).json(product)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getSingleProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'not a valid id' })
    }
    try {
        const product = await Product.findOne({_id:id})
        res.status(201).json(product)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const postProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'not a valid id' })
    }
    try {
        const product = await Product.findOneAndUpdate({ _id: id },
            { $set: req.body },
            { new: true })
        res.status(201).json(product)

    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'not a valid id' })
    }
    try {
        const product = await Product.findOneAndDelete({ _id: id })
        res.status(201).json(product)

    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getProducts, postProduct, updateProduct, deleteProduct ,getSingleProduct}