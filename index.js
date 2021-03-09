const dbConnection = require('./config/connect');
const Customer = require('./models/CustomerModel')

//add customer
const addCustomer = (customer)=>{
    // if(customer){
    //     console.log("Customer already exists")
    //     return
    // }
    // else{
        Customer.create(customer)
        .then(()=>{
        console.log("New Customer created")
        }) 
    }
  
// }

const newCustomer = {
    firstName  :"James",
    lastName  :"Dye",
    phone : "555-555-5555",
    email : "james@gmail.com"
}

addCustomer(newCustomer);

