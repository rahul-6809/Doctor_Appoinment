const jwt=require('jsonwebtoken')
const {SECRET_KEY} = require('../config/db')



const authorizationFuc = async (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1]
        jwt.verify(token,SECRET_KEY,(err,decode) =>{
            if(err) {return res.status(200).json({message:"auth message failed",success:false});
        }else{
        req.body.userId=decode.id;
        next();
        }
        })
    }
    catch(err) {
        console.log(err)
        res.status(500).json({message:"auth message failed",success:false})
}
}
    
    module.exports = {authorizationFuc}
