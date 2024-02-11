const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home= async(req,res)=>{
    try{
        res.status(200)
           .send("welcome to this series")
    }
    catch(error){
       console.log(error)
    }
}
const register= async (req,res)=>{
    try{
        console.log(req.body)
        const {username,email,password,city} = req.body;
        //to check whether email exist or not
        const userExist = await User.findOne({email})
        //if exist
        if(userExist){
            return res.status(400)
                      .json({msg: "email already exist"})
        }
        //1st method password hashing
        const saltRound = 10;
        const hash_password = await bcrypt.hash( password, saltRound);
        //if does not exist
        const userCreated= await User.create({username,email, password:hash_password, city})
        res.status(200)
           .json({
             msg : "Registration Successfull", 
             token: await userCreated.generateToken(),
             userId: userCreated._id.toString(),
        })
    }
    catch(error){
       console.error("Error in register:", error);
       res.status(500)
          .json("Page not found")
    }
}

const login =async (req,res) =>{
 try {
    const{email,password} = req.body;
 //check whether email exist
 const userExist = await User.findOne({email});
 if(!userExist){
    return res.status(400)
              .json({msg: "Invalid Credentials"});
}
//compare password
const user = await bcrypt.compare(password, userExist.password);
//if user exist
if(user){
    res.status(200)
           .json({
             msg : "Login Successfull", 
             token: await userExist.generateToken(),
             userId: userExist._id.toString(),
        })
}else{
    res.status(401).json({
        msg: "Invalid email or password"
    })
}
 } catch (error) {
    console.error("Error in register:", error);
    res.status(500)
       .json("internal server error");
 }
}

//to get user data
const getUser = async(req,res)=>{
    try {
        const userData = req.user
        console.log(userData);  
        return res.status(200)
                  .json({userData})
    } catch (error) {
        console.log(`error from user router ${error}1`)
    }
}

module.exports = {home,register,login,getUser};