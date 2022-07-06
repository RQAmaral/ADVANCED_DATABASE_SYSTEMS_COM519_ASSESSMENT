const mongoose = require('mongoose');
const database = "mongodb+srv://Rodrigo:alter130799@cluster0.owzic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


const connectDB = async () => {
    await mongo().then(async (mongoose) =>{
      try{
        console.log("Successfuly Connected to DB")
      }catch{
        console.log("Error Connecting to DB")
      }
    })
  };

module.exports = async () => {
    await mongoose.connect(database, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })

    return mongoose
}