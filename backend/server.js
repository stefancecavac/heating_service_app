require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const productRouter = require('./routes/productRoute')
const userRouter = require('./routes/userRoute')

app.use(cors())
app.use(express.json())

app.use('/api/products',productRouter)
app.use('/api/user',userRouter)


mongoose.connect(process.env.DB_URI)
            .then(() => {
                app.listen(process.env.PORT, () => {
                    console.log(`connected with database and server is listening on port:${process.env.PORT}`)
                })
            })
            .catch((error) =>{
                console.log(error)
            })
