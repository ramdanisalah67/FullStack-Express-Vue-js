const mongoose = require('mongoose');
const Joi = require("joi")
const JWT = require("jsonwebtoken")
const passwordComplexity = require("joi-password-complexity")
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim:true,
        unique:true,
        minLength:5,
        maxLength:100
    },
    username :{
        type: String,
        required: true,
        trim:true,
        unique:true,
        minLength:2,
        maxLength:100
    },
    password :{
        type: String,
        required: true,
        trim:true,
        unique:true,
        minLength:6,
    },
    isAdmin :{
        type: String,
        default:"USER"
    },
 }, {timestamps:true}

);

//User Model 
const User = mongoose.model("User",userSchema);

//== Generate Token 
userSchema.methods.generateToken = function(){
    console.log("user schema")
  return   JWT.sign({id:this._id,isAdmin:this .isAdmin},process.env.JWT_SEC_KEY,{expiresIn:"4d"}) ; 
}

//========================Validate Register User=====================


function validateRegister(obj){
    const schema = Joi.object({
        email:Joi.string().trim().min(5).max(100).required().email(),
        username:Joi.string().trim().min(2).max(100).required(),
        password:Joi.string().trim().min(6).required(),
    })

    return schema.validate(obj)
}


//========================Validate Login User=====================


function validateLogin(obj){
    const schema = Joi.object({
        email:Joi.string().trim().min(5).max(100).required().email(),
        password:Joi.string().trim().min(6).required(),
    })

    return schema.validate(obj)
}

//========================Validate Update User=====================


function validateUpdate(obj){
    const schema = Joi.object({
        email:Joi.string().trim().min(5).max(100).email(),
        username:Joi.string().trim().min(2).max(100),
        password:Joi.string().trim().min(6),
    })

    return schema.validate(obj)
}

//========================Validate Change Password=====================


function validateChangePassword(obj){
    const schema = Joi.object({
        password: passwordComplexity().required()
    })

    return schema.validate(obj)
}




module.exports = {
    User,
    validateRegister,
    validateLogin,
    validateUpdate,
    validateChangePassword

}

