const mongoose =require("mongoose")

const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log("Base de datos on line")
    } catch(error){
        throw new Error ("Error de conexion a la base de datos")
    }

}


module.exports={
    dbConnection

}