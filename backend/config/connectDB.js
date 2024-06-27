const mongoose = require('mongoose');

const connectDB = async () => {
 try{
  const connect = await mongoose.connect("mongodb+srv://Thasha:thasha@cluster0.tpcr3a1.mongodb.net/Saloon?retryWrites=true&w=majority");
  console.log(`Database connected`);
 }catch(err){
  console.log(err.message);
  process.exit(); 
 }
}


module.exports = connectDB;