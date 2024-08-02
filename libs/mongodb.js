import mongoose from "mongoose";

const connectMongoDB = async () => {
 try{
    await mongoose.connect(process.env.MONGOBD_URI);
    console.log("DB Connected");
    
 }
 catch(err){
    console.log("err here",err);
    
 }
}

export default connectMongoDB;

