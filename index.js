//const dbConnection = require('./config/connect');
const mongoose = require('mongoose')
const Customer = require('./models/CustomerModel')

// DB Config
const db = require("./config/keys").mongoURI;
//connection to db
 mongoose
  .connect(  
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true ,  useFindAndModify: false  }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


 //////////////////// CRUD FUNCTIONS/////////////////////////
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

// get  all customers
const getAllCustomers = ()=>{
  Customer.find()
          .then(customers=>{
               console.log(customers)
          })
}

//update customer
const updateCustomer = (_id , firstName , lastName , phone , email)=>{
const source = { firstName , lastName ,phone ,email };
const returnedTarget = Object.assign({}, source);
console.log(returnedTarget);

Customer.findByIdAndUpdate({_id},returnedTarget) 
     .then(customer=>{
       console.info("customer updated")   
         console.info(customer)
        //db.close()
   })  

}

      
      
// delete customer
const deleteCustomer = (_id)=>{
  Customer.remove({_id})
   .then(()=>{
       console.info("Customer has been removed")
 })
}


module.exports = {
    addCustomer,
    findCustomer,
    getAllCustomers,
    updateCustomer,
    deleteCustomer
}