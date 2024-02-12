const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')


const registerUser = async (req, res) => {
    const { name, lastName, email, password, phoneNumber, address, role } = req.body
    try {
        if (!name || !lastName || !email || !password || !phoneNumber || !address) {
            return res.status(400).json({ error: 'please fill out all fields' })
        }
        if (!validator.isEmail(req.body.email)) {
            return res.status(400).json({ error: 'not a valid email' })
        }
        if (!validator.isStrongPassword(req.body.password)) {
            return res.status(400).json({ error: 'not a strong password' })
        }

        const emailExist = await User.findOne({ email })
        if (emailExist) {
            return res.status(400).json({ error: 'email already exists' })
        }


        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = await User.create({ name, lastName, email, password: hash, phoneNumber, address, role })
        res.status(200).json(user)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({ error: 'please fill out all fields' })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: 'wrong email' })
        }

        const compare = await bcrypt.compare(password, user.password)
        if (!compare) {
            return res.status(400).json({ error: 'wrong password' })
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET, { expiresIn: "1h" })

        res.status(201).json({...user.toObject(), token})    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {registerUser, loginUser}