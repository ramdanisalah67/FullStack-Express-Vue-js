const FilterJWT = (req,res,next)=>{
    console.log("checked");
  const header =  req.headers.authorization
  if(header){
    const token =header.substring(7)
    console.log(token);
    next() ;

  }
    console.log("no token");

    next() ;

}

module.exports = FilterJWT
