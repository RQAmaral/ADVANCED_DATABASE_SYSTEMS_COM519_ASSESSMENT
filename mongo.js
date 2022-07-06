const mongoose = require('mongoose');
const database = "mongodb+srv://Rodrigo:alter130799@cluster0.owzic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

module.exports = async () => {
    await mongoose.connect(database, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })

    return mongoose
}