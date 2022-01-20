const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    room : {
        type: Number,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    reservation : {
        type: String,
        required: true
    },
    type : {
        type: String,
        required: true
    },
    
  },
  );

module.exports = mongoose.model('guests', schema);