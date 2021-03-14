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

// update customer
 const updateCustomer = (_id ,expression)=>{
  
   Customer.findByIdAndUpdate({_id},expression)
    .then(result=>{
        console.info(result)
  })
}

// delete customer
const deleteCustomer = (_id)=>{
  
  Customer.remove({_id})
   .then(()=>{
       console.info("Customer has been removed")
 })
}

deleteCustomer("604935407904e25624fdbcdf")


// updateCustomer("604935407904e25624fdbcdf" ,
// {firstName : "Jimmy" , lastName : "Abitbot" , phone : "111-1111-111" , email : "jimmy@gmail.com"})

module.exports = {
    addCustomer,
    findCustomer,
    getAllCustomers,
    updateCustomer
}