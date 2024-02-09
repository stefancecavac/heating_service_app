const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['stove', 'boiler'],
        required: true
    },
    model: {
        type: String,
        required: true
    },
    power: {
        type: Number,
        required: true
    },
    fuelType: {
        type: String,
        required: true,
        enum: ['gas', 'electric', 'wood', 'other']
    },
    warranty: {
        startDate: {
            type: Date,
            default: Date.now,
        },
        endDate: {
            type: Date,
            default: function () {
                const startDate = this.startDate || Date.now()
                const endDate = new Date(startDate)
                endDate.setFullYear(endDate.getFullYear() + 2)
                return endDate
            }
        }
    },
    maintenance: [{
        title: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now,
        }
    }]




})

module.exports = mongoose.model('Product', productSchema)