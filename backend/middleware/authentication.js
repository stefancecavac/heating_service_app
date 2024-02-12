const jwt = require('jsonwebtoken')

const authentication = async(req, res , next) => {
    const {authorization} = req.headers

    if(!authorization){
       return res.status(400).json({error: 'authorization token required'})
    }
    const token = authorization.split(' ')[1]


    try{
        const decodedToken = jwt.verify(token , process.env.SECRET)
        
        if(!decodedToken){
         return res.status(401).json({message: 'not valid token'})
        }
        req.user = decodedToken
       
      console.log(req.user)
        next()
     }
     
     catch(error){
        res.status(401).json({message: 'not authorized'})
     }
     
}

module.exports = authentication