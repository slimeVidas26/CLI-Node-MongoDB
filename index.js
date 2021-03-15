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
 const updateCustomer = (_id ,customer)=>{
   Customer.findByIdAndUpdate({_id},customer)
    .then(customer=>{
      console.info("customer updated")
        console.info(customer)
        //db.close()
  })
}

// update firstName customer
const updateFirstName = (_id ,newFirstName)=>{
  Customer.findByIdAndUpdate({_id},{firstName : newFirstName})
   .then(customer=>{
     console.info("customer firstName updated")
       console.info(customer)
       //db.close()
 })
}

// update lastName customer
const updateLastName = (_id ,newLastName)=>{
  Customer.findByIdAndUpdate({_id},{lastName : newlastName})
   .then(customer=>{
     console.info("customer lastName updated")
       console.info(customer)
       //db.close()
 })
}

// update lastName customer
const updatePhone = (_id ,newPhone)=>{
  Customer.findByIdAndUpdate({_id},{phone : newPhone})
   .then(customer=>{
     console.info("customer phone updated")
       console.info(customer)
       //db.close()
 })
}

// update email customer
const updateEmail = (_id ,newEmail)=>{
  Customer.findByIdAndUpdate({_id},{email : newEmail})
   .then(customer=>{
     console.info("customer email updated")
       console.info(customer)
       //db.close()
 })
}


//updateFirstName("60493a6706b3a427e4a37545" , "Alexico")
//updateEmail("60493a6706b3a427e4a37545" , "alexico@gmail.com")


// delete customer
const deleteCustomer = (_id)=>{
  Customer.remove({_id})
   .then(()=>{
       console.info("Customer has been removed")
 })
}

//deleteCustomer("604935407904e25624fdbcdf")


//  updateCustomer("60493a6706b3a427e4a37545" ,
//  {firstName : "Alex" , lastName : "Gogo" , phone : "111-1111-111" , email : "thomas@gmail.com"})


module.exports = {
    addCustomer,
    findCustomer,
    getAllCustomers,
    updateCustomer,
    updateFirstName,
    updateLastName,
    updatePhone,
    updateEmail,
    deleteCustomer
}