const jwt = require("jsonwebtoken")
const User = require("../models/user-model")

const authMiddleware = async (req,res,next)=>{
    //let's get token
   const token = req.header("Authorization");
   if(!token){
    //if you attempt to use an expired token,you will receive error message 
      return res 
             .status(401)
             .json({message: "token not provided"})
   }
   //console.log("token from auth-middleware",token)
   const jwtToken = token.replace("Bearer", "").trim();
   console.log("token from auth-middleware",jwtToken)

   //now let's verify the token
   try { 
    const isDecoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log(isDecoded);
    
    //getting data from token
    const userData = await User.findOne({email: isDecoded.email})
                               .select({password:0})
    console.log(userData);

    //creating custom properties
    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();

   } catch (error) {
    return res 
             .status(401)
             .json({message:"Unauthorized, Invalid token"})
   }
   
   //assuming token is in the format Bearer <jwtToken>, removing the bearer prefix
}

module.exports = authMiddleware;