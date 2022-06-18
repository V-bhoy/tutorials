const jwt = require('jsonwebtoken');
const SECRET_KEY = "jwttest";



const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    //.log(authHeader);
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(400).json({message:"Token is not provided"});
    }
    const token = authHeader.split(" ")[1];
    try{
           const decodedToken = jwt.verify(token,SECRET_KEY);
           const {id, username } = decodedToken;
           req.user = {id,username};
           next();
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong!"});
    }
}

module.exports = authMiddleware;









