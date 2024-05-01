const express = require("express")
const router = express.Router()
const asyncHandler = require("express-async-handler")
const {User,validateRegister,validateLogin,validateUpdate} = require("../Models/User")
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken")
const {verifyToken} = require("../Middlewares/verifyToken")

/*

@desc => Update User
@route => /api/users/:id
@method => PUT
@access => private
*/
router.put("/:id",asyncHandler(async(req,res)=>{

    const {error} = validateUpdate(req.body)
    if(error){
        res.status(400).json({message:error.deatils[0].message})
    }

    if(req.body.password){
        const solt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password,solt)

    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{
        $set: {
            email:req.body.email,
            password:req.body.password,
            username:req.body.username,
        }
    },{new:true}).select("-password")


    res.status(200).json(updatedUser)


}))



/*

@desc => get all Users
@route => /api/users/
@method => PUT
@access => private
*/
router.get("/",verifyToken,asyncHandler(async(req,res)=>{

 const allUsers = await User.find();
  
    res.status(200).json(allUsers)


}))




/*

@desc => get  User By Id
@route => /api/users/:id
@method => GET
@access => private (all user authenticated)
*/
router.get("/:id",asyncHandler(async(req,res)=>{

    const user = await User.findById(req.params.id).select("-password")

    if(user){
        res.status(200).json(user);
    }

    else {
        res.status(404).json({message:"user not found"})

    }
   
   
   }))
   


   /*

@desc => Delete  User By Id
@route => /api/users/:id
@method => DELETE
@access => private (all user authenticated)
*/
router.delete("/:id",asyncHandler(async(req,res)=>{

    const user = await User.findByIdAndDelete(req.params.id).select("-password")

    if(user){
        res.status(200).json({message:"user deleted successfully"});
    }

    else {
        res.status(404).json({message:"user not found"})

    }
   
   
   }))
module.exports = router ;