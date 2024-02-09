const Product = require('../models/productModel')
const mongoose = require('mongoose')

const createMaintenance = async (req, res) => {
    const {id} = req.params
    const maintenance = req.body

    console.log(maintenance)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'not a valid id'})
    }
    try{
        const product = await Product.findOneAndUpdate({_id : id} , 
            {$push: {maintenance : maintenance}} ,
            {new:true})
            
        res.status(201).json(product)

    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
 };


module.exports = createMaintenance