const mongoose = require('mongoose')
const customerSchema = mongoose.Schema({
    firstName  :String,
    lastName  :String,
    phone : String,
    email : String
});

module.exports = mongoose.model('customer' , customerSchema)