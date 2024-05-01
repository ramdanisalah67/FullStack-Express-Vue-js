const JWT = require("jsonwebtoken")
const {ensure_has_permission,should_Autheticated} = require("./security")
function verifyToken(req,res,next){


    if(should_Autheticated(req.url)){
        console.log(should_Autheticated(req.url))
    const header =  req.headers.authorization
    if(header){
      const token =header.substring(7)
      console.log(token);
    
  
   
      if(token){
            try {
                const decoded =  JWT.verify(token,process.env.JWT_SEC_KEY)
                req.user = decoded;
                console.log(req.url)
                ensure_has_permission(req.url,"USER")
                
                next()
            } catch (error) {
                res.status(401).json({message:"invalid Token"})
            }
      }
      else {
        res.status(401).json({message:'no Token Provided'});
      }

    }}

    else {
        next()
    }

}





module.exports = {
    verifyToken
   
}