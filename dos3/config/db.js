const mongoose = require("mongoose")

function connectToDb() {
    
    //== Connection To mongoDb Connection
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Connected To  MongoDb ..")})
.catch((error)=>console.log("Connection Failed To MongoDb --",error ));

}


module.exports = connectToDb