const mongoose = require('mongoose')
const {Schema} = mongoose;

const customerSchema =  new Schema({
    firstName  : String,
    lastName  :String,
    phone : String,
    email : String
      
});

module.exports =Customer =  mongoose.model('customer' , customerSchema)