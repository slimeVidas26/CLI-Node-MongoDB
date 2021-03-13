//const dbConnection = require('./config/connect');
const mongoose = require('mongoose')
const Customer = require('./models/CustomerModel')

// DB Config
const db = require("./config/keys").mongoURI;
//connection to db
 mongoose
  .connect(  
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//add customer
const addCustomer = (customer)=>{
        Customer.create(customer)
        .then(()=>{
        console.info(`Customer created`)
        //dbConnection.close()
        }) 
    }

// find customer
const findCustomer = (param)=>{
    Customer.findOne( {$or : [{'firstName' : new RegExp(param , 'i')} ,
                           {'lastName' : new RegExp(param , 'i')}
                          ]
                          })
            .then((customer)=>{
                 console.log(customer)
            })
}

//findCustomer('john')

// var data = 'Peter';

// db.User.find({'name' : new RegExp(data, 'i')}, function(err, docs){
//     cb(docs);
// });
  

// const newCustomer = {
//     firstName  :"Gilles",
//     lastName  :"Dye",
//     phone : "555-555-5555",
//     email : "james@gmail.com"
// }

// addCustomer(newCustomer);

module.exports = {
    addCustomer,
    findCustomer
}