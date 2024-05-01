const mongoose = require('mongoose');
const Joi = require("joi")
const JWT = require("jsonwebtoken")
const passwordComplexity = require("joi-password-complexity")
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true,
        unique:true,
        minLength:5,
        maxLength:100
    },
    description :{
        type: String,
        required: true,
        trim:true,
        unique:true,
        minLength:2,
        maxLength:100
    },
    price :{
        type: Number,
        required: true,
        trim:true,
        unique:true,
        min:6,
    },
 }, {timestamps:true}

);

//Product Model 
const Product = mongoose.model("Product",productSchema);



//========================Validate Add Product=====================


function validateAddProduct(obj){
    const schema = Joi.object({
        name:Joi.string().trim().min(5).max(100).required().email(),
        description:Joi.string().trim().min(2).max(100).required(),
        price:Joi.number.required(),
    })

    return schema.validate(obj)
}



//========================Validate Update User=====================





module.exports = Product

