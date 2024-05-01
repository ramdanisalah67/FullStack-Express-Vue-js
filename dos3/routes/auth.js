const express = require("express")
const router = express.Router()
const asyncHandler = require("express-async-handler")
const {User,validateRegister,validateLogin} = require("../Models/User")
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken")
/*

@desc => Resgister new User
@route => /api/auth/register
@method => POST
@access => public
*/


router.post("/register",asyncHandler(async(req,res)=>{
    console.log(req.body)
    const {error} = validateRegister(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message})
    }

    let user = await User.findOne({email : req.body.email})

    if(user){
        return res.status(400).json({message:"User Already Exist"})
    }

    //crypt password
    const salt = await bcrypt.genSalt()
    req.body.password = await bcrypt.hash(req.body.password,salt)


    user = new User({
        email:req.body.email,
        username: req.body.username,
        password:req.body.password,

    })
    
    const result = await user.save();
    const token = JWT.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SEC_KEY,{expiresIn:"4d"}) ; 
    const {password, ...other} = result._doc;
    res.status(201).json({...other,token})


}))





/*

@desc => Resgister new User
@route => /api/auth/register
@method => POST
@access => public
*/


router.post("/login",asyncHandler(async(req,res)=>{

    const {error} = validateLogin(req.body);

    if(error){
        return res.status(400).json({message:error.details[0].message})
    }

    let user = await User.findOne({email : req.body.email})

    if(!user){
        return res.status(400).json({message:"Invalid Credentials !!"})
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password,user.password);

    if(!isPasswordMatch){
        return res.status(400).json({message:"Invalid Credentials !!"})
    }

    
    const token = JWT.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SEC_KEY,{expiresIn:"4d"}) ; 
    console.log(token)
    const {password, ...other} = user._doc;
   // res.status(200).json({...other,token})
   res.status(200).json({'token':token})

}))


module.exports = router ;