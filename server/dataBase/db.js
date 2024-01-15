import mongoose from "mongoose";

const Connection=async()=>{
    const URL="mongodb+srv://khushnoodsaeed21:12345@cluster0.zsi6jdc.mongodb.net/"
    try{
    await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
    console.log("DataBase connected successfully.")
    }
    catch(error){

console.log("Error while connecting to mongoDB",error)

    }

}
export default  Connection
