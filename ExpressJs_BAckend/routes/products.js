const express = require("express")
const router = express.Router()
const Product = require("../Models/Product")
const asyncHandler = require("express-async-handler")


/*

@desc => add Product
@route => /api/product/addProduct
@method => POST
@access => private
*/
router.post("/addProduct",asyncHandler(async(req, res) => {
    let myProduct =  new Product({
        name:req.body.name,
        description: req.body.description,
        price:req.body.price,

    })
  await myProduct.save()
  res.json({message:"product saved succesfuly !!"})
}))




/*

@desc => all Product
@route => /api/product/all
@method => GET
@access => private
*/

router.get("/all",asyncHandler(async(req, res) => {
    const allProduct = await Product.find()
     res.json({message:allProduct})
}))

/*

@desc => get Product By ID
@route => /api/product/:id
@method => GET
@access => private
*/

router.get("/:id",asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);

    if(product) {
        res.status(200).json({message:product})
    }
    else {
        res.status(404).json({message:"product not found !! "})
    }
}))

router.put("/:id",asyncHandler(async (req,res)=>{
    console.log(req.body)
    const product = await Product.findByIdAndUpdate(req.params.id,{
        $set: {
            name: req.body.name,
            description: req.body.description,
            price:req.body.price
        }
    },{new:true})

    res.status(200).json({message:"product updated"});

}))



router.delete("/:id",asyncHandler(async (req,res)=>{
    console.log(req.body)
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"product deleted"});

}))
module.exports = router ;