const mongooose = require('mongoose')
const connect = async()=>{
    try{
          let connection = await mongooose.connect("mongodb://localhost:27017/rd-academic");
          console.log("Database connected successfully....")
    }catch(err){
        console.log(err)
    }
}
module.exports =  connect;