const mongoose = require('mongoose');
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
    if(customer){
        console.log("Customer already exists")
        return
    }
    else{
        Customer.create(customer)
        .then(()=>{
        console.log("New Customer created")
        }) 
    }
  
}

const newCustomer = {
    firstName  :"John",
    lastName  :"Doe",
    phone : "444-444-4444",
    email : "john@gmail.com"
}

addCustomer(newCustomer);

