const mongoose = require('mongoose')
const {Schema} = mongoose;

const customerSchema =  new Schema({
    firstName  : String,
    lastName  :String,
    phone : String,
    email : String
      
});

module.exports =  mongoose.model('Customer' , customerSchema)